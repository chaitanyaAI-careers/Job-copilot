# Data Model

The broader private Job Copilot implementation uses an **11-entity relational source-of-truth model** backed by PostgreSQL / Prisma.

The exact private Prisma schema and migration history are intentionally not published in this recruiter-safe repository.

Representative domains covered by the model include:

- user / identity
- candidate profile
- preferences
- resumes
- companies
- job sources
- jobs and source observations
- resume / job analysis
- applications
- application events
- connector / ingestion state

Additional operational or audit records may exist around these core product entities without changing the documented 11-entity source-of-truth claim.

## Design Principles

- PostgreSQL remains authoritative for durable product state.
- AI-generated suggestions do not directly overwrite source-of-truth records.
- ingestion observations are separated from normalized job identity.
- application lifecycle state is explicit.
- source attribution and freshness are preserved.
- private schema details and production data are not exposed in the public showcase.
