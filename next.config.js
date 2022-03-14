const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
  },
  async redirects() {
    return [
      {
        source: '/top-7-t-shirt-niche-list-and-print-on-demand-product-ideas',
        destination: '/',
        permanent: false,
      },
    ]
  },
};

module.exports = withPlugins([], nextConfig);
