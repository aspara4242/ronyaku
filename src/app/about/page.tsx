import Image from "next/image";
import Footer from "@/components/Footer";

export default async function StaticPage() {
  return (
    <div>
      <div className="w-[90%] max-w-[720px] mx-auto pt-9 md:pt-16 pb-32">

        <h1 className="font-bold text-xl mb-1">
          About Us
        </h1>
        <p className="font-bold text-sm mb-12">
          ——老若男女未来学園とは？
        </p>

        <Image
          className="w-full mb-12"
          src="/about_image.jpg"
          alt="団体概要イメージ画像"
          width={720}
          height={405}
        />

        <h2 className="font-bold text-base md:text-lg mb-2">
          団体概要
        </h2>
        <p className="text-sm md:text-base text-justify leading-relaxed md:text-base mb-9">
          演劇を中心とした幅広い芸術分野での活動を画策するクリエイティブ団体。2017年、愛知県名古屋市にて旗揚げ。現在は名古屋東京の二拠点で活動を展開している。<br />
          作家や俳優のみならず、メディアアーティストやプロダクトデザイナーなど、多様なメンバーが在籍。<br />
          日常にユーモアをねじ込むスタイルを広く人々に提案し実践してもらうことで、めちゃくちゃおもしろい世の中の実現をめざしている。<br />
          2024年、かながわパフォーミングアーツアワード2024にてオーディエンス賞を受賞。<br />
          2025年、第15回せんがわ劇場演劇コンクールファイナリスト選出。
        </p>

        <h2 className="font-bold text-base md:text-lg mb-2">
          活動理念
        </h2>
        <p className="text-sm md:text-base text-justify leading-relaxed md:text-base">
          「老若男女」ありとあらゆる人びとの「未来」を明るく照らすことのできるような作品の創作を通して、多様なクリエイターが対等な立場で研鑽に励むことのできる「学園」のような場を追求していく。
        </p>

      </div>

      <Footer />
    </div>

  );
}