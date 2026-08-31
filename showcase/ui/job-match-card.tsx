import type { Job } from "../domain/job";
import type { MatchResult } from "../matching/match-score";

export interface JobMatchCardProps {
  job: Job;
  match: MatchResult;
}

export function JobMatchCard({
  job,
  match,
}: JobMatchCardProps) {
  return (
    <article>
      <header>
        <h2>{job.title}</h2>
        <p>
          {job.company} · {job.location}
        </p>
      </header>

      <p>Match score: {match.score}%</p>

      <section>
        <h3>Matched skills</h3>
        <ul>
          {match.matchedSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {match.missingSkills.length > 0 && (
        <section>
          <h3>Skills to review</h3>
          <ul>
            {match.missingSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
