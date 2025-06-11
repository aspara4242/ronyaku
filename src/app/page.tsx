import Link from "next/link";
import { getNewsList } from "@libs/news";
import Footer from "@/components/Footer";

export default async function Home() {
  const contents = await getNewsList();
  return (
    <div id="content">
      <img id="logo" src="/logo_main.png" width="420" />

      <div id="banner">
        <Link href="/about">About Us</Link>
        <Link href="/works">Works</Link>
        <Link href="/members">Members</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/shop">Shop</Link>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <img id="twitter" src="/x_icon.svg" width="30" alt="X" />
        </a>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <img id="twitter" src="/instagram_icon.svg" width="30" alt="Instagram" />
        </a>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <img id="twitter" src="/youtube_icon.svg" width="30" alt="YouTube" />
        </a>
      </div>

      <div id="news">
        <h3 id="news-header">
          <Link href="/news">News</Link>
        </h3>
        <ul id="news-list">
          {contents.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.slug}`}>{news.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    <Footer></Footer>
    </div>
  );
};