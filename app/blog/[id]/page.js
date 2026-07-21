// import { getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';
import Link from 'next/link';
import getPostData from './get_post_data';

export async function generateMetadata({params}) {
  const post = await getPostData({params});
  return {
    title: post.title,
    description: post.description,
  };
} 


export default async function Page({params}) {
  const post = await getPostData({params});
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        戻る
      </Link>
      <article className={styles.articleContainer}>
      <h1 className={styles.title}>{post.title}</h1>
      <small className={styles.date}>{post.date}</small>
      <div 
      className={styles.postBody} 
      dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </article>
    </div>
  )
}
