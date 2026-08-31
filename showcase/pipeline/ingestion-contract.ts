import type { Job } from "../domain/job";

import {
  dedupeJobs,
} from "../dedupe/job-dedupe";

import {
  normalizeJob,
  type RawJob,
} from "../ingestion/normalize-job";

import {
  classifyFreshness,
  type FreshnessStatus,
} from "../jobs/freshness";

import {
  evaluateConnectorEligibility,
  type ConnectorPolicy,
} from "../connectors/connector-policy";

export interface IngestionCandidate {
  rawJob: RawJob;
  policy: ConnectorPolicy;
  sourceObservedAt?: string;
  now: string;
  maxAgeHours: number;
}

export interface IngestionDecision {
  job: Job;
  freshness: FreshnessStatus;
  accepted: boolean;
  reason: string;
}

export function evaluateIngestionCandidate(
  candidate: IngestionCandidate,
): IngestionDecision {
  const job = normalizeJob(candidate.rawJob);

  const connectorEligibility =
    evaluateConnectorEligibility(
      candidate.policy,
    );

  if (!connectorEligibility.canImport) {
    return {
      job,
      freshness: "unknown",
      accepted: false,
      reason: connectorEligibility.reason,
    };
  }

  const freshness = classifyFreshness({
    sourceObservedAt:
      candidate.sourceObservedAt,
    now: candidate.now,
    maxAgeHours: candidate.maxAgeHours,
  });

  if (freshness !== "fresh") {
    return {
      job,
      freshness,
      accepted: false,
      reason:
        freshness === "stale"
          ? "job observation is stale"
          : "job freshness is unknown",
    };
  }

  return {
    job,
    freshness,
    accepted: true,
    reason: "job passed ingestion checks",
  };
}

export function buildIngestionBatch(
  candidates: IngestionCandidate[],
): Job[] {
  const acceptedJobs = candidates
    .map(evaluateIngestionCandidate)
    .filter((decision) => decision.accepted)
    .map((decision) => decision.job);

  return dedupeJobs(acceptedJobs);
}
