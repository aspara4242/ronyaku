// components/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

      <div className='grid grid-cols-3 gap-6 items-center justify-center w-fit mx-auto mb-6'>
        <div className="flex justify-start">
          <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
            <Image className="w-7" src="/x_icon.svg" alt="Xアイコン画像" width={30} height={30} />
          </a>
        </div>

        <div className="flex justify-center">
          <a href="https://www.instagram.com/ronyaku44" target="_blank" rel="noopener noreferrer">
            <Image className="w-8" src="/instagram_icon.svg" alt="Instagramアイコン画像" width={30} height={30} />
          </a>
        </div>

        <div className="flex justify-end">
          <a href="https://www.youtube.com/@ronyaku4444" target="_blank" rel="noopener noreferrer">
            <Image className="w-9" src="/youtube_icon.svg" alt="YouTubeアイコン画像" width={30} height={30} />
          </a>
        </div>
      </div>ß

      <div className="flex justify-center items-center gap-2 mb-12">
        <Image
          className="w-6"
          src="/mail_icon.svg"
          alt="メールアイコン"
          width={30}
          height={30}
        />
        <p className="text-sm">
          ronyaku4444@gmail.com
        </p>
      </div>

      <p className="font-extralight text-sm text-center mb-6">
        © 2025 Ronyakunannyo Mirai Gakuen
      </p>
    </div>
  )
}