import Link from "next/link";
import { getNewsList } from "@libs/news";

export default async function StaticPage() {
  const contents = await getNewsList();

  if (!contents) {
    return <h1>No Contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((news) => (
          <li key={news.id}>
            <p>
              {new Date(news.publication_date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }).replace(/\//g, '-')}
            </p>
            <Link href={`/news/${news.slug}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

