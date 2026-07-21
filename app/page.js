import styles from "./page.module.css";
import Link from "next/link";
import {getSortedPostsData, getAllPostsData} from "../lib/posts.js";
import {Thumb} from "../components/Thumb.js";

export const metadata = {
  title: "Yuki's Blog",
  description: "初めて作ったブログサイトです。学んだ内容を投稿していきます。",
};

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
