import { setRequestLocale } from "next-intl/server";
import { getPostsForLocale } from "@/lib/blogMeta";
import { getCategories } from "@/lib/blogTaxonomy";
import BlogList from "@/components/organisms/blog/blog-list";

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <BlogList
      posts={getPostsForLocale(locale)}
      categories={getCategories(locale)}
    />
  );
}
