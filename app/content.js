// Single source of content for the page. Everything here is taken from the
// Phase 1 audit (docs/source-audit). Disputed facts (see 08-issues-gaps-questions.md)
// are deliberately left out rather than guessed.

export const site = {
  name: "Island Yoga & Sound Lembongan",
  url: "https://www.islandyogalembongan.com",
  phoneDisplay: "+62 812-4618-6550",
  phoneHref: "tel:+6281246186550",
  email: "welcomeyogashala@gmail.com",
  instagram: "https://www.instagram.com/islandyogalembongan/",
  address: "Jungutbatu, Nusa Lembongan, Klungkung Regency, Bali 80771",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=-8.6654423%2C115.4504047",
};

export function whatsapp(message) {
  const base = "https://wa.me/6281246186550";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const viator = {
  hammock: "https://www.viator.com/tours/Nusa-Lembongan/Hammock-Soundscape-Float/d23621-389826P3",
  gong: "https://www.viator.com/tours/Nusa-Lembongan/Gong-Relaxation-on-Nusa-Lembongan/d23621-389826P2",
  soundJourney:
    "https://www.viator.com/tours/Nusa-Lembongan/Sound-Journey-relaxation-on-the-Island-of-Nusa-Lembongan/d23621-389826P1",
};

export const nav = [
  { href: "#experiences", label: "Experiences" },
  { href: "#schedule", label: "Schedule" },
  { href: "#retreats", label: "Retreats" },
  { href: "#oracle", label: "Oracle" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const expectations = [
  "Arrive 15 minutes early",
  "Small, intimate groups (max 12 guests for hammock)",
  "No experience needed",
  "All mats and props provided",
  "Suitable for all levels",
];

export const soundSessions = [
  {
    name: "Sound Journey",
    image: "sound-journey",
    alt: "The open-air shala set for a sound journey with mats, bolsters, blankets and gongs",
    text: "A guided journey through the chakras with sound and vibration, designed to calm the mind and bring you back into balance.",
    facts: ["60 minutes", "Up to 20 guests", "300k"],
    action: { label: "Book on Viator", href: viator.soundJourney, external: true },
  },
  {
    name: "Gong Sound Relaxation",
    image: "gong",
    alt: "A large gong and crystal singing bowls set out on a rug on the shala deck",
    text: "Immersive gong vibrations calm the nervous system, release tension and restore inner balance.",
    facts: ["60 minutes", "Up to 15 guests", "250k"],
    action: { label: "Book on Viator", href: viator.gong, external: true },
  },
];

export const movement = [
  {
    name: "Island Yoga",
    text: "Gentle, feel-good yoga designed to help you reconnect with your body on holiday. Holiday Hatha and Gentle Yoga classes are drop-in.",
    facts: ["60 minutes", "Up to 25 guests", "200k"],
  },
  {
    name: "Flow Dance Meditation",
    text: "A guided movement journey to release, reconnect and return to your natural flow.",
    facts: ["60 minutes", "Up to 25 guests", "200k"],
  },
  {
    name: "Silent Disco & Ecstatic Groove",
    text: "A sunset dance journey with headphones, flowing from the shala to the beach under the open sky.",
    facts: ["60 minutes", "Up to 50 guests", "Private bookings"],
    action: { label: "Ask about a private Silent Disco", message: "Hi, I'd like to ask about booking a private Silent Disco." },
  },
];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Only sessions that appear identically on BOTH source timetables are listed.
// The newer image adds Thu 8:00am and Sun 5:00pm sessions; those are unconfirmed (audit A2).
export const schedule = [
  { time: "10:00am", sessions: { Mon: "Holiday Hatha Yoga", Tue: "Holiday Hatha Yoga", Wed: "Holiday Hatha Yoga", Fri: "Holiday Hatha Yoga", Sat: "Holiday Hatha Yoga" } },
  { time: "12:00pm", sessions: Object.fromEntries(days.map((d) => [d, "Hammock Sound Healing"])), highlight: true },
  { time: "1:30pm", sessions: { Mon: "Oracle Discovery Experience", Wed: "Oracle Discovery Experience" }, note: "Pre-book" },
  { time: "4:30pm", sessions: { Tue: "Gentle Yoga" } },
  { time: "5:00pm", sessions: { Mon: "Gong Sound Relaxation", Wed: "Hammock Sound Healing", Thu: "Sound Journey" } },
  { time: "6:00pm", sessions: { Tue: "Sunset Flow Dance" } },
];

export const prices = [
  ["Hammock Sound Healing", "400k"],
  ["Sound Journey", "300k"],
  ["Gong Sound Relaxation", "250k"],
  ["Yoga", "200k"],
  ["Flow Dance", "200k"],
  ["Yoga & Dance 3-class pass", "450k"],
  ["Sunrise Sanctuary Hammock", "650k pp"],
];

// Prices shown in Wix Bookings ("Rp 250" to "Rp 950") are unconfirmed (audit A3), so none are shown.
export const retreats = [
  {
    name: "Holiday Yoga & Sound Day Retreat",
    duration: "Full day (9 hours)",
    image: "retreat-holiday",
    alt: "A yoga class holding a lunge in the open-air shala",
    text: "Morning Vinyasa, a Hammock Soundscape, a café break, pre-sunset Yin, then Gong or Sound Journey.",
  },
  {
    name: "Mini Relaxation Day Retreat",
    duration: "Afternoon (4 hours)",
    image: "retreat-mini",
    alt: "A guest sitting cross-legged on a bolster in the shala",
    text: "A massage hour, restorative Yin Yoga, then a soothing Gong or Sound Journey.",
  },
  {
    name: "Restore & Pamper Day Retreat",
    duration: "Afternoon (3.5 hours)",
    image: "retreat-restore",
    alt: "A guest lying down with a Tibetan singing bowl resting on the abdomen",
    text: "Gentle Yin Yoga, then a two-hour Goddess treatment: massage, body scrub and flower bath.",
  },
  {
    name: "Mermaid & Yoga Half-Day Retreat",
    duration: "Half day (3.5 hours)",
    image: "retreat-mermaid",
    alt: "A beach set-up with crystal singing bowls and a guest meditating by the sea",
    text: "A two-hour snorkel drift adventure plus a 60-minute yoga class. Minimum two guests.",
  },
];

export const oracle = [
  {
    name: "Group Oracle Experience",
    text: "A guided session where you connect inward, receive guidance and learn to read your own cards in a relaxed, supportive space.",
    facts: ["Mon & Wed 1:30pm", "60 minutes", "Up to 12 guests", "450k pp"],
    message: "Hi, I'd like to book the Group Oracle Experience.",
  },
  {
    name: "Private Oracle Experience",
    text: "A personalised one-on-one session offering intuitive guidance while teaching you to trust and read your own cards.",
    facts: ["60 minutes", "Private setting", "750k"],
    message: "Hi, I'd like to book a Private Oracle Experience.",
  },
  {
    name: "OMG Blessing Ritual",
    text: "A private, immersive ritual to connect, activate and bless your oracle deck, weaving together gentle sound, intention and ceremony.",
    facts: ["90 minutes", "Includes your OMG Oracle deck", "Ask for pricing"],
    message: "Hi, I'd like to ask about the OMG Blessing Ritual and its current price.",
  },
];

// Reviews with a single, unambiguous source. The "Nancy" review is omitted:
// its date differs between the desktop and mobile versions (audit A8).
export const reviews = [
  {
    quote: "Being weightlessly cocooned in the hammock while sound vibrations were above, around, and below me was so powerful.",
    name: "Megan",
    date: "1/1/26",
  },
  {
    quote: "A must-do in Nusa Lembongan. Deeply relaxing and something completely different.",
    name: "Daniel",
    date: "11/2/25",
  },
];

export const faqs = [
  {
    q: "Do I need to book yoga classes?",
    a: "No. Our yoga classes are drop-in: arrive at the shala shortly before class and pay a single session fee or use a class pass.",
  },
  {
    q: "Do I need to book sound sessions?",
    a: "Yes, we recommend reserving your space for Hammock Sound Healing, Gong Relaxation and Sound Journeys. The 6:00am Sunrise Sanctuary Hammock is booking only.",
  },
  {
    q: "What is the difference between a Sound Journey and a Gong session?",
    a: "A Sound Journey uses a range of instruments, such as singing bowls, gongs, drums and chimes, to create a calming sonic environment. A Gong session focuses on the deep, layered vibrations of the gongs to help release tension and bring a sense of calm.",
  },
  {
    q: "What is Holiday Yoga?",
    a: "A combination of Hatha and Vinyasa yoga, welcoming complete beginners, people restarting a forgotten practice and experienced yogis alike.",
  },
  {
    q: "Do I need to bring anything?",
    a: "No, everything is supplied.",
  },
  {
    q: "How can I pay?",
    a: "We accept cash, bank transfer and Wise.",
  },
];
