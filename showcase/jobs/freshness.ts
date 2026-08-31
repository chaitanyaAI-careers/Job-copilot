export type FreshnessStatus =
  | "fresh"
  | "stale"
  | "unknown";

export interface FreshnessObservation {
  sourceObservedAt?: string;
  now: string;
  maxAgeHours: number;
}

export function classifyFreshness(
  observation: FreshnessObservation,
): FreshnessStatus {
  if (!observation.sourceObservedAt) {
    return "unknown";
  }

  const observedAt = Date.parse(
    observation.sourceObservedAt,
  );
  const now = Date.parse(observation.now);

  if (
    Number.isNaN(observedAt) ||
    Number.isNaN(now) ||
    observation.maxAgeHours < 0
  ) {
    return "unknown";
  }

  const ageMilliseconds = Math.max(
    0,
    now - observedAt,
  );

  const maxAgeMilliseconds =
    observation.maxAgeHours * 60 * 60 * 1000;

  return ageMilliseconds <= maxAgeMilliseconds
    ? "fresh"
    : "stale";
}

export function isFreshForFeed(
  status: FreshnessStatus,
): boolean {
  return status === "fresh";
}
