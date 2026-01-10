# 技術ブログ 要件・実装状況整理

## 1. プロジェクト概要
Astro v5 をベースとした技術ブログ (`kollog`)。Cloudflare Pages にデプロイすることを前提とした構成。

## 2. 技術スタック
- **フレームワーク**: [Astro v5](https://astro.build/)
- **UIライブラリ**: [SolidJS](https://www.solidjs.com/)
- **スタイリング**: [Panda CSS](https://panda-css.com/), [kiso.css](https://github.com/koralle/kiso.css)
- **デプロイ・プラットフォーム**: Cloudflare (Pages / Workers)
- **ツール**: ESLint, Oxlint, Prettier, pnpm (monorepo)

## 3. 実装済み機能

### 記事管理 (Content Collections)
- MDX形式による記事執筆 (`src/content/articles/`)
- メタデータ管理 (タイトル、説明、公開日、更新日、タグ)
- タグの型安全な管理 (`src/data/tags.ts`)
- Shikiによるシンタックスハイライト (`catppuccin-frappe`)

### ページ構成
- **記事一覧 (`/page/[page]`)**: ページネーション付きの一覧表示。
- **記事詳細 (`/articles/[slug]`)**: MDXレンダリング、タグ、最終更新日の表示。
- **カテゴリー一覧 (`/categories/[id]/[page]`)**: タグ別の記事一覧。
- **Aboutページ (`/about`)**: 固定の自己紹介ページ。

### UIコンポーネント
- レスポンシブヘッダー (デスクトップ向けナビゲーション / モバイル向けドロワー)
- スタイリング済みMDXコンポーネント (見出し、リンク、引用、テーブル等)
- 共通ページネーションコンポーネント
- 日本語タイポグラフィの最適化 (Panda CSSでのグローバルスタイル設定)

### SEO・配信
- OGP / メタタグ対応 (`BaseHead.astro`)
- サイトマップ自動生成
- RSSフィード (`/rss.xml`) ※要修正

## 4. 現状の課題・未実装事項
- [ ] トップページ (`/`) がAstroスターターのままであり、独自コンテンツや最新記事一覧がない。
- [ ] RSSフィード (`src/pages/rss.xml.js`) のコレクション参照先が `blog` になっており、`articles` に修正が必要。
- [ ] 多くの記事コンテンツが「T.B.D」の状態。
- [ ] Cloudflare R2 / `workers/images` との具体的な連携実装。
