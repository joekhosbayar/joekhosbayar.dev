---
name: The Golden Record
description: An engraved manifest sent outward to a stranger — void, gold hairlines, one warm light.
colors:
  void: "#0b0d14"
  void-deep: "#07080e"
  gold: "#d9a94c"
  gold-bright: "#f0c76e"
  peach: "#f2b98a"
  white: "#e9ecf2"
  dim: "#8c93a6"
  etch-strong: "rgba(217, 169, 76, 0.62)"
  etch: "rgba(217, 169, 76, 0.34)"
  etch-faint: "rgba(217, 169, 76, 0.17)"
  etch-ghost: "rgba(217, 169, 76, 0.08)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.1rem + 2.6vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 1.1rem + 1.9vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + 0.5vw, 1.4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "'Martian Mono Variable', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.62
    letterSpacing: "0.13em"
    fontFeature: "tabular-nums"
  figure:
    fontFamily: "'Martian Mono Variable', ui-monospace, monospace"
    fontSize: "clamp(0.95rem, 0.88rem + 0.3vw, 1.15rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
  action:
    fontFamily: "'Martian Mono Variable', ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  none: "0"
  dot: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  spine: "clamp(1.25rem, 4vw, 4rem)"
  column-offset: "1.75rem"
  passage: "clamp(5rem, 11vh, 9rem)"
  head-gap: "2.25rem"
  entry-gap: "0.85rem"
  stop-gap: "3.25rem"
components:
  hail:
    textColor: "{colors.peach}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
  hail-hover:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.void-deep}"
  hail-quiet:
    textColor: "{colors.gold}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
  hail-quiet-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.void-deep}"
  hail-large:
    textColor: "{colors.peach}"
    rounded: "{rounded.none}"
    padding: "1rem 1.6rem"
  orbit:
    backgroundColor: "{colors.void}"
    textColor: "{colors.peach}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.95rem 0.45rem 0.5rem"
  skip-link:
    backgroundColor: "{colors.void-deep}"
    textColor: "{colors.peach}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
  manifest-value:
    textColor: "{colors.gold}"
    typography: "{typography.figure}"
  track-mark:
    backgroundColor: "{colors.void}"
    rounded: "{rounded.dot}"
    size: "8px"
  track-mark-live:
    backgroundColor: "{colors.peach}"
    rounded: "{rounded.dot}"
    size: "8px"
---

# Design System: The Golden Record

## Overview

**Creative North Star: "The Golden Record"**

A career pressed onto a plate and sent outward to a stranger with no context. The
page is an engraved manifest of real quantities, not a portfolio: it refuses the
dark-portfolio card grid entirely and replaces it with one continuous sheet, ruled
by a single hairline spine, on which sections are *passages* rather than objects.
Every mark on the surface is a drawn line. Nothing is lit from behind, nothing is
frosted, nothing floats above anything else.

The world is code-led. No comp was ever produced for it and none is owed; the
built stylesheet is the original and this document is its record, written after
the fact from what actually shipped. Where the direction contract and the build
disagree, the build is authoritative and the divergence is named below.

Density is high and quiet. The reader is a recruiter scanning in a batch of tabs,
so the evidence — quantities, dates, system shape — is set in monospace and pinned
to rules, while the persuasion is set in a warm grotesque and given a 68ch measure.
The single moment of warmth on the whole surface is the contact affordance. That
scarcity is the design.

**Key Characteristics:**
- Drenched void ground; gold hairline as the only structural material.
- Four gold opacities carry all depth. No shadow, blur, glass, or gradient fill.
- Peach is spent exclusively on contact and live state — nowhere else, ever.
- Every figure, date, label, and coordinate is monospace with tabular numerals.
- Zero corner radius everywhere except one 8px status dot.
- One continuous plate; hairline-separated passages, never stacked cards.
- Motion is inscription: marks are cut or drawn on entry, never bounced or faded up from nothing.

## Colors

A drenched blue-black ground worked in a single metal, with one warm light held in
reserve.

### Primary
- **Engraved Gold** (`{colors.gold}`): the structural material. Every rule, box
  stroke, diagram edge, groove, tick, and figure outline is this hue, differing
  only in opacity. Also the ink for every quantity in the cover manifest, every
  track start-date, and the constraint headline.
