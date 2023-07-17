/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        domains: ['carsup-bucket.s3.ap-southeast-1.amazonaws.com'],
    },
};

module.exports = nextConfig;
