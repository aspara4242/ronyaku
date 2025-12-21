import Link from "next/link";
import { getNewsList } from "@libs/news";
import Spinner from "@/components/Spinner";
import Copyright from "@/components/Copyright";
import ContactLinks from "@/components/ContactLinks";

export default async function Home() {
  const contents = await getNewsList();

  return (
    <div className="relative w-[90%] max-w-[720px] mx-auto">

      <div className="flex justify-center mt-6 mb-6">
        <Spinner
          src="/logo_main.png"
          className="w-3/4 max-w-[360px]"
        />
      </div>

      <div className="text-lg text-center leading-tight mb-16 z-10">
        <Link href="/about">About Us</Link><br />
        ・<br />
        <Link href="/works">Works</Link><br />
        ・<br />
        <Link href="/members">Members</Link>
      </div>

      <div className="mb-20">
        <p className="text-lg text-center mb-3">
          <Link href="/news">News</Link>
        </p>

        <div className="w-full md:w-3/4 mx-auto text-sm md:text-base">
          {contents.map((news) => (
            <div key={news.id} className="border rounded-md flex p-2 mb-2">
              <p className="w-[3.5rem] md:w-[4rem] shrink-0 flex justify-center items-center mr-2">
                {news.category}
              </p>
              <p className="w-auto text-justify pl-2 border-l">
                <Link href={`/news/${news.slug}`}>{news.title}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <ContactLinks />

      <Copyright />

    </div>

  );
};