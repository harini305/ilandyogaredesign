# 03 — Content Inventory (Content Preservation Reference)

Source: https://www.islandyogalembongan.com/ — captured 2026-10-26 from the rendered DOM (Playwright + Chrome) and full-resolution source images.
Full verbatim page text for every route and viewport is in [`data/page-text/`](data/page-text/). This file organises the content that matters for the rebuild, with its source location.

**Text is quoted verbatim, including original spelling.** `[sic]` marks errors, and they are also listed in [08-issues-gaps-questions.md](08-issues-gaps-questions.md). Nothing here has been corrected or invented.

Legend: **D** = desktop layout, **M** = mobile layout (Wix serves separate desktop and mobile layouts with different content; see 07).

---

## 1. Business information

| Item | Value (verbatim) | Source |
|---|---|---|
| Visible brand name (header wordmark) | Island Yoga & Sound Lembongan | Header, all pages |
| Footer brand name | Island Yoga and Sound Lembongan | Footer, all pages |
| Copyright line | ©2022 by The Yoga Shala Lembongan. | Footer, all pages |
| SEO / legacy brand name | The Yoga Shala Lembongan / "The Yoga Shala Lembo" (truncated og:site_name) | `<title>`, og tags |
| JSON-LD LocalBusiness name | Island Yoga Lembongan | `/` structured data |
| Address (footer) | Island Yoga Lembongan Island, Jungutbatu, Nusa Lembongan, Klungkung Regency,  Bali 80771.Please check Google Maps for pin drop location. | Footer, all pages |
| Address (Wix Bookings contact) | Island Yoga Lembongan, Lembongan island, Jungutbatu, Klungkung Regency, Bali, Indonesia | Service pages, "Contact Details" |
| Map coordinates | lat -8.6654423, lng 115.4504047 | Google Map component data (`/`, `/home`) |
| Map marker label | Island Yoga — Yoga & Sound Healing | Map info window |
| Phone (site) | +62 81246186550 (displayed); `tel:+6281246186550` | `/home` Get in Touch; service pages; all `tel:` links |
| Phone (desktop schedule image) | - 62 812-4618-6550 | Schedule graphic (D) |
| Phone (mobile schedule image) | +62 812-4618-5550 ⚠ **differs** | Schedule graphic (M) |
| WhatsApp | `https://api.whatsapp.com/send?phone=6281246186550` | Mobile CTAs (`/`, `/projects-6`) |
| Email | welcomeyogashala@gmail.com | `/home`, service pages |
| Instagram | https://www.instagram.com/islandyogalembongan/ | Header icon, `/home` |
| Opening hours | Mon - Fri: 8:am - 6pm- later with events / Sat & Sun: Check our schedule / Instagram for upcoming events | `/home` "Opening Hours — Come Visit" |
| Payment methods | We accept cash, bank transfer & wise. | `/faq` |
| Time zone (bookings) | Central Indonesia Time (WITA) | Wix Bookings widgets |
| Google rating claim | "5 Star rated by our guests on Google" (D); "Google Rating. 161 Reviews" (M) | `/` testimonials |

---

## 2. Navigation & CTAs

Main nav (identical on every page; on mobile it sits behind a hamburger menu):

| Label | Destination | Note |
|---|---|---|
| Book Now | `/` (homepage) | The label suggests booking, but the link goes to the homepage |
| Schedule | `/home` | The page has no schedule; it holds an intro, opening hours, a slideshow and the contact form |
| OMG oracle | `/projects-6` | Generic Wix slug |
| Retreats | `/book-online` | Wix Bookings service list (1 service shown) |
| Questions? | `/faq` | |
| (Instagram icon) | instagram.com/islandyogalembongan | Header right |

No footer navigation. No legal links (privacy/terms) anywhere.

---

## 3. Offerings: experiences (homepage `/`)

All "60 minutes". Capacities are as stated on the site.

