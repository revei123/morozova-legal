import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      { source: "/services/dogovornoe-pravo", destination: "/services/dogovory-i-dokumenty", permanent: true },
      { source: "/services/analiz-dokumentov", destination: "/services/dogovory-i-dokumenty", permanent: true },
      { source: "/practice/srok-v-dogovore", destination: "/practice/dogovor-i-perepiska", permanent: true },
      { source: "/practice/depozit-po-arende", destination: "/practice", permanent: true },
      { source: "/practice/ustnye-dogovorennosti", destination: "/practice/ustnye-usloviya", permanent: true },
      { source: "/practice/pretenziya-bez-dokazatelstv", destination: "/practice/pretenziya-bez-dat", permanent: true },
    ];
  },
};

export default nextConfig;
