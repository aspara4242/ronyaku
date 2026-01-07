import Link from "next/link";
import { getArticlesList } from "@libs/articles";
import Navigation from "@/components/Navigation";
import Contents from "@/components/Contents";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const title = "Articles";
const description = "老若男女未来学園が公開した記事の一覧です。";
const slug = "articles";

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
  const contents = await getArticlesList();

  return (
    <div>
      <Navigation />

      <Contents>
        <Title title="Articles" ja_title="老若男女未来学園の記事" />

        <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contents.map((articles) => (
            <div key={articles.id} className="border-b">
              <Link href={`/articles/${articles.id}`}>
                <img
                  className="mb-2 aspect-[16/9] w-full object-cover"
                  src={articles.thumbnail.url}
                  alt={articles.thumbnail.alt}
                />
                <div className="mb-2 flex items-center justify-between">
                  <p className="border px-1.5 text-xs font-bold leading-6 md:text-sm md:leading-6">
                    {articles.category}
                  </p>
                  <p className="mr-0.5 text-sm md:text-base">
                    {new Date(articles.publishedAt)
                      .toLocaleDateString("ja-JP", {
                        timeZone: "Asia/Tokyo",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                      .replace(/\//g, "-")}
                  </p>
                </div>
                <p className="mb-2 text-justify text-base font-bold md:text-lg">
                  {articles.title}
                </p>
                <p className="mb-2 text-xs font-bold md:text-sm">
                  {articles.tags?.map((item) => (
                    <span key={item.tag} className="mr-2">
                      #{item.tag}
                    </span>
                  ))}
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
