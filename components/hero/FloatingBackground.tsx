"use client";

import { useMemo } from "react";

export function FloatingBackground() {
  const { leftSweeps, rightSweeps, floorRays, floorRipples } = useMemo(() => {
    const left: string[] = [];
    const right: string[] = [];
    const rays: string[] = [];
    const ripples: string[] = [];

    // Left sweeping ribbons (from top-left down toward center horizon)
    for (let i = 0; i < 22; i++) {
      const t = i / 21;
      const y0 = 30 + t * 380;
      const c1x = 180 + t * 90;
      const c1y = 150 + t * 240;
      const c2x = 480 + t * 50;
      const c2y = 440 + t * 120;
      const x1 = 720;
      const y1 = 510 + t * 120;
      const c3x = 960 - t * 50;
      const c3y = 550 + t * 110;
      const c4x = 1260 - t * 90;
      const c4y = 600 + t * 70;
      const x2 = 1440;
      const y2 = 620 + t * 70;
      left.push(
        `M 0 ${y0} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x1} ${y1} C ${c3x} ${c3y}, ${c4x} ${c4y}, ${x2} ${y2}`
      );
    }

    // Right sweeping ribbons (mirrored)
    for (let i = 0; i < 22; i++) {
      const t = i / 21;
      const y0 = 30 + t * 380;
      const c1x = 1440 - (180 + t * 90);
      const c1y = 150 + t * 240;
      const c2x = 1440 - (480 + t * 50);
      const c2y = 440 + t * 120;
      const x1 = 720;
      const y1 = 510 + t * 120;
      const c3x = 1440 - (960 - t * 50);
      const c3y = 550 + t * 110;
      const c4x = 1440 - (1260 - t * 90);
      const c4y = 600 + t * 70;
      const x2 = 0;
      const y2 = 620 + t * 70;
      right.push(
        `M 1440 ${y0} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x1} ${y1} C ${c3x} ${c3y}, ${c4x} ${c4y}, ${x2} ${y2}`
      );
    }

    // Floor perspective rays radiating outward
    for (let i = 0; i < 28; i++) {
      const t = i / 27;
      const xTarget = t * 1440;
      const c1x = 720 + (xTarget - 720) * 0.35;
      const c1y = 560;
      const c2x = 720 + (xTarget - 720) * 0.72;
      const c2y = 680;
      rays.push(`M 720 510 C ${c1x} ${c1y}, ${c2x} ${c2y}, ${xTarget} 820`);
    }

    // Floor horizontal curve ripples
    for (let i = 0; i < 18; i++) {
      const t = i / 17;
      const yCenter = 520 + t * 280;
      const yEdge = 550 + t * 240;
      const c1x = 440;
      const c1y = yCenter - (6 + t * 20);
      const c2x = 1000;
      const c2y = yCenter - (6 + t * 20);
      ripples.push(`M 0 ${yEdge} C ${c1x} ${c1y}, ${c2x} ${c2y}, 1440 ${yEdge}`);
    }

    return {
      leftSweeps: left,
      rightSweeps: right,
      floorRays: rays,
      floorRipples: ripples,
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Dynamic flowing curves SVG replicating the luminous light ribbon perspective */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="flowGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="rayGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#93C5FD" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="rippleGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Floor perspective rays radiating outward */}
        <g opacity="0.75">
          {floorRays.map((d, i) => (
            <path
              key={`ray-${i}`}
              d={d}
              stroke="url(#rayGrad)"
              strokeWidth="1.1"
              strokeOpacity="0.45"
            />
          ))}
        </g>

        {/* Floor ripple curves */}
        <g opacity="0.65">
          {floorRipples.map((d, i) => (
            <path
              key={`rip-${i}`}
              d={d}
              stroke="url(#rippleGrad)"
              strokeWidth="0.9"
              strokeOpacity="0.35"
            />
          ))}
        </g>

        {/* Subtle architectural typographic watermark */}
        <text
          x="720"
          y="280"
          textAnchor="middle"
          fontSize="108"
          fontWeight="900"
          letterSpacing="16"
          fill="none"
          stroke="#2563EB"
          strokeWidth="1.2"
          strokeOpacity="0.035"
          className="uppercase select-none pointer-events-none"
        >
          ST MARY&apos;S COMPUTERS
        </text>

        {/* Left flowing ribbons */}
        <g opacity="0.9">
          {leftSweeps.map((d, i) => (
            <path
              key={`left-${i}`}
              d={d}
              stroke="url(#flowGrad1)"
              strokeWidth={1.2 + (i / 22) * 0.8}
              strokeOpacity={0.25 + (1 - Math.abs(i - 11) / 11) * 0.5}
            />
          ))}
        </g>

        {/* Right flowing ribbons */}
        <g opacity="0.9">
          {rightSweeps.map((d, i) => (
            <path
              key={`right-${i}`}
              d={d}
              stroke="url(#flowGrad2)"
              strokeWidth={1.2 + (i / 22) * 0.8}
              strokeOpacity={0.25 + (1 - Math.abs(i - 11) / 11) * 0.5}
            />
          ))}
        </g>
      </svg>

      {/* Luminous horizon focal glow right under the buttons */}
      <div
        className="absolute bottom-[20%] sm:bottom-[18%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[240px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(239,246,255,0.85) 35%, rgba(219,234,254,0.45) 65%, transparent 100%)",
          filter: "blur(28px)",
        }}
      />

      {/* Top canvas soft radial fade for pristine typography clarity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 30%, #FFFFFF 30%, rgba(255,255,255,0.85) 65%, transparent 95%)",
        }}
      />
    </div>
  );
}
