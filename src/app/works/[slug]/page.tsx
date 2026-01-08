import { getWorksDetail } from "@libs/works";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";
import Link from "next/link";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const works = await getWorksDetail(slug);

  const title = works.title;
  const description =
    "老若男女未来学園の過去の活動『" + works.title + "』についての情報です。";
  const images = works.ogp_image;

  const metadata = {
    title: title,
    description: description,
    alternates: {
      canonical: "/works/" + slug,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://ronyaku.com/works/${slug}`,
      images: images,
    },
    twitter: {
      card: "summary_large_image",
      images: images,
    },
  };

  return metadata;
}

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
          <h2 className="mb-4 text-center text-lg font-bold md:mb-2 md:text-xl">
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
          className="works-content prose prose-sm mb-8 border-b pb-8 md:prose-base"
        />
        <p className="w-full text-center text-sm underline md:text-base">
          <Link href="/works">一覧に戻る</Link>
        </p>
      </Contents>

      <Footer />
    </div>
  );
}
