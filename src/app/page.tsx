import Link from "next/link";
import Image from "next/image";
import { getNewsList } from "@libs/news";

export default async function Home() {
  const contents = await getNewsList();

  return (
    <div className="relative w-[90%] max-w-[720px] mx-auto">

      <div className="w-3/4 max-w-[360px] aspect-square flex justify-center items-center mx-auto mt-12">
        <Image
          src="/logo_main.png"
          alt="老若男女未来学園ロゴ画像"
          width={420}
          height={236}
        />
      </div>

      <div className="text-lg text-center leading-tight mb-12">
        <Link href="/about">About Us</Link><br />
        ・<br />
        <Link href="/works">Works</Link><br />
        ・<br />
        <Link href="/members">Members</Link>
      </div>

      <div className='grid grid-cols-3 gap-6 items-center justify-center w-fit mx-auto mb-6'>
        <div className="flex justify-start">
          <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
            <Image className="w-7" src="/x_icon.svg" alt="Xアイコン画像" width={30} height={30} />
          </a>
        </div>

        <div className="flex justify-center">
          <a href="https://www.instagram.com/ronyaku44" target="_blank" rel="noopener noreferrer">
            <Image className="w-8" src="/instagram_icon.svg" alt="Instagramアイコン画像" width={30} height={30} />
          </a>
        </div>

        <div className="flex justify-end">
          <a href="https://www.youtube.com/@ronyaku4444" target="_blank" rel="noopener noreferrer">
            <Image className="w-9" src="/youtube_icon.svg" alt="YouTubeアイコン画像" width={30} height={30} />
          </a>
        </div>
      </div>

      <div>
        <p className="text-lg text-center mb-4">
          <Link href="/news">News</Link>
        </p>
        <ul className="mb-32">
          {contents.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.slug}`}>{news.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="absolute w-full font-extralight text-sm text-center pb-6">
        ©Ronyakunannyo Mirai Gakuen
      </p>
    </div>

  );
};