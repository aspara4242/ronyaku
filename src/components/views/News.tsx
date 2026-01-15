import { News as news } from "@libs/news";

const News = ({ news }: { news: news }) => {
  return (
    <div>
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
        className="news-content prose prose-sm md:prose-base border-2 px-4 py-8"
      />
    </div>
  );
};

export default News;
