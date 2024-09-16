import PostsGrid from "@/components/posts/posts-grid/posts-grid";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2 className="">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
