/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        loader: "akamai",
        path: "",
    },
    // Add basePath
    basePath: '/portofolio-next',
    assetPrefix: '/portofolio-next'
}

module.exports = nextConfig
