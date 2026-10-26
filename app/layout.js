import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const title = "Island Yoga & Sound Lembongan | Hammock sound healing, yoga & dance";
const description =
  "Hammock sound healing, gong relaxation, sound journeys, drop-in yoga and flow dance in an open-air shala in Jungutbatu, Nusa Lembongan. Day retreats and OMG Oracle sessions on request.";

export const metadata = {
  metadataBase: new URL("https://www.islandyogalembongan.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Island Yoga & Sound Lembongan",
    title,
    description,
    locale: "en",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A sound healing facilitator with a hand gong beside blue aerial hammocks",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: an inline script adds the "motion" class before hydration
    <html lang="en" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
