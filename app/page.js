import styles from "./page.module.css";
import Link from "next/link";
import {getSortedPostsData, getAllPostsData} from "../lib/posts.js";
import {Thumb} from "../components/Thumb.js";


export default async function Home() {
  const posts = await getAllPostsData();
 console.log(posts);

  return (
    <div>
      <h1 className={styles.title}>My Blog</h1>
      <ul className={styles.postList}>
        {posts.Allfiles.map((post) => {
        return (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <Thumb props={post} key={post.id}/>
          </Link>
        );
        })}
      </ul>
    </div>
  );
}
