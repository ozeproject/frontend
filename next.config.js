/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          basePath: '/sj3/',
          source: '/',
          destination: '/home', // Your desired default path
          permanent: true,
        },
      ];
    },
  };
  