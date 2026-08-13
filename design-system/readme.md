# Signal Bright — getabu.com design system

The personal brand system for **Abu**, a telecom engineer working on 6G and AI in mobile networks, and the author of the **PXPI Project Management Framework**. The site's job is to teach for free, build trust, and let the right people find him for advisory, workshops and speaking.

Signal Bright is the light-base variant of the "Signal" palette: warm off-white paper, deep navy ink, and sunshine yellow doing all the optimism. It replaced two other candidates — *Sunrise* (yellow-dominant, much larger type) and *Signal Classic* (navy base) — which are kept in `Abu Homepage.dc.html` in this project for comparison.

## Sources

Everything here derives from the written brief and the three homepage directions built in `Abu Homepage.dc.html`. No external codebase, Figma file or brand kit was supplied. **There is no logo file** — the mark is the letter "A" set in the display serif inside a yellow squircle tile; if a real mark exists, drop it in `assets/` and update `LogoMark`.

## Content fundamentals

**Voice: first person, plainly stated, generous.** Abu writes as "I" and addresses the reader as "you". No corporate we.

- **Free means free, and it is said out loud.** "No signup. No paywall." / "everything here is free to use." Never gate a resource without naming exactly what arrives: every email form carries a promise line ("Canvas, checklist and templates. One email, no drip campaign.").
- **Concrete over aspirational.** "Eighteen years of network engineering, written down for anyone who wants it" — not "empowering the next generation of connectivity".
- **Willing to say what isn't true.** "Where machine learning genuinely helps the radio network, and where it doesn't." "Stop calling it AI-native." The scepticism is part of the trust.
- **Modest about availability.** "I take a small number of engagements each quarter... I'll say honestly whether I can help."
- **Sentence case everywhere** except eyebrows and meta lines, which are uppercase. Headlines end in full stops — they are sentences, not slogans.
- **No emoji.** No exclamation marks. Arrows (→) are the only decorative character, and only on trailing links.
- Numerals: spelled out in prose ("Eighteen years"), digits in stats ("18"). Dates read "12 Jul · 6 min".

## Visual foundations

**Colour.** Warm off-white `--paper` #FDFBF7 carries the page; ink #1B2733 carries the type. Sun yellow #FFDD44 is the single action colour and appears as a *surface* only — never as text on light. Ember #FA6404 is the accent for small type (eyebrows, trailing links) and one blob per page. Sky #68CBF8 supports (image slots, list labels, footer headings); coral #E45863 appears once or twice at most. At most one inverted (ink) band per page, and it belongs to PXPI.

**Type.** Source Serif 4 at weight 900 for every headline and the wordmark — chosen because it ships a true black; Georgia is the fallback but only fakes it. Body is the system sans stack at 1.65 line-height, capped at ~480px measure. Eyebrows are 11px uppercase sans at 3px tracking; meta lines are 12px uppercase at 1.5px. Display sizes carry negative tracking (−0.8 to −1.4px); nothing else does.

**Layout.** 1120px container, 60px gutters, 70px vertical section rhythm. Everything is CSS grid with `minmax()` columns and `gap` — no fixed multi-column layouts, so bands collapse to one column on phones without media queries. Whitespace is generous by default: when a section feels empty, the fix is fewer elements, not more.

**Backgrounds and motifs.** Two signature devices. (1) **Blobs** — large blurred circles in translucent accent colours, always behind content, always partly off-canvas, maximum two per band, never over text at reduced contrast. (2) **The squircle** — the logo tile, radius exactly 32% of its side, echoed in the icon tiles on cards.

**Surfaces.** Cards are white on paper with a 1px `rgba(27,39,51,0.10)` hairline, 18px radius and a soft wide shadow (`0 6px 20px`). Radii: 12px controls, 18px cards, 24px media and panels, pill for tags. No tight or dark shadows anywhere; the darkest is the invert lift used on ink surfaces.

**Imagery.** None supplied. Every image is a flat accent-coloured slot labelled with its purpose. When real photographs arrive they should be warm, daylit, and human — no cool-grey stock, no grain, no duotone.

**Interaction.** Hover: subtle lift and opacity, never a colour flip on yellow. Press: a 1–2% scale-down. Transitions 160ms on a gentle ease. No entrance animations, parallax or scroll-jacking — the site is a reading surface.

**Accessibility.** Ink on sun is 11.6:1; sun on ink is the same. Yellow on paper (1.4:1) is forbidden for text. Body copy is `--ink-600` or darker on paper; `--ink-300` is reserved for uppercase meta at 11–12px, never paragraphs.

## Iconography

The system currently uses **no icon set**. Where a product would normally place an icon, Signal Bright uses either a solid colour tile (squircle, 42–46px) or a two-digit serif ordinal ("01"). The only glyph in use is the arrow → on trailing links. If icons become necessary, adopt **Lucide** (2px stroke, rounded caps) from CDN — it matches the soft geometry — and record the decision here.

## Index

- `styles.css` — the single entry point; imports everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css`, `base.css`.
- `guidelines/` — 12 specimen cards: colours (core, accents, text, contrast pairs), type (display, body, eyebrow), spacing, radii, shadows, brand mark, blobs.
- `components/core/` — Button, Input, Eyebrow, SectionHeading, Card, Badge, LogoMark, Blob, Stat.
- `components/content/` — TutorialCard, PostCard, EmailCapture, EngagementRow.
- `ui_kits/website/` — the full homepage assembly (`index.html`) and its band-by-band notes.
- `SKILL.md` — makes this folder usable as an Agent Skill.

### Intentional additions

- **Blob** and **LogoMark** are primitives rather than one-off markup because both are brand motifs that must stay dimensionally consistent (blob opacity/blur; tile radius at 32% of side).
