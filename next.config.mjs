import withPlaiceholder from '@plaiceholder/next';
import withImages from 'next-images';
/** @type {import('next').NextConfig} */

const nextConfig = withImages({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
    path: '/_next/image',
    loader: 'default',
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: true,
  },
  swcMinify: true,
});

export default withPlaiceholder(nextConfig);
