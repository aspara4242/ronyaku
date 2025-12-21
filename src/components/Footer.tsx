// components/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Copyright from './Copyright'
import ContactLinks from './ContactLinks'

export default function Footer() {
  return (
    <div>

      <div className="mb-6 md:hidden">
        <Link href="/">
          <Image
            className="h-9 mb-6 mx-auto"
            src="/logo_white.svg"
            alt="団体ロゴ"
            width={720}
            height={405}
          />
        </Link>

        <div className='text-base text-center'>
          <Link href="/about">About Us</Link> / <Link href="/works">Works</Link> / <Link href="/members">Members</Link> / <Link href="/news">News</Link>
        </div>
      </div>

      <ContactLinks />

      <Copyright />
    </div>
  )
}