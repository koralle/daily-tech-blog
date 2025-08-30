/**
 * タグの定義
 * - id: URL安全な識別子（英数字とハイフンのみ）
 * - displayName: 画面表示用の名前
 * - description: タグの説明（オプション）
 * - icon: アイコン名（オプション）
 */
export interface Tag {
  id: string;
  displayName: string;
  description?: string;
}

/**
 * 全てのタグ定義
 * 新しいタグを追加する場合はここに追加する
 */
export const TAGS: readonly Tag[] = [
  {
    id: 'nextjs',
    displayName: 'Next.js',
    description: 'The React Framework for Production'
  },
  {
    id: 'frontend',
    displayName: 'フロントエンド',
    description: 'フロントエンド開発に関する記事'
  },
  {
    id: 'tanstack-query',
    displayName: 'TanStack Query',
    description: 'Powerful asynchronous state management for React'
  },
  {
    id: 'typescript',
    displayName: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript'
  },
  {
    id: 'astrojs',
    displayName: 'Astro',
    description: 'Build fast websites, faster'
  },
  {
    id: 'uiux',
    displayName: 'UI/UX',
    description: 'UX/UXデザインに関するあれこれ'
  },
  {
    id: 'nix',
    displayName: 'Nix',
    description: '純粋関数型パッケージマネージャであるNixに関するあれこれ'
  },
  {
    id: 'nixos',
    displayName: 'NixOS',
    description: 'NixをベースとしたLinuxディストリビューションであるNixOSについて'
  },
  {
    id: 'neovim',
    displayName: 'Neovim',
    description: '最強のテキストエディタであるNeovimについて'
  },
  {
    id: 'react',
    displayName: 'React',
    description: 'ユーザーインターフェースを構築するためのJavaScriptライブラリ'
  },
  {
    id: 'solidjs',
    displayName: 'SolidJS',
    description: 'ユーザーインターフェースを構築するための宣言的なJavaScriptライブラリ'
  },
  { id: 'vue', displayName: 'Vue', description: 'プログレッシブJavaScriptフレームワーク' },
  { id: 'svelte', displayName: 'Svelte', description: 'サイバネティックに強化されたWebアプリ' },
  {
    id: 'tanstack-router',
    displayName: 'Tanstack Router',
    description: 'ファーストクラスの検索パラメータAPIを備えた、完全に型安全なルーター'
  },
  {
    id: 'git',
    displayName: 'Git',
    description: '無料のオープンソース分散バージョン管理システム'
  },
  {
    id: 'github',
    displayName: 'GitHub',
    description: 'Gitを使用したソフトウェア開発とバージョン管理のためのインターネットホスティングプロバイダー'
  },
  {
    id: 'dependabot',
    displayName: 'Dependabot',
    description: 'Dependabotに関するあれこれ'
  },
  { id: 'pnpm', displayName: 'pnpm', description: 'pnpmに関するあれこれ' },
  {
    id: 'rust',
    displayName: 'Rust',
    description: 'Rustに関するあれこれ'
  },
  {
    id: 'github-actions',
    displayName: 'GitHub Actions',
    description: 'GitHub Actionsに関するあれこれ'
  },
  { id: 'security', displayName: 'セキュリティ', description: 'Webセキュリティに関するあれこれ' },
  { id: 'network', displayName: 'ネットワーク', description: 'ネットワークに関するあれこれ' },
  {
    id: 'vitest',
    displayName: 'Vitest',
    description: 'Vitestに関するあれこれ'
  },
  {
    id: 'storybook',
    displayName: 'Storybook',
    description: 'Storybookに関するあれこれ'
  },
  { id: 'algorithm', displayName: 'アルゴリズム', description: 'アルゴリズムに関するあれこれ' },
  { id: 'database', displayName: 'データベース', description: 'データベースに関するあれこれ' },
  { id: 'system-design', displayName: 'システムデザイン', description: 'システムデザインに関するあれこれ' },
  { id: 'aws', displayName: 'AWS', description: 'アマゾンウェブサービス' },
  {
    id: 'http',
    displayName: 'HTTP',
    description: 'HTTPプロトコル及び関連する技術に関するあれこれ'
  },
  {
    id: 'web',
    displayName: 'Web',
    description: 'Web技術全般に関するあれこれ'
  },
  {
    id: 'ghostty',
    displayName: 'Ghostty',
    description: 'Ghosttyに関するあれこれ'
  },
  {
    id: 'macos',
    displayName: 'macOS',
    description: 'macOSに関するあれこれ'
  },
  {
    id: 'oxlint',
    displayName: 'Oxlint',
    description: 'Oxlintに関するあれこれ'
  }
] as const;

// 型安全なタグID
export type TagId = (typeof TAGS)[number]['id'];

// IDからタグを取得するマップ
const tagMap = new Map(TAGS.map((tag) => [tag.id, tag]));

/**
 * タグIDからタグ情報を取得
 * @param {string} id タグID
 * @returns {Tag|undefined} タグ情報（見つからない場合はundefined）
 */
export const getTagById = (id: string): Tag | undefined => tagMap.get(id);

/**
 * 全てのタグIDを取得
 * @returns {string[]} タグIDの配列
 */
export const getAllTagIds = (): string[] => TAGS.map((tag) => tag.id);

/**
 * タグIDの検証
 * @param {string} id 検証するID
 * @returns {boolean} 有効なタグIDかどうか
 */
export const isValidTagId = (id: string): id is TagId => tagMap.has(id);
