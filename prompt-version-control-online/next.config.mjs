/** @type {import('next').NextConfig} */

const basePath = '/prompt-version-control-online'

const nextConfig = {
  basePath,
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" }],
  },
  transpilePackages: ["geist"],
};

export default nextConfig;
