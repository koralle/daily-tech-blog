# Astro v6 アップグレード計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Astro 5.16.8 → 6.3.6 にアップグレードし、関連する @astrojs/\* パッケージも最新化する

**Architecture:** Astro + Panda CSS + Preact + Cloudflare Pages。モノレポ（pnpm workspace）構成。主要な破壊的変更の影響範囲は限定的で、多くはパッケージバージョン更新のみで対応可能。

**Tech Stack:** Astro 6.3.6, Panda CSS 1.4.2, Preact 10.28.3, Cloudflare Workers/Pages, pnpm

---

### Task 1: パッケージバージョン更新

**Files:**

- 修正: `apps/web/package.json`
- 修正: `package.json`（ルート）

- [ ] **Step 1: `apps/web/package.json` の dependencies を更新**

```jsonc
// 変更前 → 変更後
"@astrojs/cloudflare": "12.6.12" → "13.5.3"
"@astrojs/mdx": "4.3.13" → "5.0.6"
"@astrojs/rss": "4.0.14" → "4.0.18"
"@astrojs/sitemap": "3.6.1" → "3.7.2"
"astro": "5.16.8" → "6.3.6"
```

- [ ] **Step 2: `apps/web/package.json` の devDependencies を更新**

```jsonc
"@astrojs/check": "0.9.6" → "0.9.9"
"@astrojs/preact": "4.1.3" → "5.1.3"
"@astrojs/ts-plugin": "1.10.6" → "1.10.9"
```

- [ ] **Step 3: ルート `package.json` の wrangler を更新**

```jsonc
"wrangler": "4.43.0" → "4.83.0"
```

- [ ] **Step 4: 依存関係インストール**

```bash
pnpm install
```

- [ ] **Step 5: Panda CSS codegen 再実行**

```bash
pnpm --filter @daily-tech-blog/web run prepare
```

- [ ] **Step 6: コミット**

```bash
git add apps/web/package.json package.json pnpm-lock.yaml
git commit -m "chore: bump astro to v6.3.6 and update integrations"
```

---

### Task 2: コンテンツコレクション型確認

**Files:**

- 確認: `apps/web/src/content/config.ts`
- 確認: `apps/web/.astro/types.d.ts`（自動生成）

- [ ] **Step 1: 型チェック実行**

```bash
pnpm --filter @daily-tech-blog/web run typecheck
```

期待結果: エラーなし。Astro v6 では `zod-to-ts` による型生成が廃止されスキーマから直接推論されるが、ビルトイン `glob` ローダー + `defineCollection` パターンは互換性あり。

---

### Task 3: Markdown heading ID 確認

**Files:**

- 確認: `apps/web/src/content/articles/*.mdx`

- [ ] **Step 1: 見出し内リンクを検索**

```bash
rg '\[.*\]\(#.*-\)' apps/web/src/content/articles/
```

期待結果: マッチなし（日本語記事中心のため特殊文字を含む見出しはほぼない）。

---

### Task 4: ビルド検証

- [ ] **Step 1: フルビルド**

```bash
pnpm --filter @daily-tech-blog/web run build
```

期待結果: `[build] Complete!`。全ページが正常に生成されること。

- [ ] **Step 2: 型チェック + リント + フォーマット**

```bash
pnpm --filter @daily-tech-blog/web run check
```

期待結果: 全チェック通過。

- [ ] **Step 3: コミット（必要な修正があれば）**

```bash
git add -A
git commit -m "fix: resolve astro v6 migration issues"
```
