import { getNewsDetail } from "@libs/news";
import dayjs from 'dayjs';

export default async function StaticDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);
  const formattedDate = dayjs(news.publishedAt).format('YYYY.MM.DD');

  return(
    <>
        <p>{news.title}</p>
        <p>{formattedDate}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
        />
    </>
  )
}