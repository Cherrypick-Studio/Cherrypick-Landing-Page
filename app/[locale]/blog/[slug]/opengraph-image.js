import { brandedOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getBlogMeta, getLocalizedSlugParams } from "@/lib/blogMeta";

export const alt = "Cherrypick Studio blog article";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getLocalizedSlugParams();
}

export default async function BlogOpengraphImage({ params }) {
  const { slug } = await params;
  const post = getBlogMeta(slug);

  return brandedOgImage({
    title: post?.title,
    subtitle: post?.category,
  });
}
