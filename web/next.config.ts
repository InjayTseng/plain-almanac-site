import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "toolbox.marketingtools.apple.com", pathname: "/api/v2/badges/**" }],
  },
};

export default nextConfig;