- **Etch Strong / Etch / Etch Faint / Etch Ghost** (`{colors.etch-strong}`,
  `{colors.etch}`, `{colors.etch-faint}`, `{colors.etch-ghost}`): gold at 62%,
  34%, 17%, and 8%. This four-step ramp *is* the depth system — see Elevation &
  Depth. Strong = the nearest edge (rim, spine head, orbit border, link
  underline); etch = an active divider or bracket; faint = a passage boundary;
  ghost = a whisper (leader lines, sub-dividers inside a list).
- **Gold Bright** (`{colors.gold-bright}`): link hover only. Not a second accent —
  it is the same metal catching more light.

### Secondary
- **Screen Peach** (`{colors.peach}`): the single warm human light on the page and
  the most rationed colour in the system. See The Spent Peach Rule.

### Neutral
- **Drenched Void** (`{colors.void}`): the page ground, and the fill behind the
  disc and the orbit dock so both occlude what is behind them like physical objects.
- **Void Deep** (`{colors.void-deep}`): the recessed neutral — scrollbar track,
  skip-link ground, and the knockout text colour when a hail inverts on hover.
- **Luminescent White** (`{colors.white}`): the reading colour. Headings, unit
  names, diagram node labels, definition terms, and `strong` inside prose.
- **Cool Ash** (`{colors.dim}`): secondary prose, entry bullets, diagram sub-labels,
  and the resting colour of every `.etched` monospace label. This is the workhorse
  of the body copy and the colour the reader actually spends the most time on.

### Named Rules

**The Spent Peach Rule.** Peach appears in exactly seven places and nowhere else:
the contact hail (border and text), the orbit dock label, the first track marker
(the live position), the disc playhead and spindle, the lit egress edge in the
architecture diagram, the caret and focus ring, and the handheld screen in the
figure. Every one of those is either *contact* or *this is live*. If a new element
wants peach, it must be one of those two things; otherwise it is gold.

**The Four-Opacity Rule.** Structural CSS lines use gold at one of four recorded
opacities. A fifth value in a stylesheet is not a new token, it is a mistake.
(Drawn SVG artwork is the one place that modulates `stroke-opacity` freely against
raw `--gold` / `--peach` — grooves, pulsar ticks, and the figure's lit contours all
do — because that is shading a drawing, not building a layout.)

**The One-Metal Rule.** There is no second hue in the structure. Green, red, blue,
and every categorical palette are outside this world; state and emphasis are
carried by opacity and by peach, never by a new colour.

## Typography

**Display Font:** Bricolage Grotesque Variable (falling back to `ui-sans-serif`,
`system-ui`, never to a serif)
**Body Font:** Bricolage Grotesque Variable — the same face carries prose
**Label/Mono Font:** Martian Mono Variable (falling back to `ui-monospace`)

**Character:** One warm, slightly idiosyncratic grotesque doing all the human
speaking, against a wide-set engraved monospace doing all the measuring. The
pairing is the whole point of the world: prose persuades, mono testifies. Headings
run tight (`-0.03em`, line-height `1.04`) so a name or a section title reads as a
struck plate rather than a paragraph.

### Hierarchy
- **Display** (500, `clamp(1.9rem, 1.1rem + 2.6vw, 3.1rem)`, lh 1.04): the name on
  the cover. Once per page.
- **Headline** (500, `clamp(1.6rem, 1.1rem + 1.9vw, 2.6rem)`, lh 1.04): passage
  titles — the employer, the project, Provenance. Also the closing line
  (`clamp(1.5rem, 1.1rem + 1.7vw, 2.4rem)`, capped at 22ch).
- **Title** (500, `clamp(1.1rem, 1rem + 0.5vw, 1.4rem)`): a position title on the
  track. The constraint headline is a louder sibling
  (`clamp(1.25rem, 1rem + 1.1vw, 1.8rem)`, gold, capped at 26ch).
- **Subtitle** (500, `1.1rem`, `-0.02em`): decision and trap headings inside Side B.
- **Lead** (400, `clamp(1rem, 0.95rem + 0.3vw, 1.2rem)`, lh 1.5, ash, max 34ch):
  the one claim line under the name.
- **Body** (400, `clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)`, lh 1.62, max 68ch):
  all prose. `text-wrap: pretty` on paragraphs, `balance` on headings.
