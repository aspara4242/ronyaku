import { getArticlesDetail } from "@libs/articles";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import { redirect } from "next/navigation";

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
        <div className="mb-6 flex items-center justify-end">
          <p className="mr-2 text-sm md:text-base">
            {new Date(articles.publishedAt)
              .toLocaleDateString("ja-JP", {
                timeZone: "Asia/Tokyo",
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })
              .replace(/\//g, "-")}
          </p>
          <p className="flex w-[4rem] items-center justify-center border text-xs md:w-[5rem] md:text-sm">
            {articles.category}
          </p>
        </div>
        <h2 className="mb-6 text-center text-base font-bold md:text-lg">
          {articles.title}
        </h2>
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
