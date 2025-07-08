export interface TagMetadata {
  name: string;
  description?: string;
  icon?: string;
}

export const tagMetadata: Record<string, TagMetadata> = {
  'Next.js': {
    name: 'Next.js',
    description: 'The React Framework for Production',
    icon: 'simple-icons:nextdotjs'
  },
  フロントエンド: {
    name: 'フロントエンド',
    description: 'フロントエンド開発に関する記事',
    icon: 'mdi:code-tags'
  },
  'TanStack Query': {
    name: 'TanStack Query',
    description: 'Powerful asynchronous state management for React',
    icon: 'simple-icons:react'
  },
  TypeScript: {
    name: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript',
    icon: 'simple-icons:typescript'
  },
  Astro: {
    name: 'Astro',
    description: 'Build fast websites, faster',
    icon: 'simple-icons:astro'
  }
};

export function getTagMetadata(tagName: string): TagMetadata {
  return tagMetadata[tagName] ?? { name: tagName };
}
