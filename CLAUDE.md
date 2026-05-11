# Working with Claude on this Project

> ## ⚠️ CRITICAL — DO THIS FIRST OR DON'T REPLY
>
> **Every non-trivial response must begin with the literal text `POV check:` followed by 1–2 lines** stating whether the request strengthens Prism's core POV ("one signal becomes shared, role-aware action") or dilutes it. If aligned, say so briefly and move on. If misaligned, or if there is a stronger version of the request, surface it as a recommendation before doing anything else.
>
> **What counts as "non-trivial"** — anything that touches code, data, architecture, restructures a UI, or changes behavior. **Skip ONLY for:** typo fixes, single-color or single-value swaps, and pure conversational replies (e.g., "what is X?", "thanks", clarifying chit-chat).
>
> **Self-correction clause:** if Claude notices it has skipped the `POV check:` line on a non-trivial response while drafting, Claude must restart the response with it. The user reserves the right to reject any non-trivial response that lacks the literal `POV check:` line and ask Claude to redo it.
>
> This block is fenced and forces a literal output on purpose. Rules buried in prose lose to task momentum; an externalized check that the user can scan for makes drift visible immediately.

These rules apply to every request the user makes in chat for this project (Prism, Data Center, Sendbird JD).

The rules are ordered chronologically — Claude should run through them in this order on every non-trivial request, **before** touching any file. The `POV check:` line above is the externalized output of Rule 1.

## 1. Pressure-test the request against product value

Before doing anything else, Claude analyzes whether the request actually serves the product's intent.

- What problem does this change solve for the user (or for the audience of this portfolio piece)?
- Does it strengthen the story Prism is telling — that one signal becomes shared, role-aware action — or does it dilute it?
- Is there a *better* version of the request that would serve the same goal more directly?

If the request seems to conflict with product value, or there's a stronger version of it, Claude raises this concern *before* asking clarifying questions or writing code. Phrase it as a recommendation, not an objection — the user still decides.

## 2. Ask focused questions to clarify requirements

For anything ambiguous, multi-step, or with multiple reasonable interpretations, Claude asks clarifying questions first. Use the structured question tool (multiple-choice options) when available so the user can answer quickly.

Do not assume. Do not guess. Confirm.

If the request is genuinely simple and unambiguous (e.g., "fix this typo", "change this color to X"), skip clarification and just do the work.

## 3. Lay out pros and cons of the request (or of the design choices inside it)

Before locking the plan, Claude surfaces the trade-offs:

- **Pros** — what gets better if we do this exactly as asked
- **Cons** — what gets worse, what new debt is introduced, what edge cases this opens
- **Alternatives worth considering** — if there's a meaningfully different approach, name it briefly with its own pros/cons

Keep this short — a few bullets, not an essay. The point is to surface trade-offs the user might not have considered, not to slow them down.

## 4. List the task plan with expected outcome and work scope BEFORE implementing

Once the previous three steps are done, Claude writes out:

- **What will change** — the high-level outcome the user should expect to see
- **Where it will change** — specific files (and ideally specific functions/sections) that will be touched
- **Order of operations** — what gets done first, what depends on what
- **Anything that is intentionally out of scope** — files or behaviors Claude is *not* touching, so the user can correct that scope before work starts

Then proceed with the implementation, marking progress visibly as each step lands.

## Why these rules exist

This is a UX design portfolio project on a tight timeline. Wasted iterations from misunderstood requirements are expensive. A short upfront alignment check + clarification + trade-off sketch + scope outline saves more time than it costs, and keeps the build pointed at the product's actual point of view.

The `POV check:` enforcement clause exists because, in practice, rules-as-prose lose to task momentum — Claude reads them and then defaults to "fulfill the request" mode without the explicit alignment step. Forcing the check as a literal output line creates an external signal the user can scan for, and creates a self-correction loop where Claude notices the omission before the user has to.
