// components/Navigation.tsx
import React from "react";

interface TitleProps {
  title: string;
  ja_title: string;
}

const Title = ({ title, ja_title }: TitleProps) => {
  return (
    <div>
      <h1 className="mb-1 text-xl font-bold">{title}</h1>
      <p className="mb-12 text-sm font-bold">{ja_title}</p>
    </div>
  );
};

export default Title;
