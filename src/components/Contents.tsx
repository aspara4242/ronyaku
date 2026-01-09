// components/Contents.tsx
import React from "react";

interface ContentsProps {
  children?: React.ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return (
    <main className="mx-auto mb-32 mt-12 w-[90%] max-w-180 md:mt-28">
      {children}
    </main>
  );
};

export default Contents;