| Experience | Tagline / description (verbatim) | Duration | Capacity | Third bullet | CTA label → destination (D) | CTA (M) |
|---|---|---|---|---|---|---|
| **Hammock Sound Journey** (card: "Hammock Sound Healing — Most popular") | Kicker: "Your island reset starts here". "Float into deep relaxation in a suspended hammock, held by layered sound healing frequencies." / "NEW SUNRISE SANCTUARY HAMMOCK SESSION 6am Booking only" / Card: "Sink into deep relaxation in suspended hammocks" | -60 minutes | -Limited to 12 guests | -Our most loved experience | "Book Your Hammock Experience" / "Book Hammock Experience" / "Book Your Hammock" → Viator P3 (Hammock Soundscape Float) | "Book Hammock Experience" → Viator P3 |
| **Gong Sound Healing Relaxation** (card: "Gong Sound Immersion") | Kicker: "Drop deeper into stillness". "Immersive gong vibrations calm the nervous system, release tension and restore inner balance." / Card: "A powerful full body reset for your entire body" | -60 minutes | -Limited to 15 guests | -Transformational | "Book Your Gong Journey" / "Book Gong Experience" → Viator P2 (Gong Relaxation) | → Viator P2 |
| **Sound Journey Expereince** [sic] (card: "Sound Healing Journey") | Kicker: "Let yourself be held". "A guided journey through the chakras with sound and vibration, designed to calm the mind and bring you back into balance." / Card: "A calming journey through layered sound" | -60 minutes | -Limited to 20 guests | -Our most inspired experience | Card "Book Sound Journey Experience" → Viator P1 ✔; block "Book Your Sound Journey" → **Viator P3 (Hammock) ✖ wrong link** | → Viator P1 |
| **Oracle Discovery Experience** (D) / **Oracle Card Experience** (M) | Kicker: "Connect inward". D: "Receive intuitive guidance and learn to read your own cards in a grounding and empowering session." M: "Receive intuitive guidance and learn to read your own cards in an empowering session." | -60 minutes | -Limited to 12 guests | D: -Private sessions welcomed. M: -Private bookings welcomed / -Our most inspired experience | "Send us a message" → `tel:` + "We'll get back to you shortly" | "Message to book this experience" → WhatsApp |
| **Island Yoga Sessions** | Kicker: "Move with ease". "Gentle, feel good yoga designed to help you reconnect with your body on holiday." | -60 minutes | -Limited to 25 guests | -Breath, Stretch and connect | "Send us a message" → `tel:` | (no CTA) |
| **Flow Dance Meditation** | "A guided movement journey to release,  reconnect and return to your natural flow." | -60 minutes | -Limited to 25 guests | -Connect, move, restore | "Send us a message" → `tel:` | (no CTA) |
| **Silent Disco and Ecstatic Groove** | Kicker: "Let yourself go". "A Sunset dance journey with headphones, flowing from the shala to the beach under the open sky." | -60 minutes | -Limited to 50 guests | -Our most fun sunset experience | "Come Dance or Hire Headphones" → `tel:` | "Book a private Silent Disco" → WhatsApp (M omits the Silent Disco description block) |

Viator listing URLs (operator ID 389826):
- P1 Sound Journey: https://www.viator.com/tours/Nusa-Lembongan/Sound-Journey-relaxation-on-the-Island-of-Nusa-Lembongan/d23621-389826P1
- P2 Gong: https://www.viator.com/tours/Nusa-Lembongan/Gong-Relaxation-on-Nusa-Lembongan/d23621-389826P2
- P3 Hammock: https://www.viator.com/tours/Nusa-Lembongan/Hammock-Soundscape-Float/d23621-389826P3

### Homepage supporting copy (verbatim)

- Hero (D/M): "Your island reset starts here" / "Lembongan's signature hammock sound experiences."
- M banner: "New Sunrise Sanctuary hammock 6am, booking only."
- Hammock highlight: "Limited to 12 guests" / "Pre-book recommended" (D); M: "Limited to 12 guests / Most popular experience / Booking recommended". CTA: "Book Your Hammock" (D) / "BOOK HAMMOCK EXPERIENCE" (M) → Viator P3.
- "Choose Your Experience" / "and book instantly" (D only, 3 cards).
- **What to expect** — "Everything you need to simply arrive and relax" (D only):
  - Arrive 15 minutes early
  - Small, intimate group {max 12 guests for hammock}
  - No experience needed
  - All mats and props provided
  - Suitable for all levels
- Section strapline: "Sound Healing . Stillness . Dance"
- Map section heading: "Visit Our Island Shala"

### Testimonials (verbatim; source: `/` "Loved by travellers visiting Nusa Lembongan")

Heading: "Loved by travellers visiting Nusa Lembongan" — sub: "5 Star rated by our guests on Google" (D)

