import FeaturedPosts from "@/components/home-page/featured-posts/featured-posts";
import Hero from "@/components/home-page/hero/hero";
import { getFeaturedPosts } from "@/helpers/featured-posts";

export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1000,
  };
}
