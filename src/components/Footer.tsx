// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Copyright from "./Copyright";
import ContactLinks from "./ContactLinks";
import { Logo } from "./Icons";

export default function Footer() {
  return (
    <div>
      <div className="mb-8 md:hidden">
        <Link href="/">
          <Logo className="mx-auto mb-8 h-9" />
        </Link>

        <div className="height-trim text-center text-base leading-8">
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

      <ContactLinks />

      <Copyright />
    </div>
  );
}