1. "From the moment I arrived, the venue itself felt like a sanctuary, beautiful, peaceful, and thoughtfully designed ... It honestly felt like being transported somewhere else, like a mini holiday for both mind and body." — **Nancy 2/5/26** (D) / M shows only the second sentence, signed **Nancy 1/5/26** ⚠ date conflict
2. "Being weightlessly cocooned in the hammock while sound vibrations were above, around, and below me was so powerful." — **Megan 1/1/26** (D only)
3. "A must-do in Nusa Lembongan. Deeply relaxing and something completely different." — **Daniel 11/2/25** (D only)

Dates are ambiguous (D/M/Y vs M/D/Y). The reviews are presented as Google reviews, but no Google widget or link is present, so they can't be verified from the site.

---

## 4. Weekly schedule & prices (transcribed from images)

The schedule exists **only as images** (no HTML text). There are two different versions.

### 4a. Desktop schedule image (`abc95f_c4a51ea5…`, older)

Header: "Sound Healing · Stillness · Dance" — "All sessions 60 minutes." — "DOORS OPEN 15 minutes before session" — QR "Direct Bookings" — badge "PREMIUM EXPERIENCE SUNRISE SANCTUARY HAMMOCK 6:00am 650k pp BOOKING ONLY"

| Time | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|---|
| 6am | SUNRISE SANCTUARY HAMMOCK — 6AM * 650k * BOOKING ESSENTIAL (all days) | | | | | | |
| 10am | Holiday Hatha yoga | Holiday Hatha yoga | Holiday Hatha yoga | — | Holiday Hatha yoga | Holiday Hatha yoga | — |
| 12:00 | Hammock Sound Healing | Hammock Sound Healing | Hammock Sound Healing | Hammock Sound Healing | Hammock Sound Healing | Hammock Sound Healing | Hammock Sound Healing |
| 1:30 | Oracle Discovery experiance [sic] pre-book | — | Oracle Discovery experiance pre-book | — | — | — | — |
| 4:30 | — | Gentle Yoga | — | — | — | — | — |
| 5pm | Gong Sound Relaxation | — | Hammock Sound Healing | Sound Journey | — | — | — |
| 6pm | — | Sunset Flow Dance | — | — | — | — | — |

Prices: Yoga & Dance 3 class pass 450k · Yoga -200k · Flow Dance Meditation -200k · Hammock Sound - 400k · Sound Journey - 300k · Gong - 250k · Oracle Group pp450k /Private 750kpp. "RESERVE YOUR SPACE - 62 812-4618-6550". "Private & Day packages available on request".

### 4b. Mobile schedule image (`abc95f_874ec558…`, newer redesign)

Header: "Sound Healing · Stillness · Dance" — "Day packages available on request" — "DOORS OPEN 15 MINUTES BEFORE SESSION" — QR "Direct Bookings" — same Sunrise badge (6:00am 650k pp BOOKING ONLY).

| Time | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|---|
| 8:00am | — | — | — | **Morning Flow & Rise Yoga** | — | — | — |
| 10:00am | Holiday Hatha Yoga | Holiday Hatha Yoga | Holiday Hatha Yoga | — | Holiday Hatha Yoga | Holiday Hatha Yoga | — |
| 12:00pm | Hammock Sound Healing | ← same, every day → | | | | | Hammock Sound Healing |
| 1:30pm | Oracle Discovery experience (pre-book required) | — | Oracle Discovery experience (pre-book required) | — | — | — | — |
| 4:30pm | — | Gentle Yoga | — | — | — | — | — |
| 5:00pm | Gong Sound Relaxation | — | Hammock Sound Healing | Sound Journey | — | — | **Hammock Sound Healing** |
| 6:00pm | — | Sunset Flow Dance | — | — | — | — | — |

(The 6am Sunrise row is not drawn in the grid; it appears as a badge and footer line: "SUNRISE SANCTUARY HAMMOCK | BOOKING ONLY 6:00AM 650kpp".)

Classes & Passes: Yoga & Dance 3 Class Pass 450k · Yoga 200k · Flow Dance 200k · Gong Sound Relaxation 250k
Session Prices (60 min): Hammock Sound 400k · Sound Journey 300k · Gong 250k · Oracle Group pp 450k · Oracle Private 1:1 750k
"RESERVE YOUR SPACE +62 812-4618-5550" · "Private sessions available on request" · "All sessions 60 minutes" · "Thank you ♥"

**Differences between 4a and 4b:** Thu 8am Morning Flow & Rise Yoga (new), Sun 5pm Hammock (new), phone digits (6550 vs 5550), "Day packages" wording. **The client must confirm which schedule is current.**

---

## 5. `/home` (nav label "Schedule")

