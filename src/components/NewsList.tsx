// components/NewsList.tsx
import Link from "next/link";

import React from "react";

type News = {
  id: string;
  slug: string;
  title: string;
  body: string;
  publication_date: string;
  category: string;
};

interface NewsListProps {
  contents: News[];
}

const NewsList = ({ contents }: NewsListProps) => {
  return (
    <div className="mx-auto w-full">
      {contents.map((news: News) => (
        <div key={news.id} className="mb-4 border-b">
          <Link href={`/news/${news.id}`}>
            <div className="mb-2 flex items-center">
              <p className="mr-2 flex w-16 items-center justify-center border text-xs md:w-20 md:text-sm">
                {news.category}
              </p>
              <p className="text-sm md:text-base">
                {new Date(news.publication_date)
                  .toLocaleDateString("ja-JP", {
                    timeZone: "Asia/Tokyo",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })
                  .replace(/\//g, "-")}
              </p>
            </div>
            <p className="mb-2 text-justify text-sm leading-normal md:text-base">
              {news.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
