import styles from "./page.module.css";
import Link from "next/link";
import {getSortedPostsData} from "../lib/posts.js";

export default async function Home() {
  const posts = await getSortedPostsData("about.md");
  console.log(posts);
  return (
    <div>

    </div>
  );
}
