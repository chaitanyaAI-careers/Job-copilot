# Engineering Roadmap

## Verified Broader Implementation

### Product

- Next.js / React / TypeScript product architecture
- candidate profiles
- resume workflows
- job browsing
- application tracking
- administrative workflows

### Data

- 11-entity PostgreSQL / Prisma source-of-truth model
- PostgreSQL / pgvector semantic matching
- job-source and freshness modeling
- application lifecycle state
- resume / job analysis state

### Job Ingestion

- ATS connector architecture
- normalized job contracts
- complete board fetching
- source ownership and attribution
- trusted freshness logic
- cross-source deduplication
- board discovery / probing
- selected ATS integrations
- governed scheduled imports
- Redis-backed workers
- Kafka event-driven ingestion and workflow events

### AI / Backend / Identity

- LiteLLM-routed AI assistance
- async FastAPI services
- OAuth2/OIDC/JWT identity patterns
- SSO-ready integration boundaries
- observable model latency / token / cost / fallback behavior

### Delivery

- Vercel frontend delivery
- Dockerized services
- AWS-oriented infrastructure
- Kubernetes / Helm deployment patterns
- Terraform infrastructure definition

### Public Verification

The recruiter-safe public showcase contains:

- deterministic job normalization
- connector-policy decisions
- freshness classification
- cross-source deduplication
- deterministic candidate matching
- representative React UI
- 19 Vitest cases across seven files
- strict TypeScript verification
- GitHub Actions CI

## Current Evidence-Building Priorities

- formal matching-quality benchmarks
- broader workflow-completion metrics
- additional end-to-end product tests
- queue, retry, and latency measurements
- operational dashboards and alert thresholds
- more public-safe implementation examples where appropriate

## Later Product Direction

- broader connector coverage
- stronger recommendation evaluation
- interview intelligence
- additional workflow automation with explicit user control
- deeper operational analytics

## Portfolio Positioning

Job Copilot demonstrates production-style full-stack AI product engineering with governed data ingestion, deterministic state, semantic matching, reliability controls, and bounded AI assistance.
