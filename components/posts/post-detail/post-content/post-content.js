import { imagePath } from "@/utils/image";
import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.css";
import { DUMMY_POSTS } from "@/data/model-data";
import ReactMarkdown from "react-markdown";

export default function PostContent() {
  const data = DUMMY_POSTS;
  const image = imagePath(data.slug, data.image);

  return (
    <article className={classes.content}>
      <PostHeader title={data.title} image={image} />
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  );
}