- **Label** (mono 500, `0.6875rem`, `0.13em`, uppercase, ash): the `.etched` class —
  every section coordinate, team line, date-end, tool group, and caption.
- **Figure** (mono 600, `clamp(0.95rem, 0.88rem + 0.3vw, 1.15rem)`, `-0.03em`, gold):
  the manifest quantities. Track start dates are the smaller sibling (`0.95rem`).
- **Action** (mono 600, `0.72rem`, `0.14em`, uppercase, peach): the hail and the
  orbit label. The large closing hail relaxes to `0.08em` and drops the uppercase
  so a full email address stays readable.

### Named Rules

**The Mono Figure Rule.** Every number, date, coordinate, unit, and machine name on
the page is Martian Mono with `tabular-nums`. Monospace here is measurement, not a
costume for "technical" — never set an English sentence in it (the one deliberate
exception is the architecture figcaption, which is a caption of a technical
drawing).

**The No-Serif-Fallback Rule.** The display stack falls to `ui-sans-serif` and
`system-ui` before anything else. A webfont failure must never swap the page's
voice to Times.

## Layout

**The plate.** One `max-width: 1440px` centred sheet with `padding-inline:
{spacing.gutter}`. Everything lives on it. A single 1px `{colors.etch-faint}`
hairline — the spine — runs the full height of the document at `left:
{spacing.spine}`, and every block of content is indented past it by
`calc({spacing.spine} + {spacing.column-offset})` so the spine reads as a margin
rule the content is pinned to.

**Passages.** Sections are separated by `border-top: 1px {colors.etch-faint}` and
`padding-block: {spacing.passage}`. There is no card, no panel, no inset surface,
and no section background anywhere in the build. A heading gets `2.25rem` beneath
it and considerably more above, so a passage opens rather than starts.

**The cover** is a `100svh` three-row grid (nav / body / manifest): the contact
hail top-right, a two-column body at `1fr / 0.92fr` with the human identity left
and the disc stage right, and the manifest pinned along the bottom above the fold.
The disc stage is `min(100%, 46vh)` capped at `480px`; the figure is absolutely
positioned at `21.5%` of the stage width, overlapping its lower-left edge, which
puts the person at roughly one-to-five against the record.

**Measure.** Prose is capped at `68ch` (`--measure`). Wide data lists (gaps, tools)
are capped at `68rem` so nothing runs beneath the orbit dock in the corner.

**Breakpoints.** Two, both max-width.

- **≤ 900px** — the cover body collapses to one column and the disc stage moves
  *above* the name (`order: -1`), right-aligned at `min(58vw, 290px)` with a
  `-7vw` bleed past the trim. The gaps list drops to a single column.
- **≤ 680px** — the content indent drops from the spine offset to a flat `1.5rem`;
  the disc stage narrows to `min(52vw, 244px)`; manifest rows reflow to two columns
  with the note wrapping full-width and left-aligned, and the leader rule is
  removed; track stops stack with the date pair going horizontal; the orbit becomes
  a full-width docked bar with a top border only, and the plate reserves `4.25rem`
  of bottom padding so it never permanently covers content.

**Overflow.** `html { overflow-x: clip }` and `body { overflow-x: hidden }`. The
disc is allowed to bleed past the trim; the document is not allowed to scroll
sideways because of it.

### Named Rules

**The One-Plate Rule.** Sections are passages on a single engraved sheet. They
share the spine, they are separated by a hairline, and they never close a box. Do
not introduce a card, a panel, a rounded container, or a section background.

**The Spine-Pinned Rule.** Content indents past the spine rather than centring on
it. New sections adopt `padding-left: calc(var(--spine) + 1.75rem)` above 680px and
`1.5rem` below it, so every passage shares one left edge down the whole document.

## Elevation & Depth

**There are no shadows in this system, and there is no blur.** The build contains
zero `box-shadow`, zero `filter: blur`, zero `backdrop-filter`, and zero gradient
*fills*. Depth is carried entirely by line weight and gold opacity: a nearer edge
is a brighter hairline, not a larger or softer one. Occlusion does the rest — the
disc and the orbit dock are filled with `{colors.void}` so they cover what is
behind them the way a physical object does.

**The two named exceptions.** Both are deliberate and neither is a fill. Do not
"fix" them, and do not read either as permission for a third.

