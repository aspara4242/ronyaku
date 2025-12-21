// components/ContactLinks.tsx
import React from 'react'
import Image from 'next/image'

const ContactLinks = () => {
  return (
    <div>
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
      </div>

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
    </div>
  )
}

export default ContactLinks;