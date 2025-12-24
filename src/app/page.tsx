import Link from "next/link";
import { getNewsListForTop } from "@libs/news";
import Spinner from "@/components/Spinner";
import Copyright from "@/components/Copyright";
import ContactLinks from "@/components/ContactLinks";

export default async function Home() {
  const contents = await getNewsListForTop();

  return (
    <div className="relative mx-auto w-[90%] max-w-[720px]">
      <div className="z-1 mb-6 mt-6 flex justify-center">
        <Spinner src="/logo_main.png" className="w-3/4 max-w-[360px]" />
      </div>

      <div className="z-10 mb-24 text-center text-lg leading-tight">
        <Link href="/about">About Us</Link>
        <br />
        ・<br />
        <Link href="/works">Works</Link>
        <br />
        ・<br />
        <Link href="/members">Members</Link>
      </div>

      <div className="mb-36">
        <p className="mb-4 text-left text-lg">
          <Link href="/news">News</Link>
        </p>

        <div className="mx-auto w-full">
          {contents.map((news) => (
            <div key={news.id} className="mb-4 border-b text-sm md:text-base">
              <div className="mb-2 flex items-center">
                <p className="mr-2 flex w-[4rem] items-center justify-center border py-0.5 text-xs md:w-[5rem] md:text-sm">
                  {news.category}
                </p>
                <p className="md:text-sm">
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
              <Link href={`/news/${news.slug}`}>
                <p className="mb-2 text-justify">{news.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <ContactLinks />

      <Copyright />
    </div>
  );
}