1. **The track opacity ramp** — `.track::before` is a 1px rule whose
   `linear-gradient` steps `etch-strong → etch (55%) → etch-ghost` down its length,
   so the career line fades out at its far end. This is the four-opacity system
   expressed continuously along a hairline, not a gradient surface.
2. **The architecture edge fade** — below 940px the diagram's scroll container
   takes `mask-image: linear-gradient(to right, #000 74%, transparent 98%)` so the
   clipped right edge reads as "there is more" rather than as breakage.

### Named Rules

**The Drawn-Line Rule.** Every mark is a stroked line. No `box-shadow`, no
`filter: blur`, no `backdrop-filter`, no glow halo, no glass, no gradient fill, no
raster texture. If an element needs to feel closer, raise its gold opacity or its
stroke weight.

## Shapes

**Corners are square.** `border-radius` is `0` everywhere by default, and the
scrollbar thumb explicitly resets it to `0` rather than inheriting the browser's
pill. Two exceptions exist and both are drawings, not containers: the 8px track
marker is a full circle (`50%`), and the figure's handheld screen has `rx="3"`
because a phone has rounded corners.

**Borders are hairlines.** Every border in the build is exactly `1px` (the focus
ring is `1.5px`; the orbit's mobile top edge is `1px 0 0 0`). There is no 2px, no
4px, no double rule. Emphasis moves along the opacity ramp, not the weight ramp.

**Geometry vocabulary.** Concentric circles (the disc: rim, groove field, band
separators, label field, spindle), radial rays with binary period ticks (the pulsar
map), and orthogonal boxes with curved orthogonal connectors (the architecture
diagram). Dashed strokes (`3 5` for containment, `4 4` for edges) mean exactly one
thing: *outside the boundary*, or *asynchronous*. Dashing is an encoding, not a
decoration.

**Leader rules.** Where a label and its note sit on opposite ends of a row, they
are joined by a 1px `{colors.etch-ghost}` leader — the manifest's signature move,
and the correct pattern for any future key/value row at full width.

## Components

### The Hail (primary action)
The only affordance on the page, and where the world spends its one warm colour.
- **Shape:** hard rectangle (`0` radius), `1px` solid border.
- **Primary:** peach border and peach text on void, `0.7rem 1.15rem`, mono 600 at
  `0.72rem` / `0.14em` uppercase.
- **Hover / Focus:** inverts — peach fills the box, text drops to `{colors.void-deep}`.
  `0.4s` on the exponential ease. No lift, no shadow, no scale.
- **Quiet variant:** the same geometry with an `{colors.etch-strong}` border and
  gold text, inverting to a gold fill. Used for the project link, where the action
  is *look at this* rather than *contact me*.
- **Large variant:** `1rem 1.6rem`, `clamp(0.78rem, 0.7rem + 0.4vw, 0.95rem)`,
  letter-spacing relaxed to `0.08em` and case restored — it holds a full email
  address at the close.

### Links
Inherit their text colour and carry an `{colors.etch-strong}` underline at `1px`
with `0.22em` offset. On hover both the text and the underline go
`{colors.gold-bright}`. The repo link underlines at `{colors.etch}` instead, to sit
a step back. Focus-visible is a `1.5px` peach outline at `3px` offset, globally.

### Navigation / The Orbit Dock (signature)
The record, still turning, doubling as the way back to contact.
- Fixed bottom-right pill above 680px: a compact disc at `clamp(36px, 4vw, 44px)`
  plus a peach uppercase label, on a void ground with an `{colors.etch-strong}`
  border that goes peach on hover.
- Hidden at rest (`opacity: 0`, `translateY(0.5rem)`, `pointer-events: none`). It
  appears once the cover's own hail scrolls away and retires again once the reader
  reaches the real contact section — so there are never two live contact
  affordances on screen at once.
- Below 680px it becomes a full-width bottom bar with a top border only, sliding up
  from `translateY(100%)`.
- Its disc's playhead angle is driven by scroll position through a
  `--playhead` custom property, stepping through five recorded angles (58°, 130°,
  186°, 248°, 310°) with a `1.6s` eased transition. One clock for the whole page.

### The Manifest Row (signature)
The page's evidence, and the only element that uses the wipe reveal.
- Four-column baseline grid: gold figure / white unit / ghost leader rule / ash
  mono note, right-aligned.
- Rows are staggered `110ms` apart.
- Below 680px the leader is removed and the note drops to its own full-width line,
  left-aligned.

### Track Stops (signature)
One continuous run with four marked positions, not four separate cards.
- A vertical hairline runs the length of the list with the opacity ramp described
  in Elevation & Depth.
- Each stop hangs an 8px circular marker on that line: `1px` gold border on a void
  fill for a past position, filled peach for the current one. Exactly one marker is
  ever peach.
- Two-column body (`9.5rem` date column / content) collapsing to stacked below
  680px, with entries bulleted by a `0.7rem` `{colors.etch}` dash rather than a
  glyph.

### The Disc (signature)
A 600-unit SVG, all stroke, filled only in the void and the spindle: a rim triple,
a computed groove field (radii 114→272 at 7.4 spacing, opacity modulated by a sine
band), three heavier band separators, a label-field pair, a 14-ray pulsar map with
binary period ticks, and one peach playhead. The playing surface revolves once per
`240s`.
- **The `compact` prop.** At badge size (~44px) a 600-unit viewBox turns the groove
  field into mud and makes the playhead — the only part carrying information —
  invisible. `compact` drops the grooves and the entire pulsar map, and scales the
  rim, bands, playhead, and spindle up several-fold so the indicator survives.
  Any future placement below ~64px must pass `compact`.

### The Figure (signature)
A Voyager-plaque outline of one person absorbed in a handheld screen, drawn at
`stroke-width: 2` with round caps and joins.
- **The lighting model is colour, not light.** The screen is the only filled shape
  and the only source. Every contour it reaches is peach (jaw, front of neck,
  chest, hands); every contour it does not reach stays gold, stepped down in
  `stroke-opacity` as it recedes (0.8 forearms, 0.42 the cropped hem). There is no
  glow, no blur, no gradient — light changes the *colour of a line*. Any future
  illuminated drawing follows this model.

### The Architecture Diagram (signature)
A 1096×400 SVG in a horizontally scrolling container (`min-width: 800px`).
- Nodes are `1px` bordered rectangles: solid `{colors.etch}` inside the host,
  dashed `3 5` for anything outside it, `{colors.etch-strong}` for the one lit
  subject node. Labels are mono 600 at 14px in white, sub-labels mono 11px
  uppercase in ash.
- Edges are `1.1px` gold at 0.5 opacity; the one peach edge at 0.85 marks the live
  egress path.
- **Reveal assignment is load-bearing, not stylistic.** Solid geometry uses `.draw`;
  every dashed element uses `.inscribe`. See The Dashed-Never-Draws Rule.

### Skip Link
Off-canvas at `left: -9999px`, jumping to `1rem/1rem` on focus. Void-deep ground,
gold border, peach mono text — the same material vocabulary as the hail, so the
first thing a keyboard reader sees is already the world.

### Browser Surfaces
Defaults belonging to no design system are re-skinned: selection is gold on
void-deep, the caret is peach, the scrollbar is an 11px `{colors.etch}` thumb with
a 3px void-deep inset border on a void-deep track (going `{colors.etch-strong}` on
hover), and `accent-color` is gold.

## Motion

Motion is inscription. Three classes, one reveal script, one observer.

- **`.inscribe`** — the default. Fades from `0` opacity and `translateY(0.6rem)`
  over `1.1s` on `cubic-bezier(0.16, 1, 0.3, 1)`. The record spins down, it does
  not bounce.
- **`.draw`** — for solid SVG geometry only. Sets `stroke-dasharray` /
  `stroke-dashoffset` from a measured `getTotalLength()` and cuts the line along
  its path over `1.9s`.
- **`.wipe`** — reserved for the manifest. `clip-path: inset(0 100% 0 0)` opening
  left-to-right over `1.5s`, so the page's own evidence arrives differently from
  everything else.

Ordering is by `data-delay` in milliseconds, staggered `30–110ms` per item within a
group. The `IntersectionObserver` fires once per element at `threshold: 0.06` with
`rootMargin: 0 0 -12% 0`, then unobserves.

**Neutralisation is mandatory and already wired.** `.no-js` (the class is on `<html>`
and removed by an inline head script) resets all three classes to visible, and
`prefers-reduced-motion: reduce` resets all three plus stops the disc revolution
and disables smooth scrolling. Any new animated class must be added to both escape
hatches in the same commit.

### Named Rules

**The Dashed-Never-Draws Rule.** A dashed SVG element uses `.inscribe`, never
`.draw`. `.draw` sets `stroke-dasharray` in CSS, which beats the presentation
attribute and silently erases the diagram's encoding — dashed means *outside the
2 GB host* and *asynchronous telemetry path*, and losing it turns a true drawing
into a false one. This shipped as a regression once and was caught in review.

**The Legible-First Rule.** Content is legible before any reveal runs. Motion only
adjusts an already-readable element; nothing on the page depends on JavaScript to
become visible.

## Do's and Don'ts

### Do:
- **Do** carry depth with gold opacity and line weight — `{colors.etch-strong}` for
  the nearest edge down to `{colors.etch-ghost}` for a whisper.
- **Do** set every number, date, unit, and machine name in Martian Mono with
  `tabular-nums`.
- **Do** pin new sections to the spine with the recorded left indent, separated from
  the previous passage by a `1px {colors.etch-faint}` top border.
- **Do** use `.inscribe` for dashed SVG and `.draw` only for solid geometry.
- **Do** pass `compact` to `Disc` at any size under roughly 64px.
- **Do** keep prose to the `68ch` measure and wide data lists to `68rem`.
- **Do** invert a hail on hover (fill with its own border colour, knock text to
  `{colors.void-deep}`) rather than lifting, scaling, or shadowing it.
- **Do** register any new animated class in both the `.no-js` block and the
  `prefers-reduced-motion` block.
- **Do** keep all content in `src/data/record.ts`. Every fact on this site traces
  to the resume, GitHub, or the Mighty engineering docs — **nothing here is
  invented**, and no realistic-looking placeholder may be added that reads as fact.
- **Do** describe infrastructure by shape and reasoning only. **The repository is
  public**: no account identifiers, bucket names, parameter paths, hostnames, or
  credentials, ever — not in copy, not in a diagram label, not in a comment.

### Don't:
- **Don't** add a `box-shadow`, `filter: blur`, `backdrop-filter`, glow, glass
  surface, or gradient fill. The two `linear-gradient` uses in the build (the track
  rule's opacity ramp and the architecture scroller's `mask-image` edge fade) are
  named exceptions, not precedent.
- **Don't** introduce a card, panel, inset surface, or section background. The page
  is one plate.
- **Don't** round a corner. `0` everywhere; the 8px status dot and the drawn phone
  screen are the only curves.
- **Don't** spend peach on anything that is not contact or live state. Decoration,
  emphasis, hover-for-its-own-sake, and "just this once" all get gold.
- **Don't** add a fifth gold opacity to a stylesheet, or a second structural hue of
  any kind.
- **Don't** use a border heavier than `1px` for structure, or a glyph/icon-font
  bullet — list markers are drawn `0.7rem` hairline dashes.
- **Don't** let two contact affordances be live at the same time; the orbit dock
  retires when the real contact section is on screen.
- **Don't** stack a fixed floating element over the prose column on narrow screens
  — dock it and reserve its height on the plate.
- **Don't** set an English sentence in Martian Mono, or let the display stack fall
  through to a serif.

### Known follow-up (logged, not a defect)

Below 680px the architecture diagram scrolls horizontally and shows three of its
seven nodes. The masked edge and the `figcaption` carry the meaning in the
meantime; a vertical reflow of the diagram is the eventual answer, and it should
preserve the dashed-boundary encoding when it lands.

### Where the build diverges from the direction contract

Recorded for honesty, since the contract is quoted verbatim at the top of `<body>`:

- The contract says "no gradient." The build ships two, both non-fill and both
  documented above as named exceptions.
- The contract names four colours. The build ships seven, plus the four-step etch
  ramp: `{colors.void-deep}`, `{colors.gold-bright}`, and `{colors.dim}` are real
  tokens doing real work and are canonized here. Cool Ash in particular carries
  most of the body copy and is not a contract afterthought.
- The contract's "four opacities" governs CSS. Drawn SVG artwork modulates
  `stroke-opacity` freely; that is shading, and it is intended.
