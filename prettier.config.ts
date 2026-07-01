import type { Config } from 'prettier';

export default {
  bracketSameLine: false,
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true,
  trailingComma: 'none',

  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      options: {
        plugins: ['@prettier/plugin-oxc'],
        parser: 'oxc'
      }
    },
    {
      files: ['**/*.{ts,mts,cts,tsx}'],
      options: {
        plugins: ['@prettier/plugin-oxc'],
        parser: 'oxc-ts'
      }
    },
    {
      files: ['**/*.astro'],
      options: {
        plugins: ['prettier-plugin-astro'],
        parser: 'astro'
      }
    }
  ]
} satisfies Config;
