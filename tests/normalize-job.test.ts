import { describe, expect, it } from "vitest";
import { normalizeJob } from "../showcase/ingestion/normalize-job";

describe("normalizeJob", () => {
  it("normalizes text, employment type, and skills", () => {
    const job = normalizeJob({
      id: "job-001",
      title: "  Applied   AI Engineer ",
      company: " Example Labs ",
      location: " Remote ",
      employmentType: "Full Time",
      source: "Synthetic Board",
      sourceUrl: "https://example.invalid/jobs/1",
      skills: [" Python ", "FASTAPI", " RAG "],
    });

    expect(job.title).toBe("Applied AI Engineer");
    expect(job.company).toBe("Example Labs");
    expect(job.employmentType).toBe("full-time");
    expect(job.skills).toEqual(["python", "fastapi", "rag"]);
  });
});
