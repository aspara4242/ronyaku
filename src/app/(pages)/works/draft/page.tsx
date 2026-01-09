import { getWorksDraft } from "@libs/works";
import Link from "next/link";
import { metadata as defaultMetadata } from "@/app/layout";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, key } = await searchParams;
  const works = await getWorksDraft(id as string, key as string);

  const title = "【下書き】" + works.title;
  const description =
    "老若男女未来学園の過去の活動『" + works.title + "』についての情報です。";
  const images = works.ogp_image;

  const metadata = {
    robots: "noindex",
    title: title,
    description: description,
    alternates: {
      canonical: "/works/" + id,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: description,
      url: `https://ronyaku.com/works/${id}`,
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
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, key } = await searchParams;
  const works = await getWorksDraft(id as string, key as string);

  return (
    <div>
      <div className="mb-8 border-b pb-4 text-center">
        <h2 className="mb-4 text-center text-lg font-bold md:text-xl">
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
        className="works-content prose prose-sm md:prose-base mb-8 border-b pb-8"
      />

      <p className="w-full text-center text-sm underline md:text-base">
        <Link href="/works">一覧に戻る</Link>
      </p>
    </div>
  );
}
