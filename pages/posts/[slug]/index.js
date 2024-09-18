import PostContent from "@/components/posts/post-detail/post-content/post-content";
import { getPostData } from "@/utils/post-data";
import { getPostsFiles } from "@/utils/posts-files";

export default function PostsDetailsPage() {
  return <PostContent />;
}

export async function getStaticProps(ctx) {
  //const { params } = ctx;
  //const { slug } = params;

  const {
    params: { slug },
  } = ctx;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((postFileName) =>
    postFileName.replace(/\.md$/, "")
  );

  const slugPath = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths: slugPath,
    fallback: false,
  };
}
