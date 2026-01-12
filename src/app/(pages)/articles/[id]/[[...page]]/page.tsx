import { redirect } from "next/navigation";

import { getArticlesDetail } from "@libs/articles";

import { metadata as defaultMetadata } from "@/app/layout";
import Articles from "@/components/views/Articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const articles = await getArticlesDetail(id);

  const title = articles.title;
  const description = "老若男女未来学園の記事『" + articles.title + "』です。";
  const images = articles.thumbnail;

  const metadata = {
    title: title,
    description: description,
    alternates: {
      canonical: "/articles/" + id,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: description,
      url: `https://ronyaku.com/works/${id}`,
      images: images,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      images: images,
    },
  };

  return metadata;
}

export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ id: string; page?: string[] }>;
}) {
  const { id, page } = await params;

  if (page && page[0] === "1") {
    redirect(`/articles/${id}`);
  }

  const articles = await getArticlesDetail(id);

  const currentPage = page && page[0] ? parseInt(page[0], 10) : 1;

  return <Articles articles={articles} currentPage={currentPage} />;
}
