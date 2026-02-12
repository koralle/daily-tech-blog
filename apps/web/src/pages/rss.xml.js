import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('articles');

  const sortedPosts = posts.sort((postA, postB) => {
    return postB.data.publishedDate.getTime() - postA.data.publishedDate.getTime();
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/articles/${post.id}/`
    }))
  });
}
