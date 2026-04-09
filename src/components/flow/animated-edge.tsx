"use client";

import { getBezierPath, type EdgeProps } from "@xyflow/react";

export function AnimatedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <style>
        {`
          @keyframes dash-flow {
            to { stroke-dashoffset: -20; }
          }
        `}
      </style>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        fill="none"
        stroke="rgba(26, 115, 232, 0.5)"
        strokeWidth={2}
        strokeDasharray="5 5"
        style={{
          ...style,
          animation: "dash-flow 1s linear infinite",
        }}
      />
      <circle r="3" fill="#1A73E8" filter="url(#glow)">
        <animateMotion dur="3s" repeatCount="indefinite" path={edgePath} />
      </circle>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </>
  );
}

export const edgeTypes = {
  animated: AnimatedEdge,
};
