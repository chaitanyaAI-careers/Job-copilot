# Reliability

## Why Reliability Matters

Job ingestion is not complete when an HTTP request returns records.

A useful production-style pipeline must also reason about source policy, normalization, freshness, duplicates, operational limits, and failures.

## Implemented Reliability Foundations

The private Job Copilot project currently contains engineering around:

- normalized connector output
- complete board fetching
- source ownership
- source attribution
- job freshness observations
- feed freshness filtering
- cross-source deduplication
- board discovery
- board probing
- governed scheduled imports
- connector run tracking
- import limits
- employment-arrangement normalization
- deterministic pipeline verification scripts

## Freshness

A database `updatedAt` value is not sufficient evidence that an external listing remains current.

The architecture tracks source observations separately and applies freshness rules against those observations.

The Career showcase demonstrates three states:

- `fresh`
- `stale`
- `unknown`

Only trusted fresh observations are treated as feed-ready by the simplified example.

## Cross-Source Deduplication

Different ATS providers can expose the same logical job through different source identifiers or URLs.

Deduplication therefore operates after normalization and should compare stable identity signals rather than source IDs alone.

The Career showcase demonstrates normalized company/title/location fingerprints and deterministic batch deduplication.

## Connector Policy

Technical connectivity does not imply permission for automated ingestion.

Connector policy evaluates:

- source status
- source risk
- allowed uses
- import eligibility

The recruiter-safe implementation blocks sources that are inactive, under review, higher-risk, or not explicitly approved for import.

## Pipeline Decisions

The Career showcase provides an executable ingestion contract:

```text
Candidate Record
      ↓
Normalize
      ↓
Connector Eligibility
      ↓
Freshness
      ↓
Accept / Reject
      ↓
Deduplicate Accepted Jobs
