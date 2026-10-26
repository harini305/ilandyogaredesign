# 09 — Phase 2 Implementation Considerations & Mandatory Requirements

> These are recommendations and constraints for the implementation phase. **Nothing here has been implemented.** Phase 2 begins only after explicit approval.

## 1. Target stack (as specified)

- Next.js (App Router), JavaScript (not TypeScript), React
- GSAP + ScrollTrigger for motion
- Fully responsive (one codebase, one content source)

## 2. Recommended information architecture (proposal for client review)

| Proposed route | Source content | Replaces / redirects from |
|---|---|---|
| `/` Home | `/` experiences, hero video, What to expect, testimonials, schedule (HTML), visit/map teaser | `/` |
| `/experiences` *(optional; or keep on home)* | 7 experiences with duration, capacity, price, booking action | — |
| `/schedule` *(or a section on home)* | Weekly timetable + prices as structured data | `/home` label "Schedule" |
| `/retreats` | 4 day packages (+ Oracle workshop if the client wants it here) | `/book-online`, `/service-page/*-retreat` |
| `/retreats/[slug]` *(optional)* | Service detail content | `/service-page/[slug]` |
| `/oracle` | OMG Oracle deck + Group / Private / Blessing Ritual (mobile content as base) | `/projects-6`, `/service-page/oracle-cards-coconuts-workshop` |
| `/faq` | 12 Q&As, pruned with the client | `/faq` |
| `/contact` (Visit) | Hours, address, map, phone, WhatsApp, email, Instagram, (form) | `/home` |
| `not-found` | Custom 404 | Wix 404 |
| *(no)* | `/cart-page`, `/booking-calendar/*`: legacy system routes | 301 to `/retreats` or `/` |

Keep the route count small. Don't create blog/gallery/about pages unless the client supplies content. **No blog content exists on the original site.** If a blog is requested later: a simple listing, no invented posts, and no more than 10 images in its initial presentation unless the client explicitly asks for more.

## 3. Data to model as local structured files (no CMS needed initially)

- `experiences` (7): name, kicker, description, duration, capacity, tag, price (from schedule), booking type (viator URL / whatsapp / drop-in), image.
- `schedule`: day × time grid (source of truth = the version the client confirms, A2), plus price list and passes.
- `retreats` (5): name, tagline, duration, price, description, booking mode.
- `oracle`: deck info + 3 offerings.
- `faq` (12, pruned).
- `site`: brand name, phone, WhatsApp, email, Instagram, address, coordinates, hours.
- `testimonials` (3, verbatim).

## 4. Asset plan

- Use only the originals in `docs/source-audit/original-assets/` (27 images + 1 video). **No stock, no AI-generated imagery.**
- Copy the selected images into `public/images/…` during Phase 2 (leave the audit copies untouched) and process them offline: resize to sensible max widths (e.g. 2400/1600/1200/800), apply **EXIF transpose** (`60b46eca`, `e163bbb5`), convert to WebP/AVIF with JPEG fallback where practical, strip metadata.
- Video: re-encode the 7.5 MB 720p MP4 (target ≤ 2–3 MB, H.264 + optional WebM), crop out the black letterbox if present in the file, extract a poster frame, `preload="metadata"`, pause under `prefers-reduced-motion`.
- Avoid low-res images at large sizes: `ea6cb7ee` (634×261) and `d4b59bc6` (895×557) should be used small or replaced with client-supplied higher-res files.
- Don't reuse the schedule graphics as content images; rebuild them in HTML.
- Replace Wix stock Instagram PNGs with inline SVG icons.
- Favicon / OG image: none exist. Generate from the confirmed brand mark (text wordmark or client logo), not invented artwork.

## 5. Mandatory design requirements (carry into Phase 2 verbatim)

### Typography
- **Exactly two font families across the entire website.**
- One family for headings; one family for body text, navigation, buttons, forms, cards, footer and all UI.
- Both must be readable, professional and not overly fancy.
- Consistent heading and body sizes across equivalent components.
- A controlled, responsive type scale (e.g. `clamp()`-based) with hierarchy from weight, size, line-height and letter-spacing, not extra families.
- No third font for decorative headings, special sections, the footer or individual components. Wix widget fonts (Proxima Nova, Madefor), Arial, Playfair and script lettering are excluded.
- Final selection happens in Phase 2. Original pairing for reference: Cormorant Garamond + Raleway (see 05 §2.3).

