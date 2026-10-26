# 08 — Issues, Gaps, Inconsistencies & Open Questions

Nothing below has been corrected in the content inventory. These are items for the client (Q) or for Phase 2 (P2).

## A. Factual conflicts: client must confirm (blocking for accurate content)

| # | Issue | Evidence | Question for client |
|---|---|---|---|
| A1 | **Phone number mismatch** | Site, tel: links, WhatsApp, JSON-LD and the desktop schedule all say **+62 812-4618-6550**; the **mobile schedule image** says **+62 812-4618-5550** | Which number is correct? (The 5550 in the newer graphic may be a typo.) |
| A2 | **Two different weekly schedules** | Desktop image vs mobile image: the mobile one adds **Thu 8:00am Morning Flow & Rise Yoga** and **Sun 5:00pm Hammock Sound Healing** | Which schedule is current? Who updates it, and how often? |
| A3 | **Wix Bookings prices: "Rp 250 / 750 / 770 / 900 / 950"** | Service pages and list show "250 Rupiah Indonesia" etc. Schedule images use "250k" for Gong/Oracle-style pricing | Are these IDR 250,000 / 750,000 / 770,000 / 900,000 / 950,000? Per person? |
| A4 | **Oracle pricing** | Mobile `/projects-6`: Group 450k pp, Private 750k, Blessing Ritual 1.1 million. Oracle Cards + Coconuts workshop (Wix): "Rp 250" (1 hr). Desktop schedule: "Oracle Group pp450k / Private 750kpp" | Is the Coconuts workshop (250k?) a different product from the Oracle Group Session (450k)? Is "Oracle cards + Tea" (FAQ) the same thing? |
| A5 | **Oracle naming** | "Oracle Discovery Experience" (D home), "Oracle Card Experience" (M home), "Oracle Experience. Group Session" (M oracle), "OMG Oracle intuitive sharing experiance" (D oracle), "Oracle Cards + Coconuts workshop" (Bookings), "Oracle cards + Tea" (FAQ) | What is the canonical name of each Oracle offering? |
| A6 | **Brand name** | Island Yoga & Sound Lembongan / Island Yoga and Sound Lembongan / Island Yoga Lembongan / The Yoga Shala Lembongan (titles, copyright, email) | Which name should appear in the logo, titles and copyright? Is "The Yoga Shala" retired? |
| A7 | **Logo** | No visible logo; only the legacy orange "The Yoga Shala" logo (JSON-LD) | Is there a current logo file for "Island Yoga & Sound"? Otherwise Phase 2 uses a text wordmark. |
| A8 | **Testimonial date conflict** | Nancy "2/5/26" (D) vs "1/5/26" (M) | Correct date and format? Can we link to the Google reviews? |
| A9 | **Review count claim** | "Google Rating. 161 Reviews" (M) / "5 Star rated by our guests on Google" (D) | Is this current? Should the redesign show a count (it goes stale)? |
| A10 | **Capacity** | Hammock "Limited to 12 guests"; What-to-expect "{max 12 guests for hammock}"; Gong 15, Sound Journey 20, Yoga/Flow 25, Silent Disco 50, Oracle 12 | Confirm capacities. |
| A11 | **Opening hours** | "Mon - Fri: 8:am - 6pm- later with events / Sat & Sun: Check our schedule". The schedule shows classes on Sat/Sun and a 6am Sunrise session daily | Confirm the hours wording. |
| A12 | **Booking channel per experience** | Hammock/Gong/Sound Journey → Viator; Oracle/Yoga/Flow/Silent Disco → phone (D) or WhatsApp (M); day retreats → Wix Bookings; FAQ says yoga is drop-in (no booking) | Preferred booking path for each offering after migration? |
| A13 | **Address formatting** | "Island Yoga Lembongan Island, Jungutbatu…" (footer) vs "Island Yoga Lembongan, Lembongan island, Jungutbatu…" (bookings) | Preferred address line; is the Google Maps place link available? |
| A14 | **Hosting / deck** | "Also available as a digital deck online" has no link | URL for the digital OMG deck? Is the physical deck sold online? |

## B. Outdated or questionable content

| # | Item | Location |
|---|---|---|
| B1 | "we are currently developing our **2024** Yoga Teacher Training Courses" | `/faq` |
| B2 | Cacao Ceremonies (FAQ ×2, homepage meta description "monthly Cacao Ceremonies") don't appear on any schedule | `/faq`, `/` meta |
| B3 | Meta description: "available for rent for Yoga Teacher Trainings" (venue hire), mentioned nowhere else | `/` meta |
| B4 | "©2022" copyright | Footer |
| B5 | Mermaid & Yoga and Restore & Pamper services: sitemap lastmod 2025-07-04, request-only, not linked anywhere | Service pages |
| B6 | 4 of 5 Wix Bookings services hidden from `/book-online` | `/book-online` |
| B7 | Desktop `/projects-6` copy is older than mobile; it has no prices or CTAs | `/projects-6` |
| B8 | Holiday Yoga & Sound Day Retreat description says "The Yoga Shala Lembo" | Service page |
| B9 | "Vinyasa Flow Yoga" FAQ, but Vinyasa isn't on the schedule (Holiday Hatha, Gentle Yoga, Morning Flow & Rise) | `/faq` |

