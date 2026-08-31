export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "internship"
  | "unknown";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: EmploymentType;
  source: string;
  sourceUrl: string;
  skills: string[];
  postedAt?: string;
}
