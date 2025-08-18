import { defineGlobalStyles } from '@pandacss/dev';

export const globalStyles = defineGlobalStyles({
  ':where(html)': {
    '--global-font-body': 'fonts.sans',
    '--global-font-mono': 'fonts.mono',
    backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-100) 50%, transparent)',

    // 東アジアの文字の字形を可変幅で表示する
    // https://ics.media/entry/250401/#font-variant-east-asian
    fontVariantEastAsian: 'proportional-width',

    // 行ボックスに収まらない時に折り返すかどうか
    // https://ics.media/entry/240411/#overflow-wrap
    overflowWrap: 'anywhere',

    // 禁則処理
    // https://ics.media/entry/240411/#line-break
    lineBreak: 'strict'
  },
  ':where(html:lang(ja))': {
    // 文字内の単語がどの位置で折り返されるかを指定する
    // https://ics.media/entry/240411/#word-break
    wordBreak: 'auto-phrase'
  },
  ':where(pre:not(.astro-code), code, kbd, samp)': {
    overflowWrap: 'normal',
    wordBreak: 'normal'
  },
  ':where(pre:not(.astro-code), :not(pre) > code, kbd, samp)': {
    overflowWrap: 'normal',
    wordBreak: 'normal'
  },
  ':where(.astro-code)': {
    padding: 'calc(var(--spacing-unit) * 8)',
    rounded: '8'
  }
});
