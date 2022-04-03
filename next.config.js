/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/project',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
