# Prism — Concept Doc

**Status:** Live prototype aligned to this spec in `index.html` + `data.js`  
**Updated:** 2026-04-23  
**Workspace:** Nimbus Pay  
**Supersedes:** the earlier two-anchor-case runtime and the archived Busan / Pax A920 live demo path

---

## 1. One-line thesis

> **Prism turns one ambiguous CS signal into one coordinated cross-functional response.**

The core value is not "pattern overview across many clients."  
The core value is:

`CS voice comes in -> Prism detects issue shape -> Product and Engineering receive role-tuned briefings in parallel -> the customer gets the right answer faster`

---

## 2. Product frame

Prism is a coordination layer inside Sendbird Trust OS for enterprise support organizations.

It reads incoming customer conversations the way an experienced escalation lead would:
- identify whether the message is likely bigger than a single ticket
- connect it to recent signals and prior incidents
- route the same issue to the right internal roles at once
- keep guidance synchronized as the issue evolves

Prism is **not** a passive dashboard.  
Prism is **not** a general client-comparison surface.  
Prism is **not** a PM-only or Eng-only tool.

Prism is the layer that prevents one ambiguous customer question from becoming three disconnected Slack threads.

---

## 3. Locked hierarchy

The product hierarchy is now:

1. **Workspace / account:** `Nimbus Pay`
2. **Platform context:** `Cafe24`, `Shopify Korea`, `Smartstore`
3. **Current object:** an `Issue`
4. **Views of that issue/platform context:** `Issues`, `Timeline`, `Role briefings`, `Memory`

This matters because the installed platforms are real context inside Nimbus Pay's environment, but they are **not separate workspaces**.

### What each layer means

- **Nimbus Pay** is the customer account using Prism.
- **Cafe24 / Shopify Korea / Smartstore** are installed integration environments inside that account.
- **Issues** are the operational objects Prism coordinates around.
- **Timeline / Role briefings / Memory** are different lenses on the selected issue or platform context.

---

## 4. Live runtime scope

The live demo is intentionally narrowed to **one active issue** inside **one active platform context**:

- **Active platform:** Cafe24
- **Active issue:** card option missing at checkout

Shopify Korea and Smartstore remain in the runtime as valid platform contexts, but primarily as precedent-bearing history and memory surfaces.

### Why narrow the runtime

The strongest Prism story is not breadth. It is coordination clarity.

Keeping one live issue visible makes the product argument sharper:
- one customer-side signal
- one issue container
- multiple internal teams working in parallel
- one synchronized resolution path

The earlier Busan / Pax A920 scenario remains a useful archived exploration, but it is no longer part of the live runtime because it competes with the main product message instead of strengthening it.

---

## 5. Primary user

**Primary user:** CS escalation lead / CS manager

In the live prototype, that operator is:
- **Minseo**
- role: **CS escalation lead**
- pod: **Korean e-commerce support**

### Why this is the primary persona

Prism's first and most important win happens at the moment support realizes a customer issue may require multiple teams.

That moment belongs to CS or support operations, not to Product or Engineering.

If Prism works well:
- CS stops improvising
- Product receives context without waiting
- Engineering starts from a likely cause instead of from scratch
- the merchant receives a correct answer earlier

### Secondary users

- Product / PM
- Engineering

These users are critical recipients of Prism briefings, but they are not the hero operator for MVP.

---

## 6. The live hero scenario

### Cafe24 issue

**Issue title:** Card option missing at checkout  
**Issue shape:** ambiguous bug-vs-config inquiry  
**Platform context:** Cafe24  
**Workspace:** Nimbus Pay

### Trigger

A Cafe24 merchant asks whether a missing card payment option is their own configuration problem.

The message is ambiguous by nature.  
That ambiguity is the point.

Without Prism, this usually becomes:
- CS asking Product
- Product asking Engineering
- Engineering eventually confirming root cause
- CS continuing to send stale guidance while the diagnosis changes

### What Prism changes

Prism detects:
- the current merchant inquiry
- two nearby similar inquiries
- strong precedent from Shopify Korea
- supporting precedent from Smartstore