### Visual design
- Professional, human-designed appearance.
- Intentional image and text alignment.
- Consistent content widths, margins and spacing (define container and spacing tokens).
- No unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements.
- Avoid repetitive AI-looking layouts and generic template patterns.
- Use visual effects (GSAP/ScrollTrigger) only when they serve a clear purpose; respect `prefers-reduced-motion`.
- Preserve the recognisable brand: olive #867711, butter yellow #EEDE75, near-black #181818, white; serif-display + sans-body character; blue-hammock and shala photography.

### Content
- Keep pages concise and focused on important information.
- Avoid repeated paragraphs, unnecessary sections and excessive page length (the original repeats taglines, CTAs and experience info).
- Preserve meaningful facts and essential information (see 03 §10).
- **Do not invent** claims, testimonials, FAQs, prices, schedules or blog posts. Unresolved facts (08 §A) stay as client questions or use the site's primary values with a flag.

### Footer
- Compact and content-driven; only necessary, verified information (brand, address, phone/WhatsApp, email, Instagram, copyright).
- No excessive padding, unnecessary columns, duplicated content or oversized layout.
- The final content section must be fully visible above the footer, with a natural transition into it.
- Prevent overlap, clipping, excessive blank space and fixed-footer interference.

### Images & performance
- Prefer the original assets already available.
- Resize and compress locally; avoid unnecessary large downloads and duplicate copies.
- **Configure Next.js so it doesn't use the default Vercel Image Optimization quota**: merge `images: { unoptimized: true }` into the existing `next.config` (don't replace unrelated settings).
- Still ship sensible dimensions, compression, modern formats where practical, `loading="lazy"` below the fold, explicit width/height (no CLS), and responsive `sizes`/`srcset` (pre-generated variants).

## 6. Functional requirements to carry over

1. Viator booking links for Hammock (P3), Gong (P2) and Sound Journey (P1), **with the D1 mapping bug fixed**.
2. WhatsApp contact (`wa.me/6281246186550`) as the primary "message" action; `tel:` only where labelled "Call".
3. Email `mailto:` and Instagram link (correct account only).
4. Map: embed or static map with a "Directions" link to the coordinates.
5. Schedule and prices as accessible HTML (table on desktop, day-by-day list on mobile).
6. FAQ as an accessible accordion (`button` + `aria-expanded`), optional FAQPage JSON-LD.
7. Contact form **only if** a backend is chosen; otherwise WhatsApp/email. Don't present a non-working form as working.
8. Day-retreat booking: an enquiry/WhatsApp or external scheduler until the client decides (06 §3). Don't fake availability calendars.
9. SEO: one H1 per page, meaningful titles/descriptions, consistent brand name, LocalBusiness JSON-LD (fixed name, address, geo, phone, image), og:image, canonical URLs, sitemap, 301 redirects from old Wix slugs.
10. Accessibility: real alt text (not filenames), keyboard navigation, focus states, sufficient contrast. Computed WCAG ratios: white on olive #867711 = **4.51:1** (just passes AA; don't lighten it); white on mustard hover #E4CC2B = **1.62:1** (fails, so use #181818 text on mustard = 10.97:1); white on 72% olive #A89D54 = **2.76:1** (fails; the original secondary button is inaccessible); #8C8C8C on white = **3.36:1** (fails for body text); #525252 on white = 7.81:1; #181818 on #EEDE75 = 12.97:1.
11. Responsive: no horizontal overflow at any width from 320 to 1920; tablet gets a proper layout.

## 7. Decisions needed from the client before or early in Phase 2
See [08 §A](08-issues-gaps-questions.md#a-factual-conflicts-client-must-confirm-blocking-for-accurate-content). Top five: (1) brand name and logo; (2) current schedule; (3) phone number; (4) price formats/units; (5) booking method for retreats and the contact form backend.

## 8. Explicitly out of scope for Phase 1 (confirmed not done)
No code, components, layouts, config changes, package installs in the project, GitHub pushes or Vercel deployments.