- H1 group: "CHOOSE YOUR EXPERIENCE" / "Sound . Dance . Oracle . Yoga" / "Beautiful island experiances [sic] to help you slow down, reconnect and feel good." / CTA "BOOK NOW" → `tel:+6281246186550`
- "Opening Hours" / "Come Visit" / hours (see §1) + Instagram icon (→ **instagram.com/wix**, wrong)
- "Make time for yourself" + slideshow (3 slides): "Here For You" · "Worshops Retreats" [sic] · "Magical Experiences"
- "Get in Touch": email, phone, Instagram, contact form (Name *, Email *, Subject, Message, Submit), map
- SEO description (verbatim): "The Shala Lembongan offers daily drop in yoga classes, meditation, workshops, trainings, retreats. Located near the beach set in nature a beautiful outdoor pavilion, beginners + advance yogis welcome. Yoga classes for divers, surfers and wellness seekers. Private classes available."

---

## 6. OMG Oracle (`/projects-6`) — desktop and mobile differ substantially

### Desktop (older copy)
- H1: "OMG / Oh My Goddess / Oracle cards"
- "Reveal Your Destiny ... My intention is to empower YOU, my Goddess, to co-create and celebrate your spectacular life with clarity & confidence."
- **OMG Oracle sessions** — "Lets embrace the path of infinite potentiality with open arms, inviting divine guidance into your life."
- **OMG Oracle intuitive sharing experiance** [sic] — "Guided session using different oracle decks to tap into insights."
- **OMG Blessing Ritual** — "Private one on one session to empower you to connect to all 34 inner Goddesses."
- No prices, no CTAs.

### Mobile (newer, richer copy, with prices)
- "Meet your inner guidance" / "OMG Oracle Cards"
- "*A beautifully designed deck to bring clarity, connection and daily inspiration." / "*Available at Island Yoga" / "Also available as a digital deck online" (no link given)
- "CONNECT INWARD / ORACLE CARD EXPERIANCE [sic]" — "Step into a grounding, intuitive space where you'll receive guidance and learn to read your own cards with clarity and confidence."
- **Oracle Experience. Group Session** — "A guided experience where you'll connect inward, to recieve [sic] guidance and learn to read your own cards in a relaxed, supportive space." -60 minutes · -Limited to 12 guests · *450k per person · CTA "Book group experience" → WhatsApp
- **Private Oracle Experience** — "A personalised one-on-one session designed to deepen your connection, offering intuitive guidance while teaching you to trust  and read your own cards." -60 minutes · -Private setting · *750k · CTA "Book Private Experience" → WhatsApp
- **OMG Blessing Ritual** — "A private, immersive ritual to connect, activate and bless your oracle deck. This experience weaves together gentle, sound, intention, and ceremony - allowing you to form a deeper, more intuitive relationship with your cards. Each ritual is uniquely guided, creating a moment of clarity, connection and self-trust." -90 minutes · -Includes your OMG Oracle Deck to take home · *1.1 million · "Our most immersive and loved experience" · CTA "Book OMG Ritual" → WhatsApp
- "* Not sure which experience is for you ? Send us a message - were [sic] happy to guide you."

---

## 7. Retreats / Day packages (Wix Bookings services)

Prices are shown exactly as configured in Wix ("Rp 250" etc., read as "250 Rupiah Indonesia"). They are **almost certainly meant as thousands of IDR**, but this is unconfirmed (see 08).

| Service | URL | Tagline (verbatim) | Duration | Price as shown | Location | Booking mode | Upcoming sessions shown (captured 2026-10-26) | Listed on `/book-online`? |
|---|---|---|---|---|---|---|---|---|
| Oracle Cards + Coconuts workshop | `/service-page/oracle-cards-coconuts-workshop` | A fun, intuitive group sharing experience using inspiration from 3 different oracle decks. | 1 hr | Rp 250 | Island Yoga | Scheduled class (Tue, Thu 13:00, "Coordinator") | Tue 27 Oct → Tue 17 Nov, 13:00 | **Yes (only service listed)** |
| Holiday Yoga & Sound Day Retreat | `/service-page/holiday-yoga-sound-day-retreat` | A full day of wellness & feel good experiences. | 9 hr | Rp 770 | Island Yoga | Scheduled (Tue/Thu/Fri 10:00, "Wellness Coordinator") | Tue 27 Oct → Tue 10 Nov | No (sitemap only) |
| Mini Relaxation Day Retreat. | `/service-page/mini-relaxation-day-retreat` | Gentle yoga & Sound experience & Pamering [sic] | 4 hr | Rp 750 | Island Yoga | Scheduled (Mon/Tue/Thu/Fri 15:00, two parallel slots) | Mon 26 Oct → Thu 5 Nov | No |
| Mermaid & Yoga half day retreat. | `/service-page/mermaid-yoga-half-day-retreat` | Private snorkel adventure and group yoga. | 3 hr 30 min | Rp 900 | Island Yoga | "Request to book" → `/booking-calendar/…` | none (request-based) | No |
| Restore & Pamper Day Retreat. | `/service-page/restore-pamper-day-retreat` | Tonic for your body and soul, gentle yoga & pampering. | 3 hr 30 min | Rp 950 | Island Yoga | "Request to book" → `/booking-calendar/…` | none (request-based) | No |

