import { describe, expect, it } from "vitest";
import type { Job } from "../showcase/domain/job";
import {
  buildJobFingerprint,
  dedupeJobs,
} from "../showcase/dedupe/job-dedupe";

const baseJob: Job = {
  id: "job-001",
  title: "Applied AI Engineer",
  company: "Example Labs",
  location: "Remote",
  employmentType: "full-time",
  source: "source-a",
  sourceUrl: "https://example.invalid/a",
  skills: ["python", "rag"],
};

describe("job deduplication", () => {
  it("builds a normalized fingerprint", () => {
    const fingerprint = buildJobFingerprint({
      ...baseJob,
      title: "  Applied   AI Engineer ",
      company: " EXAMPLE LABS ",
    });

    expect(fingerprint).toBe(
      "example labs|applied ai engineer|remote",
    );
  });

  it("removes duplicate jobs across sources", () => {
    const jobs = [
      baseJob,
      {
        ...baseJob,
        id: "job-002",
        source: "source-b",
        sourceUrl: "https://example.invalid/b",
      },
    ];

    const result = dedupeJobs(jobs);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("job-001");
  });
});
