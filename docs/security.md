# Security

Candidate and application data can contain sensitive personal information.

The platform design emphasizes:

- authenticated access
- user-scoped records
- OAuth2/OIDC/JWT identity patterns
- SSO-ready integration boundaries
- least-privilege access
- environment-based secrets
- privacy and consent boundaries
- auditability
- separation of development and production data
- deterministic authorization over state-changing operations

AI assistance does not become an authorization mechanism or source of truth.

The public repository contains only synthetic data and no production credentials, private Prisma schema, production tokens, or deployment secrets.
