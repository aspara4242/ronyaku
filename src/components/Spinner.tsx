"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  baseSpeed?: number;
  className?: string;
}

export default function Spinner({
  src,
  baseSpeed = 0.35,
  className = "",
}: Props) {
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleRotate = () => {
    if (isRotating) return;

    // ランダムな回転角度（360度〜1800度）
    const randomDegree = Math.floor(Math.random() * 1080) + 720;
    // 速度を一定にする計算
    const nextDuration = (randomDegree / 360) * baseSpeed;

    setIsRotating(true);
    setDuration(nextDuration);
    setRotation((prev) => prev + randomDegree);
  };

  return (
    <div
      className={`block aspect-square ${className} ${
        isRotating ? "cursor-default" : "cursor-pointer"
      }`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: `transform ${duration}s ease-in-out`,
      }}
      onClick={handleRotate}
      onTransitionEnd={() => setIsRotating(false)}
    >
      <Image
        src={src}
        alt="老若男女未来学園ロゴ。クリックまたはタップすると回転する。"
        className="size-full object-contain"
        width={750}
        height={367}
        priority={true}
      />
    </div>
  );
}
