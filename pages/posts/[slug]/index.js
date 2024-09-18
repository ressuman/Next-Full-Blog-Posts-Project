import PostContent from "@/components/posts/post-detail/post-content/post-content";
import { getPostData } from "@/utils/post-data";

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
  return {
    paths: [],
    fallback: false,
  };
}
