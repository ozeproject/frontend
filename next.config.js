/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {}

module.exports = {
  assetPrefix: isProduction ? '/sj3' : '' ,
  
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // Your desired default path
          permanent: true,
        },
      ];
    },
// Test images.
    images: { remotePatterns: [{ hostname: '**' }] },
  };
  