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
    images: {
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 'assets.official-goods-store.jp',
      //     port: '',
      //     // pathname: '/product/ZMY331/73312b93dcc83560f54d904c71be419751a1ee6838303d15cd6b83b876b7f168.jpg',
      //   },
      // ],
      domains: ["assets.official-goods-store.jp"],
      formats: ["image/webp"]
    },
  };
  