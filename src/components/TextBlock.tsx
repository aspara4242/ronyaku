// components/TextBlock.tsx
import React from 'react'

interface TextBlockProps {
  title: string;
  children?: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TextBlock = ({ title, children, level = 'h2' }: TextBlockProps) => {

  const Tag = level;

  return (
    <div className="mb-12">
      <Tag className="font-bold text-base md:text-lg mb-2">
        {title}
      </Tag>

      <div className="text-sm md:text-base text-justify leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default TextBlock