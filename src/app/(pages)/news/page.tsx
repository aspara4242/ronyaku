import { getNewsList } from "@libs/news";
import Title from "@/components/Title";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { metadata as defaultMetadata } from "@/app/layout";

const title = "News";
const description = "老若男女未来学園からのお知らせの一覧です。";
const slug = "news";

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: "/" + slug,
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: title,
    description: description,
    url: `https://ronyaku.com/${slug}`,
  },
};

export default async function StaticPage() {
  const contents = await getNewsList();

  return (
    <div>
      <Title title="News" ja_title="老若男女未来学園からのお知らせ" />

      <NewsList contents={contents} />
    </div>
  );
}
