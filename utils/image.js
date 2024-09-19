export const imagePath = (slug, image) => `/images/posts/${slug}/${image}`;

export const imagePathMarkdown = (slug, src) =>
  src.startsWith("/images") ? src : `/images/posts/${slug}/${src}`;
