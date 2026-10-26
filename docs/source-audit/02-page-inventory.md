# 02 — Page & Route Inventory

Captured 2026-10-26. Every route was rendered at 1440×900 (desktop), 768×1024 (tablet, desktop UA) and 390×844 (mobile, iPhone UA). Screenshots: [`screenshots/`](screenshots/) (see [screenshots/INDEX.md](screenshots/INDEX.md)). Verbatim text: [`data/page-text/`](data/page-text/). Content details: [03-content-inventory.md](03-content-inventory.md).

## 1. Route discovery summary

Sources used: `robots.txt` → `sitemap.xml` (Wix sitemap index) → `pages-sitemap.xml` (5 URLs) + `booking-services-sitemap.xml` (5 URLs); main nav; all on-page links (desktop + mobile); and HTTP probes of 41 common slugs (about, contact, blog, schedule, classes, events, gallery, retreats, pricing, shop, team, privacy-policy, terms, accommodation, workshops, etc.). **All probed slugs returned 404** except the Wix system routes `/cart-page` and `/booking-calendar`.

There is no blog, store, member area, gallery page, about page, contact page or legal page.

## 2. Route table

| # | Route | Nav label | Type | HTTP | Status | Coverage | Recommendation |
|---|---|---|---|---|---|---|---|
| 1 | `/` | "Book Now" (and logo) | Homepage / main landing (experiences, schedule, testimonials, map) | 200 | Live, primary page | **Full** (D/T/M) | Implement as homepage |
| 2 | `/home` | "Schedule" | Secondary: intro, opening hours, slideshow, contact form, map | 200 | Live; label is misleading (there is no schedule on the page) | **Full** | Consolidate: content becomes the **Contact / Visit** page; keep the route as a redirect |
| 3 | `/projects-6` | "OMG oracle" | Secondary: OMG Oracle cards and sessions | 200 | Live; D and M content differ | **Full** | Implement as an **Oracle** page (new slug, e.g. `/oracle`, with a redirect from `/projects-6`) |
| 4 | `/book-online` | "Retreats" | Listing (Wix Bookings service list) | 200 | Live; shows **1 of 5** services | **Full** | Implement as **Retreats / Day Packages** listing showing all 5 (pending client confirmation) |
| 5 | `/faq` | "Questions?" | Utility / FAQ | 200 | Live | **Full** | Implement (accordion), prune outdated items with client |
| 6 | `/service-page/oracle-cards-coconuts-workshop` | — | Detail (Wix Bookings service) | 200 | Live, scheduled sessions | **Full** (display); booking not submitted | Implement as detail page or merge into Oracle page |
| 7 | `/service-page/holiday-yoga-sound-day-retreat` | — | Detail | 200 | Live, scheduled sessions; not linked from any page (sitemap only) | **Full** (display) | Implement under Retreats |
| 8 | `/service-page/mini-relaxation-day-retreat` | — | Detail | 200 | Live, scheduled; unlinked | **Full** (display) | Implement under Retreats |
| 9 | `/service-page/mermaid-yoga-half-day-retreat` | — | Detail ("Request to book") | 200 | Live; unlinked; sitemap lastmod 2025-07-04 | **Full** (display) | Implement under Retreats (confirm still offered) |
| 10 | `/service-page/restore-pamper-day-retreat` | — | Detail ("Request to book") | 200 | Live; unlinked; lastmod 2025-07-04 | **Full** (display) | Implement under Retreats (confirm still offered) |
| 11 | `/booking-calendar/<service-slug>` | — | Booking / transaction (Wix Bookings calendar) | 200 | System route | **Partial**: calendar rendered, no booking submitted | Do not rebuild; booking backend decision needed (see 06) |
| 12 | `/cart-page` | — | Utility (Wix cart, empty) | 200 | System route, unused | Full | Do not implement (legacy) |
| 13 | `/<unknown>` | — | 404 page (Wix default "This page isn't available. Go to Homepage") | 404 | Works | Full | Implement a custom `not-found` page |

Legacy/old routes: none discovered beyond the above. The sitemap's `/home` vs `/` split looks like a historical artefact (the old homepage is now labelled "Schedule").

## 3. Shared components

