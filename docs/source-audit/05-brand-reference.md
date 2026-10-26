# 05 — Brand Reference (Typography, Colour, Logo, Visual Identity)

Method: computed styles from the rendered DOM (`getComputedStyle`) across all pages and viewports, plus loaded `document.fonts`, network font requests, and pixel samples from screenshots. **Verified** = read from computed style or pixel sample. **Estimate** = derived or visual.

---

## 1. Brand identity status ⚠ needs a decision

The site uses **three overlapping names**:

| Name | Where |
|---|---|
| **Island Yoga & Sound Lembongan** | Visible header wordmark on every page (current, visible brand) |
| Island Yoga and Sound Lembongan | Footer |
| Island Yoga Lembongan | JSON-LD LocalBusiness, `/book-online` title, domain `islandyogalembongan.com`, map marker "Island Yoga" |
| The Yoga Shala Lembongan / "The Yoga Shala Lembo" | Page `<title>`s, og:site_name, copyright "©2022 by The Yoga Shala Lembongan.", email `welcomeyogashala@`, service descriptions |

**Logo:** the visible site has **no logo image**, only a text wordmark set in Cormorant Garamond Light. The only logo file found is a **legacy "The Yoga Shala — Wellness Events Retreats" logo** (`original-assets/images/abc95f_6476b388…png`, 1142×1119: white line arch + palm tree with coconuts, script "Shala", on orange **#D97D3E**). It is referenced only in JSON-LD and is never shown. Its orange appears nowhere in the current site palette.

→ Phase 2 must confirm with the client which name and mark to use. Until then, the visible current identity is the **text wordmark "Island Yoga & Sound Lembongan"**.

**Favicon:** Wix default (`static.parastorage.com/client/pfavico.ico`). No custom favicon or social share image exists for the homepage.

---

## 2. Typography (original site)

### 2.1 Font families found

| Family | Role | Evidence | Source |
|---|---|---|---|
| **Cormorant Garamond** (Wix "cormorantgaramond-light", 400 normal/italic + 700) | Wordmark, all headings, section titles, italic descriptions, testimonial byline, footer brand line, mobile body | Verified, 110 text nodes (D) / dominant on mobile | Google Font via Wix font cache |
| **Raleway** (400 normal/italic) | Body copy, nav, button labels, lists, FAQ answers, form, footer address/copyright | Verified, 353 text nodes (D) | Google Font via Wix font cache |
| Arial / Helvetica | "Visit Our Island Shala" heading (51px bold, black); button container defaults | Verified | System, **unintentional / off-brand** |
| Proxima Nova (`proxima-n-w01-reg`) | Wix Bookings widgets ("Our Retreats", service card text) | Verified | Wix widget default |
| Wix Madefor Display / Text | 404 page; booking widgets | Verified | Wix system |
| Playfair Display | One mobile text node ("We'll get back to you shortly") | Verified | Stray |
| Roboto | Google Maps UI | Verified | Third-party widget |
| Bree Thin Oblique | Declared in font list, never loaded | Verified (unloaded) | Template leftover |
| Schedule graphics | Geometric wide sans (desktop image), script + sans (mobile image) | Visual | Baked into images, not web fonts |

**Intentional brand pairing = Cormorant Garamond (serif display) + Raleway (sans body).** Everything else comes from widget defaults or mistakes.

No font files exist locally (empty workspace). Both brand fonts are free Google Fonts (OFL).

### 2.2 Type specimens (verified computed values, desktop 1440)

| Element | Family | Size | Weight / style | Line-height | Letter-spacing | Colour |
|---|---|---|---|---|---|---|
| Header wordmark | Cormorant Garamond Light | 40px | 400 | 54px | normal | #181818 |
| Nav links | Raleway | 14px | 400 | — | normal | #181818 (hover #222222; active/current #222222 D, #867711 in mobile menu) |
| Display heading "Choose Your Experience" | Cormorant Garamond Light | 82px | 400 | 115.6px | normal | #181818 |
| Display heading "What to expect" | Cormorant Garamond Light | 88px | 400 | 105.6px | normal | #181818 |
| "Loved by travellers…" | Cormorant Garamond Light | 72px | 400 | — | normal | #181818 |
| Hero lines "Your island reset starts here" | Cormorant Garamond Light | 40px | 400 | 54px | normal | #181818 |
| Experience block title (H5) | Cormorant Garamond Light | 37px | 400 | 49.6px | normal | #181818 |
| Experience description (H5 italic) | Cormorant Garamond Light | 32px (some 50px) | 400 italic | ~42.9px | normal | #181818 |
| Card titles (H2) | Cormorant Garamond Light | 28px | 400 | 38.5px | normal | #181818 |
| "Most popular" | Cormorant Garamond Light | 23px | 400 italic | 38.5px | normal | #181818 |
| FAQ question | Cormorant Garamond Light | 22px | 700 | 31.0px | normal | #181818 |
| Footer brand line | Cormorant Garamond Light | 22px | 400 | 31.0px | normal | #181818 |
| Card body / large body | Raleway | 20px | 400 | 33.4px | normal | #181818 |
| Testimonial text + byline | Raleway | 20px (byline), ~14–16px quote | 400 italic | 33.4px | normal | #181818 |
| FAQ answer | Raleway | 15px | 400 | 28.1px | normal | #181818 |
| Body (general) | Raleway | 14–16px | 400 | 19.6–24px | normal | #181818 / #525252 |
| Button label | Raleway | 15px | 400 | normal | **1.5px** | #FFFFFF |
| Footer address, copyright | Raleway | 14px | 400 | 25.1px | normal | #181818 |
| Muted text (form labels, etc.) | Raleway | 16px | 400 | 16–24px | normal | #8C8C8C |
| "Visit Our Island Shala" | Arial | 51px | 700 | normal | normal | #000000 (off-brand) |

Mobile (320px layout viewport): wordmark 20px/27px Cormorant; block titles 22px/700 Cormorant; body text mostly Cormorant italic (unlike desktop, where body is Raleway).

**Observed problems:** 8+ heading sizes with no consistent scale (17, 20, 22, 25, 28, 32, 33, 37, 40, 50, 56, 72, 82, 88px); heading tags chosen for size, not structure (H1 used for "Limited to 12 guests", H5 for section titles, H6 for subtitles); Cormorant Light at 14–16px on mobile is thin and hard to read.

### 2.3 Two-font rule for the redesign (requirement, not a selection)

The redesign must use **exactly two font families** site-wide (one for headings, one for body/UI). This audit **doesn't select them**. Options for the Phase 2 decision:

- **Continuity option:** Cormorant Garamond (headings) + Raleway (body/UI). This is the original pairing and keeps the brand recognisable. Caveat: Cormorant Light is too thin at small sizes, so use it only for headings ≥ 28px, at Regular/Medium weight.
- **Refined alternatives:** a sturdier serif for headings that keeps the Cormorant character (e.g. Cormorant at heavier weights, or a similar old-style serif) and a more readable humanist or grotesque sans for body. Any alternative must still read as a calm, elegant, natural brand.
- Widget fonts (Proxima Nova, Wix Madefor), Arial, Playfair and the script lettering in the schedule graphic must **not** be carried over.

---

## 3. Colour

### 3.1 Verified palette

| Role | HEX | Evidence | Notes |
|---|---|---|---|
| **Primary brand / CTA background** | **#867711** (rgb 134,119,17), olive/old gold | Verified, computed bg of all primary CTAs | Most distinctive brand colour |
| CTA hover | **#E4CC2B** (rgb 228,204,43), bright mustard | Verified, computed bg after hover (0.2s transition) | |
| Secondary CTA ("Send us a message") | #867711 @ 72% → **#A89D54** on white (pixel sample #AA9C53) | Verified (rgba) | Muted olive |
| Card tint 1 ("Hammock — Most popular") | **#EEDE75** (rgb 238,222,117), pale butter yellow | Verified | |
| Card tint 2 | #EEDE75 @ 51% → **≈ #F6EEB9** on white | Verified rgba; HEX computed | |
| Card tint 3 | #EEDE75 @ 34% → **≈ #F9F4D0** on white | Verified rgba; HEX computed | |
| Page background | **#FFFFFF** | Verified | All pages are white |
| Primary text / headings | **#181818** | Verified (349 nodes) | Near-black |
| Secondary text | **#525252** | Verified | |
| Muted text / placeholders | **#8C8C8C** | Verified | |
| Nav hover / current | #222222 | Verified | Barely different from #181818 |
| List bullet diamonds | ≈ #867711 (olive) | Visual | |
| Form submit button | #181818 bg, white label | Visual + computed bg | Wix form default |
| Map section band | **#08B7A3** teal (pixel #07B7A3) | Verified | Appears only here, **not part of the palette** |
| Mobile section bands | **#C5C5C5** grey | Verified | Mobile only; looks unintentional |
| Divider lines (cards, booking) | ≈ #181818 at low opacity / #E0E0E0 | Estimate | |
| Wix Bookings price pills / borders | ≈ #D9D9D9 borders | Estimate | Widget default |

### 3.2 Colours in imagery (incidental but on-brand)

- **Electric/royal blue** of the aerial hammocks (≈ #1E4FD8 to #2A6BFF, estimate): the most recognisable visual in the photography (video, hammock photos).
- Warm teak/brown decking, tropical greens, marigold orange offerings, white/cream crystal bowls.
- Schedule graphics use teal (#1FBFC4-ish), magenta, navy and blush pink (estimates). These are **graphic-design colours inside images, not site brand colours**.
- Legacy logo orange **#D97D3E** (verified pixel), old brand only.

### 3.3 Brand vs incidental

- **Brand:** olive #867711, mustard hover #E4CC2B, butter yellow #EEDE75 (and tints), near-black #181818, white, greys #525252 / #8C8C8C.
- **Incidental / do not carry over unless chosen deliberately:** teal #08B7A3 (single section), mobile grey #C5C5C5, Arial black heading, Wix widget greys, schedule-graphic colours, legacy orange.

---

## 4. Other visual identity elements

| Element | Observation |
|---|---|
| Logo placement | Text wordmark centred at top (D), centred 2-line (M). No mark/icon. |
| Layout language | Centred, single column, ~940–1184px content width, lots of white space; some two-column splits (`/home`, `/projects-6`). |
| Shape language | **Square corners everywhere** (border-radius 0 on buttons, cards, images). |
| Shadows / depth | None. Flat. |
| Image treatment | Full-colour, warm, natural light, unfiltered phone photography; wide 2.14:1 crops (1184×553) for experience blocks; one square crop; black letterbox around the video. Some images edited/cropped heavily; several low-res. |
| Icons | Only Wix stock Instagram glyphs and olive diamond bullets. No icon system. |
| Decorative motifs | Thin horizontal rules under card titles; diamond bullets; dash-prefixed lists ("-60 minutes"). |
| Background treatments | White; yellow card tints; one teal band; grey bands on mobile. |
| Motion | Autoplay hero video; Wix default fade-ins (not individually verified); slideshow on `/home`; 0.2s button hover transition. |
| Tone & personality | Calm, spiritual, feminine, island-holiday, welcoming. Copy is warm and informal ("Yes please !"), with frequent typos. Key phrases: "Your island reset starts here", "Sound Healing · Stillness · Dance", "Lembongan's signature hammock sound experiences". |

### Identity to preserve in Phase 2
1. Olive/old-gold + butter yellow on white, with near-black text.
2. Elegant serif display headings and a clean sans body.
3. The **blue hammocks + teak shala + tropical garden** photography and video as the hero visual.
4. Taglines: "Your island reset starts here", "Sound Healing · Stillness · Dance".
5. A calm, uncluttered, square-edged aesthetic.

### Not to carry over
Arial heading, teal band, grey mobile bands, inconsistent heading scale, widget fonts, text-in-image schedule, black video letterboxing, upscaled low-res images, empty half-width columns.
