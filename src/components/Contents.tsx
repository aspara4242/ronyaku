// components/Contents.tsx
import React from "react";

interface ContentsProps {
  children?: React.ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return (
    <div className="mx-auto mb-36 mt-12 w-[90%] max-w-[720px] md:mt-28">
      {children}
    </div>
  );
};

export default Contents;
