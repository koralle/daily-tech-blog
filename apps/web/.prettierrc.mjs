import PrettierConfig from '../../.prettierrc.mjs';

/* @type import("prettier").Config */
export default {
  ...PrettierConfig,

  // overrides
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
};
