# Prism Design System

A design-system reference for Prism — the operator UI for Sendbird's AI-Native customer-signal product. The structure of this doc borrows from Together AI's published system (the categories and rigor); the values are Prism's own.

---

## 1. Visual Theme & Atmosphere

Prism's interface is a **calm operator console for shared, role-aware action**. Where Together AI's marketing site uses pastel-gradient hero illustrations to make GPU infrastructure feel approachable, Prism uses a **restrained, single-canvas operator UI** to make multi-team coordination feel inevitable. Both share a "technical infrastructure company with taste" personality, but Prism dials down the brand-illustration drama and dials up data density.

The product runs on a single light canvas with brand-purple as the only UI accent. There is no dual-world (no dark research zone, no pastel hero); every screen is operator chrome. The aesthetic discipline is in the **restraint**: only ever one chromatic accent, mono labels for technical structure, and consistent geometry across containers.

What Prism inherits from Together AI's system:

- **Typography duality** — a sans family for everything except technical labels, where mono with positive tracking creates "infrastructure structure" moments.
- **Negative tracking on display text** — every display-tier size uses sub-em negative letter-spacing, scaled by size.
- **Brand restraint** — the brand color appears in interactive accents and a few callouts; never as decorative chrome.
- **Brand-tinted shadows** — elevation shadows are tinted with the brand color (purple) rather than generic black, so depth feels deliberate.

What Prism does *not* inherit:

- No pastel hero gradients (operator UI, no marketing surface)
- No dual light/dark theme split (single light canvas)
- No magenta/orange brand accents (Prism has one accent: purple)
- Sharp 4–8px geometry replaced with **softer 6–16px ladder** — Prism's containers are calmer rectangles, not pinned cards

**Key Characteristics**

