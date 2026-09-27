"use client";

import { useState } from "react";

import { KappaTitle } from "./svg/KappaTitle";

export default function KappaSlider() {
  // 0 (最小) ~ 1 (最大) の割合で管理
  const [ratio, setRatio] = useState<number>(0);

  // 割合に応じて線幅（4.98px ~ 90px）を算出
  const strokeWidth = 4.98 + ratio * (75 - 4.98);

  // 割合に応じてぼかし（0px ~ 35px）を算出
  const blur = ratio * 15;

  return (
    <div className="mx-auto mb-16 flex w-full flex-col items-center gap-4 md:mb-24 md:w-[80%]">
      {/* SVGタイトル表示領域 */}
      <div className="mb-16 flex w-full justify-center">
        <KappaTitle className="w-full" strokeWidth={strokeWidth} blur={blur} />
      </div>

      {/* 0 ~ 1 を動かす共通スライダー */}
      <input
        id="common-slider"
        type="range"
        min="0"
        max="1"
        step="0.001"
        value={ratio}
        onChange={(e) => setRatio(parseFloat(e.target.value))}
        className="h-0.5 w-[90%] max-w-90 cursor-pointer appearance-none rounded-lg bg-body-white accent-body-white"
      />
      <p className="animate-slide-text text-center text-sm opacity-0">SLIDE</p>
    </div>
  );
}
