export type EmploymentArrangement =
  | "remote"
  | "hybrid"
  | "onsite"
  | "unknown";

function normalizeText(
  values: Array<string | undefined>,
): string {
  return values
    .filter(
      (value): value is string =>
        typeof value === "string",
    )
    .join(" ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function detectEmploymentArrangement(
  ...values: Array<string | undefined>
): EmploymentArrangement {
  const text = normalizeText(values);

  if (!text) {
    return "unknown";
  }

  if (
    text.includes("hybrid") ||
    text.includes("partially remote") ||
    text.includes("partly remote")
  ) {
    return "hybrid";
  }

  if (
    text.includes("remote") ||
    text.includes("work from home") ||
    text.includes("work-from-home") ||
    text.includes("distributed team")
  ) {
    return "remote";
  }

  if (
    text.includes("onsite") ||
    text.includes("on-site") ||
    text.includes("in office") ||
    text.includes("in-office") ||
    text.includes("office-based")
  ) {
    return "onsite";
  }

  return "unknown";
}
