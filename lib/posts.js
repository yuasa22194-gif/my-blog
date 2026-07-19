import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const ContentsDirectory = path.join(process.cwd(), "contents");

//記事の一覧を取得する関数
export async function getSortedPostsData(fileName) {
  const fullPath = path.join(ContentsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    fileName,
    contentHtml,
    ...matterResult.data,
  };
}



//記事の詳細情報を取得する関数
export async function getSortedPostsData(fileName) {
  const fullPath = path.join(ContentsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    fileName,
    contentHtml,
    ...matterResult.data,
  };
}

