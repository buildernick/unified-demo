import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.swell.store",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "algolia",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "burst.shopifycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shopifycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["isolated-vm"],
  },
};
export default async function config(phase) {
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }

  const [{ default: BuilderDevTools }, { withHydrationOverlay }] = await Promise.all([
    import("@builder.io/dev-tools/next"),
    import("@builder.io/react-hydration-overlay/next"),
  ]);

  return BuilderDevTools()(
    withHydrationOverlay({
      appRootSelector: "main",
    })(nextConfig)
  );
}
