import Link from "next/link";
import { getNewsList } from "@libs/news";
import Navigation from "@/components/Navigation";
import Contents from "@/components/Contents";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import { Metadata } from "next";

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
        <Title title="Articles" ja_title="老若男女未来学園の記事" />

        <div className="mx-auto w-full">
          {contents.map((news) => (
            <div key={news.id} className="mb-4 border-b">
              <Link href={`/news/${news.slug}`}>
                <div className="mb-2 flex items-center">
                  <p className="mr-2 flex w-[4rem] items-center justify-center border text-xs md:w-[5rem] md:text-sm">
                    {news.category}
                  </p>
                  <p className="text-sm md:text-base">
                    {new Date(news.publication_date)
                      .toLocaleDateString("ja-JP", {
                        timeZone: "Asia/Tokyo",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                      .replace(/\//g, "-")}
                  </p>
                </div>
                <p className="mb-2 text-justify text-sm md:text-base">
                  {news.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Contents>

      <Footer />
    </div>
  );
}
