import { getWorksDetail } from "@libs/works";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import Link from "next/link";

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
        <div className="mb-8 border-b pb-4 text-center">
          <h2 className="mb-2 text-center text-lg font-bold md:mb-2 md:text-xl">
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
          className="works-content prose prose-sm mb-4 border-b pb-8 md:prose-base"
        />
        <p className="w-full text-center text-sm underline md:text-base">
          <Link href="/works">一覧に戻る</Link>
        </p>
      </Contents>

      <Footer />
    </div>
  );
}
