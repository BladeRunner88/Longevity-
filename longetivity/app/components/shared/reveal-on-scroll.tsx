"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDelay = "none" | "delay" | "delay-2";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: RevealDelay;
};

const delayMs: Record<RevealDelay, number> = {
  none: 0,
  delay: 150,
  "delay-2": 280,
};

export function RevealOnScroll({
  children,
  className = "",
  delay = "none",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const ms = delayMs[delay];
          window.setTimeout(() => setIsVisible(true), ms);
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.1 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
