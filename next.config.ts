import type { NextConfig } from "next";

const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.tassetta.com").trim().replace(/\/$/, "");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The free nexus study offer was dropped; booking a call is the single
      // conversion action now. Permanent so the old URL stops being indexed.
      { source: "/nexus-study", destination: "/book", permanent: true },
      // Log in opens the product. Temporary so a hostname change is not cached.
      { source: "/login", destination: appUrl, permanent: false },
    ];
  },
};

export default nextConfig;
