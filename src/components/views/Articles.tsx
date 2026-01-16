import Image from "next/image";
import Link from "next/link";

import { Articles as articles } from "@libs/articles";
import { extractToc } from "@libs/extractToc";

import TableOfContents from "../TableOfContents";

const Articles = ({
  articles,
  currentPage,
  isDraft,
  draftKey,
}: {
  articles: articles;
  currentPage: number;
  isDraft?: boolean;
  draftKey?: string;
}) => {
  const totalPages = articles.bodies?.length;
  const pageIndex = currentPage - 1;
  const isLastPage = currentPage === totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const currentPageData = articles.bodies?.[pageIndex];

  const tocRegex = /<p>\s*\[\[toc\]\]\s*<\/p>/gi;
  const parts = currentPageData.body.split(tocRegex);

  let toc: ReturnType<typeof extractToc> | null = null;

  if (articles.use_toc && parts.length > 1) {
    toc = extractToc(
      articles.bodies,
      "/articles/" + (isDraft ? "draft/" : "") + articles.id,
      draftKey
    );
    console.log(toc);
  }

  return (
    <div>
      {articles.custom_css && (
        <style
          precedence="high"
          dangerouslySetInnerHTML={{ __html: articles.custom_css }}
        />
      )}

      <div className="mb-8 flex items-center justify-between">
        <p className="border px-1.5 py-1 text-xs leading-6 font-bold md:text-sm md:leading-6">
          {articles.category}
        </p>
        <p className="mr-0.5 text-sm md:text-base">
          {new Date(articles.publication_date)
            .toLocaleDateString("ja-JP", {
              timeZone: "Asia/Tokyo",
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })
            .replace(/\//g, "-")}
        </p>
      </div>
      <h1 className="mb-4 text-center text-xl font-bold md:text-2xl">
        {articles.title}
      </h1>
      <ul
        className={`${currentPage === 1 ? "mb-8" : "mb-16"} flex flex-wrap items-center justify-center gap-x-2 gap-y-2`}
      >
        {articles.tags?.map((item: { tag: string }) => (
          <li key={item.tag} className="text-sm font-bold md:text-base">
            #{item.tag}
          </li>
        ))}
      </ul>
      {currentPage === 1 && (
        <Image
          src={articles.thumbnail.url}
          alt={articles.thumbnail.alt}
          className="mb-8 w-full"
          width={articles.thumbnail.width}
          height={articles.thumbnail.height}
        />
      )}
      {toc !== null ? (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: parts[0] }}
            className="articles-content mb-8"
          />

          <TableOfContents items={toc} />

          <div
            dangerouslySetInnerHTML={{ __html: parts[1] }}
            className="articles-content"
          />
        </div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: `${currentPageData.body}`,
          }}
          className="articles-content"
        />
      )}

      {totalPages >= 2 && (
        <div>
          <p className="mt-16 mb-16 text-center text-sm underline md:text-base">
            <Link
              href={`/articles/${isDraft ? "draft/" : ""}${articles.id}${isLastPage ? "" : "/" + (currentPage + 1)}${draftKey && "?key=" + draftKey}`}
            >
              {isLastPage ? "最初のページへ" : "次のページへ"}
            </Link>
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
            {pages.map((num: number) => (
              <li key={num}>
                <Link
                  href={`/articles/${isDraft ? "draft/" : ""}${articles.id}${num === 1 ? "" : "/" + num}${draftKey && "?key=" + draftKey}`}
                  className={`flex h-10 w-8 items-center justify-center rounded-sm border font-bold ${num === currentPage ? "pointer-events-none text-gray" : "bg-bg-gray"}`}
                >
                  {num}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Articles;
