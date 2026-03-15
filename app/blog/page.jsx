import { blogMeta } from "@/lib/blogMeta";
import BlogList from "@/components/organisms/blog/blog-list";

export default function BlogPage() {
  return <BlogList posts={blogMeta} />;
}
