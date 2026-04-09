"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "large";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors";
  const sizeClasses =
    size === "large" ? "px-10 py-4 text-lg" : "px-8 py-3 text-sm";

  const variantClasses =
    variant === "primary"
      ? "bg-accent hover:bg-accent-light text-white animate-glow"
      : "border border-white/20 bg-transparent hover:bg-white/5 text-white";

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
