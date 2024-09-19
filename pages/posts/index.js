import AllPosts from "@/components/posts/all-posts/all-posts";
import { getAllPosts } from "@/helpers/posts/all-posts";
import Head from "next/head";

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Blog Posts</title>
        <meta
          name="description"
          content="All my blog posts- A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}
