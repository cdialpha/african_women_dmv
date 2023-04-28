/** @type {import('next').NextConfig} */

const repo = "african_women_dmv";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
