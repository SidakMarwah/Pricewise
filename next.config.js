// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        domains: ['m.media-amazon.com']
    }
}

module.exports = nextConfig