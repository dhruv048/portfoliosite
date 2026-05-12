"use client";

import { Fragment, useEffect, useMemo, useState } from "react";

export interface ParallaxStarsBackgroundProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  /** Extra classes on the slot that wraps `children` (e.g. z-index tweaks) */
  contentClassName?: string;
  speed?: number;
  /** When false, only the starfield + radial render; use `children` for your own hero layout */
  showTitle?: boolean;
}

function generateBoxShadows(n: number, color: string) {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${color}`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${color}`;
  }
  return value;
}
/** Light-theme starfield: darker + larger dots with opacity */
const STAR_SMALL = "rgba(107, 105, 102, 0.3)";
const STAR_MEDIUM = "rgba(82, 80, 77, 0.5)";
const STAR_BIG = "rgba(61, 58, 55, 0.6)";


type ShadowSet = { small: string; medium: string; big: string };

export function ParallaxStarsBackground({
  title = "PURE CSS\nPARALLAX PIXEL STARS",
  children,
  className = "",
  contentClassName = "",
  speed = 1,
  showTitle = true,
}: ParallaxStarsBackgroundProps) {
  const [shadows, setShadows] = useState<ShadowSet | null>(null);

  useEffect(() => {
    // Some browsers (notably Safari) can silently drop extremely large `box-shadow`
    // declarations. Keep these counts conservative for broad compatibility.
    setShadows({
      small: generateBoxShadows(350, STAR_SMALL),
      medium: generateBoxShadows(140, STAR_MEDIUM),
      big: generateBoxShadows(70, STAR_BIG),
    });
  }, []);

  const durations = useMemo(
    () => ({
      small: `${50 / speed}s`,
      medium: `${100 / speed}s`,
      big: `${150 / speed}s`,
    }),
    [speed],
  );

  return (
    <div
      className={`relative min-h-screen w-full bg-surface-50 ${className}`}
    >
      {/*
        Do not use overflow-hidden here: CSS clips box-shadow on the star
        layers, which makes the entire field invisible (spread is ~2000px).
      */}
      <div className="bg-radial-space pointer-events-none absolute inset-0 z-0" />

      {shadows && (
        <>
          <div
            className="parallax-stars-anim pointer-events-none absolute left-0 top-0 z-[5] h-[2px] w-[2px] bg-transparent"
            style={{
              boxShadow: shadows.small,
              animation: `anim-star ${durations.small} linear infinite`,
              willChange: "transform",
            }}
          >
            <div
              className="absolute top-[2000px] h-[2px] w-[2px] bg-transparent"
              style={{ boxShadow: shadows.small }}
            />
          </div>

          <div
            className="parallax-stars-anim pointer-events-none absolute left-0 top-0 z-[5] h-[4px] w-[4px] bg-transparent"
            style={{
              boxShadow: shadows.medium,
              animation: `anim-star ${durations.medium} linear infinite`,
              willChange: "transform",
            }}
          >
            <div
              className="absolute top-[2000px] h-[4px] w-[4px] bg-transparent"
              style={{ boxShadow: shadows.medium }}
            />
          </div>

          <div
            className="parallax-stars-anim pointer-events-none absolute left-0 top-0 z-[5] h-[6px] w-[6px] bg-transparent"
            style={{
              boxShadow: shadows.big,
              animation: `anim-star ${durations.big} linear infinite`,
              willChange: "transform",
            }}
          >
            <div
              className="absolute top-[2000px] h-[6px] w-[6px] bg-transparent"
              style={{ boxShadow: shadows.big }}
            />
          </div>
        </>
      )}

      {showTitle && (
        <div className="absolute left-0 right-0 top-1/2 z-20 -mt-[60px] px-4 text-center">
          <h1 className="text-[30px] font-light leading-tight tracking-[10px] text-surface-900 md:text-[50px]">
            {title.split("\n").map((line, i, arr) => (
              <Fragment key={`${i}-${line}`}>
                <span className="text-gradient-clip">{line}</span>
                {i < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </h1>
          {children && <div className="mt-8">{children}</div>}
        </div>
      )}

      {!showTitle && (
        <div className={`relative z-20 w-full ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ParallaxStarsBackground;
