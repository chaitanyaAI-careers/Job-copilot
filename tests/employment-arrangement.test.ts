import {
  describe,
  expect,
  it,
} from "vitest";

import {
  detectEmploymentArrangement,
} from "../showcase/jobs/employment-arrangement";

describe("employment arrangement detection", () => {
  it("detects remote work", () => {
    expect(
      detectEmploymentArrangement(
        "Applied AI Engineer",
        "Remote - United States",
      ),
    ).toBe("remote");
  });

  it("gives hybrid language priority over remote wording", () => {
    expect(
      detectEmploymentArrangement(
        "Hybrid role with two office days and partially remote work",
      ),
    ).toBe("hybrid");
  });

  it("detects onsite work", () => {
    expect(
      detectEmploymentArrangement(
        "This position is on-site in Milwaukee.",
      ),
    ).toBe("onsite");
  });

  it("returns unknown when no arrangement evidence exists", () => {
    expect(
      detectEmploymentArrangement(
        "Applied AI Engineer",
        "Milwaukee, Wisconsin",
      ),
    ).toBe("unknown");
  });
});
