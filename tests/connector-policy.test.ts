import {
  describe,
  expect,
  it,
} from "vitest";

import {
  evaluateConnectorEligibility,
  type ConnectorPolicy,
} from "../showcase/connectors/connector-policy";

const activePolicy: ConnectorPolicy = {
  source: "Synthetic ATS",
  status: "active",
  risk: "low",
  allowedUses: [
    "display",
    "redirect",
    "match",
    "dedupe",
    "import",
  ],
};

describe("connector policy", () => {
  it("allows governed import for an active low-risk source", () => {
    const result =
      evaluateConnectorEligibility(
        activePolicy,
      );

    expect(result.canImport).toBe(true);
  });

  it("blocks sources that require review", () => {
    const result =
      evaluateConnectorEligibility({
        ...activePolicy,
        status: "review-required",
      });

    expect(result.canImport).toBe(false);
  });

  it("blocks sources without explicit import permission", () => {
    const result =
      evaluateConnectorEligibility({
        ...activePolicy,
        allowedUses: [
          "display",
          "redirect",
          "match",
          "dedupe",
        ],
      });

    expect(result.canImport).toBe(false);
  });
});
