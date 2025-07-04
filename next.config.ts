import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { rehypePrettyCode } from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['tsx', 'mdx']
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode]],
    remarkPlugins: [remarkGfm]
  }
});
const wrappedNextConfig = withMDX(nextConfig);

export default wrappedNextConfig;
