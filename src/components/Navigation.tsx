// components/Navigation.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <div className="hidden fixed top-0 w-dvw md:flex justify-between items-center pt-6">

      <Link href="/" className='inline-block ml-6'>
        <Image
          className="h-9 w-auto"
          src="/logo_white.svg"
          alt="団体ロゴ"
          width={30}
          height={30}
        />
      </Link>

      <div className='text-lg text-right mr-6'>
        <Link href="/about">About Us</Link> / <Link href="/works">Works</Link> / <Link href="/members">Members</Link> / <Link href="/news">News</Link>
      </div>

    </div>
  )
}

export default Navigation;