import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/blogData";
import BlogArticle from "@/components/organisms/blog/blog-article";

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}
