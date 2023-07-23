/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            's3.us-west-2.amazonaws.com',
            's3-us-west-2.amazonaws.com',
            'www.notion.so',
            'lh3.googleusercontent.com',
            'images.unsplash.com',
            'lh6.googleusercontent.com',
            'lh4.googleusercontent.com',
            'profile.line-scdn.net',
        ],
    },
};

module.exports = nextConfig;
