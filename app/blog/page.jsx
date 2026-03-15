import { blogPosts } from "@/lib/blogData";
import BlogList from "@/components/organisms/blog/blog-list";

export const metadata = {
  title: "Blog",
  description:
    "Artikel tentang web development, mobile app, desain UI/UX, dan transformasi digital dari tim Cherrypick Studio. Tips dan insight untuk bisnis di Indonesia dan Singapura.",
  alternates: {
    canonical: "https://cherrypick.studio/blog",
  },
};

export default function BlogPage() {
  return <BlogList posts={blogPosts} />;
}
