import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

import { metadata as defaultMetadata } from "@/app/layout";
import KappaSlider from "@/components/KappaSlider";
import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";
import { Logo } from "@/components/svg/Icons";

const title = "現代河童都心に現る";
const description =
  "老若男女未来学園の新作公演『現代河童都心に現る』の特設サイトです。";
const slug = "kappa2026";

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
  return (
    <div className="bg-kappa-blue">
      <Navigation />
      <div className="mx-auto mb-32 w-[90%] max-w-180 grow pt-9 md:pt-42">
        <Logo className="mb-16 ml-1 h-9 w-auto md:hidden" />
        <KappaSlider />
        <Image
          src="/kappa2026/kappa_title.png"
          alt="演劇公演『現代河童都心に現る』"
          height={75}
          width={325}
          className="mb-12"
        />
        <p className="mb-18 text-base leading-relaxed italic">
          オールドスクールな河童は水のきれいな川や池などに生息していますが、現代河童は普通に都市で暮らしています。地下鉄に乗って通勤し、オフィスでパソコンのキーボードを叩いています。会社は現代河童を河童だと知らずに雇い、給料を支払っています。月末、現代河童はATMの前で振り込まれた金額を見てがくぜんとします。あんなに頑張ってはたらいたのに・・・。河童だから差別されているというわけではありません（会社は河童だと気づいていません）。本人の努力不足というわけでもありません。物価の上昇に賃金が追いつかないのは社会の構造に原因があるのです。現代河童とは、そんな構造に対する疑念や違和感が具現化し、指の間の水かきとして、背中の甲羅として、頭の上の皿として現れたものです。この演劇では、現代河童が現代河童として暮らす日常の一部を軽妙かつあざやかにお届けします。
        </p>

        <div className="mb-18 flex flex-col gap-6 md:mb-16 md:flex-row md:items-start">
          <Image
            src="/kappa2026/actor.png"
            alt="出演"
            height={30}
            width={130}
          />
          <div>
            <p className="mb-3 text-lg font-bold">板倉拓夢</p>
            <p className="mb-6 text-sm leading-relaxed">
              1997年生まれ。俳優。名古屋を中心に多くの舞台、映像作品に出演。老若男女未来学園との関わりは深く、『どうにもならない』（2018年）、『アザンシアコント
              vol.1』（2022年）、『ヤマで踊ろう』（2025年）など複数作品に出演。
            </p>
            <p className="mb-3 text-lg font-bold">
              うめだ<span className="text-base">（老若男女未来学園）</span>
            </p>
            <p className="mb-6 text-sm leading-relaxed">
              2001年生まれ。俳優、照明プランナー・オペレーター。2023年より老若男女未来学園に所属。団体内での主な出演作に『メタルおにぎり
              vs.
              ザ・ワールド』（2024年)、『すき焼きにマジックマッシュルーム入れんな！』(2025年）がある。
            </p>
            <p className="mb-3 text-lg font-bold">
              立神ケン<span className="text-base">（劇団ハイエナ）</span>
            </p>
            <p className="text-sm leading-relaxed">
              1994年生まれ。劇団ハイエナ主宰。自身の団体では企画、劇作なども行う。近年の主な出演作に朝劇名古屋『ルックアップライフ！』（2024年）、劇団ハイエナ『他人の結婚式』（2025年）などがある。
            </p>
          </div>
        </div>

        <div className="mb-18 flex flex-col gap-6 md:flex-row md:items-start">
          <Image
            src="/kappa2026/schedule.png"
            alt="日程"
            height={30}
            width={130}
          />
          <div>
            <p className="mb-6 text-lg leading-relaxed font-bold">
              2026年11月
              <br />
              28日(土) 12:00・15:00・18:00
              <br />
              29日(日) 13:00・16:00
            </p>
            <p className="text-sm leading-relaxed">
              ＊上演時間は60分程度を予定しています。
              <br />
              ＊受付開始および開場は各回開演の30分前です。
            </p>
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-start">
          <Image
            src="/kappa2026/place.png"
            alt="会場"
            height={30}
            width={130}
          />
          <div>
            <p className="mb-6 text-lg leading-relaxed font-bold">
              SLOW ART CENTER NAGOYA
              <br />
              2F SLOW ART ラボ
            </p>
            <p className="mb-6 text-base leading-relaxed">
              名古屋市中区錦三丁目16番5号
              <br />
              市営地下鉄東山線・名城線 栄駅　
              <br className="md:hidden" />
              名鉄瀬戸線 栄町駅
              <br />
              3番出口／セントラルパーク10B出口
            </p>
            <Link
              href="https://maps.app.goo.gl/CkRDS4WPezcUVUNH7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline"
            >
              Googleマップで開く
            </Link>
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-start">
          <Image
            src="/kappa2026/price.png"
            alt="料金"
            height={30}
            width={130}
          />
          <div>
            <p className="mb-6 text-lg leading-relaxed font-bold">
              一般：2,500円
              <br />
              22歳以下：1,000円
              <br />
              <span className="text-base">
                障害者手帳をお持ちの方+同伴者1名まで：無料
              </span>
            </p>
            <p className="text-sm leading-relaxed">
              ＊全席自由・税込み
              <br />
              ＊当日券は各500円増
              <br />
              ＊22歳以下チケットをご予約の方は当日受付にて年齢のわかる身分証をご提示ください。
              <br />
              ＊22歳以下チケットは当日清算のみの販売となります。
              <br />
              ＊車椅子をご利用の方など、ご来場にあたってサポートが必要な方は事前にご連絡ください。（ronyaku4444@gmail.com）
            </p>
          </div>
        </div>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-start">
          <Image
            src="/kappa2026/ticket.png"
            alt="チケット取扱い"
            height={30}
            width={130}
          />
          <div>
            <p className="mb-2 text-base leading-relaxed font-bold">
              事前清算（一般のみ）
            </p>
            <Link
              href="https://livepocket.jp/e/kappa2026"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 block text-base underline"
            >
              LivePocket
            </Link>
            <p className="mb-8 text-sm leading-relaxed">
              ＊ご購入にはLivepocketの会員登録が必要です。
              <br />
              ＊クレジットカード決済またはコンビニ決済がご利用いただけます。
            </p>
            <p className="mb-2 text-base leading-relaxed font-bold">
              当日清算（一般・22歳以下・障害者割引）
            </p>
            <Link
              href="https://r7ticket.jp/kappa2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 block text-base underline"
            >
              R7 TICKET SERVICE
            </Link>
            <p className="text-sm leading-relaxed">
              ＊当日受付にて料金をお支払いください。
              <br />
              ＊お支払いは現金のみとなります。
            </p>
          </div>
        </div>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-start">
          <Image
            src="/kappa2026/staff.png"
            alt="スタッフ"
            height={30}
            width={130}
          />
          <div>
            <p className="text-base leading-relaxed">
              コンセプト設計：老若男女未来学園
              <br />
              作・演出：森悟
              <br />
              音楽：nekami
              <br />
              音響：山田碩人
              <br />
              照明プラン：うめだ
              <br />
              字幕システム：まこぼうず
              <br />
              制作：老若男女未来学園
              <br />
              サポート：小藤琴
              <br />
              協力：SLOW ART CENTER NAGOYA
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
