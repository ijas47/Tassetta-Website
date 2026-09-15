import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The free nexus study offer was dropped; booking a call is the single
      // conversion action now. Permanent so the old URL stops being indexed.
      { source: "/nexus-study", destination: "/book", permanent: true },
    ];
  },
};

export default nextConfig;
