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
        destination: 'https://solution.printcart.com/top-7-t-shirt-niche-list-and-print-on-demand-product-ideas',
        permanent: false,
      },
      {
        source: '/5-tips-to-succeed-in-an-online-printing-business',
        destination: 'https://solution.printcart.com/5-tips-to-succeed-in-an-online-printing-business',
        permanent: false,
      },
      {
        source: '/the-most-popular-print-on-demand-product-2020',
        destination: 'https://solution.printcart.com/the-most-popular-print-on-demand-product-2020',
        permanent: false,
      },
      {
        source: '/6-things-you-should-know-about-print-on-demand-pod',
        destination: 'https://solution.printcart.com/6-things-you-should-know-about-print-on-demand-pod',
        permanent: false,
      },
      {
        source: '/6-tips-to-increase-dramatically-profits-for-your-t-shirt-business',
        destination: 'https://solution.printcart.com/6-tips-to-increase-dramatically-profits-for-your-t-shirt-business',
        permanent: false,
      },
      {
        source: '/promoting-online-printing-designs-on-instagram',
        destination: 'https://solution.printcart.com/promoting-online-printing-designs-on-instagram',
        permanent: false,
      },
      {
        source: '/start-a-print-on-demand-t-shirt-business',
        destination: 'https://solution.printcart.com/start-a-print-on-demand-t-shirt-business',
        permanent: false,
      },
    ]
  },
};

module.exports = withPlugins([], nextConfig);

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
