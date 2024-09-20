import PostsGrid from "@/components/posts/posts-grid/posts-grid";
import classes from "./featured-posts.module.css";
import PropTypes from "prop-types";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2 className="">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

FeaturedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
