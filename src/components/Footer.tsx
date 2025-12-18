// components/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>

      <Link href="/">
        <Image
          className="h-9 mb-6 mx-auto"
          src="/logo_white.svg"
          alt="団体ロゴ"
          width={720}
          height={405}
        />
      </Link>

      <div className='text-base text-center mb-6'>
        <Link href="/about">About Us</Link> / <Link href="/works">Works</Link><br />
        <Link href="/members">Members</Link> / <Link href="/contact">Contact Us</Link>
      </div>

      <div className='flex justify-center items-center gap-6 mb-6'>
        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-8"
            src="/x_icon.svg"
            alt="Xアイコン画像"
            width={30}
            height={30}
          />
        </a>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-8"
            src="/instagram_icon.svg"
            alt="Instagramアイコン画像"
            width={30}
            height={30}
          />
        </a>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <Image
            className="w-9"
            src="/youtube_icon.svg"
            alt="YouTubeアイコン画像"
            width={30}
            height={30}
          />
        </a>
      </div>

      <p className="text-sm text-center mb-6">
        ©Ronyakunannyo Mirai Gakuen
      </p>
    </div>
  )
}