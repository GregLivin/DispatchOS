import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DispatchOS",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
