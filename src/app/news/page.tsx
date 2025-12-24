import Link from "next/link";
import { getNewsList } from "@libs/news";
import Navigation from "@/components/Navigation";
import Contents from "@/components/Contents";
import Title from "@/components/Title";
import Footer from "@/components/Footer";

export default async function StaticPage() {
  const contents = await getNewsList();

  return (
    <div>
      <Navigation />

      <Contents>
        <Title title="News" ja_title="老若男女未来学園からのお知らせ" />

        <div className="w-full mx-auto">
          {contents.map((news) => (
            <div key={news.id} className="text-sm md:text-base border-b mb-4">
              <Link href={`/news/${news.slug}`}>
                <div className="flex items-center mb-1.5">
                  <p className="text-xs md:text-sm w-[4rem] md:w-[5rem] border flex justify-center items-center py-0.5 mr-2">
                    {news.category}
                  </p>
                  <p className="md:text-sm">
                    {new Date(news.publication_date).toLocaleDateString('ja-JP', {
                      timeZone: 'Asia/Tokyo'
                    }).replace(/\//g, '-')}
                    {new Date(news.publication_date).toLocaleDateString('ja-JP', {
                      timeZone: 'Asia/Tokyo',
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }).replace(/\//g, '-')}
                  </p>
                </div>
                <p className="text-justify mb-2">
                  {news.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Contents>

      <Footer />
    </div>
  );
}

