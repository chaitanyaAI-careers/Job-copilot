# Product Flow

## Candidate Experience

Profile
→ Resume
→ Job Recommendations
→ Match Review
→ Save / Apply
→ Application Tracking
→ Interview Preparation

## Job Intelligence

Job Source
→ Connector Policy
→ Fetch
→ Normalize
→ Freshness Evaluation
→ Cross-Source Deduplication
→ PostgreSQL / Prisma Source of Truth
→ Deterministic + pgvector Matching
→ Candidate Intelligence

## AI Assistance

AI is used as an assistance layer rather than the sole source of product decisions.

Representative use cases include:

- resume-job analysis
- missing-skill identification
- resume suggestions
- application preparation
- interview preparation

The broader private implementation routes AI assistance through observable model/provider boundaries.

## Authority Boundary

Deterministic application logic remains authoritative for:

- connector eligibility
- freshness
- deduplication
- permissions and consent
- application lifecycle state
- persisted product state
- workflow transitions

AI-generated content can assist the user, but it does not silently replace authoritative product state.
