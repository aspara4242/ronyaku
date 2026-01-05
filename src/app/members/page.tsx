export const dynamic = 'force-dynamic';

import { getMembersList } from "@libs/members";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Contents from "@/components/Contents";
import Accordion from "@/components/Accordion";
import TextBlockSm from "@/components/TextBlockSm";
import { Members } from "@libs/members";
import { Metadata } from "next";

const title = "Members";
const description = "老若男女未来学園の構成員の情報です。";
const slug = "members";

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: "/" + slug,
  },
  openGraph: {
    title: title,
    description: description,
    url: `https://ronyaku.com/${slug}`,
  },
};

export default async function StaticPage() {
  const contents = shuffleArray(await getMembersList());

  return (
    <div>
      <Navigation />

      <Contents>
        <Title title="Members" ja_title="老若男女未来学園の構成員" />

        <div className="mx-auto w-full">
          {contents.map((members) => (
            <div key={members.id} className="mb-4 border-b">
              <Accordion
                name={
                  members.name + (members.rubi ? `（${members.rubi}）` : "")
                }
                skills={members.skill.join("／")}
              >
                <TextBlockSm title="経歴">{members.carrer}</TextBlockSm>
                <TextBlockSm title="主な活動">{members.activities}</TextBlockSm>
                {members.awards && (
                  <TextBlockSm title="主な実績">{members.awards}</TextBlockSm>
                )}
                <TextBlockSm title="外部リンク">
                  {members.links.map((links) => (
                    <div key={links.text}>
                      <a
                        href={links.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {links.text}
                      </a>
                    </div>
                  ))}
                </TextBlockSm>
              </Accordion>
            </div>
          ))}
        </div>
      </Contents>

      <Footer />
    </div>
  );
}

const shuffleArray = (array: Members[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
