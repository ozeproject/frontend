/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // Your desired default path
          permanent: true,
        },
      ];
    },
  };
  