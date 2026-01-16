import Link from "next/link";

import React from "react";

import { Logo } from "../svg/Icons";
import ContactLinks from "./ContactLinks";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div>
      <div className="mb-8 md:hidden">
        <Link href="/" aria-label="トップページに戻る">
          <Logo className="mx-auto mb-8 h-9" />
        </Link>

        <div className="trim-text-both text-center text-base leading-loose">
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
