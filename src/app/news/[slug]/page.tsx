import { getNewsDetail } from "@libs/news";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";

export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

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
          <p className="flex w-[4rem] items-center justify-center border text-xs md:w-[5rem] md:text-sm">
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
          className="prose prose-sm news-content md:prose-base border-2 px-4 py-8"
        />
      </Contents>

      <Footer />
    </div>
  );
}