- Pure white canvas (`#ffffff`)
- Single chromatic accent: brand purple (`#6210CC`)
- Inter for sans, JetBrains Mono for labels (free, web-safe alternatives to Together AI's licensed fonts)
- Negative letter-spacing on display tier (-0.011em → -0.022em scaled by size)
- Mono labels in UPPERCASE with `0.06em` positive tracking
- Border-radius ladder: `6px` (chips/tags) · `10px` (inner content) · `16px` (outer panel frames)
- Brand-purple-tinted shadows: `rgba(98, 16, 204, 0.05–0.08)`
- Tight line-heights for data-dense surfaces (1.35 body, 1.20 display)
- Generous side rails (60px) with platform-rail removed in role views that span platforms

---

## 2. Color Palette & Roles

### Primary

- **Brand Purple** (`#6210CC` / `var(--accent)`): The single chromatic accent. Used on interactive states, kickers, highlighted callouts, primary CTAs, and brand moments. Never used as page background.
- **Accent Light** (`var(--accent-light)`): A soft purple tint used for callout backgrounds (Decision prompt, Current state, customer testimonial, Your next action). The "highlighted-but-quiet" surface.
- **Accent Dark** (`var(--accent-dark)`): Darker purple for hover/active states on filled buttons and chips.

### Surface & Background

- **Pure White** (`#ffffff`): Page background, panel backgrounds, route cards.
- **Surface** (`var(--bg)` / `var(--surface)`): Subtle off-white for inner content boxes (timeline mini boxes, downstream entries, etc.).
- **Surface 2** (`var(--surface2)`): Even softer tint for hover states on white surfaces.

### Neutrals & Text

- **Text 1** (`var(--text-1)`, `#0d0d10`): Primary text on light surfaces.
- **Text 2** (`var(--text-2)`): Secondary text — descriptions, body paragraphs.
- **Text 3** (`var(--text-3)`): Muted text — captions, kickers, metadata, helper text.
- **Border** (`var(--border)`): Hairline separators, container borders.
- **Border 2** (`var(--border2)`): Slightly stronger borders for emphasis.

### State Colors (for badges/pills only — never UI chrome)

- **Caution** (`var(--state-caution)`): Orange — Investigating issues.
- **Good** (`var(--state-good)`): Green — Resolved, success states.
- **Danger** (`var(--state-danger)`): Red — high-risk states.
- **Muted** (`var(--state-muted)`): Gray — Archived, neutral state.

### Discipline

- The brand purple appears in: interactive accents (links, focus rings, active tab underlines), highlighted callouts (light purple background), kicker text, the current-state pill, and one CTA per surface.
- State colors appear **only** on `.badge-outline` pills. They never paint container backgrounds or borders.
- Page chrome stays neutral (white + grays); chromatic energy is reserved for the moments that matter.

---

## 3. Typography Rules

### Font Family

- **Sans** (`--sans`): `Inter`, with system fallbacks. The display + body workhorse.
- **Mono** (`--mono`): `JetBrains Mono`, with system fallbacks. Reserved for: timestamps, IDs, evidence claims, and uppercase technical labels.

Inter + JetBrains Mono is Prism's intentional pairing. Free, web-safe, and the same shape as Together AI's "The Future" + "PP Neue Montreal Mono" pair: a geometric sans for content, a structured mono for labels.

### Type Ladder (8 tiers + 2 mono)

| Token | Size | Weight | Line-height | Tracking | Where it shows up |
|---|---|---|---|---|---|
| `--fs-hero` | 32px | 700 | 1.0 | -0.04em | Hero stats — donut center number, biggest scan target |
| `--fs-title` | 28px | 700 | 1.20 (`--lh-tight`) | -0.022em (`--tracking-display`) | Page titles, workspace title |
| `--fs-display` | 22px | 700 | 1.20 (`--lh-tight`) | -0.020em | Stat values, secondary titles |
| `--fs-feature` | 18px | 600 | 1.25 | -0.017em | Feature/sub-section titles between section and display |
| `--fs-section` | 16px | 600 | 1.30 | -0.012em | Panel titles, section headings, rail title |
| `--fs-body` | 14px | 400/500 | 1.35 (`--lh-body`) | -0.011em (`--tracking-body`) | Nav, tabs, table cells, body text |
| `--fs-meta` | 13px | 500 | 1.45 | normal | Captions, helper text, table headers |
| `--fs-tag` | 10px | 600 | 1.0 | `0.06em` (`--ls-caps`) | Uppercase pills, badges, mono kickers |

#### Mono labels (the "technical structure" tier)

| Token | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| `--fs-label-mono` | 13px | 600 | 1.0 | `0.06em` |
| `--fs-tag` (mono variant) | 10px | 600 | 1.0 | `0.06em` |

A mono label is **always**: family `var(--mono)`, **uppercase**, weight 600, color `var(--text-3)` (muted), with positive `0.06em` tracking. Use the `.label-mono` helper class to apply this style.

### Principles

1. **Negative tracking on display, positive on mono labels.** Display sans (`--fs-feature` and above) always uses small negative `letter-spacing` scaled by size. Mono uppercase labels use positive `0.06em`. Together AI's principle, ported.
2. **Tight line-heights for density.** Body (`--lh-body`: 1.35) is intentionally tighter than typical web body (1.5+) — this is operator UI, not a blog. Display tier goes even tighter (`--lh-tight`: 1.20). Mono labels collapse to 1.0.
3. **Weight 400/500/600/700 — no other weights.** No 300, no 800, no italics for emphasis. Hierarchy is carried by size, color, and weight in that order.
4. **No serif.** Ever.
5. **Mono is for structure.** Use mono for: kickers ("PRIOR CONTEXT"), short uppercase tags ("CAFE24"), timestamps, IDs, file paths, evidence quotes' source line. Never for body prose.

---

## 4. Component Styling

### Buttons & CTAs

**Primary CTA** (`.pm-view-timeline-cta`)
- Background: `var(--accent)` filled
- Text: white, weight 600
- Border: 1px solid `var(--accent)`
- Radius: 8px
- Padding: 6px 12px (compact) or 9px 16px (default)
- Hover: `var(--accent-dark)` background + brand-tinted shadow

**Ghost / Back chip** (`.rb-back-chip`)
- Background: white
- Border: 1px solid `var(--border)`
- Text: `var(--accent)`, weight 600
- Radius: 6px
- Hover: `var(--accent-light)` background, `var(--accent-dark)` text

### Cards & Containers

Prism's container ladder (more graduated than Together AI's 4/8 sharp pair):

