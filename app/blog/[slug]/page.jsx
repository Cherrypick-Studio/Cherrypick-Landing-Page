"use client";
import { useParams } from "next/navigation";
import BlogArticle from "@/components/organisms/blog/blog-article";

export default function BlogArticlePage() {
  const { slug } = useParams();
  return <BlogArticle slug={slug} />;
}
