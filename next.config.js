/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    assetPrefix: '/sj3' ,
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
  