import AllPosts from "@/components/posts/all-posts/all-posts";
import { DUMMY_POSTS } from "@/data/dummy-data";

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
