"use client";

import { useState } from "react";
import { RonyakuLogo } from "./svg/RonyakuLogo";

interface Props {
  baseSpeed?: number;
  className?: string;
}

export default function Spinner({
  baseSpeed = 0.35,
  className = "",
}: Props) {
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleRotate = () => {
    if (isRotating) return;

    // ランダムな回転角度（720度〜1800度）
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
      area-label="老若男女未来学園のロゴ。クリックすると2から5回転の範囲内でランダムに回転する。"
    >
      <RonyakuLogo className="size-full object-contain" />
    </div>
  );
}
