# 6G Fundamentals Tutorial — Design Contract

This tutorial derives its visual language from `source/design-system.html`. The source
artifact is authoritative for palette, scale, spacing, radii, borders, shadows, and
motion. The project-specific font decision approved for the tutorial is Merriweather for
headings and Open Sans for body text.

## Core palette

| Token | Value | Tutorial use |
| --- | --- | --- |
| `ink-900` | `#1B2733` | Primary text and inverted surfaces |
| `ink-800` | `#152029` | Deep inverted surfaces |
| `ink-600` | `#41505F` | Body text |
| `ink-400` | `#5B6874` | Secondary body text |
| `ink-300` | `#8B98A4` | Muted metadata |
| `paper` | `#FDFBF7` | Page background |
| `paper-card` | `#FFFFFF` | Cards and raised content |
| `paper-warm` | `#FDF4DE` | Warm supporting surface |
| `sun` | `#FFDD44` | Primary accent and takeaway payoff |
| `sun-shade` | `#8A4A02` | Legible warm-accent text |
| `ember` | `#FA6404` | Links and active progress |
| `sky` | `#68CBF8` | Supporting information and terminology |
| `coral` | `#E45863` | Warm secondary emphasis |

No component introduces an independent color. Transparent borders and raised surfaces
use the source artifact's approved rgba values.

## Typography

- Display and headings: Merriweather, weights 700 and 900.
- Body and controls: Open Sans, weights 400, 600, and 700.
- The source type scale is retained: 54, 40, 34, 24, 21, 17, 15, 14.5, 12, and 11px.
- Display line height is 1.12; titles 1.25; body copy 1.65.
- Eyebrows and metadata use the source uppercase tracking values.

## Spacing and shape

- Spacing follows the source 4, 8, 12, 16, 20, 28, 36, 48, 60, 70, and 96px scale.
- The outer layout uses the 1120px source container and responsive gutters.
- Long-form lesson copy is constrained within that container for readable line length.
- Radii remain 10, 12, 18, and 24px, with pills at 999px.
- Cards use the source hairline border and card shadow.

## Tutorial component treatment

- Module header: warm paper surface with restrained sky and sun brand blobs.
- Navigation: white raised card with strong focus outlines and compact jump links.
- Terminology callout: sky accent, signaling supporting clarification.
- Key takeaway: sun accent, signaling the lesson's central payoff.
- Sound Smart: inverted ink quote paired with a sun plain-English clue.
- Figures: 16:9 teaching area; a labeled warm placeholder replaces missing files.
- Acronym decoder: a semantic table on larger screens and labeled cards below 640px.
- Quiz: all questions remain visible; one explicit control reveals the answer section.
- Reading progress: an ember bar at the top of the viewport, persisted client-side.

## Responsive and accessibility rules

- Mobile gutters use the source spacing scale rather than scaled-down desktop padding.
- Touch controls remain comfortably sized and never depend on hover.
- Focus states are visible against every surface.
- Headings preserve a single `h1`, lesson `h2` elements, and subordinate `h3` labels.
- Reduced-motion preferences disable transitions and smooth scrolling.
- Text and controls use approved high-contrast color pairings from the source palette.
