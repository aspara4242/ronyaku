import { getNewsDetail } from "@libs/news";

import { metadata as defaultMetadata } from "@/app/layout";
import News from "@/components/views/News";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsDetail(id);

  const title = "News";
  const description =
    "老若男女未来学園からのお知らせです。〈" + news.title + "〉";

  const metadata = {
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
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsDetail(id);

  return <News news={news} />;
}
