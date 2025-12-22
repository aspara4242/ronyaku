import { getWorksDetail } from "@libs/works";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contents from "@/components/Contents";

export default async function StaticDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const works = await getWorksDetail(slug);

  return (
    <div>
      <Navigation />

      <Contents>
        <div>
          <p>{new Date(works.date).getFullYear()}</p>
          <p>{works.subtitle && (works.subtitle)}</p>
        </div>
        <h2>{works.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `${works.body}`,
          }}
        />
      </Contents>

      <Footer />
    </div>
  )
}