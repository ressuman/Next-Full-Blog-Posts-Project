import FeaturedPosts from "@/components/home-page/featured-posts/featured-posts";
import Hero from "@/components/home-page/hero/hero";
import { DUMMY_POSTS } from "@/data/dummy-data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
