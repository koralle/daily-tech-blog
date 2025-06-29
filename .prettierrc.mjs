/* @type import("prettier").Config */
export default {
  bracketSameLine: false,
  printWidth: 120,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',

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
    }
  ]
};
