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
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
        ],
        domains: [
            'profile.line-scdn.net',
            'picsum.photos',
            'esc.eng.chula.ac.th',
        ],
    },
};

module.exports = nextConfig;
