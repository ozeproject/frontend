
/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {}

module.exports = {
  assetPrefix: isProduction ? '/sj3/' : '' ,
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
    // async redirects() {
    //   return [
    //     {
    //       source: '/',
    //       destination: '/sj3/home', // Your desired default path
    //       permanent: true,
    //     },
    //   ];
    // },
// Test images.
    images: { remotePatterns: [{ hostname: '**' }] },

    env: {
        firebaseApiKey: process.env.FIREBASE_API_KEY,
        firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
        firebaseStoageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.FIREBASE_APP_ID,
        REACT_APP_API_URL: process.env.REACT_APP_API_URL, 
    }
  };
  