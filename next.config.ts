import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1"],
  basePath: isProduction ? "/Foodplanner" : "",
  assetPrefix: isProduction ? "/Foodplanner/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
