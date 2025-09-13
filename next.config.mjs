/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'enterthegungeon.wiki.gg',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
