# 6G Fundamentals Tutorial — Project Guide

## What this is
A self-paced web tutorial teaching 6G wireless concepts to entry-level engineers and
project managers. 10 modules, ~5-6 hours total. Learners finish able to follow expert
conversations, translate jargon, and ask intelligent questions.

Audience is non-specialist. Content is deliberately written at an accessible reading
level with humor and analogies. It is vendor-neutral and employer-neutral.

## Content is authored elsewhere — do not rewrite it
Module text is written and reviewed in DOCX files, then converted to web content.
The DOCX is the source of truth for wording.

**Never** paraphrase, condense, "improve," or correct module copy. The analogies
(a bat that delivers pizza, the 3GPP release train), the jokes, and the phrasing are
all intentional and already approved. If text looks wrong, ask rather than fix.

Code changes are yours to make freely. Content changes need my approval.

## Every module has the same structure
In this order:
1. Module header — title, "Module X of 10", estimated time
2. Navigation block (top)
3. What You'll Learn — 4-5 bullets
4. 3-4 Lessons, each with an analogy hook, explanation, and usually a figure
5. Callouts, used throughout the lessons:
   - Key Takeaway (one-sentence crystallization)
   - Sound Smart in a Meeting — an expert quote PLUS a plain-English clue decoding it
   - Quick Terminology Note — where casual speech and correct usage differ
6. Acronym Decoder table — Acronym / Stands For / Easy Explanation
7. Check Yourself — 5-question quiz, all questions first, then answers
8. Navigation block (bottom)

Build components for these blocks. Do not create per-module bespoke layouts.

## Design system
Visual decisions come from the Claude Design system file in this repo. Use its tokens
for color, type scale, and spacing. Don't introduce new colors or fonts ad hoc.
Headings are Merriweather; body text is Open Sans.

## Images
- Stored at `/public/images/module-NN/img-N-N.png` (e.g. `/images/module-01/img-1-1.png`)
- 33 images total across the course, 3-4 per module
- Generated manually and added over time — pages must render gracefully when a file
  is missing, showing a labeled placeholder rather than a broken image
- Every image needs alt text; images teach, they don't decorate

## Technical
- Deployed on Vercel
- No database and no user accounts currently. Supabase may be added later for
  cross-device progress tracking — don't architect in a way that blocks it, but
  don't build it now
- Any progress tracking is client-side only for now
- Mobile is a first-class target

## Working style
- Propose an approach and wait for approval before large changes
- Prefer editing existing components over creating near-duplicates
- Keep content in content files, not hardcoded in components
- Ask when uncertain rather than guessing — especially about content
