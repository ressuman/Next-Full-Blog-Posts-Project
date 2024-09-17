import AllPosts from "@/components/posts/all-posts/all-posts";
import { getAllPosts } from "@/helpers/all-posts";

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    //revalidate: 60,
  };
}
