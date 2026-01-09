import { getNewsDraft } from "@libs/news";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import { metadata as defaultMetadata } from "@/app/layout";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, key } = await searchParams;
  const news = await getNewsDraft(id as string, key as string);

  const title = "【下書き】News";
  const description = "老若男女未来学園からのお知らせです。" + news.title;

  const metadata = {
    robots: "noindex",
    title: title,
    description: description,
    alternates: {
      canonical: "/news/" + id,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: description,
      url: `https://ronyaku.com/news/${id}`,
    },
  };

  return metadata;
}

export default async function StaticDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, key } = await searchParams;
  const news = await getNewsDraft(id as string, key as string);

  return (
    <div>
      <Navigation />

      <Contents>
        <div className="mb-6 flex items-center justify-end">
          <p className="mr-2 text-sm md:text-base">
            {new Date(news.publication_date)
              .toLocaleDateString("ja-JP", {
                timeZone: "Asia/Tokyo",
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })
              .replace(/\//g, "-")}
          </p>
          <p className="flex w-16 items-center justify-center border text-xs md:w-20 md:text-sm">
            {news.category}
          </p>
        </div>
        <h2 className="mb-6 text-center text-base font-bold md:text-lg">
          {news.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
          className="news-content prose prose-sm border-2 px-4 py-8 md:prose-base"
        />
      </Contents>

      <Footer />
    </div>
  );
}
