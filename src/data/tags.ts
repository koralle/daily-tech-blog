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
  }
] as const;

// 型安全なタグID
export type TagId = (typeof TAGS)[number]['id'];

// IDからタグを取得するマップ
const tagMap = new Map(TAGS.map((tag) => [tag.id, tag]));

/**
 * タグIDからタグ情報を取得
 * @param id タグID
 * @returns タグ情報（見つからない場合はundefined）
 */
export function getTagById(id: string): Tag | undefined {
  return tagMap.get(id);
}

/**
 * 全てのタグIDを取得
 * @returns タグIDの配列
 */
export function getAllTagIds(): string[] {
  return TAGS.map((tag) => tag.id);
}

/**
 * タグIDの検証
 * @param id 検証するID
 * @returns 有効なタグIDかどうか
 */
export function isValidTagId(id: string): id is TagId {
  return tagMap.has(id);
}
