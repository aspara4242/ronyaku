import Link from "next/link";
import { getNewsListForTop } from "@libs/news";
import Spinner from "@/components/Spinner";
import Copyright from "@/components/Copyright";
import ContactLinks from "@/components/ContactLinks";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const contents = await getNewsListForTop();

  return (
    <div className="relative mx-auto w-[90%] max-w-180">
      <div className="mb-12 mt-6 flex justify-center">
        <Spinner className="w-3/4 max-w-90" />
      </div>

      <div className="mb-24 text-center text-lg leading-tight">
        <Link href="/about">About Us</Link>
        <br />
        ・<br />
        <Link href="/works">Works</Link>
        <br />
        ・<br />
        <Link href="/members">Members</Link>
        <br />
        ・<br />
        <Link href="/articles">Articles</Link>
      </div>

      <div className="mb-36">
        <p className="mb-4 text-left text-lg">
          <Link href="/news">News</Link>
        </p>
        <NewsList contents={contents} />
      </div>

      <ContactLinks />

      <Copyright />
    </div>
  );
}
