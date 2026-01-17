// components/Navigation.tsx
import Link from "next/link";

import React from "react";

import { Logo } from "../svg/Icons";

const Navigation = () => {
  return (
    <div className="pointer-events-none fixed top-0 hidden w-dvw items-start justify-between pt-6 md:flex">
      <Link
        href="/"
        className="pointer-events-auto mt-1 ml-6 inline-block"
        aria-label="トップページに戻る"
      >
        <Logo className="h-9 w-auto" />
      </Link>

      <div className="pointer-events-auto mr-6 text-right text-lg leading-7">
        <Link href="/about">About Us</Link>
        {" / "}
        <Link href="/works">Works</Link>
        {" / "}
        <Link href="/members">Members</Link>
        <br />
        <Link href="/news">News</Link>
        {" / "}
        <Link href="/articles">Articles</Link>
      </div>
    </div>
  );
};

export default Navigation;
