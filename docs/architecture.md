# Architecture

## Purpose

Job Copilot is designed as a full-stack AI career workflow platform that combines governed job-data ingestion, deterministic product state, semantic matching, AI-assisted workflows, and production-oriented backend/platform engineering.

The complete implementation remains private. This repository contains a recruiter-safe subset with executable TypeScript/React examples.

## High-Level Architecture

```text
External ATS / Job Sources
          ↓
Connector Discovery + Policy
          ↓
Fetching / Source Attribution
          ↓
Normalization
          ↓
Freshness Evaluation
          ↓
Cross-Source Deduplication
          ↓
PostgreSQL / Prisma Source of Truth
          ↓
pgvector Semantic Matching
          ↓
Candidate / Resume Intelligence
          ↓
Application Workflow
          ↓
AI-Assisted Preparation / Tracking
```

## Verified Broader Private Implementation

The broader implementation includes:

- Next.js / React / TypeScript product architecture
- an 11-entity PostgreSQL / Prisma relational source-of-truth model
- PostgreSQL / pgvector semantic matching
- Redis-backed workers and Kafka event-driven ingestion
- governed ATS connectors and scheduled ingestion
- LiteLLM-routed AI assistance with observable fallback behavior
- OAuth2/OIDC/JWT identity patterns with SSO-ready integration boundaries
- async FastAPI services
- model-call tracing for latency, token, cost, and provider behavior
- Vercel frontend delivery
- Docker, Kubernetes / Helm, Terraform, and AWS-oriented deployment patterns

## Authority Boundary

Deterministic application logic remains authoritative over:

- connector eligibility
- freshness
- deduplication
- permissions and consent
- application lifecycle state
- persistence
- workflow transitions

AI assistance can analyze, recommend, summarize, or generate content, but it does not silently replace authoritative product state.

## Public Showcase

The public repository demonstrates a smaller subset around normalized job contracts, governed ingestion, freshness, deduplication, deterministic skill matching, representative React UI, tests, and CI.
