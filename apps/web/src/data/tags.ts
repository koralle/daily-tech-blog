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
