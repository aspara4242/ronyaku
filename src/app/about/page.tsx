import Link from "next/link";

export default async function StaticPage() {
  return (
    <>
      <div id="content">

        <h2>About Us</h2>
        <img id="about" src="https://images.microcms-assets.io/assets/a853066786e245ef89a3c2e6e638b6f3/f4aa370ffb554e09aba6d53e1c5bbb0d/about_image.jpg" />

        <h3>団体概要</h3>
        <p id="gekidan">
          演劇を中心とした幅広い芸術分野での活動を画策するクリエイティブ団体。2017年、愛知県名古屋市にて旗揚げ。現在は名古屋東京の二拠点で活動を展開している。<br />
          作家や俳優のみならず、メディアアーティストやプロダクトデザイナーなど、多様なメンバーが在籍。<br />
          日常にユーモアをねじ込むスタイルを広く人々に提案し実践してもらうことで、めちゃくちゃおもしろい世の中の実現をめざしている。<br />
          かながわ短編演劇アワード2023演劇コンペティション出場。
        </p>

        <h3>活動理念</h3>
        <p id="rinen">
          「老若男女」ありとあらゆる人びとの「未来」を明るく照らすことのできるような作品の創作を通して、多様なクリエイターが対等な立場で研鑽に励むことのできる「学園」のような場を追求していく。
        </p>

      </div>
    </>
  );
}