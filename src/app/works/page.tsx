import Link from "next/link";
import { getWorksList } from "@libs/works";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Contents from "@/components/Contents";

export default async function StaticPage() {
  const contents = await getWorksList();

  return (
    <div>
      <Navigation />

      <Contents>
        <Title title="Works" ja_title="これまでの活動" />

        <div className="mx-auto w-full">
          {contents.map((works) => (
            <div key={works.id} className="mb-4 border-b">
              <Link href={`/works/${works.slug}`}>
                <p className="text-justify text-base md:text-lg">
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
      </Contents>

      <Footer />
    </div>
  );
}
