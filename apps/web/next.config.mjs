/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@gitanimals/ui'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.gitanimals.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