## C. Spelling / grammar errors in source (preserve facts; fix wording only with client approval)

| Source text | Location |
|---|---|
| "Sound Journey **Expereince**" | `/` (D + M) |
| "Oracle Discovery **experiance**" | Desktop schedule image |
| "ORACLE CARD **EXPERIANCE**", "to **recieve** guidance", "**were** happy to guide you" | `/projects-6` (M) |
| "OMG Oracle intuitive sharing **experiance**" | `/projects-6` (D) |
| "Beautiful island **experiances**" | `/home` |
| "**Worshops** Retreats" | `/home` slideshow |
| "Gentle yoga & Sound experience & **Pamering**" | Mini Relaxation tagline |
| "perfect if **your** a beginner" | Restore & Pamper description |
| "whilst **your** sipping on jasmine tea" | `/faq` |
| "**Do your** conduct yoga teacher training?" | `/faq` |
| "No !With", "Yes please !", "bendiest !" (spacing) | `/faq` |
| "Lets embrace" (missing apostrophe) | `/projects-6` (D) |
| "8:am - 6pm- later" | `/home` |
| "-Breath, Stretch and connect" (Breathe?) | `/` |
| "Mini  Relaxation  Day Retreat." / double spaces; trailing full stops in service names | Service titles |
| "Small, intimate group {max 12 guests for hammock}" (curly braces) | `/` |
| "This experience weaves together gentle, sound, intention…" (stray comma) | `/projects-6` (M) |

## D. Functional / technical bugs in the original

| # | Bug | Location |
|---|---|---|
| D1 | "Book Your Sound Journey" links to the **Hammock** Viator listing (P3) instead of Sound Journey (P1) | `/` (D) |
| D2 | "Send us a message" ×4, "Come Dance or Hire Headphones" and "BOOK NOW" (`/home`) are `tel:` links, so the label doesn't match the action | `/`, `/home` (D) |
| D3 | Instagram icon in Opening Hours → **instagram.com/wix** (template default) | `/home` |
| D4 | Nav "Book Now" → homepage; "Schedule" → page with no schedule; "Retreats" → list with a workshop | All |
| D5 | Schedule and prices exist **only as images**: not accessible, not indexable, unreadable on mobile (297px wide) | `/` |
| D6 | Tablet (768px) horizontal overflow: 980px fixed layout | All |
| D7 | Heading hierarchy misused: 7 H1s on `/` ("Limited to 12 guests", "Pre-book recommended", "Choose Your Experience", "We'll get back to you shortly" ×3…) and none for the hero; section titles as H5, subtitles as H6; 3 H1s on `/home` | `/`, `/home` |
| D8 | Low-resolution images upscaled (`ea6cb7ee` 634×261 → 1184×553; `d4b59bc6` 895×557 → 1184 / 900×965) | `/` |
| D9 | Off-brand Arial Bold heading on a teal band ("Visit Our Island Shala") | `/` |
| D10 | Large empty areas: right half of the testimonials section; ~1,700px below one card on `/book-online` | `/`, `/book-online` |
| D11 | Most image alt text is camera filenames ("IMG_1036.jpeg", UUIDs, "Untitled") or empty | All |
| D12 | No og:image on main pages; Wix default favicon; og:site_name truncated ("The Yoga Shala Lembo") | SEO |
| D13 | No meta description on `/faq`, `/book-online`, `/projects-6` | SEO |
| D14 | Session-row click on service pages didn't navigate in testing (may be a test limitation, not a site bug) | Service pages |

## E. Audit limitations (what couldn't be verified)

| Limitation | Impact |
|---|---|
| Viator pages return HTTP 403 to automated requests | Listing content, prices, reviews and availability unverified |
| No form or booking submitted (deliberately, to avoid creating real enquiries or bookings) | Contact form and booking backends unverified |
| Google Map tiles didn't render in headless Chrome (marker and info window did) | Map appearance not captured; coordinates verified from data |
| Full-page desktop screenshot of `/` has a capture artefact at the bottom (header and hero repeated where the map/closing image/footer should be) | Use `root--desktop-1440--bottom-1/2/3.jpg` for the true bottom of the page |
| Wix entrance animations / scroll effects not reliably observable headless | Motion inventory is partial |
| Tablet tested with a desktop UA only | Real iPad behaviour (which may get the mobile layout) unverified |
| QR code in schedule images not decoded | Destination unknown |
| Instagram content not audited (login wall) | Possible event content unknown |
| Hero video 1080p rendition returned 403; only 720p obtained | Max video quality available is 720p |
| No access to the Wix dashboard (bookings settings, form submissions, analytics) | Backend config unknown |
