import type { Job } from "../domain/job";

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function buildJobFingerprint(job: Job): string {
  return [
    normalize(job.company),
    normalize(job.title),
    normalize(job.location),
  ].join("|");
}

export function dedupeJobs(jobs: Job[]): Job[] {
  const seen = new Set<string>();

  return jobs.filter((job) => {
    const fingerprint = buildJobFingerprint(job);

    if (seen.has(fingerprint)) {
      return false;
    }

    seen.add(fingerprint);
    return true;
  });
}
