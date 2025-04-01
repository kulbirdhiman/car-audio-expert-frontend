/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kayhanaudio.com.au",
      },
    ],
  },
};

module.exports = nextConfig;
