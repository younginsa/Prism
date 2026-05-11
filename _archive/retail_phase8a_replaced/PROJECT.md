# Sendbird Application Project
**Candidate:** Young In Sa  
**Role:** UX Designer  
**Location:** Seoul, South Korea  
**Goal:** Demo two working MVPs that show research depth, analytical UX thinking, and AI product fluency

---

## The Strategy

Most candidates send a portfolio. This approach sends **two live products** — each one demonstrating a different dimension of readiness.

| | MVP1: LENs | MVP2: Sendbird Intel |
|---|---|---|
| **Subject** | Zestly (fictional Sendbird customer) | Sendbird itself |
| **Shows** | What Sendbird's platform enables | That I've studied Sendbird deeply |
| **Frame** | Sendbird as infrastructure | Sendbird as the analyzed company |
| **UX angle** | Data-to-insight product design | Research synthesis + opportunity mapping |
| **Status** | In progress (UI nearly done) | Planning |

Together they make one argument: *I understand what Sendbird builds, who they build it for, and where the design opportunities are.*

---

## JD Analysis — What Sendbird Is Actually Looking For

### The Inflection Point
Sendbird is at a pivot. For 10 years they were a CPaaS — selling chat APIs to developers. Now they're launching **Delight.ai**, an AI Concierge platform: multi-channel, proactive, autonomous AI agents that act on behalf of businesses.

This changes what a UX designer at Sendbird needs to be. It's no longer "design a good SDK dashboard." It's "help define what AI agent interfaces look like."

### What the JD Is Really Asking For

1. **AI agent UX fluency** — The JD mentions "AI agent interface research and innovative interaction design" prominently. They need someone who can define UX patterns for autonomous agents, not just design screens.

2. **Vibe Design Process** — They specifically call this out. This is AI-assisted design workflow. They want a designer who is already working *with* AI, not one who's learning to.

3. **B2B × B2C bridge** — Sendbird's core tension: their customers are enterprises (B2B) but those enterprises serve end users (B2C). The UX designer needs to hold both in mind simultaneously.

4. **Full-cycle AI product** — Not just visual design. Research → concept → prototype → spec → handoff, all for AI-native products.

5. **Portfolio that shows AI application** — They explicitly listed this under requirements. A non-AI portfolio is a risk.

### Key Signals Hidden in the JD

- *"Redefine existing UX creation processes using AI tools"* → They're rebuilding their own design workflow, not just their product UX. The designer will shape how the team works.
- *"AI agents that are proactive, multi-step, autonomous"* → The hardest UX problems in AI right now. Trust, control, failure states, transparency.
- *"Multi-channel: chat, SMS, email, social"* → Sendbird is moving beyond real-time chat into async and ambient communication. New UX territory.
- *"10M+ daily MAUs, 4,000+ enterprise customers"* → Scale matters. UX decisions here affect real users at real companies.

### What This Means for the Application

The strongest candidate shows:
- They already understand Sendbird's pivot and can talk about Delight.ai specifically
- They have a point of view on AI agent UX (not just familiarity)
- They can work at the B2B SaaS level (enterprise dashboard, developer tools) AND the end-user level
- Their work *looks like* it belongs at a company shipping AI products in 2025–2026

---

## Week Plan

| Day | Focus |
|---|---|
| Mon–Tue | LENs: finish UI refinements, wire up chatMessages data to view |
| Tue–Wed | MVP2: define concept, build data layer (scrape/compile Sendbird public data) |
| Wed–Thu | MVP2: build UI (reuse LENs shell), write demo narrative |
| Thu | Both MVPs: demo rehearsal, polish pass |
| Fri | Submit application with demo links or recorded walkthrough |

---

## Data Strategy

### LENs (MVP1)
- `data.js` — 1,010 mock Sendbird CS chat messages across 203 sessions
- Scheduled task runs every morning: generates +100 messages (~10–50 new sessions)
- Data drifts intentionally — demand signal counts grow, new CS ticket patterns emerge
- Makes the demo feel live, not static

### Sendbird Intel (MVP2)
- Separate data file: `sendbird_data.js`
- Sources: Sendbird blog posts, G2/Capterra reviews, public case studies, changelog, job postings
- Compiled and structured manually (no real-time scraping needed for MVP)
- Same IIFE pattern as `data.js` for consistency

---

## File Structure

```
/Data to insight/
  index.html          ← MVP1: LENs (Zestly intelligence layer)
  data.js             ← MVP1: mock chat + market data
  PROJECT.md          ← this file
  MVP2_PLAN.md        ← MVP2 detailed spec
  sendbird_intel/
    index.html        ← MVP2: Sendbird intelligence briefing
    sendbird_data.js  ← MVP2: public Sendbird research data
```

---

## Demo Narrative (Draft)

### MVP1 Pitch (60 seconds)
> "This is LENs — a prepared senior data analyst built on Sendbird CS chat data. Zestly is a fictional food delivery company. Every customer support conversation they have runs through Sendbird. LENs reads those 50,000 daily sessions and surfaces demand signals the product team never sees — because they live in CS tickets, not product feedback forms. Here's a signal that's been growing for 90 days: customers asking drivers to stop at convenience stores. 214 mentions last month. Zero in any product meeting."

### MVP2 Pitch (60 seconds)
> "This is a different kind of demo. Instead of showing what Sendbird's platform enables for a customer, I analyzed Sendbird itself — using public data: blog posts, customer reviews, case studies, job postings. I wanted to walk into this conversation already prepared. Here's what I found: Sendbird is mid-pivot from CPaaS to AI agent platform. The biggest UX gap isn't in the product — it's in how enterprise customers understand what Delight.ai can actually do for them. Here's how I'd approach closing that gap."

---

## Notes
- Both MVPs run locally, no server needed
- Built as single HTML files for portability (can be shared as files or recorded as video)
- LENs uses Sendbird brand colors and messaging intentionally — shows platform awareness
