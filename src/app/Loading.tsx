import React from 'react'
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="bg-[#0f0f0f] w-dvw h-dvh">
      <Image
        className="w-full mb-2 animate-pulse"
        src="/logo_white.png"
        alt="老若男女未来学園ロゴ（白）"
        width={720}
        height={405}
      />
    </div>
  );
}

export default Loading