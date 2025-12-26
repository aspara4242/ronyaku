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

        <div className="w-full mx-auto">
          {contents.map((works) => (
            <div key={works.id} className="border-b mb-4">
              <Link href={`/works/${works.slug}`}>
                <p className="text-base text-justify">
                  {works.title}
                </p>
                <p className="text-xs mb-2">
                  {new Date(works.date).getFullYear()}
                  {works.subtitle && (" / " + works.subtitle)}
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

