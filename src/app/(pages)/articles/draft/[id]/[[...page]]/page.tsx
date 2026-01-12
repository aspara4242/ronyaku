import { redirect } from "next/navigation";

import { getArticlesDraft } from "@libs/articles";

import { metadata as defaultMetadata } from "@/app/layout";
import Articles from "@/components/views/Articles";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; page?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { key } = await searchParams;
  const articles = await getArticlesDraft(id, key as string);

  const title = "【下書き】" + articles.title;
  const description = "老若男女未来学園の記事『" + articles.title + "』です。";
  const images = articles.thumbnail;

  const metadata = {
    robots: "noindex",
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
  searchParams,
}: {
  params: Promise<{ id: string; page?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, page } = await params;
  const { key } = await searchParams;

  if (page && page[0] === "1") {
    redirect(`/articles/draft/${id}?key=${key}`);
  }

  const articles = await getArticlesDraft(id, key as string);

  const currentPage = page && page[0] ? parseInt(page[0], 10) : 1;

  return <Articles articles={articles} currentPage={currentPage} />;
}
