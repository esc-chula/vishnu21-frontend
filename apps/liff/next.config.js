/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'esc.eng.chula.ac.th',
                port: '',
                pathname: '/clubs/static/**',
            },
        ],
        domains: ['carsup-bucket.s3.ap-southeast-1.amazonaws.com'],
    },
};

module.exports = nextConfig;
