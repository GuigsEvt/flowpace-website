"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Label {
  text: string;
  x: number;
  y: number;
}

const NODE_COLORS = [
  "#1A73E8",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#71717A",
];

const LABELS: Label[] = [
  { text: "Agents", x: 0.15, y: 0.25 },
  { text: "Workflows", x: 0.75, y: 0.2 },
  { text: "RAG", x: 0.5, y: 0.65 },
  { text: "Security", x: 0.2, y: 0.7 },
  { text: "Integrations", x: 0.8, y: 0.6 },
];

const CONNECTION_DISTANCE = 200;
const NODE_COUNT = 25;

export function HeroNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initNodes = () => {
      const rect = canvas.getBoundingClientRect();
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 6 + Math.random() * 8,
        color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
      }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const nodes = nodesRef.current;

      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      }

      // Draw connections
      ctx.setLineDash([4, 6]);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.setLineDash([]);

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.35;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Draw labels
      ctx.font = "13px Inter, sans-serif";
      ctx.textAlign = "center";
      for (const label of LABELS) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
        ctx.fillText(label.text, label.x * w, label.y * h);
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    animFrameRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