Then it publishes briefings in parallel to:
- **CS**
- **Product**
- **Engineering**

Each briefing is role-specific, but all three are anchored to the same issue.

### Closing beat

When Engineering confirms the fix and ships it, Prism rewrites the CS guidance in place.

That live synchronization is the product's strongest differentiator:
- no waiting for a Slack follow-up
- no stale customer response
- no need for the operator to manually reassemble the latest truth

---

## 7. Platform rail behavior

The slim left rail lists:
- Cafe24
- Shopify Korea
- Smartstore

This is a **platform-context rail**, not a workspace switcher.

Clicking a platform:
- keeps the user inside the Nimbus Pay workspace
- keeps the same core navigation
- changes the active platform scope
- updates Issues / Timeline / Role briefings / Memory for that platform

So Prism behaves like:

`Nimbus Pay workspace -> selected installed platform -> selected issue -> selected view`

---

## 8. Main IA

### Main navigation

- **Issues**
- **Timeline**
- **Role briefings**
- **Memory**

### Meaning of each view

#### Issues
- shows the issues Prism is coordinating in the selected platform
- makes the issue the primary operational container
- clarifies owner, status, signal strength, and participating teams

#### Timeline
- shows how the current issue unfolded over time
- trigger -> prior context -> pattern match -> teams engaged -> downstream actions
- proves Prism is coordinating one shared issue, not generating disconnected summaries

#### Role briefings
- shows how one issue fans out to multiple teams
- each card is one role's version of the same problem
- deep-dive mode expands body, next action, and evidence trail

#### Memory
- shows what Prism should remember about the selected platform
- includes precedent incidents, unfinished follow-up work, and promoted knowledge
- turns past incidents into better future routing

---

## 9. Content model

The runtime content model is:

- `customer`
- `platforms`
- `issues`
- `memoryViews`
- `personas`

### Key rule

The issue is the central coordination object.

An issue contains:
- the trigger
- quiet-cluster signals
- prior context
- a pattern match
- multiple role briefings
- downstream actions
- live guide pulses
- links into the Data Center

This structure makes the product concept legible:
one issue, many teams, synchronized progress.

---

## 10. Memory's role

Memory is not a side note. It is one of Prism's first-class surfaces.

In the current model:
- Shopify Korea and Smartstore are not "extra demos"
- they are precedent-bearing platform memory inside Nimbus Pay

That means Memory does real work:
- it gives the Cafe24 issue historical grounding
- it makes prior failure shapes reusable
- it shows what still has not shipped
- it reveals why Prism routed the issue the way it did

---

## 11. What Prism is proving in this portfolio artifact

The artifact is designed to prove four things:

1. **Issue detection from CS voice**
   - Prism starts from the customer-facing signal

2. **Simultaneous multi-team coordination**
   - Product and Engineering receive tailored briefings without waiting for manual relay

3. **Synchronized customer guidance**
   - the CS operator sees guidance update as the issue state changes

4. **Platform-aware memory**
   - precedent from Shopify Korea and Smartstore improves Cafe24 response quality

---

## 12. Explicit cuts

The live runtime does **not** currently optimize for:
- multi-client account comparison
- executive reporting
- broad issue dashboards across many companies
- hardware-install demo parity with the old Busan scenario

Those are valid future directions, but they weaken the current product story if they dominate the hero flow.

---

## 13. Relationship to Data Center

Prism is the product surface.  
The Data Center is the methodology floor beneath it.

Prism answers:
- what the product is
- how the issue is coordinated
- what each team sees

Data Center answers:
- what evidence informed the design
- what AI-assisted synthesis occurred
- what was promoted, cut, or deferred
- why this concept exists in this form

The evidence trail in Prism should always be able to land in Data Center states that explain the reasoning.

---

## 14. Current lock

The live Prism prototype is now locked to this model:

- one workspace: `Nimbus Pay`
- three platform contexts: `Cafe24 / Shopify Korea / Smartstore`
- one live hero issue: `Cafe24 card option missing at checkout`
- one primary persona: `CS escalation lead`
- one core promise: `one issue, multiple teams, faster resolution`

Any future expansion should preserve that clarity.
