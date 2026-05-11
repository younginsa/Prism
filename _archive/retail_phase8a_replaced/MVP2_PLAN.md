# MVP2: Sendbird Intelligence Briefing
**Working title:** Signal  
**Tagline:** A prepared UX analyst briefing on Sendbird — built from public data

---

## Concept

LENs analyzes a Sendbird *customer's* chat data.  
Signal analyzes **Sendbird itself** — its market position, product trajectory, customer pain points, and UX opportunity — using only public data.

The product frame: *"What if a senior UX researcher spent two weeks reading everything about Sendbird and delivered a living briefing?"*

This is the candidate-as-product idea. Instead of a PDF deck, it's an interactive intelligence layer the interviewer can explore.

---

## What It Shows

1. **Research depth** — I read the blog posts, the case studies, the G2 reviews, the changelogs, the job postings
2. **Strategic framing** — I understand the CPaaS → AI agent pivot and what it means for UX
3. **UX designer POV** — Not just "here's data," but "here's where design makes the biggest impact"
4. **Product instinct** — I can look at a company from the outside and identify real opportunities

---

## Three Panels (Mirror LENs Structure)

### Panel 1: Company Signal
*What is Sendbird right now?*

- Timeline of major product moves (CPaaS → AI pivot → Delight.ai launch)
- Current product portfolio: Chat SDK, AI Chatbot, Business Messaging, Calls
- Key customer verticals: marketplace, on-demand, healthcare, fintech, gaming
- The pivot thesis: from "add chat to your app" to "AI workforce for your business"

### Panel 2: Customer Voice
*What are Sendbird's actual customers saying?*

Sourced from G2, Capterra, public developer forums, case studies:
- Top praise themes (what Sendbird does well)
- Top friction themes (where UX breaks down)
- Developer pain points (SDK integration, documentation)
- Enterprise buyer pain points (onboarding, support, pricing clarity)
- End-user experience gaps (surfaced through customer case studies)

### Panel 3: UX Opportunity Map
*Where should a UX designer focus first?*

Structured as signals (mirroring LENs):
- **Signal A:** Onboarding gap — enterprise customers struggle to map Sendbird capabilities to their use case. "I know it can do X but I can't figure out how."
- **Signal B:** AI trust interface — Delight.ai agents act autonomously, but customers don't have visibility into *why* the agent did what it did. No explainability UX.
- **Signal C:** B2B2C handoff — Sendbird's platform UX is built for developers. The end-user experience is entirely up to the customer. No design guidance, no reference patterns.
- **Signal D:** Multi-channel coherence — As Sendbird expands to SMS, email, social, the channel-switching UX is undefined. Users don't know what happened where.

---

## Data Sources

### Public Research to Compile
- [ ] Sendbird blog (all posts, last 2 years) — product announcements, thought leadership
- [ ] Sendbird changelog / release notes — what they've been shipping
- [ ] Delight.ai product page — positioning, feature list, use cases
- [ ] Sendbird documentation structure — what's easy to find vs. buried
- [ ] G2 reviews (sendbird.com listing) — customer quotes, ratings by category
- [ ] Capterra reviews — same
- [ ] LinkedIn job postings — what teams are hiring signals internal priorities
- [ ] Sendbird customer case studies — DoorDash, Yahoo Sports, etc.
- [ ] Competitor analysis — Twilio, Stream, Pusher, Intercom, Crisp

### Data File: `sendbird_data.js`
Structure mirrors `data.js`:
```js
const sendbirdTimeline = [...];      // company milestones
const productPortfolio = [...];     // current products
const customerVoice = [...];        // G2/Capterra quotes + themes
const uxSignals = [...];            // identified UX opportunities
const competitorMap = [...];        // positioning vs competitors
```

---

## UI Plan

Reuse the LENs shell (same GNB, same LNB pattern, same panel structure).

**Sidebar nav:**
- Company Signal
- Customer Voice
- UX Opportunities
- Competitive Map

**Visual language:** Keep LENs aesthetic (teal, clean, data-dense) but adjust the framing copy to be research/UX-oriented rather than ops/demand-oriented.

**One signature interaction:** The "UX Opportunity" cards should feel like signal cards from LENs — each one has a severity, a source quote, a "what this means for design" note, and a "where to start" recommendation.

---

## The Differentiating Moment

The demo should have one moment that stops the interviewer:

> *"This signal — the AI trust interface gap — came from 14 different G2 reviews where enterprise customers described Delight.ai as 'a black box.' They love that it works. They can't explain to their own stakeholders why it does what it does. That's not a product bug. That's a UX design gap. And it's exactly the kind of problem I want to work on."*

That's the hire moment. The product is the proof that I can find it.

---

## Open Questions
- [ ] Should the UI be a new `index.html` or a second view inside the existing LENs app?
- [ ] How much of the research can be done this week vs. what needs to be synthesized?
- [ ] Should the demo be a live walkthrough or a recorded video? (Recorded = more controlled)
- [ ] Is there a specific Sendbird product area to emphasize based on the interview stage?