| Component | Description | Pages |
|---|---|---|
| **Header (D/T)** | Centred text wordmark "Island Yoga & Sound Lembongan" (Cormorant Garamond Light, ~40px), Instagram icon to the right, centred horizontal nav underneath (Raleway 14px). Not sticky. No logo image. | All |
| **Header (M)** | Two-line wordmark centred, Instagram icon left, hamburger right. Opens a full-screen white overlay with centred links (active link in olive #867711) and a close "×". | All |
| **Footer** | Centred, 3 lines: "Island Yoga and Sound Lembongan" (Cormorant), address line (Raleway 14px), "©2022 by The Yoga Shala Lembongan." ~238px tall. No links, no socials, no legal. | All |
| **CTA button** | Solid olive rectangle (#867711, 0 radius), white/light uppercase-or-title-case label; hover goes to bright yellow #E4CC2B. Secondary "message" variant is olive at 72% opacity (#A89D54 on white). | `/`, `/home`, `/projects-6` |
| **Experience block** | Wide 1184×553 image → kicker + H5 title (Cormorant 37px) → italic description (Cormorant 32px) → dash-prefixed bullets (60 min / capacity / tag) → centred CTA. Repeated 7× on `/`. | `/` |
| **Wix Bookings service widgets** | Service list card, service page (title, tagline, duration/price/location pills, description, upcoming sessions table with pagination, contact details), booking calendar. Use Proxima Nova / Wix Madefor fonts. | `/book-online`, service pages, `/booking-calendar` |
| **Google Map** | Wix Google Maps embed, marker "Island Yoga — Yoga & Sound Healing", lat -8.6654423 / lng 115.4504047. | `/` (teal "Visit Our Island Shala" band), `/home` (beside contact form) |

---

## 4. Page-by-page detail

### 4.1 `/` — Homepage (nav "Book Now")

- **Purpose:** Main sales page for the sound-healing experiences; drives Viator bookings and phone/WhatsApp enquiries.
- **Meta:** title "The Yoga Shala Lembongan | Daily drop in yoga | Bali"; description mentions Cacao Ceremonies and YTT venue rent (neither appears on the page). No og:image.
- **Sections, desktop order** (document height 17,942px):
  1. Header + nav
  2. Hero video (autoplay, loop, muted; letterboxed, ~918px wide, centred)
  3. "Your island reset starts here / Lembongan's signature hammock sound experiences." (centred Cormorant)
  4. Hammock image (`7314a9c5`) + "Limited to 12 guests / Pre-book recommended" (styled as H1s) + CTA "Book Your Hammock" → Viator P3
  5. "Choose Your Experience / and book instantly" + 3 cards on yellow tints (#EEDE75 100%/51%/34%): Hammock Sound Healing (Most popular), Gong Sound Immersion, Sound Healing Journey, each with a Viator CTA
  6. "What to expect" + 5-item list with olive diamond bullets
  7. "Loved by travellers visiting Nusa Lembongan" + "5 Star rated by our guests on Google" + 3 testimonials (left column only; large empty right side)
  8. "Sound Healing . Stillness . Dance" + square image (`d4b59bc6`)
  9. Hammock Sound Journey block (no image, text + CTA)
  10. Image (`d4b59bc6` crop) → Gong Sound Healing Relaxation block
  11. Image (`096c6547`) → Sound Journey Expereince block (CTA links to the wrong Viator listing)
  12. Image (`34be45cc`) → Oracle Discovery Experience block → "Send us a message" (tel:)
  13. Image (`0846e866`) → Island Yoga Sessions → "Send us a message" (tel:)
  14. Image (`ea6cb7ee`, pixelated) → Flow Dance Meditation → "Send us a message" (tel:)
  15. Image (`2c29459b`) → Silent Disco and Ecstatic Groove → "Come Dance or Hire Headphones" (tel:)
  16. Schedule image (`c4a51ea5`, desktop version)
  17. "Send us a message / We'll get back to you shortly" (tel:)
  18. Teal band (#08B7A3, verified via computed style and pixel sample) "Visit Our Island Shala" (Arial Bold 51px, black #000) + full-width Google Map (350px)
  19. Full-width image (`9eb399b6`)
  20. Footer
- **Mobile order (6,772px):** header → video → hero text → grey band "New Sunrise Sanctuary hammock 6am, booking only." → hammock image + 3 lines + CTA → "Choose your experience" → mobile schedule image (`874ec558`) → gong/bowls image → Hammock Sound Journey + CTA → grey band "Google Rating. 161 Reviews" + Nancy quote (1/5/26) → Gong → Sound Journey → Oracle Card Experience (WhatsApp CTA) → Island Yoga Sessions (no CTA, no image) → Flow Dance → "Book a private Silent Disco" (WhatsApp) → image → teal "Visit Our Island Shala" + map → footer. **Mobile omits:** the 3 cards, What to expect, Megan/Daniel testimonials, the Silent Disco description, the desktop schedule, the closing image.
- **Interactive:** video, 13 CTAs (Viator ×7 D, tel: ×5 D / WhatsApp ×2 M), map, Instagram icon.
- **Risks:** wrong Viator link; "Send us a message" opens the phone dialler; schedule and prices exist only as an image; repeated headings; heading levels misused (H1 for "Limited to 12 guests", H5 for section titles); low-res images upscaled.
- **Redesign notes:** strongest content on the site. Consolidate the 3 cards and 7 blocks into one experiences system with price, duration, capacity and a booking action; turn the schedule into HTML; keep the video, the testimonials and What to expect.

### 4.2 `/home` — "Schedule"

- **Purpose:** Secondary landing and contact page.
- **Meta:** title "Daily Drop In Yoga | The Yoga Shala Lembongan"; long description about drop-in yoga. Canonical `/home`.
- **Sections (D, 3,873px):** header → hero image (`c24af6e2`) → "CHOOSE YOUR EXPERIENCE / Sound . Dance . Oracle . Yoga / Beautiful island experiances…" + "BOOK NOW" (tel:) → two columns: Opening Hours / Come Visit / hours + Instagram icon (→ instagram.com/wix) | image (`60b46eca`) → "Make time for yourself" → slideshow (3 slides, arrows + dots: Here For You / Worshops Retreats / Magical Experiences) → two columns: Google Map | "Get in Touch" email / phone / Instagram + Wix form (Name*, Email*, Subject, Message, Submit) → footer.
- **Mobile:** same content stacked; form appears before email and phone.
- **Risks:** misleading nav label; the form backend is unverified (not submitted); the Instagram link is wrong; the slideshow carries almost no content.
- **Redesign notes:** merge into a Contact/Visit page: hours, map, phone, WhatsApp, email, form.

### 4.3 `/projects-6` — "OMG oracle"

- **Purpose:** Promote the OMG ("Oh My Goddess") Oracle card deck and oracle sessions (run by the deck's creator).
- **Meta:** title "OMG oracle | The Yoga Shala Lembo"; no description.
- **Sections (D, 1,977px):** two columns: large H1 "OMG / Oh My Goddess / Oracle cards" + intro (left, static) | 3 stacked items (H2 + text + 537×245 image): OMG Oracle sessions, OMG Oracle intuitive sharing experiance, OMG Blessing Ritual (right) → footer. No CTAs, no prices.
- **Mobile (3,753px):** "Meet your inner guidance" deck intro → Connect Inward intro → Group Session (450k pp, WhatsApp CTA) → Private Oracle (750k, WhatsApp) → OMG Blessing Ritual (90 min, deck included, 1.1 million, WhatsApp) → "Not sure which experience is for you?" → footer.
- **Risks:** desktop is outdated compared with mobile; "digital deck online" has no link; the slug is meaningless.
- **Redesign notes:** use the mobile content as the source of truth (client to confirm); show prices and a booking action.

### 4.4 `/book-online` — "Retreats"

- **Purpose:** List bookable retreats and day packages.
- **Meta:** title "Retreats | Island Yoga Lembongan"; no description.
- **Sections:** "Our Retreats" (H1, Proxima Nova) → 1 service card (Oracle Cards + Coconuts workshop: image, title, tagline, "Tue, Thu", "1 hr", "Rp 250", "More Info") → ~1,700px of empty space on desktop → footer.
- **Risks:** 4 of 5 services are hidden from the list; an Oracle workshop appears under "Retreats"; the price format is suspect.
- **Redesign notes:** list the day packages (Holiday Yoga & Sound, Mini Relaxation, Restore & Pamper, Mermaid & Yoga) with duration, price and inclusions, once the client confirms which are active.

### 4.5 `/faq` — "Questions?"

- **Sections:** 3 groups, each headed "Questions?" / "The Answers You Need" (third: "More Questions?"), 12 Q&As total, always expanded (no accordion), single narrow column (~520–660px).
- **Meta:** title "FAQ | The Yoga Shala Lembongan"; no description.
- **Risks:** outdated items (2024 YTT, Cacao Ceremony); typos; repeated headings.
- **Redesign notes:** one accordion grouped by "Experiences / Booking & payment / Yoga"; good candidate for FAQPage structured data.

### 4.6 Service pages (`/service-page/*`), 5 routes, one template

- **Template (D):** centred ~560px column: title (Cormorant 37px) → tagline → pill row (duration | price | location "Island Yoga") → ["Request to book" button, for request-type services] → "Service Description" → [Upcoming Sessions list: date, time, duration, staff ("Wellness Coordinator"/"Coordinator"), time-zone selector WITA, Previous/Next pagination] → Contact Details (address, phone, email) → footer. **No service image on the page**; the image is used only as og:image.
- **Mobile:** same order, taller (~3,600px).
- **Behaviour:** clicking a session row didn't navigate in testing (selector/interaction partially verified). "Request to book" → `/booking-calendar/<slug>?timezone=Asia%2FMakassar&referral=service_details_widget`.
- See [03 §7](03-content-inventory.md#7-retreats--day-packages-wix-bookings-services) for content.

### 4.7 `/booking-calendar/<slug>`

- Wix Bookings calendar: "Back", "Schedule your service", "Check out our availability and book the date and time that works for you", month calendar (Oct 2026), "Availability for Monday, 26 October — No availability", "Check Next Availability", Service Details panel with "Request to Book". The un-slugged `/booking-calendar` defaulted to Restore & Pamper Day Retreat.
- Not tested beyond display; no booking request submitted.

### 4.8 `/cart-page`
- "My cart / Cart is empty / Continue Browsing". Wix e-commerce system page, unused. Legacy.

### 4.9 404
- Wix default: "404 / This page isn't available. / Go to Homepage" (Wix Madefor font). HTTP 404 status is returned correctly.
