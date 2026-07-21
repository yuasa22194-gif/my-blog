import { getSortedPostsData } from '@/lib/posts';
import { cache } from 'react';

const getPostData = cache(async ({params}) => {
  const Params = await params;
  const fileName = Params.id;
  const post = await getSortedPostsData(`${fileName}.md`);
  return post;
});

export default getPostData;