/** @type {import('next').NextConfig} */
const nextConfig = {
  // Error: Invalid src prop (https://links.papareact.com/xsi) on `next/image`, hostname "links.papareact.com" is not configured under images in your `next.config.js`
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      }
    ]
  }
};

export default nextConfig;
