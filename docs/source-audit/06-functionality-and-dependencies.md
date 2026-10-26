# 06 — Functionality & Technical Dependencies

Platform: **Wix** (Thunderbolt renderer; `generator: Wix.com Website Builder`; site ID `c393df70-61c6-4c0d-8890-664ff987df91`; published version 2203). Wix serves **separate desktop and mobile layouts** chosen by user agent.

Verification levels: **Observed** = seen · **Interaction tested** = clicked/hovered · **Functionality verified** = intended outcome confirmed · **Partially verified** · **Unverified**.
No form, booking or payment was submitted at any point (that would create real records for the business).

## 1. Feature table

| # | Feature | Where | Level | Detail / destination | Phase 2 consideration |
|---|---|---|---|---|---|
| 1 | Main navigation (5 links) | All | **Functionality verified** | Book Now→`/`, Schedule→`/home`, OMG oracle→`/projects-6`, Retreats→`/book-online`, Questions?→`/faq`. All 200. | Relabel/restructure; add redirects for old slugs |
| 2 | Mobile hamburger menu | All (M) | **Functionality verified** | Opens a full-screen white overlay with centred links; "×" closes it; active item olive | Rebuild accessibly (focus trap, Esc, aria-expanded) |
| 3 | Desktop nav hover | All (D) | **Interaction tested** | Colour #181818 → #222222 (barely visible); no underline | Provide a clear hover/focus state |
| 4 | Viator booking links (Hammock P3, Gong P2, Sound Journey P1) | `/` (D/M) | **Observed**; destination **unverified** | Open viator.com listings (`d23621-389826P1/P2/P3`). Viator returns 403 to automated requests, so listing content, prices and availability couldn't be verified. **"Book Your Sound Journey" (D) points to P3 Hammock, which is wrong.** | Keep Viator as the booking channel unless the client says otherwise; fix mapping; open in a new tab with `rel="noopener"` |
| 5 | "Send us a message" / "Come Dance or Hire Headphones" / "BOOK NOW" (`/home`) | `/`, `/home` (D) | **Interaction tested** (href) | `tel:+6281246186550`. The label says "message" but the link opens the phone dialler; on desktop it typically does nothing useful | Replace with a WhatsApp link (as mobile does) or a contact form; label honestly |
| 6 | WhatsApp CTAs | `/`, `/projects-6` (M) | **Observed** (href) | `https://api.whatsapp.com/send?phone=6281246186550`, no prefilled message | Use `https://wa.me/6281246186550?text=…` with a per-experience prefilled message (client to approve) |
| 7 | Contact form | `/home` | **Observed**; submission **unverified** | Wix Forms: Name* (text), Email* (email), Subject, Message (textarea), Submit. Required markers visible. Backend = Wix (submissions go to the Wix dashboard / owner email). Not submitted. | Needs a new backend (e.g. Formspree, Resend, or a Next.js route handler + email service) **or** replace with WhatsApp/mailto. Client decision. |
| 8 | Hero video | `/` | **Functionality verified** | `video.wixstatic.com/.../720p/mp4/file.mp4`, 18.96 s, 1280×720, autoplay, loop, muted, playsinline, no controls | Self-host a compressed MP4/WebM + poster; respect `prefers-reduced-motion` |
| 9 | Slideshow (3 slides, arrows + dots) | `/home` | **Interaction tested** | Next arrow cycles "Here For You" → "Worshops Retreats" → "Magical Experiences"; images lazy-load per slide | Low value; consider dropping or turning into a static gallery |
| 10 | Google Maps embed | `/`, `/home` | **Observed** (marker info window rendered; tiles didn't render in headless capture) | Wix Google Maps component; marker "Island Yoga — Yoga & Sound Healing", Link + Directions; lat -8.6654423, lng 115.4504047 | Use a Google Maps embed iframe (no API key needed for basic embed) or a static map image + "Open in Google Maps" link; lazy-load |
| 11 | Wix Bookings: service list | `/book-online` | **Functionality verified** (display + "More Info" navigates to service page with `?referral=service_list_widget`) | Shows only 1 of 5 services | Data must be re-hosted (static content or CMS) |
| 12 | Wix Bookings: service page + upcoming sessions | 5 × `/service-page/*` | **Partially verified** | Sessions list with WITA time-zone selector and pagination displayed. Clicking a session row didn't navigate in automated testing (may need a different target element). | Live availability can't be reproduced in a static frontend without an API |
| 13 | Wix Bookings: "Request to book" → calendar | Mermaid, Restore & Pamper | **Interaction tested** | Navigates to `/booking-calendar/<slug>?timezone=Asia%2FMakassar&referral=service_details_widget`; calendar shows "No availability" for 26 Oct + "Check Next Availability" + "Request to Book" | Booking backend decision required (see §3) |
| 14 | Wix cart | `/cart-page` | **Observed** | "Cart is empty". No products found anywhere. | Drop |
| 15 | Instagram link | Header (all), `/home` | **Observed** (href) | instagram.com/islandyogalembongan (200). **`/home` Opening Hours icon → instagram.com/wix (wrong).** | Single correct link |
| 16 | Email link | `/home` | **Observed** | `mailto:welcomeyogashala@gmail.com` | Keep |
| 17 | Phone link | `/home`, service pages | **Observed** | `tel:+6281246186550` | Keep, plus WhatsApp |
| 18 | QR code "Direct Bookings" | Schedule images | **Observed**; not decoded | Printed QR inside the schedule graphic; destination unknown | Ask the client what the QR points to (likely WhatsApp) |
| 19 | Search, filters, login, member area, e-commerce checkout, translations, cookie banner, newsletter, reviews widget | — | **Not present** | Testimonials are static text, not a Google reviews widget | Don't add unless requested |
| 20 | Downloads (PDF/brochures) | — | **Not present** | | — |
| 21 | Skip link | All | **Observed** | "Skip to Main Content" (Wix default) | Keep in rebuild |
| 22 | 404 handling | Unknown routes | **Functionality verified** | Returns HTTP 404 + Wix default page | Custom `not-found.js` |
| 23 | Animations / scroll effects | `/` | **Observed** (limited) | No sticky/fixed elements detected (header scrolls away). Wix entrance animations not reliably observed in headless capture. Button hover transition 0.2s. | GSAP/ScrollTrigger in Phase 2 should stay restrained |

## 2. Third-party hosts contacted (network log, all pages)

| Host | Purpose | Keep? |
|---|---|---|
| static.parastorage.com, siteassets.parastorage.com, settings.parastorage.com | Wix runtime, CSS, fonts cache | No (platform) |
| static.wixstatic.com | Images (media CDN) | No; assets downloaded locally |
| video.wixstatic.com | Hero video | No; downloaded |
| frog.wix.com, panorama.wixapps.net | Wix analytics / monitoring | No |
| browser.sentry-cdn.com | Wix error monitoring | No |
| maps.googleapis.com, maps.gstatic.com | Google Maps | Replace with an embed |
| fonts.googleapis.com, fonts.gstatic.com | Roboto for Maps | — |
| viator.com (outbound links) | Booking for 3 experiences | **Keep** (business dependency) |
| api.whatsapp.com (outbound) | Messaging | **Keep** |
| instagram.com (outbound) | Social | **Keep** |

No Google Analytics/GTM, Meta Pixel or other marketing tags were detected in network requests (only Wix's own analytics). Google Search Console verification meta exists (`8jHxzbnldUimR9_H55-Mje43Xfid9GsKoxaE8sQE-P4`); carry it over if the client keeps the same Search Console property.

## 3. Dependencies that need decisions before or during Phase 2

1. **Bookings.** The 5 retreat/workshop services, their schedules and the "Request to book" flow live in **Wix Bookings**. A Next.js frontend can't reuse Wix Bookings without the Wix Headless/SDK (which requires the site to stay on Wix with API keys). Options: (a) keep Wix Bookings via Wix Headless; (b) send all bookings to Viator / WhatsApp / email enquiry; (c) a third-party scheduler (e.g. Calendly, SimplyBook, Bókun). **Unverified which the client wants.** The frontend mock-up must not imply live booking unless one of these is wired up.
2. **Contact form backend.** Wix Forms won't exist after migration. Needs a provider or a replacement with WhatsApp/mailto.
3. **Viator listings.** Content and pricing on Viator couldn't be checked (403). Confirm that the 3 listing IDs are active and correctly mapped.
4. **Domain / hosting / redirects.** Moving off Wix needs DNS changes and 301s: `/home`, `/projects-6`, `/book-online`, `/service-page/*`, `/booking-calendar/*`, `/cart-page` → new routes. (Deployment is out of scope for this phase.)
5. **Schedule data source.** The schedule is currently an image, and two versions exist. Phase 2 should hold it as structured data (e.g. a JS/JSON file) so the client can update it without designing a new graphic.
6. **Image processing.** Originals are large (up to 4.9 MB) and two need EXIF rotation. See 04 and 09.
