# 07 — Responsive Observations

## Tested viewports

| Name | Viewport | User agent | Layout served |
|---|---|---|---|
| desktop-1440 | 1440×900 | Chrome 130 Windows | Wix desktop layout |
| tablet-768 | 768×1024 | Chrome 130 Windows (desktop UA) | Wix **desktop** layout (fixed min width 980px) |
| mobile-390 | 390×844, DPR 1, touch | iPhone Safari 17 | Wix **mobile** layout (`<meta viewport width=320>`, scaled up to fit 390) |

All 13 routes were captured at all three sizes (39 renders, full-page + above-the-fold). Mobile menus were opened and captured on every route. Screenshot index: [screenshots/INDEX.md](screenshots/INDEX.md).

Not tested: a real iPad user agent (Wix may serve the mobile or desktop layout to tablets depending on UA), landscape orientations, widths between breakpoints, or real devices. Wix layouts are fixed per mode (no fluid breakpoints), so intermediate widths behave like the nearest mode.

## Key findings

### 1. Two separate layouts, not one responsive site
- Wix shows a **hand-built mobile layout** that differs in content from desktop (see 03 and 08): different hero banner, different schedule image, different OMG Oracle content with prices, different review count, WhatsApp vs tel: CTAs, and omitted sections.
- Phase 2 needs a single responsive codebase with **one set of content**.

### 2. Tablet (768px) overflows horizontally
- Every page has `scrollWidth` = **980px** at a 768px viewport (212px horizontal overflow). Content is clipped on the right (wordmark, hero video, text lines are cut off; see `root--tablet-768--fold.jpg`).
- No hamburger at tablet width; the full desktop nav is shown.

### 3. Mobile renders on a 320px layout viewport
- `meta viewport` = `width=320, user-scalable=yes`, so the whole page is scaled ~1.22× on a 390px phone. Text and images are effectively designed for a 320px screen. No horizontal overflow on mobile.

## Component behaviour by viewport

| Component | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Header | Centred wordmark 40px, Instagram right, nav row below. Not sticky. ~190px tall. | Same, clipped on the right | 2-line wordmark 20px centred, Instagram left, hamburger right. Not sticky. |
| Navigation | 5 inline links, 14px Raleway | Same (overflowing) | Full-screen overlay menu, centred 20px links, active olive |
| Content width | ~940–1184px centred (experience images 1184px; text blocks ~600px, left-aligned inside a centred column) | Desktop widths, clipped | ~280–300px with ~20px gutters (at 320 scale) |
| Hero video | ~918px wide, letterboxed (black bars) | Clipped | Full-width ~280px, letterboxed |
| Experience cards (3) | 3 columns on yellow tints | Clipped | **Not shown** |
| Experience blocks | Image (1184×553) then left-aligned text column + centred CTA | Clipped | Stacked, images 320×139 full-bleed, Cormorant italic body |
| Testimonials | Single narrow left column (~170px wide text) with large empty space on the right | Clipped | One quote in a grey band |
| Schedule | Desktop image 980×640 (text ~8px tall at this size, hard to read) | Clipped | Mobile image only **297×216px**: unreadable without zooming |
| Map | Full-width 350px under teal heading | Clipped | Full width under teal heading |
| `/home` two-column sections | Text left / image right; map left / form right | Clipped | Stacked |
| `/projects-6` | Sticky-looking left intro + right column of items (left column is static, not sticky) | Clipped | Stacked, richer content |
| `/book-online` | 1 card at left of a grid, ~1,700px empty space below | Clipped | 1 full-width card |
| FAQ | Single column ~660px, always expanded | Clipped | Single column |
| Service pages | Centred ~560px column, pill row, sessions table | Clipped | Stacked, taller (≈3,600px) |
| Footer | Centred 3 lines, ~238px | Same | Centred, address wraps to 4 lines |
| Sticky/fixed elements | None | None | None (no sticky header, no floating WhatsApp button) |

## Typography changes (computed)
- Wordmark: 40px (D) → 20px (M, at 320 scale ≈ 24px physical).
- Experience titles: 37px Cormorant 400 (D) → 22px Cormorant 700 (M).
- Body: Raleway 14–20px (D) → mostly **Cormorant Garamond Light italic** ~15–16px (M), which is thin and hard to read on small screens.
- Buttons: Raleway 15px, 1.5px tracking, on both layouts; mobile buttons are full-width-ish (≈280px).

## Issues to avoid in Phase 2
- Fixed-width layouts and horizontal overflow at tablet sizes.
- Text baked into images (schedule) that becomes unreadable on mobile.
- Different content per device.
- Thin serif body text on mobile.
- Large empty columns on desktop (testimonials, `/book-online`).
- No persistent booking/contact access on mobile; a sticky header or bottom CTA could help (design decision for Phase 2).
