import Image from "next/image";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Title from "@/components/Title";
import TextBlock from "@/components/TextBlock";
import Contents from "@/components/Contents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "老若男女未来学園の基本情報です。",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us",
    description: "老若男女未来学園の基本情報です。",
    url: `https://ronyaku.com/about`,
  },
};

export default async function StaticPage() {
  return (
    <div>
      <Navigation />

      <Contents>

        <Title title="About Us" ja_title="老若男女未来学園とは？" />

        <Image
          className="w-full mb-12"
          src="/about_image.jpg"
          alt="団体概要イメージ画像"
          width={720}
          height={405}
        />

        <TextBlock title="団体概要">
          演劇を中心とした幅広い芸術分野での活動を画策するクリエイティブ団体。2017年、愛知県名古屋市にて旗揚げ。現在は名古屋と東京の二拠点で活動を展開している。<br />
          作家や俳優のみならず、メディアアーティストやプロダクトデザイナーなど、多様なメンバーが在籍。<br />
          日常にユーモアをねじ込むスタイルを広く人々に提案し実践してもらうことで、めちゃくちゃおもしろい世の中の実現をめざしている。<br />
          2024年、かながわパフォーミングアーツアワード2024にてオーディエンス賞を受賞。<br />
          2025年、第15回せんがわ劇場演劇コンクールファイナリスト選出。
        </TextBlock>

        <TextBlock title="活動理念">
          「老若男女」ありとあらゆる人びとの「未来」を明るく照らすことのできるような作品の創作を通して、多様なクリエイターが対等な立場で研鑽に励むことのできる「学園」のような場を追求していく。
        </TextBlock>

      </Contents>

      <Footer />
    </div>

  );
}