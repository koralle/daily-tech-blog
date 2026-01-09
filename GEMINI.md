# GEMINI.md

## プロジェクト概要

このプロジェクトは、koralleが日常的に利用する技術ブログです。

## プロジェクト構成

このプロジェクトはmonorepo構成になっています。

* `apps/web`: 技術ブログの本体です。
* `workers/images`: Cloudflare R2に保存した画像を取得してブログに渡すためのWorkerです。

## Getting Started

### 依存関係のインストール

```
pnpm install
```

### 技術ブログ（`apps/web`）の起動

```
cd apps/web
pnpm run dev
```

### Worker（`worker/images`）の起動

```
cd workers/images
pnpm run dev
```
