import {
  describe,
  expect,
  it,
} from "vitest";

import type {
  ConnectorPolicy,
} from "../showcase/connectors/connector-policy";

import {
  buildIngestionBatch,
  evaluateIngestionCandidate,
  type IngestionCandidate,
} from "../showcase/pipeline/ingestion-contract";

const activePolicy: ConnectorPolicy = {
  source: "Synthetic ATS",
  status: "active",
  risk: "low",
  allowedUses: [
    "display",
    "redirect",
    "match",
    "dedupe",
    "import",
  ],
};

const candidate: IngestionCandidate = {
  rawJob: {
    id: "job-001",
    title: " Applied AI Engineer ",
    company: " Example Labs ",
    location: " Remote ",
    employmentType: "Full Time",
    source: "source-a",
    sourceUrl:
      "https://example.invalid/jobs/1",
    skills: [
      "Python",
      "FastAPI",
      "RAG",
    ],
  },
  policy: activePolicy,
  sourceObservedAt:
    "2026-09-01T20:00:00Z",
  now: "2026-09-02T00:00:00Z",
  maxAgeHours: 12,
};

describe("ingestion contract", () => {
  it("accepts an eligible fresh normalized job", () => {
    const decision =
      evaluateIngestionCandidate(candidate);

    expect(decision.accepted).toBe(true);
    expect(decision.freshness).toBe(
      "fresh",
    );
    expect(decision.job.title).toBe(
      "Applied AI Engineer",
    );
    expect(decision.job.skills).toEqual([
      "python",
      "fastapi",
      "rag",
    ]);
  });

  it("rejects stale jobs", () => {
    const decision =
      evaluateIngestionCandidate({
        ...candidate,
        sourceObservedAt:
          "2026-08-20T00:00:00Z",
      });

    expect(decision.accepted).toBe(false);
    expect(decision.freshness).toBe(
      "stale",
    );
  });

  it("rejects sources that are not approved for import", () => {
    const decision =
      evaluateIngestionCandidate({
        ...candidate,
        policy: {
          ...activePolicy,
          status: "review-required",
        },
      });

    expect(decision.accepted).toBe(false);
    expect(decision.reason).toContain(
      "not active",
    );
  });

  it("deduplicates accepted jobs across sources", () => {
    const batch = buildIngestionBatch([
      candidate,
      {
        ...candidate,
        rawJob: {
          ...candidate.rawJob,
          id: "job-002",
          source: "source-b",
          sourceUrl:
            "https://example.invalid/jobs/2",
        },
      },
    ]);

    expect(batch).toHaveLength(1);
    expect(batch[0].id).toBe("job-001");
  });
});
