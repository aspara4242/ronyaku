import { getArticlesDetail } from "@libs/articles";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import { redirect } from "next/navigation";
import Image from "next/image";

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
      title: title,
      description: description,
      url: `https://ronyaku.com/works/${id}`,
      images: images,
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
  const articles = await getArticlesDetail(id);

  const currentPage = page && page[0] ? parseInt(page[0], 10) : 1;
  const pageIndex = currentPage - 1;

  if (page && page[0] === "1") {
    redirect(`/articles/${id}`);
  }

  const currentPageData = articles.bodies?.[pageIndex];

  return (
    <div>
      {articles.custom_css && (
        <style
          precedence="high"
          dangerouslySetInnerHTML={{ __html: articles.custom_css }}
        />
      )}

      <Navigation />

      <Contents>
        <div className="mb-8 flex items-center justify-between">
          <p className="border px-1.5 py-1 text-xs font-bold leading-6 md:text-sm md:leading-6">
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
        <h2 className="mb-4 text-center text-xl font-bold md:text-2xl">
          {articles.title}
        </h2>
        <p className="mb-8 text-center text-sm font-bold md:text-base">
          {articles.tags?.map((item) => (
            <span key={item.tag} className="mr-2 inline-block">
              #{item.tag}
            </span>
          ))}
        </p>
        <Image
          src={articles.thumbnail.url}
          alt={articles.thumbnail.alt}
          className="mb-8 w-full"
          width={articles.thumbnail.width}
          height={articles.thumbnail.height}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `${currentPageData.body}`,
          }}
          className="articles-content prose prose-sm md:prose-base"
        />
      </Contents>

      <Footer />
    </div>
  );
}
