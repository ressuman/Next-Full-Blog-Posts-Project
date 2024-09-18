import { imagePath, imagePathMarkdown } from "@/utils/image";
import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { markdownCustomRenderers } from "@/utils/markdown-renderers";
//import Image from "next/image";

export default function PostContent({ post }) {
  const image = imagePath(post.slug, post.image);

  // const markdownCustomRenderers = {
  //   img: ({ src, alt }) => {
  //     const imageUrl = imagePathMarkdown(
  //       post.slug,
  //       src.replace(/.*\/([^/]+)$/, "$1")
  //     );

  //     return <Image src={imageUrl} width={600} height={300} alt={alt} />;
  //   },
  // };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={image} />
      <ReactMarkdown components={markdownCustomRenderers(post.slug)}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
