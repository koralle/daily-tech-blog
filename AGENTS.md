# AGENTS.md

## Summary

[koralle](https://github.com/koralle)の技術ブログ。  
[Astro](https://astro.build/) + [Panda CSS](https://panda-css.com/)で作っている。

## Codebase structure

### Monorepo Overview

This is a monorepo managed by pnpm, which includes websites and related workers.

## Rules

When performing one of the actions below, read the linked rule first.

- Creating branches:
  - [Branch Rules](.agents/rules/branch.md)
- Creating commits:
  - [Commit Rules](.agents/rules/commit.md)
  - [Pre-commit Hooks](.agents/references/pre-commit-hooks.md)

```
apps/
└─ web/    # Websites
workers/
└─ images/ # T.B.D
```

### Package Shortcuts

Shortcuts are defined in the root `package.json`.

```bash
pnpm web:<...>   # Forwards to apps/web
pnpm images:<...> # Forwards to workers/images
```

## Common Commands

- `pnpm run web:dev` - 開発サーバーの起動
- `pnpm run web:build` - 本番ビルド
