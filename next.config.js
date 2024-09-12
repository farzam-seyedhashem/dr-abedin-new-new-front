/** @type {import('next').NextConfig} */
// const {i18n} = require('./next-i18next.config');

const nextConfig = {
  // i18n,
  reactStrictMode: false,
  images: {
    minimumCacheTTL: 31536000,
    domains: ["localhost","api.dr-abedin.com"],
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    imageSizes: [16, 32, 48, 64, 96, 105, 128, 256, 320, 375, 384, 414, 480, 720, 1080, 1920, 1240, 1400, 810, 440, 600, 721],
  },
}

module.exports = nextConfig
