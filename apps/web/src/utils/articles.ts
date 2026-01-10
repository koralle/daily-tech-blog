import { getCollection } from 'astro:content';

/**
 * すべての記事を取得し、公開日の降順でソートして返す
 */
export async function getAllArticles() {
  const articles = await getCollection('articles');
  return articles.sort((a, b) => {
    return b.data.publishedDate.getTime() - a.data.publishedDate.getTime();
  });
}

/**
 * 最新の記事を指定した件数分取得する
 * @param count 取得する件数
 */
export async function getLatestArticles(count: number = 5) {
  const articles = await getAllArticles();
  return articles.slice(0, count);
}

/**
 * 指定したタグに関連する記事を取得する
 * @param tagId タグID
 */
export async function getArticlesByTag(tagId: string) {
  const articles = await getAllArticles();
  return articles.filter((article) => article.data.tags?.includes(tagId));
}
