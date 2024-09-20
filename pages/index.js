import FeaturedPosts from "@/components/home-page/featured-posts/featured-posts";
import Hero from "@/components/home-page/hero/hero";
import { getFeaturedPosts } from "@/helpers/posts/featured-posts";
import Head from "next/head";
import PropTypes from "prop-types";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Featured- My Blog Posts</title>
        <meta
          name="description"
          content="Who I am and my most featured blog posts"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1000,
  };
}
