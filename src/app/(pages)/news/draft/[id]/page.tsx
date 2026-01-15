import { getNewsDraft } from "@libs/news";

import { metadata as defaultMetadata } from "@/app/layout";
import News from "@/components/views/News";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { key } = await searchParams;
  const news = await getNewsDraft(id as string, key as string);

  const title = "【下書き】News";
  const description = "老若男女未来学園からのお知らせです。" + news.title;

  const metadata = {
    robots: "noindex",
    title: title,
    description: description,
    alternates: {
      canonical: "/news/" + id,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: description,
      url: `https://ronyaku.com/news/${id}`,
    },
  };

  return metadata;
}

export default async function StaticDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { key } = await searchParams;
  const news = await getNewsDraft(id as string, key as string);

  return <News news={news} />;
}