| Tier | Radius | Use |
|---|---|---|
| Tag / chip / pill | `6px` | Filter chips, badges, pagination buttons |
| Inner content box | `10px` | Mini cards (Priority decision, Coordination brief rows, timeline mini boxes), trail cards, customer message |
| Outer panel frame | `12–16px` | `.cs-process-panel` (14), `.tl-card` (16), `.pm-chart-card` (12) |

Inner content boxes use unified padding `12px 14px` and the brand-tinted shadow set defined in §6.

### Filter chips (status / platform)

The unified filter chip spec (used in Engineer view + PM view dropdowns):

- Height: 28px
- Border-radius: 6px
- Padding: 0 8px 0 10px (with 12×12 chevron-down SVG caret on the right)
- Border: 1px solid `var(--border)`
- Background: white
- Font: `--fs-meta`, weight 500
- Hover: `var(--surface2)` background
- Active/open: `var(--accent)` border + matching caret color

### Badges & Tags (`.badge-outline`)

- Padding: 2px 8px (compact)
- Radius: 4px (small)
- Font: `--fs-tag` mono, uppercase, weight 600, `0.06em` tracking
- Tone variants: `.caution` (orange), `.good` (green), `.danger` (red), `.muted` (gray) — outline only, no fill

### Mono Section Labels

The Together AI–style "PRIOR CONTEXT" / "TRIGGER EVENT" / "TEAMS ENGAGED" kickers:

- Use `.label-mono` helper class (or inline: `font-family: var(--mono); font-size: var(--fs-meta); font-weight: 600; text-transform: uppercase; letter-spacing: var(--ls-caps); color: var(--text-3)`)
- Positions: above titles in panels, before content blocks, on the left side of each timeline node
- Always **uppercase**, never sentence-case

---

## 5. Layout Principles

### Spacing System

Base unit: 4px. Common scale: 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48.

- Inner content box padding: `12px 14px` (unified across all `.tl-mini`, `.tl-pattern-match`, `.cs-customer-message`, `.cs-resolution-shared`, `.guide-paste-box`, `.rb-trail-card`, `.pm-mini-card-block`, `.home-mini-card`, `.guide-pulse` in coord list)
- Panel head padding: `14px 16px` to `16px 18px`
- Panel body padding: `16px`
- Side rail padding: `14px 14px 22px`
- Section vertical gap: 12–18px

### Border Radius Ladder

A graduated ladder rather than Together AI's binary 4/8 split:

- `4px` — small inline badges (`.badge-outline`)
- `6px` — filter chips, ghost buttons, route cards' inner state, pagination buttons
- `10px` — inner content boxes (the rhythm of the product)
- `12px` — chart cards, stat tiles, donut card
- `14–16px` — outer panel frames (`.cs-process-panel`, `.tl-card`)

### Whitespace Philosophy

- **Operator-density first.** Prism is a working surface, not a brochure. Spacing is generous enough to scan, tight enough to fit context. No "marketing breathing room."
- **Symmetric padding on rails.** When a rail content has a left date column, ensure right padding mirrors the visual breathing room (see `.tl-sequence` 2px 20px 20px 4px).
- **Right rails are overlays.** They float over the main view; opening one never shifts main content.

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Page background, prose |
| Contained (Level 1) | `1px solid var(--border)` | Cards, badges, route cards |
| Elevated (Level 2) | `0 1px 4px rgba(98,16,204,0.08), 0 1px 2px rgba(98,16,204,0.04)` | Default panels, popovers |
| Lifted (Level 3) | `0 28px 64px rgba(13,13,16,0.18)` (overlay rail), `0 14px 24px rgba(13,13,16,0.18)` (donut tooltip) | Floating overlay sheets |
| Filled CTA shadow | `0 1px 2px rgba(98,16,204,0.18)` default → `0 3px 8px rgba(98,16,204,0.28)` hover | Primary buttons |

