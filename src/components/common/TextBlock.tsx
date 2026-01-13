// components/TextBlock.tsx
import React from "react";

interface TextBlockProps {
  title: string;
  children?: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const TextBlock = ({ title, children, level = "h2" }: TextBlockProps) => {
  const Tag = level;

  return (
    <div className="mb-8">
      <Tag className="mb-4 text-base font-bold md:text-lg">{title}</Tag>

      <div className="trim-text-both text-sm leading-[1.75] md:text-base md:leading-[1.75]">
        {children}
      </div>
    </div>
  );
};

export default TextBlock;
