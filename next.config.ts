import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['tsx', 'mdx']
};

const withMDX = createMDX();
const wrappedNextConfig = withMDX(nextConfig);

export default wrappedNextConfig;
