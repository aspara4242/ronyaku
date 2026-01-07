// components/TextBlockSm.tsx
import React from "react";

interface TextBlockProps {
  title: string;
  children?: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const TextBlockSm = ({ title, children, level = "h3" }: TextBlockProps) => {
  const Tag = level;

  return (
    <div className="mb-4">
      <Tag className="mb-2 text-sm font-bold md:text-base">{title}</Tag>

      <div className="text-justify text-sm leading-[1.75] md:text-base md:leading-[1.75]">
        {children}
      </div>
    </div>
  );
};

export default TextBlockSm;
