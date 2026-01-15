import Link from "next/link";

import { Works as works } from "@libs/works";

const Works = ({ works }: { works: works }) => {
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
};

export default Works;
