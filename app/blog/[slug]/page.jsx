import { getBlogPost, getAllSlugs } from "@/lib/blogData";
import BlogArticle from "@/components/organisms/blog/blog-article";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function BlogArticlePage({ params }) {
  const { slug } = params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}
