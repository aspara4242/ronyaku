import { getArticlesDetail } from "@libs/articles";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = await getArticlesDetail(slug);

  const title = articles.title;
  const description = "老若男女未来学園の記事『" + articles.title + "』です。";

  const metadata = {
    title: title,
    description: description,
    alternates: {
      canonical: "/articles/" + slug,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://ronyaku.com/articles/${slug}`,
    },
  };

  return metadata;
}

export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ slug: string; page?: string[] }>;
}) {
  const { slug, page } = await params;
  const articles = await getArticlesDetail(slug);

  const currentPage = page && page[0] ? parseInt(page[0], 10) : 1;
  const pageIndex = currentPage - 1;

  if (page && page[0] === "1") {
    redirect(`/articles/${slug}`);
  }

  const currentPageData = articles.bodies?.[pageIndex];

  return (
    <div>
      {articles.custom_css && (
        <style precedence="high" dangerouslySetInnerHTML={{ __html: articles.custom_css }} />
      )}

      <Navigation />

      <Contents>
        <div className="mb-6 flex items-center justify-end">
          <p className="mr-2 text-sm md:text-base">
            {new Date(articles.publication_date)
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
