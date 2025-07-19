# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

これは Astro v5 で構築された技術ブログサイトです。MDX でコンテンツを管理し、Cloudflare Pages にデプロイされます。

### リポジトリ構造

pnpm workspaces を使用したモノレポ構造:
- `apps/web/` - メインのブログアプリケーション (Astro)
- `workers/images/` - 画像処理用 Cloudflare Worker (Hono)

## 必須コマンド

**注意**: ルートディレクトリでは直接実行できません。`cd apps/web` で移動してから実行してください。

### 開発 (apps/web ディレクトリで実行)

```bash
pnpm dev          # 開発サーバーを起動 (http://localhost:4321)
pnpm build        # プロダクションビルド
pnpm preview      # ビルド結果をローカルでプレビュー (Wrangler使用)
pnpm deploy       # Cloudflare Pages にデプロイ
```

### コード品質チェック (apps/web ディレクトリで実行)

```bash
pnpm check        # 全チェック実行（型チェック、フォーマット、リント）
pnpm typecheck    # TypeScript 型チェック (astro check)
pnpm format       # Prettier でフォーマット（pnpm run format:fix と同じ）
pnpm lint         # リントチェック（oxlint + eslint）
```

## アーキテクチャ

### コンテンツ管理

- **記事**: `apps/web/src/content/articles/` に MDX ファイルとして保存（現在31個のサンプル記事が存在）
- **スキーマ**: `apps/web/src/content/config.ts` で Zod スキーマによる型定義
- **タグ**: `apps/web/src/data/tags.ts` で定義し、記事で参照（現在定義済み: `nextjs`, `frontend`, `tanstack-query`, `typescript`, `astrojs`）

### ルーティング構造

```
/                                    # トップページ（記事一覧）
/page/[page]                        # ページネーション
/articles/[...slug]                 # 個別記事
/categories/[id]/[page]             # タグ別記事一覧（実装上はタグでフィルタ）
/about                              # About ページ
/rss.xml                           # RSS フィード
```

### 主要コンポーネント (apps/web/src/components/)

- `BaseHead.astro`: メタタグ管理
- `Pagination.astro`: ページネーション UI
- `Footer.astro`: フッター
- `FormattedDate.astro`: フォーマットした日付文字列
- `Header.astro`: ヘッダー
- `HeaderLink.astro`: ヘッダーリンク
- `MobileMenu.astro`: モバイルメニュー

### スタイリング

- Tailwind CSS v4 を使用（`apps/web/src/styles/global.css` で管理）
- kiso.css も導入済み（リセットCSS）

### ビルド設定

- **Astro**: `apps/web/astro.config.mts` - Cloudflare アダプター設定済み（サイトURL要更新）
- **TypeScript**: `apps/web/tsconfig.json` - strict モード有効
- **Wrangler**: `apps/web/wrangler.toml` - Cloudflare Pages デプロイメント設定

## 開発時の注意点

1. **新規記事の追加時**:
   - `apps/web/src/content/articles/` に MDX ファイルを作成
   - frontmatter は `apps/web/src/content/config.ts` のスキーマに従う
   - タグは `apps/web/src/data/tags.ts` に定義済みのものを使用

2. **コンポーネント開発時**:
   - Astro コンポーネント（`.astro`）を優先使用
   - Solid.js コンポーネントも利用可能
   - スタイルは Tailwind クラスまたはコンポーネント内 `<style>` タグで記述

3. **デプロイ前** (apps/web ディレクトリで実行):
   - `pnpm check` で全チェックをパス
   - `pnpm build` でビルドエラーがないことを確認

4. **環境変数**:
   - ローカル開発用は `.dev.vars` ファイルを作成
   - Cloudflare 環境変数は Wrangler または Dashboard で設定

## 現在の状態

### 実装済み

- ✅ 基本的なブログ機能（記事一覧、個別記事、ページネーション）
- ✅ 31個のサンプル記事（MDX形式）
- ✅ タグによるフィルタリング機能
- ✅ RSS フィード生成
- ✅ サイトマップ生成
- ✅ モバイル対応（レスポンシブデザイン）

### 未実装/要対応項目

- タグ一覧ページ（`/tags` ルート）
- astro.config.mts の site URL 更新（現在: 'https://example.com'）

## 参考資料を調べる

Webプラットフォーム上のドキュメントを参照する場合、以下の手順に従ってください。

1. まず `gemini` コマンドを以下の様に実行し、Gemini CLIを使って調べる。

```bash
gemini -p <プロンプト>
```

2. それがうまくいかない場合、自分で調べる

## Workers について

### Images Worker

`workers/images/` には画像処理用の Cloudflare Worker があります：
- Hono フレームワークを使用
- TypeScript で実装
- 独立したデプロイメントが可能（`pnpm deploy` で実行）
