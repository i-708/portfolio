/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && "/portfolio/",
  assetPrefix: process.env.GITHUB_ACTIONS && "/portfolio/",
  trailingSlash: true,
}

module.exports = nextConfig