Service descriptions (verbatim):

- **Oracle Cards + Coconuts workshop** — "Unleash the power within, experience the unique blend of inner wisdom, clarity and intuition that this soulful session offers, a highlight is receiving a bonus Goddess card to clarify the over arching feel of your session. The creator of Omg Oracle cards will be your guide for this experience, you can even purchase your very own OMG - Oh My Goddess Clarity Oracle card deck to take home."
- **Holiday Yoga & Sound Day Retreat** — "Unwind and rejuvenate with our special Holiday Yoga & Sound Day Retreat at The Yoga Shala Lembo. This full day of yoga and feel-good experiences includes a morning Vinyasa session, followed by a unique Hammock Soundscape relaxation experience. After a relaxing break at a nearby café, join us for a gentle pre-sunset Yin yoga class. The day concludes with your choice of a Gong relaxation or Sound Journey session. It's the perfect way to treat yourself to a day of tranquility and wellness."
- **Mini Relaxation Day Retreat** — "Indulge in our afternoon Mini Relaxation Retreat at Island Yoga . Treat yourself to a pampering massage hour, followed by a restorative Yin Yoga session, and finish with a soothing Gong relaxation or Sound Journey. This perfect late afternoon relaxation experience allows time to relax, journal, and explore our wellness library and extensive Oracle card collection. Unwind and recharge with us."
- **Mermaid & Yoga half day retreat** — "Minimum 2 guests, snorkel drift adventure 2 hours and Yin Yoga 60 minutes afternoon session or snorkel drift adventure & Holiday vinyasa morning session."
- **Restore & Pamper Day Retreat** — "Indulge in an afternoon of pure relaxation with our Restore & Pamper Retreat at Island Yoga. Join us for a gentle 60-minute Yin Yoga session - perfect if your [sic] a beginner, followed by 2 hours of complete bliss with our Goddess treatment, including a relaxation massage, body scrub, and flower bath soak. All topped off with tea and fresh fruit, this divine experience will leave you feeling completely restored."

---

## 8. FAQ (`/faq`), verbatim, in original order

Page heading: "Questions?" / "The Answers You Need" (repeated 3×: "Questions?", "Questions?", "More Questions?")

