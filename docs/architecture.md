# Architecture

## Purpose

Job Copilot is designed as a full-stack career workflow platform that combines product engineering, job-data ingestion, deterministic intelligence, application workflows, and optional AI-assisted capabilities.

The complete implementation remains private. This repository contains a recruiter-safe subset of the architecture with executable examples.

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
Persistence
          ↓
Candidate Matching
          ↓
Resume Intelligence
          ↓
Application Workflow
          ↓
Preparation / Tracking
