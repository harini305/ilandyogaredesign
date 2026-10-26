# 01 — Audit Report: islandyogalembongan.com (Phase 1)

**Audit date:** 2026-10-26 · **Site:** https://www.islandyogalembongan.com/ · **Platform:** Wix (Thunderbolt), separate desktop and mobile layouts · **Workspace at start:** empty (no project files, no prior evidence)

## 1. Method

1. Read `robots.txt` → `sitemap.xml` → child sitemaps (pages + booking services).
2. Probed 41 common slugs over HTTP to look for unlinked pages.
3. Rendered every discovered route in headless Chrome (Playwright-core, in a scratch directory outside the project) at **1440×900**, **768×1024** and **390×844 (iPhone UA)**. For each render: scrolled to trigger lazy loading, took full-page and above-the-fold screenshots, extracted rendered text, headings, links, images (natural vs rendered size), video, iframes, forms, computed typography and colours, fixed elements, loaded fonts, JSON-LD, meta tags and the full network log. Opened the mobile menu on every route.
4. Ran interaction probes: nav hover, CTA hover, video attributes, `/home` slideshow, service-page session click, "Request to book" → booking calendar, "More Info" on the listing.
5. Downloaded original-resolution media (27 images + hero video) from the Wix CDN; recorded dimensions, file sizes and EXIF orientation. Transcribed both schedule graphics.
6. Checked external destinations (Viator, Instagram).

## 2. Coverage

| Category | Result |
|---|---|
| Pages inspected fully (D/T/M) | `/`, `/home`, `/projects-6`, `/book-online`, `/faq`, 5 × `/service-page/*`, `/cart-page`, 404 page |
| Inspected partially | `/booking-calendar/<slug>`: displayed and navigated to, no booking request submitted |
| Discovered but inaccessible | Viator listing pages P1/P2/P3 (HTTP 403 to automated access); Instagram profile content (login wall) |
| Broken / unavailable routes | None among internal links. 41 probed slugs (about, contact, blog, schedule, gallery, etc.) return 404 because they don't exist |
| Interactive states not verified | Contact form submission; Wix Bookings submission; session-row click outcome; Google Map tile rendering; Wix entrance animations; QR code destination; real-iPad layout |
| Technical limitations | Headless rendering (map tiles blank); full-page capture artefact at the bottom of `/` desktop (mitigated with viewport captures); 1080p video rendition blocked (403) |

Total internal routes: **10 content routes in sitemaps + 2 Wix system routes + 404**. No blog, store, gallery, about or legal pages exist.

## 3. Website overview

A small Wix site for a sound-healing and yoga venue ("shala") in Jungutbatu, Nusa Lembongan, Bali. The **homepage carries most of the content**: seven 60-minute experiences (Hammock Sound Journey, Gong Sound Healing, Sound Journey, Oracle, Island Yoga, Flow Dance Meditation, Silent Disco), a weekly schedule with prices (as an image), "What to expect", three testimonials and a map. Three sound experiences are booked through **Viator**; the rest go through **phone (desktop) or WhatsApp (mobile)**. Day retreats are configured in **Wix Bookings** but are mostly hidden (only 1 of 5 is listed). A separate page promotes the owner's **OMG ("Oh My Goddess") Oracle card deck** and oracle sessions. An FAQ explains offerings and payments (cash, bank transfer, Wise).

## 4. Headline findings

### Verified facts
- Visible brand: **"Island Yoga & Sound Lembongan"** (text wordmark, no logo image). Legacy brand **"The Yoga Shala Lembongan"** persists in titles, copyright, email and a hidden legacy logo.
- Contact: +62 812-4618-6550 (tel/WhatsApp), welcomeyogashala@gmail.com, instagram.com/islandyogalembongan, map at -8.6654423, 115.4504047.
- Brand palette: olive **#867711** (CTA), hover **#E4CC2B**, butter yellow **#EEDE75**, text **#181818**, white background. Fonts: **Cormorant Garamond** (headings) + **Raleway** (body); plus accidental Arial, Proxima Nova, Wix Madefor and Playfair from widgets and mistakes.
- Prices (schedule image): Hammock 400k, Sound Journey 300k, Gong 250k, Yoga 200k, Flow Dance 200k, 3-class pass 450k, Oracle Group 450k pp, Oracle Private 750k, Sunrise Sanctuary Hammock 6am 650k pp; OMG Blessing Ritual 1.1 million (mobile).
- Desktop and mobile layouts contain **different content** (OMG Oracle page, schedule version, review count, CTAs, sections).
- Tablet (768px) overflows horizontally (980px fixed width).

### Bugs and inconsistencies (detail in 08)
- "Book Your Sound Journey" links to the Hammock Viator listing.
- "Send us a message" buttons are `tel:` links.
- `/home` Instagram icon links to instagram.com/wix.
- Phone digits differ in the mobile schedule image (…5550 vs …6550).
- Two conflicting weekly schedules.
- Wix Bookings prices shown as "Rp 250 … Rp 950" (likely thousands).
- Nancy testimonial dated 2/5/26 (D) vs 1/5/26 (M).
- Outdated: 2024 teacher training, Cacao Ceremonies, ©2022.
- Low-resolution images upscaled; most alt text is filenames; heading hierarchy misused.

### Estimates (clearly labelled in 05)
- Tinted card colours on white (#F6EEB9, #F9F4D0) are computed from rgba values; hammock blue in photography ≈ #1E4FD8–#2A6BFF.

### Unknowns
- Whether the Viator listings are active and correctly priced; the contact form and booking backends; which schedule, phone number and brand name are current; whether the 4 hidden retreats are still offered; the QR code destination.

## 5. Assets
28 media files (27 images, 1 video) inventoried in [04-assets-manifest.csv](04-assets-manifest.csv) and downloaded unmodified to `original-assets/` (~42 MB). No logo for the current brand; no favicon; no fonts locally; no PDFs or downloads on the site. Performance flags: originals up to 4.9 MB, a 7.5 MB video, 2 images needing EXIF rotation, 2 low-res images used large, 1 near-duplicate pair, a 2.6 MB PNG illustration.

## 6. Document map
| File | Contents |
|---|---|
| [02-page-inventory.md](02-page-inventory.md) | Routes, status, sections in order, shared components, per-page risks |
| [03-content-inventory.md](03-content-inventory.md) | Verbatim content: business info, experiences, schedules, prices, retreats, Oracle, FAQ, testimonials, SEO |
| [04-assets-manifest.csv](04-assets-manifest.csv) | Asset → page/section mapping with dimensions, sizes, notes |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, type specimens, colours, logo, visual identity |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Features with verification level, third parties, backend dependencies |
| [07-responsive-observations.md](07-responsive-observations.md) | Desktop/tablet/mobile behaviour |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Conflicts, outdated content, typos, bugs, limitations, client questions |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | IA proposal, data model, asset plan, **mandatory design rules** |
| `data/` | Extracted page data (JSON), verbatim page text per route and viewport, interaction probe results |
| `screenshots/` | 100+ screenshots, see `screenshots/INDEX.md` |
| `original-assets/` | Original images and video (unmodified) |

## 7. Phase 1 confirmation
- No redesign, components, layouts or app code were created.
- No project configuration was created or changed; no packages were installed in the project (tooling lived in a temporary scratch directory outside the workspace).
- No files outside `docs/source-audit/` were created or modified; nothing was deleted except one 9-byte failed-download file the audit itself had just created.
- No GitHub push, no Vercel deployment.
- No forms, bookings or messages were submitted to the business.
