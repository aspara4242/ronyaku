import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { type FC } from "react";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ronyaku.com"),
  title: {
    default: "老若男女未来学園",
    template: `%s | 老若男女未来学園`,
  },
  description:
    "演劇を中心とした幅広い芸術分野での活動を画策するクリエイティブ団体、老若男女未来学園のウェブサイトです。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: {
      default: "老若男女未来学園",
      template: `%s | 老若男女未来学園`,
    },
    description:
      "演劇を中心とした幅広い芸術分野での活動を画策するクリエイティブ団体、老若男女未来学園のウェブサイトです。",
    url: `https://ronyaku.com`,
    siteName: "老若男女未来学園",
    locale: "ja_JP",
    type: "website",
    images: "/og_image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/og_image.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <html lang="ja">
      <body>
        {props.children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
