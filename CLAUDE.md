# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

これは Astro v5 で構築された技術ブログサイトです。MDX でコンテンツを管理し、Cloudflare Pages にデプロイされます。

## 必須コマンド

### 開発

```bash
pnpm dev          # 開発サーバーを起動 (http://localhost:4321)
pnpm build        # プロダクションビルド
pnpm preview      # ビルド結果をローカルでプレビュー (Wrangler使用)
pnpm deploy       # Cloudflare Pages にデプロイ
```

### コード品質チェック

```bash
pnpm check        # 全チェック実行（型チェック、フォーマット、リント）
pnpm typecheck    # TypeScript 型チェック
pnpm format       # Prettier でフォーマット（pnpm run format:fix と同じ）
pnpm lint         # リントチェック（oxlint + eslint）
```

## アーキテクチャ

### コンテンツ管理

- **記事**: `src/content/articles/` に MDX ファイルとして保存（ディレクトリ要作成）
- **スキーマ**: `src/content/config.ts` で Zod スキーマによる型定義
- **タグ**: `src/data/tags.ts` で定義し、記事で参照

### ルーティング構造

```
/                                    # トップページ（記事一覧）
/page/[page]                        # ページネーション
/articles/[...slug]                 # 個別記事
/categories/[id]/[page]             # タグ別記事一覧（実装上はタグでフィルタ）
/about                              # About ページ
/rss.xml                           # RSS フィード
```

### 主要コンポーネント

- `BaseHead.astro`: メタタグ管理
- `Pagination.astro`: ページネーション UI
- `Footer.astro` フッター
- `FormattedDate.astro` フォーマットした日付文字列
- `Header.astro` ヘッダー
- `HeaderLink.astro` ヘッダーリンク
- `MobileMenu.astro` モバイルメニュー

### スタイリング

Tailwind CSS v4 を使用。設定は `src/styles/global.css` で管理。

### ビルド設定

- **Astro**: `astro.config.mts` - Cloudflare アダプター設定済み
- **TypeScript**: `tsconfig.json` - strict モード有効
- **Wrangler**: `wrangler.toml` - Cloudflare デプロイメント設定

## 開発時の注意点

1. **新規記事の追加時**:
   - まず `src/content/articles/` ディレクトリを作成（未作成の場合）
   - `src/content/articles/` に MDX ファイルを作成
   - frontmatter は `src/content/config.ts` のスキーマに従う
   - タグは `src/data/tags.ts` に定義済みのものを使用

2. **コンポーネント開発時**:
   - Astro コンポーネント（`.astro`）を優先使用
   - スタイルは Tailwind クラスまたはコンポーネント内 `<style>` タグで記述

3. **デプロイ前**:
   - `pnpm check` で全チェックをパス
   - `pnpm build` でビルドエラーがないことを確認

## 現在の状態

### 未実装/要作成項目

- `src/content/articles/` ディレクトリ（記事配置用）
- 実際の記事コンテンツ（MDX ファイル）
- タグ一覧ページ（`/tags` ルート）

4. **環境変数**:
   - ローカル開発用は `.dev.vars` ファイルを作成
   - Cloudflare 環境変数は Wrangler または Dashboard で設定

## 参考資料を調べる

Webプラットフォーム上のドキュメントを参照する場合、以下の手順に従ってください。

1. まず `gemini` コマンドを以下の様に実行し、Gemini CLIを使って調べる。

```bash
gemini -p <プロンプト>
```

2. それがうまくいかない場合、自分で調べる
