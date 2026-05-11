# Design System — Zinc Dark (extracted from claude_stats.html)

## 1. Visual Theme & Atmosphere

A dense, data-forward dark dashboard. Near-black zinc surfaces, warm amber-gold as the single
dominant accent, and near-white typography. No decorative gradients — all depth comes from
layered zinc values and a single subtle shadow. Compact, information-dense spacing.

**Key Characteristics:**

- Near-black canvas: `#0d0d0d` body, `#09090b` card surface
- Zinc border palette — not blue-tinted, not warm: pure gray zinc
- Amber-gold `#f0a500` as the primary data-highlight accent (totals, key values)
- Success green `#4ade80`, danger red `#f87171` — vivid but contained
- System UI font stack — no web font for body text
- Compact, tabular feel: `tabular-nums`, tight cell padding, subdued muted colors
- Single-layer shadow: `0 1px 3px rgba(0,0,0,0.4)` — no multi-layer cascade
- Card radius `12px`, inner elements `6–8px` — rounded but structured
- Underline tab pattern — active = white text + 2px white bottom border
- Pill badges with tinted bg + matching border

---

## 2. Color Palette

### Backgrounds
| Role | Value | Usage |
|---|---|---|
| Body | `#0d0d0d` | Page background |
| Card surface | `#09090b` | All card/panel backgrounds |
| Elevated surface | `#111111` | Chart areas, slightly raised inner panels |
| Hover surface | `#151515` | Table row hover, interactive hover states |
| Overlay surface | `#18181b` | Tooltips, dropdowns |

### Borders
| Role | Value | Usage |
|---|---|---|
| Primary border | `#27272a` | Card borders, dividers, tab bottom lines |
| Subtle border | `#1a1a1a` | Table row separators |
| Button border | `#3f3f46` | Interactive button outlines |
| Total row accent | `#2a2a2a` | Table total row top border |

### Text
| Role | Value | Usage |
|---|---|---|
| Primary | `#fafafa` | Headings, active items, bold values |
| Secondary | `#e4e4e7` | Body text, chart labels, footer primary |
| Muted | `#a1a1aa` | Dates, secondary labels, badges |
| Dim | `#71717a` | Descriptors, sub-labels, inactive tabs |
| Very dim | `#555555` | Chart subtitles, meta labels |

### Accent Colors
| Role | Value | Usage |
|---|---|---|
| Amber gold (primary accent) | `#f0a500` | Total column values, KPI highlights |
| Success green | `#4ade80` | Up badges, positive trends |
| Danger red | `#f87171` | Down badges, negative trends, critical values |
| Success dim bg | `rgba(20, 83, 45, 0.13)` | Up badge background |
| Success dim border | `rgba(20, 83, 45, 0.27)` | Up badge border |
| Danger dim bg | `rgba(127, 29, 29, 0.13)` | Down badge background |
| Danger dim border | `rgba(127, 29, 29, 0.27)` | Down badge border |

### Interactive States
- Active tab: `#fafafa` text + `2px #fafafa` bottom border
- Inactive tab hover: `#e4e4e7` text
- Page-tab switcher: `#1c1c1e` container, `#2c2c2e` active pill, `#71717a` inactive text
- Button hover: `#fafafa` text, `#71717a` border

---

## 3. Typography

**Body font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (system UI — no web font)
**Mono / data values:** Inconsolata (companion for numeric data, IDs, code)

| Role | Size | Weight | Color | Notes |
|---|---|---|---|---|
| Page heading | 15px | 600 | `#ffffff` | `letter-spacing: -0.3px` |
| Card title (bold) | 15px | 700 | `#fafafa` | |
| Card value (large) | 20px | 600 | `#fafafa` | `letter-spacing: -0.3px`, `tabular-nums` |
| Month nav label | 14px | 600 | `#fafafa` | |
| Chart title | 13px | 600 | `#e5e5e5` | |
| Tab label | 13px | 500 (inactive) / 600 (active) | `#71717a` / `#fafafa` | |
| Descriptor label | 12px | 500 | `#71717a` | uppercase convention |
| Body / table cell | 12px | 400 | `#aaaaaa` | `tabular-nums` for numbers |
| Table first-col | 12px | 500 | `#ffffff` | |
| Badge | 11px | 500 | color-matched | |
| Chart subtitle | 11px | 400 | `#555555` | |
| Meta label | 10px | 400 | `#555555` | uppercase, `letter-spacing: 0.4px` |
| Token unit | 12px | 400 | `#71717a` | appended to large values |

---

## 4. Component Stylings

### Cards (`.sc-card`)
```css
background: #09090b;
border: 1px solid #27272a;
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0,0,0,0.4);
padding: 20px 0;
```
- Internal sections separated by `border-top: 1px solid #18181b`
- No colored top border — card type conveyed through content only

