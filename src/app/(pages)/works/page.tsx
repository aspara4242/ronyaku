import Link from "next/link";
import { getWorksList } from "@libs/works";
import Title from "@/components/common/Title";
import { Metadata } from "next";
import { metadata as defaultMetadata } from "@/app/layout";

const title = "Works";
const description = "老若男女未来学園のこれまでの活動についての情報です。";
const slug = "works";

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: "/" + slug,
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: title,
    description: description,
    url: `https://ronyaku.com/${slug}`,
  },
};

export default async function StaticPage() {
  const contents = await getWorksList();

  return (
    <div>
      <Title title="Works" ja_title="老若男女未来学園のこれまでの活動" />

      <div className="mx-auto w-full">
        {contents.map((works) => (
          <div key={works.id} className="mb-4 border-b">
            <Link href={`/works/${works.slug}`}>
              <p className="mb-2 text-justify text-base md:text-lg">
                {works.title}
              </p>

              <p className="mb-2 text-justify text-xs md:text-sm">
                {new Date(works.date).getFullYear()}
                {works.subtitle && " / " + works.subtitle}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
