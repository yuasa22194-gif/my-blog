import { getSortedPostsData } from '@/lib/posts';
import styles from './page.module.css';
import Link from 'next/link';

export default async function Page({params}) {
  const Params = await params;
  const fileName = Params.id;
  const post = await getSortedPostsData(`${fileName}.md`);
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
