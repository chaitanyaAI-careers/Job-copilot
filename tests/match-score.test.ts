import { describe, expect, it } from "vitest";
import type { CandidateProfile } from "../showcase/domain/candidate";
import type { Job } from "../showcase/domain/job";
import { calculateMatch } from "../showcase/matching/match-score";

const candidate: CandidateProfile = {
  id: "candidate-001",
  targetTitles: ["Applied AI Engineer"],
  skills: ["python", "fastapi", "rag"],
  preferredLocations: ["remote"],
  minimumMatchScore: 60,
};

const job: Job = {
  id: "job-001",
  title: "Applied AI Engineer",
  company: "Example Labs",
  location: "Remote",
  employmentType: "full-time",
  source: "synthetic",
  sourceUrl: "https://example.invalid/jobs/1",
  skills: ["python", "rag", "typescript", "fastapi"],
};

describe("calculateMatch", () => {
  it("returns matched and missing skills", () => {
    const result = calculateMatch(candidate, job);

    expect(result.score).toBe(75);
    expect(result.matchedSkills).toEqual([
      "python",
      "rag",
      "fastapi",
    ]);
    expect(result.missingSkills).toEqual(["typescript"]);
  });

  it("returns zero when a job has no skills", () => {
    const result = calculateMatch(candidate, {
      ...job,
      skills: [],
    });

    expect(result.score).toBe(0);
  });
});
