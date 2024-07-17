import withPlaiceholder from '@plaiceholder/next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|ico|webp|avif)$/i,
        use: ['url-loader'],
      },
    );

    return config;
  },
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
};

export default withPlaiceholder(nextConfig);
