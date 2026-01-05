// components/Navigation.tsx
import React from "react";
import Link from "next/link";
import { Logo } from "./Icons";

const Navigation = () => {
  return (
    <div className="fixed top-0 hidden w-dvw items-start justify-between pt-6 md:flex">
      <Link href="/" className="ml-6 mt-1 inline-block">
        <Logo className="h-9 w-auto" />
      </Link>

      <div className="mr-6 text-right text-lg leading-7">
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
