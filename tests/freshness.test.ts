import {
  describe,
  expect,
  it,
} from "vitest";

import {
  classifyFreshness,
  isFreshForFeed,
} from "../showcase/jobs/freshness";

describe("job freshness", () => {
  it("classifies a recent source observation as fresh", () => {
    const status = classifyFreshness({
      sourceObservedAt:
        "2026-09-01T18:00:00Z",
      now: "2026-09-02T00:00:00Z",
      maxAgeHours: 12,
    });

    expect(status).toBe("fresh");
    expect(isFreshForFeed(status)).toBe(true);
  });

  it("classifies an old observation as stale", () => {
    const status = classifyFreshness({
      sourceObservedAt:
        "2026-08-30T00:00:00Z",
      now: "2026-09-02T00:00:00Z",
      maxAgeHours: 24,
    });

    expect(status).toBe("stale");
    expect(isFreshForFeed(status)).toBe(false);
  });

  it("returns unknown when no trusted observation exists", () => {
    const status = classifyFreshness({
      now: "2026-09-02T00:00:00Z",
      maxAgeHours: 24,
    });

    expect(status).toBe("unknown");
  });
});
