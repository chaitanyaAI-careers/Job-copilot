import type { CandidateProfile } from "../domain/candidate";
import type { Job } from "../domain/job";

export interface MatchResult {
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
}

export function calculateMatch(
  candidate: CandidateProfile,
  job: Job,
): MatchResult {
  const candidateSkills = new Set(
    candidate.skills.map((skill) => skill.toLowerCase()),
  );

  const jobSkills = job.skills.map((skill) => skill.toLowerCase());

  const matchedSkills = jobSkills.filter((skill) =>
    candidateSkills.has(skill),
  );

  const missingSkills = jobSkills.filter(
    (skill) => !candidateSkills.has(skill),
  );

  const score =
    jobSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / jobSkills.length) * 100);

  return {
    score,
    matchedSkills,
    missingSkills,
  };
}
