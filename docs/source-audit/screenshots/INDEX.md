# Screenshot Index

Captured 2026-10-26 with headless Chrome 130 (Playwright-core 1.48). JPEG.

Naming: `<route-slug>--<viewport>[--suffix].jpg`

- `root` = `/`; `home` = `/home`; `projects-6` = `/projects-6` (OMG oracle); `service-page__<slug>` = `/service-page/<slug>`; `this-page-does-not-exist-audit` = 404 test.
- Viewports: `desktop-1440` = 1440×900 desktop UA · `tablet-768` = 768×1024 desktop UA (Wix desktop layout, overflows to 980px) · `mobile-390` = 390×844 iPhone UA (Wix mobile layout, 320px layout viewport).
- No suffix = full-page capture (after scrolling to trigger lazy content).
- `--fold` = first viewport only.
- `--menu-open` = mobile hamburger menu opened.
- `--bottom-1/2/3` = viewport captures from the true bottom of `/` desktop (closing image + footer / map band / CTA). **Use these instead of the bottom of `root--desktop-1440.jpg`, which has a full-page capture artefact (header and hero repeated near the end).**
- `probe--*` = interaction tests: CTA hover state on `/`, `/home` slideshow slides 1–3, service page after clicking a session, Mermaid service after "Request to book" (→ booking calendar).

Routes × viewports captured: 13 routes × 3 viewports = 39 renders (all successful; the 404 route correctly returned HTTP 404).

| Route | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| `/` | root--desktop-1440(.jpg, --fold, --bottom-1..3) | root--tablet-768 | root--mobile-390 (+ --menu-open) |
| `/home` | home--desktop-1440 | home--tablet-768 | home--mobile-390 |
| `/projects-6` | projects-6--desktop-1440 | projects-6--tablet-768 | projects-6--mobile-390 |
| `/book-online` | book-online--desktop-1440 | book-online--tablet-768 | book-online--mobile-390 |
| `/faq` | faq--desktop-1440 | faq--tablet-768 | faq--mobile-390 |
| 5 × service pages | service-page__*--desktop-1440 | …--tablet-768 | …--mobile-390 |
| `/booking-calendar` | booking-calendar--desktop-1440 | …--tablet-768 | …--mobile-390 |
| `/cart-page` | cart-page--desktop-1440 | …--tablet-768 | …--mobile-390 |
| 404 | this-page-does-not-exist-audit--desktop-1440 | …--tablet-768 | …--mobile-390 |
