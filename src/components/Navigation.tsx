// components/Navigation.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="fixed top-0 hidden w-dvw items-center justify-between pt-6 md:flex">
      <Link href="/" className="ml-6 inline-block">
        <Image
          className="h-9 w-auto"
          src="/logo_white.svg"
          alt="団体ロゴ"
          width={30}
          height={30}
          priority={true}
        />
      </Link>

      <div className="mr-6 text-right text-lg">
        <Link href="/about">About Us</Link> / <Link href="/works">Works</Link> /{" "}
        <Link href="/members">Members</Link> / <Link href="/news">News</Link>
      </div>
    </div>
  );
};

export default Navigation;
