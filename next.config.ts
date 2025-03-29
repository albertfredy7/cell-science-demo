import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: ['cell-science.zubble.co', 'secure.gravatar.com'], // Add the hostname here
    },
    /* other config options here */
};

export default nextConfig;
