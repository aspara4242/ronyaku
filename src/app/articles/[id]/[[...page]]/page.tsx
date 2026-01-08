import { getArticlesDetail } from "@libs/articles";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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

  const totalPages = articles.bodies?.length;
  const currentPage = page && page[0] ? parseInt(page[0], 10) : 1;
  const pageIndex = currentPage - 1;
  const isLastPage = currentPage === totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (page && page[0] === "1") {
    redirect(`/articles/${id}`);
  }

  console.log(articles.bodies?.length);
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
        <h2 className="mb-4 text-center text-xl font-bold md:text-2xl">
          {articles.title}
        </h2>
        <p
          className={`${currentPage === 1 ? "mb-8" : "mb-16"} text-center text-sm font-bold md:text-base`}
        >
          {articles.tags?.map((item) => (
            <span key={item.tag} className="mr-2 inline-block">
              #{item.tag}
            </span>
          ))}
        </p>
        {currentPage === 1 && (
          <Image
            src={articles.thumbnail.url}
            alt={articles.thumbnail.alt}
            className="mb-8 w-full"
            width={articles.thumbnail.width}
            height={articles.thumbnail.height}
          />
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: `${currentPageData.body}`,
          }}
          className="articles-content prose prose-sm md:prose-base mb-16"
        />
        {totalPages >= 2 && (
          <div className="-mb-16">
            <p className="mb-16 text-center text-sm underline md:text-base">
              <Link
                href={`/articles/${articles.id}/${isLastPage ? 1 : currentPage + 1}`}
              >
                {isLastPage ? "最初のページへ" : "次のページへ"}
              </Link>
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
              {pages.map((num) => (
                <Link
                  key={num}
                  href={`/articles/${articles.id}${num === 1 ? "" : "/" + num}`}
                  className={`${num === currentPage ? "pointer-events-none" : ""}`}
                >
                  <li
                    className={`flex h-10 w-8 items-center justify-center rounded-sm border ${num === currentPage ? "text-gray" : "bg-bg-gray"} font-bold`}
                  >
                    {num}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </Contents>

      <Footer />
    </div>
  );
}
