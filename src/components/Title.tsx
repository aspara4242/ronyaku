// components/Navigation.tsx
import React from 'react'

interface TitleProps {
  title: string
  ja_title: string
}

const Title = ({ title, ja_title }: TitleProps) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-1">{title}</h1>
      <p className="font-bold text-sm mb-12">{ja_title}</p>
    </div>
  )
}

export default Title