1. **What is a Sound Journey ?** — A sound journey is a therapeutic experience where various instruments and sounds are used to create a sonic environment that promotes relaxation, healing, and deep meditation. Participants listen to and feel the vibrations of instruments such as singing bowls, gongs, drums, and chimes, which can help release tension, reduce stress, and induce a state of deep relaxation.
2. **What is a Gong Relaxation session ?** — A gong meditation is a form of sound therapy where gongs are played to induce a deep meditative state and promote relaxation and healing. The rich and complex sounds and vibrations of the gongs create a sonic environment that helps release tension, balance energy, and bring about a sense of calm and tranquility. It is often used for stress reduction, deep relaxation, and personal growth.
3. **What is HOLIDAY yoga?** — Holiday Yoga is a combination of Hatha + Vinyasa yoga. It is aimed at people who- have never been to a yoga class, are on holiday and would like to restart a forgotten practice, have been to a couple of yoga classes, have practiced a lot but have a partner that is one of the above, an advanced yogi that the most advanced classes aren't always the most bendiest ! Come and enjoy your practice in our beautiful open air shala!
4. **What is Vinyasa Flow Yoga?** — Vinyasa flow yoga is a dynamic style of yoga that synchronizes movement with breath. It involves smoothly transitioning from one pose to another, creating a continuous sequence. The practice emphasizes strength, flexibility, and mindfulness, and can vary in intensity and pace depending on the class and  instructor.
5. **What is Oracle cards + Tea** — Welcome to the realm of magical oracle cards, in our fun session we'll embark on a journey of empowerment and manifestation, whilst your sipping on jasmine tea. Embrace the unique blend of wisdom, clarity through guided intuition in a caring & safe space.
6. **Do I need to book yoga classes?** — No !With our drop-in yoga classes you have the freedom to choose and attend classes based on your availability and preference. You can arrive at our beautiful shala shortly before the class begins and pay a single session fee or purchase a class pass to participate.
7. **Do I need to book for Gong Meditation, Sound Journeys and Cacao Ceremonies?** — Yes, it is advisable to make a reservation to guarantee your space.
8. **Do I need to book Day retreat packages?** — Yes please !
9. **What is a Cacao Ceremony?** — A cacao ceremony is a ritualistic gathering that involves the consumption of ceremonial-grade cacao, often in the form of a warm beverage. It is rooted in ancient Mesoamerican traditions and is practiced as a way to connect with oneself, the natural world, and others on a deeper level. The ceremony typically involves setting intentions, guided meditation, music, sharing circles, and the ceremonial consumption of cacao, which is believed to have heart-opening and mood-enhancing properties. It is often seen as a sacred and spiritual practice for self-reflection, emotional healing, and inner exploration.
10. **Do I need to bring anything to attend a yoga class?** — No, everything is supplied.
11. **Do your conduct yoga teacher training?** [sic] — Yes, we are currently developing our 2024 Yoga Teacher Training Courses. Please email us and we will keep you up to date with our offerings. ⚠ outdated (2024)
12. **How can I pay for my yoga class or event?** — We accept cash, bank transfer & wise.

Possibly outdated: Cacao Ceremony (Q7, Q9) and "Oracle cards + Tea" (Q5) don't appear in either current schedule. "Oracle cards + Tea" may be the "Oracle Cards + Coconuts" workshop under an older name.

---

## 9. SEO metadata

| Route | `<title>` | Meta description | Canonical | og:image |
|---|---|---|---|---|
| `/` | The Yoga Shala Lembongan \| Daily drop in yoga \| Bali | The Yoga Shala Lembongan offers daily drop in yoga classes & weekly sound journeys, monthly Cacao Ceremonies and private workshops. The yoga Shala is also available for rent for Yoga Teacher Trainings. | https://www.islandyogalembongan.com/ | none |
| `/home` | Daily Drop In Yoga \| The Yoga Shala Lembongan | (see §5) | /home | none |
| `/faq` | FAQ \| The Yoga Shala Lembongan | none | /faq | none |
| `/book-online` | Retreats \| Island Yoga Lembongan | none | /book-online | none |
| `/projects-6` | OMG oracle \| The Yoga Shala Lembo | none | /projects-6 | none |
| Service pages | `<Service name> \| The Yoga Shala Lembo` | = service description | self | service image (see 04) |
| `/booking-calendar` | `<Service> - The Yoga Shala Lembo` | — | — | — |

Other: `lang="en"`; JSON-LD `LocalBusiness` (name "Island Yoga Lembongan", tel +6281246186550, postalCode 80771, locality "Kabupaten Klungkung", region "BA", country "ID", image = legacy logo) and `WebSite` ("The Yoga Shala Lembo"). Google site verification meta present. Favicon = Wix default (`pfavico.ico`). robots.txt is the Wix default (allows all; disallows `?lightbox=`).

---

## 10. Content priority notes (for Phase 2 content planning, not rewrites)

| Priority | Content |
|---|---|
| **Essential** | 7 experiences with duration, capacity and price; weekly schedule (as HTML); booking routes (Viator for Hammock/Gong/Sound Journey, WhatsApp/phone for others); Sunrise Sanctuary Hammock 6am / 650k; contact (phone, WhatsApp, email, Instagram, address, map); opening hours; "What to expect" list; payment methods; day retreats with booking |
| **Important** | Testimonials (3, verbatim); OMG Oracle offerings with prices (mobile version is the most complete); FAQ (sound journey, gong, holiday yoga, booking questions); deck availability |
| **Consolidate** | Desktop and mobile copy variants (one source of truth); repeated "Your island reset starts here" (appears 3×); repeated "Send us a message / We'll get back to you shortly" (5×); duplicate cards + detail blocks for the same 3 sound experiences; 3 repeated FAQ headers |
| **Low priority / verify** | Cacao Ceremony references; 2024 Teacher Training; Vinyasa definition; "Magical Experiences / Worshops Retreats" slideshow; SEO claims about venue hire for YTT |
