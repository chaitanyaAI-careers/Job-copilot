import type { EmploymentType, Job } from "../domain/job";

export interface RawJob {
  id?: string;
  title?: string;
  company?: string;
  location?: string;
  employmentType?: string;
  source?: string;
  sourceUrl?: string;
  skills?: string[];
  postedAt?: string;
}

function normalizeText(value: string | undefined): string {
  return (value ?? "").trim().replace(/\s+/g, " ");
}

function normalizeEmploymentType(
  value: string | undefined,
): EmploymentType {
  const normalized = normalizeText(value).toLowerCase();

  if (normalized.includes("full")) return "full-time";
  if (normalized.includes("part")) return "part-time";
  if (normalized.includes("contract")) return "contract";
  if (normalized.includes("intern")) return "internship";

  return "unknown";
}

export function normalizeJob(raw: RawJob): Job {
  return {
    id: normalizeText(raw.id) || "synthetic-job",
    title: normalizeText(raw.title),
    company: normalizeText(raw.company),
    location: normalizeText(raw.location),
    employmentType: normalizeEmploymentType(raw.employmentType),
    source: normalizeText(raw.source),
    sourceUrl: normalizeText(raw.sourceUrl),
    skills: (raw.skills ?? [])
      .map((skill) => normalizeText(skill).toLowerCase())
      .filter(Boolean),
    postedAt: raw.postedAt,
  };
}
