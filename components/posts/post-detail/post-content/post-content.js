import { imagePath, imagePathMarkdown } from "@/utils/image";
import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { markdownCustomRenderers } from "@/utils/markdown-renderers";
import Image from "next/image";
import PropTypes from "prop-types";

//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
//import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
//import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
// SyntaxHighlighter.registerLanguage("js",js)
// SyntaxHighlighter.registerLanguage("css",css)

// export default function PostContent({ post }) {
//   const image = imagePath(post.slug, post.image);

//   // Define custom renderers for ReactMarkdown
//   const markdownCustomRenderers = {
//     // img: ({ src, alt }) => {
//     //   // Ensure src is only the filename
//     //   const imageUrl = imagePathMarkdown(
//     //     post.slug,
//     //     src.replace(/.*\/([^/]+)$/, "$1")
//     //   );

//     //   return <Image src={imageUrl} width={600} height={500} alt={alt} />;
//     // },
//     p(paragraph) {
//       const { node, children } = paragraph;

//       // Check if the paragraph contains only an image
//       if (
//         node.children &&
//         node.children[0] &&
//         node.children[0].tagName === "img"
//       ) {
//         const image = node.children[0];

//         const imageUrl = image.properties.src.startsWith("/images")
//           ? image.properties.src
//           : `/images/posts/${post.slug}/${image.properties.src}`;

//         return (
//           <div className={classes.image}>
//             <Image
//               src={imageUrl}
//               width={600}
//               height={500}
//               alt={image.properties.alt || "Post Image"}
//             />
//           </div>
//         );
//       }

//       // Render the paragraph normally if it doesn't contain an image
//       return <p>{children}</p>;
//     },
//     // code(code) {
//     //   const { className, children } = code;
//     //   const language = className ? className.split("-")[1] : null;
//     //   return (
//     //     <SyntaxHighlighter style={atomDark} language={language}>
//     //       {children}
//     //     </SyntaxHighlighter>
//     //   );
//     // },
//   };

//   return (
//     <article className={classes.content}>
//       <PostHeader title={post.title} image={image} />
//       <ReactMarkdown components={markdownCustomRenderers}>
//         {post.content}
//       </ReactMarkdown>
//     </article>
//   );
// }

export default function PostContent({ post }) {
  const image = imagePath(post.slug, post.image);

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={image} />
      <ReactMarkdown components={markdownCustomRenderers(post.slug, classes)}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

PostContent.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
