import Image from "next/image";
import { imagePathMarkdown } from "./image";

export const markdownCustomRenderers = (slug, classes) => ({
  // img: ({ src, alt }) => {
  //   // Ensure src is only the filename
  //   const imageUrl = imagePathMarkdown(slug, src.replace(/.*\/([^/]+)$/, "$1"));
  //   //console.log(`Image URL: ${imageUrl}`); // Debug output

  //   return <Image src={imageUrl} width={600} height={500} alt={alt} />;
  // },
  p(paragraph) {
    const { node, children } = paragraph;

    // Check if the paragraph contains only an image
    if (
      node.children &&
      node.children[0] &&
      node.children[0].tagName === "img"
    ) {
      const image = node.children[0];

      // Use the imported imagePathMarkdown function to generate the URL
      const imageUrl = imagePathMarkdown(slug, image.properties.src);

      return (
        <div className={classes.image}>
          <Image
            src={imageUrl}
            width={600}
            height={500}
            alt={image.properties.alt || "Post Image"}
          />
        </div>
      );
    }

    // Render the paragraph normally if it doesn't contain an image
    return <p>{children}</p>;
  },
});
