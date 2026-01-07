import { getNewsList } from "@libs/news";
import Navigation from "@/components/Navigation";
import Contents from "@/components/Contents";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";

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
    title: title,
    description: description,
    url: `https://ronyaku.com/${slug}`,
  },
};

export default async function StaticPage() {
  const contents = await getNewsList();

  return (
    <div>
      <Navigation />

      <Contents>
        <Title title="News" ja_title="老若男女未来学園からのお知らせ" />

        <NewsList contents={contents} />
      </Contents>

      <Footer />
    </div>
  );
}
