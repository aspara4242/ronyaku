import { getWorksDetail } from "@libs/works";

import { metadata as defaultMetadata } from "@/app/layout";
import Works from "@/components/views/Works";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const works = await getWorksDetail(id);

  const title = works.title;
  const description =
    "老若男女未来学園の過去の活動『" + works.title + "』についての情報です。";
  const images = works.ogp_image;

  const metadata = {
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
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const works = await getWorksDetail(id);

  return <Works works={works} />;
}
