/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: false,
  env: {
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    APP_ENV: process.env.APP_ENV,
    APP_VERSION: process.env.APP_VERSION,
    API_BASE_URL: process.env.API_BASE_URL,
  },
});
