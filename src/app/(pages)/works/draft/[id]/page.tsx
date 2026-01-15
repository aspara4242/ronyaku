import { getWorksDraft } from "@libs/works";

import { metadata as defaultMetadata } from "@/app/layout";
import Works from "@/components/views/Works";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { key } = await searchParams;
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
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const { key } = await searchParams;
  const works = await getWorksDraft(id as string, key as string);

  return <Works works={works} />;
}
