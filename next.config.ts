import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { rehypePrettyCode } from 'rehype-pretty-code';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['tsx', 'mdx']
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode]]
  }
});
const wrappedNextConfig = withMDX(nextConfig);

export default wrappedNextConfig;
