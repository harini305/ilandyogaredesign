/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-optimised locally (scripts/optimize-images.mjs); skip Vercel Image Optimization.
  images: { unoptimized: true },
  poweredByHeader: false,

  // Let browsers keep static assets instead of re-checking them with the CDN on every visit.
  // Image files are never edited in place: if a photo changes, re-run the script so it gets a new name.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/icon.svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
};

export default nextConfig;
