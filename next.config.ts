import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/react-table' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-table/' : '',
};

export default nextConfig;