**Shadow philosophy:** Most depth in Prism uses **brand-purple-tinted shadows** (Together AI's principle, applied with our purple). Generic black shadows are reserved for the highest-elevation overlays (rail sheets) where the heavier feel reads as "pulled forward from the page."

---

## 7. Do's and Don'ts

### Do

- Use `var(--accent)` purple for ALL chromatic accents in chrome
- Use mono uppercase labels (`.label-mono`) to add technical structure
- Apply negative letter-spacing on display tier (scale by size)
- Tinted shadows: `rgba(98, 16, 204, X)` for elevated cards
- Keep border-radius on the documented ladder (6 / 10 / 12-16)
- Use `--lh-body` (1.35) for data-dense surfaces
- Reserve filled accent backgrounds for callouts (Decision prompt, Current state, customer testimonial, Your next action)

### Don't

- Don't use the state colors (orange/green/red) for container backgrounds or borders — they belong on `.badge-outline` pills only
- Don't use light blue (`--state-new-bg`) for callout backgrounds — use `var(--accent-light)` (brand purple tint) for consistency
- Don't introduce a third typeface — Inter + JetBrains Mono is the pair
- Don't use bold (700+) on body text — `--fs-body` weight tops out at 600
- Don't use pill-rounded corners (radius > 16) anywhere — Prism's ladder caps at 16
- Don't mix container radii within the same surface — pick a tier and hold it
- Don't use generic black shadows on contained cards — brand-tinted is the rule

---

## 8. Responsive Behavior

Prism today is desktop-first (operator workstation context). The platform-rail collapse pattern at narrow widths is implemented but not the focus of the demo.

### Touch targets

- Buttons: min 28px height
- Chips: 28px height
- Filter dropdowns: 28px height
- Card surfaces serve as touch targets in the issue list

### Image behavior

- Platform color swatches: 12×12px solid color squares (CSS-only, no licensed assets)
- Donut SVGs: scale proportionally; centered text is `--fs-display`
- Chart bars/lines: scale to container, with explicit min-heights

---

## 9. Quick Reference for Future Work

### CSS Custom Properties

```css
/* Color */
--accent: #6210CC;
--accent-light: rgba(98, 16, 204, 0.06);
--accent-dark: #4f0ba0;

/* Type sizes */
--fs-hero:  32px;
--fs-title: 28px;
--fs-display: 22px;
--fs-feature: 18px;
--fs-section: 16px;
--fs-body: 14px;
--fs-meta: 13px;
--fs-tag: 10px;
--fs-label-mono: 13px;

/* Type rhythm */
--lh-tight: 1.20;
--lh-body: 1.35;
--lh-relaxed: 1.55;
--tracking-display: -0.022em;
--tracking-body: -0.011em;
--ls-caps: 0.06em;

/* Shadows (purple-tinted) */
--shadow-purple-sm: 0 1px 2px rgba(98, 16, 204, 0.05);
--shadow-purple:    0 1px 4px rgba(98, 16, 204, 0.08), 0 1px 2px rgba(98, 16, 204, 0.04);
```

### Helper class for mono labels

```css
.label-mono {
  font-family: var(--mono);
  font-size: var(--fs-label-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--ls-caps);
  color: var(--text-3);
  line-height: 1.0;
}
```

Apply `<span class="label-mono">PRIOR CONTEXT</span>` anywhere a kicker is needed.

---

*Last updated 2026-05-08. Maintain in lockstep with `/index.html`'s CSS custom-property block at the top.*
