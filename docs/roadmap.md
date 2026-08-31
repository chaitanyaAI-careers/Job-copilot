# Engineering Roadmap

## Implemented Foundation

### Product

- Next.js / React product architecture
- TypeScript application layer
- authentication foundations
- candidate profiles
- resume workflows
- job browsing
- application tracking
- administrative workflows

### Data

- PostgreSQL / Prisma persistence
- job-source modeling
- job snapshots
- connector-run state
- application lifecycle state
- resume/job analysis state

### Job Ingestion

- ATS connector architecture
- normalized job contracts
- complete board fetching
- source ownership
- source attribution
- job freshness observations
- trusted feed freshness logic
- cross-source deduplication
- board discovery
- board probing
- Workable integration
- SmartRecruiters integration
- governed scheduled imports
- job-pipeline orchestration
- employment-arrangement detection

### Candidate Intelligence

- resume parsing
- deterministic resume/job matching
- missing-keyword analysis
- job-specific resume workflows
- optional AI-assisted suggestions

### Verification

The private project contains deterministic verification commands for:

- resume parsing
- resume/job matching
- connector text cleanup
- connector normalization
- complete connector fetching
- job-data pipeline behavior
- job freshness
- feed freshness
- cross-source deduplication
- employment-arrangement detection
- Prisma validation
- TypeScript
- ESLint
- production builds

The Career showcase separately provides Vitest and strict TypeScript verification for recruiter-safe examples.

## Currently Strengthening

- formal Vitest service/unit coverage in the private monorepo
- Playwright end-to-end coverage
- retry and backoff
- connector observability
- structured logging
- metrics and alerting
- security hardening
- formal resume/job matching evaluation
- AI-assisted match evaluation
- production deployment maturity

## Later

- broader connector coverage
- stronger recommendation evaluation
- interview intelligence
- additional workflow automation with explicit user control
- deeper operational analytics

## Portfolio Positioning

Job Copilot is intended to demonstrate:

> **production-style full-stack product engineering with data ingestion, reliability controls, deterministic intelligence, and applied AI workflows.**

It complements the agentic and pharmaceutical AI projects by demonstrating a different engineering signal: building and operating an actual software product rather than only an AI subsystem.
