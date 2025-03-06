import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL || `https://${process.env.VERCEL_URL}`,
  }
};
 
export default withNextIntl(nextConfig);
