import { isValidTagId, getTagById } from '../../../../data/tags';
import { css } from '../../../../../styled-system/css';

interface Props {
  articleId: string;
  title: string;
  tagIds: ReadonlyArray<string>;
}

export const ArticleLinkItem = ({ articleId, title, tagIds }: Props) => {
  return (
    <div
      class={css({
        display: 'grid',
        gap: 'calc(var(--spacing-unit) * 4)',
        backgroundColor: 'white',
        padding: 'calc(var(--spacing-unit) * 8)',
        rounded: '12'
      })}
    >
      <a
        href={`/articles/${articleId}`}
        class={css({
          color: 'gray.700',
          textStyle: 'articleLinkItem',
          outlineOffset: 'calc(var(--spacing-unit) * 2)'
        })}
      >
        {title}
      </a>
      <div
        class={css({
          display: 'flex',
          gap: 'calc(var(--spacing-unit) * 4)'
        })}
      >
        {tagIds.map((tagId) => {
          const isValid = isValidTagId(tagId);
          if (!isValid) {
            return null;
          }

          const tag = getTagById(tagId);
          if (tag === undefined) {
            return null;
          }

          return (
            <a
              href={`/categories/${tagId}/1`}
              class={css({
                color: 'white',
                backgroundColor: 'rosePink.600',
                textStyle: 'categoryTag',
                paddingX: 'calc(var(--spacing-unit) * 4)',
                paddingY: 'calc(var(--spacing-unit) * 1)',
                rounded: '8',
                outlineOffset: 'calc(var(--spacing-unit) * 1)'
              })}
            >
              {tag.displayName}
            </a>
          );
        })}
      </div>
    </div>
  );
};
