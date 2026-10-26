# Source Audit: islandyogalembongan.com (Phase 1)

Research and documentation for rebuilding the frontend of https://www.islandyogalembongan.com/ (currently on Wix). Audited 2026-10-26. **Phase 1 only: no implementation has been done.**

## Start here
1. [01-audit-report.md](01-audit-report.md): method, coverage, headline findings, limitations
2. [08-issues-gaps-questions.md](08-issues-gaps-questions.md): **client questions to resolve before building**
3. [09-phase-2-recommendations.md](09-phase-2-recommendations.md): IA proposal and **mandatory Phase 2 design rules** (two-font rule, footer, images, `images: { unoptimized: true }`)

## Reference
| File | Use it for |
|---|---|
| [02-page-inventory.md](02-page-inventory.md) | Every route, its sections in order, shared components |
| [03-content-inventory.md](03-content-inventory.md) | Verbatim copy, prices, schedules, FAQ, testimonials, SEO metadata |
| [04-assets-manifest.csv](04-assets-manifest.csv) | Which image/video belongs where; sizes and quality flags |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, type sizes, colour HEX values, logo situation |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Links, booking, forms, maps, third parties |
| [07-responsive-observations.md](07-responsive-observations.md) | Desktop / tablet / mobile behaviour |

## Evidence
| Folder | Contents |
|---|---|
| `screenshots/` | Full-page and above-the-fold captures for 13 routes × 3 viewports, menus, interaction probes ([INDEX](screenshots/INDEX.md)) |
| `data/page-text/` | Verbatim rendered text per route (desktop + mobile) |
| `data/pages-extracted.json` | Headings, links, images, meta, JSON-LD, forms per route and viewport |
| `data/interaction-probes.json` | Hover colours, video attributes, slideshow, booking-flow URLs |
| `original-assets/images/` | 27 original images from the Wix CDN (unmodified, filenames = Wix media IDs) |
| `original-assets/video/` | Hero video (720p MP4, unmodified) |

## At a glance
- **Routes:** `/`, `/home` ("Schedule"), `/projects-6` ("OMG oracle"), `/book-online` ("Retreats"), `/faq`, 5 × `/service-page/*`, plus the Wix system routes `/booking-calendar`, `/cart-page`.
- **Brand:** "Island Yoga & Sound Lembongan" (text wordmark); legacy name "The Yoga Shala Lembongan".
- **Fonts (original):** Cormorant Garamond + Raleway (plus accidental widget fonts). **Redesign: exactly two families, chosen in Phase 2.**
- **Colours:** #867711 olive · #E4CC2B hover · #EEDE75 butter · #181818 text · #FFFFFF.
- **Booking:** Viator (Hammock / Gong / Sound Journey), WhatsApp / phone (others), Wix Bookings (day retreats).
