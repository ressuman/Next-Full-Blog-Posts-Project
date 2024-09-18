import Image from "next/image";
import { imagePathMarkdown } from "./image";

// export const markdownCustomRenderers = {
//   img(image) {
//     const imageUrl = imagePathMarkdown(post.slug, image.src);

//     return <Image src={imageUrl} width={600} height={300} alt={image.alt} />;
//   },
// };

export const markdownCustomRenderers = (slug) => ({
  img: ({ src, alt }) => {
    // Ensure src is only the filename
    const imageUrl = imagePathMarkdown(slug, src.replace(/.*\/([^/]+)$/, "$1"));
    //console.log(`Image URL: ${imageUrl}`); // Debug output

    return <Image src={imageUrl} width={890} height={700} alt={alt} />;
  },
});
