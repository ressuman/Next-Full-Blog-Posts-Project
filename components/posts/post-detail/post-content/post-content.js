import { imagePath } from "@/utils/image";
import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

export default function PostContent({ post }) {
  const image = imagePath(post.slug, post.image);

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={image} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
