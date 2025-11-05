"use client";

import { useId } from "react";
import { cn } from "@/packages/utils/cn.util";

interface DotGridProps {
  gap?: number;
  radius?: number;
  className?: string;
  scale?: number;
  positionX?: number;
  positionY?: number;
}

export function DotGrid({
  gap = 20,
  radius = 1,
  className,
  scale = 1,
  positionX = 0,
  positionY = 0,
}: DotGridProps) {
  const id = useId();

  const patternSize = gap * scale;

  const dotSize = radius * scale;

  const patternX = (positionX % patternSize) - patternSize;

  const patternY = (positionY % patternSize) - patternSize;

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0", className)}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <pattern
        id={`pattern-${id}`}
        x={patternX}
        y={patternY}
        width={patternSize}
        height={patternSize}
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx={gap / 2}
          cy={gap / 2}
          r={dotSize}
          fill="hsl(var(--twc-text-body))"
          opacity={0.1}
        />
      </pattern>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#pattern-${id})`}
      />
    </svg>
  );
}
