// components/Footer.tsx
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='navi'>
        <Link href="/about">About Us</Link> / <Link href="/works">Works</Link><br/>
        <Link href="/members">Members</Link> / <Link href="/contact">Contact Us</Link> / <Link href="/shop">Shop</Link>
      </div>

      <div className='sns'>
        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <img id="twitter" src="/x_icon.svg" width="30" alt="X" />
        </a>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <img id="twitter" src="/instagram_icon.svg" width="30" alt="Instagram" />
        </a>

        <a href="https://twitter.com/ronyaku4444" target="_blank" rel="noopener noreferrer">
          <img id="twitter" src="/youtube_icon.svg" width="30" alt="YouTube" />
        </a>
      </div>
    </div>
  )
}