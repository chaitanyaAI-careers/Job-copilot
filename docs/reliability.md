# Reliability

## Why Reliability Matters

Job ingestion is not complete when an HTTP request returns records.

A production-oriented pipeline must reason about source policy, normalization, freshness, duplicates, retries, event processing, observability, and authoritative state.

## Verified Broader Reliability Foundations

The private Job Copilot implementation includes engineering around:

- normalized connector output
- complete board fetching
- source ownership and attribution
- job freshness observations
- trusted feed-freshness filtering
- cross-source deduplication
- governed scheduled imports
- connector-run tracking
- employment-arrangement normalization
- Redis-backed workers
- Kafka event-driven ingestion and workflow events
- PostgreSQL / Prisma durable state
- deterministic pipeline verification
- identity and permission boundaries
- observable model/provider execution for AI-assisted paths

## Freshness

A database `updatedAt` value is not sufficient evidence that an external listing remains current.

Source observations are tracked separately and evaluated through freshness rules.

The public showcase demonstrates:

- `fresh`
- `stale`
- `unknown`

Only trusted fresh observations are feed-ready in the simplified contract.

## Cross-Source Deduplication

Different ATS providers can expose the same logical job through different source identifiers or URLs.

Deduplication therefore operates after normalization and uses stable identity signals instead of relying only on provider IDs.

## Connector Policy

Technical connectivity does not imply permission for automated ingestion.

Connector policy evaluates:

- source status
- source risk
- allowed uses
- import eligibility

## State and AI Boundary

Deterministic state remains authoritative for ingestion decisions, freshness, deduplication, permissions, consent, application transitions, and persistence.

AI assistance is observable and bounded; it does not silently mutate authoritative product state.

## Evidence Boundary

The public repository demonstrates deterministic contracts and 19 Vitest cases across seven files. The broader runtime and deployment layers described above are maintained privately.
