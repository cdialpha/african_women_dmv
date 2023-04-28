/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: "export",
  basePath: "https://cdialpha.github.io/african_women_dmv/",
  trailingSlash: true,
};

module.exports = nextConfig;