### Tables
```css
thead th: 10px / 500 / uppercase / #555 / letter-spacing 0.4px / border-bottom #222
tbody td: 12px / #aaa / tabular-nums / border-bottom #1a1a1a / padding 9px 10px
tbody td:first-child: color #fff / font-weight 500
tbody tr:hover td: background #151515
total-col: color #f0a500 / font-weight 600
total-row: color #fff / font-weight 600 / border-top #2a2a2a
```

### Underline Tabs (`.tab`)
```css
/* Container */
border-bottom: 1px solid #27272a;

/* Tab item */
padding: 6px 12px 10px;
font-size: 13px;
font-weight: 500;
color: #71717a;

/* Active tab */
color: #fafafa;
font-weight: 600;
/* ::after pseudo-element */
bottom: -1px; height: 2px; background: #fafafa;
```

### Pill Switcher Tabs (`.page-tab`)
```css
/* Container */
background: #1c1c1e;
border-radius: 10px;
padding: 3px;

/* Tab item */
border-radius: 8px;
font-size: 11px;
color: #71717a;
letter-spacing: 0.3px;

/* Active */
background: #2c2c2e;
color: #fafafa;
font-weight: 500;
```

### Badges
```css
/* Base */
border: 1px solid #27272a;
border-radius: 9999px;  /* full pill */
padding: 3px 8px;
font-size: 11px;
font-weight: 500;
color: #a1a1aa;

/* Up/success */
color: #4ade80;
border-color: rgba(20, 83, 45, 0.27);
background: rgba(20, 83, 45, 0.13);

/* Down/danger */
color: #f87171;
border-color: rgba(127, 29, 29, 0.27);
background: rgba(127, 29, 29, 0.13);
```

### Tooltip
```css
background: #18181b;
border: 1px solid #27272a;
border-radius: 8px;
padding: 10px 14px;
box-shadow: 0 4px 16px rgba(0,0,0,0.5);
font-size: 12px;
color: #e4e4e7;
```

### Nav Buttons (small)
```css
background: transparent;
border: 1px solid #3f3f46;
border-radius: 6px;
color: #a1a1aa;
width: 28px; height: 28px;
/* hover: color #fafafa, border #71717a */
```

### Chart area
```css
background: #111;
border: 1px solid #1e1e1e;
border-radius: 8px;
padding: 16px 4px 8px;
```

---

## 5. Layout & Spacing

### Spacing scale (from source)
`3px, 4px, 6px, 8px, 10px, 11px, 12px, 14px, 16px, 20px, 24px, 28px, 32px, 40px`

### Page structure
- Max-width content wrapper: `1060px`, `padding: 0 32px 40px`
- Card grid: `gap: 12px`

### Border Radius
| Element | Radius |
|---|---|
| Card | `12px` |
| Chart area | `8px` |
| Pill tab item | `8px` |
| Pill tab container | `10px` |
| Nav button | `6px` |
| Badge (pill) | `9999px` |
| Tooltip | `8px` |

### Shadow
- **Cards:** `0 1px 3px rgba(0,0,0,0.4)` — single, subtle
- **Tooltips:** `0 4px 16px rgba(0,0,0,0.5)` — deeper for floating elements
- **No multi-layer cascade** — shadow is a single layer, depth conveyed through background color stacking

---

## 6. Responsive Breakpoints
| Name | Value |
|---|---|
| Tablet | `768px` |
| Mobile | `480px` |

---

## 7. Do's and Don'ts

| Do | Don't |
|---|---|
| Use `#09090b` for card surfaces on `#0d0d0d` body | Use white/light backgrounds |
| Use `#f0a500` for primary data highlights and totals | Use blue as a primary interactive color |
| Use `tabular-nums` for all numeric data | Mix font sizes unnecessarily |
| Keep shadows to a single subtle layer | Use decorative gradients or glow effects |
| Use `12px` radius on cards | Round badges below `9999px` (keep full-pill) |
| Use system UI font stack for body | Load heavy web fonts for body text |
| Keep uppercase labels at 10px / 0.4px tracking | Go above 11px for uppercase descriptor labels |

---

## 8. Quick Reference Token Map

| Token | Value |
|---|---|
| Body bg | `#0d0d0d` |
| Card surface | `#09090b` |
| Hover surface | `#151515` |
| Primary border | `#27272a` |
| Primary text | `#fafafa` |
| Muted text | `#71717a` |
| Primary accent | `#f0a500` |
| Success | `#4ade80` |
| Danger | `#f87171` |
| Body font | system UI |
| Mono font | Inconsolata |
