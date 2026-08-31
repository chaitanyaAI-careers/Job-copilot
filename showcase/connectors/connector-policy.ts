export type ConnectorStatus =
  | "active"
  | "review-required"
  | "disabled";

export type ConnectorRisk =
  | "low"
  | "medium"
  | "high";

export type ConnectorUse =
  | "display"
  | "redirect"
  | "match"
  | "dedupe"
  | "import";

export interface ConnectorPolicy {
  source: string;
  status: ConnectorStatus;
  risk: ConnectorRisk;
  allowedUses: ConnectorUse[];
}

export interface ConnectorEligibility {
  canImport: boolean;
  reason: string;
}

export function evaluateConnectorEligibility(
  policy: ConnectorPolicy,
): ConnectorEligibility {
  if (policy.status !== "active") {
    return {
      canImport: false,
      reason: "source is not active",
    };
  }

  if (policy.risk !== "low") {
    return {
      canImport: false,
      reason: "source requires additional review",
    };
  }

  if (!policy.allowedUses.includes("import")) {
    return {
      canImport: false,
      reason: "import use is not permitted",
    };
  }

  return {
    canImport: true,
    reason: "source is eligible for governed import",
  };
}
