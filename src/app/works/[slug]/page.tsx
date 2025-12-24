import { getWorksDetail } from "@libs/works";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import Link from "next/link";
import Title from "@/components/Title";

export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const works = await getWorksDetail(slug);

  return (
    <div>
      <Navigation />

      <Contents>
        <div className="mb-6 border-b text-center pb-4">
        <h2 className="mb-1 text-center text-lg font-bold md:text-xl">
          {works.title}
        </h2>
        <p className="text-center text-sm md:text-base">
          {new Date(works.date).getFullYear()}
          {works.subtitle && " / " + works.subtitle}
        </p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${works.body}`,
          }}
          className="works-content prose prose-sm mb-16 md:prose-base"
        />
        <p className="w-full text-center text-sm underline md:text-base">
          <Link href="/works">一覧に戻る</Link>
        </p>
      </Contents>

      <Footer />
    </div>
  );
}
