import Link from "next/link";
import { getArticlesList } from "@libs/articles";
import Title from "@/components/common/Title";
import Image from "next/image";
import { Metadata } from "next";
import { metadata as defaultMetadata } from "@/app/layout";

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
    ...defaultMetadata.openGraph,
    title: title,
    description: description,
    url: `https://ronyaku.com/${slug}`,
  },
};

export default async function StaticPage() {
  const contents = await getArticlesList();

  return (
    <div>
      <Title title="Articles" ja_title="老若男女未来学園の記事" />

      <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        {contents.map((articles) => (
          <div key={articles.id} className="border-b">
            <Link href={`/articles/${articles.id}`}>
              <Image
                src={articles.thumbnail.url}
                alt={articles.thumbnail.alt}
                className="mb-4 aspect-video w-full object-cover"
                width={articles.thumbnail.width}
                height={articles.thumbnail.height}
              />
              <div className="mb-4 flex items-center justify-between">
                <p className="border px-1.5 py-1 text-xs leading-6 font-bold md:text-sm md:leading-6">
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
              <p className="mb-4 text-xs font-bold md:text-sm">
                {articles.tags?.map((item) => (
                  <span key={item.tag} className="mr-2 inline-block">
                    #{item.tag}
                  </span>
                ))}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
