// components/Contents.tsx
import React, { ReactNode } from 'react'

interface ContentsProps {
  children?: React.ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return (
    <div className="w-[90%] max-w-[720px] mx-auto mt-12 md:mt-28 mb-48">
      {children}
    </div>
  );
}

export default Contents