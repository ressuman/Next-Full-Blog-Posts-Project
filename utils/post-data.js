import fs from "fs";
import path from "path";
import { postDirectory } from "./posts-directory";
import matter from "gray-matter";

export function getPostData(fileName) {
  const filePath = path.join(postDirectory, fileName);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension (.md)

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}
