"use client";

import { useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";

const CARD_W = "w-[260px] min-w-[260px] max-w-[260px]";
const CARD_H = "h-[176px] min-h-[176px] max-h-[176px]";

const cardSurfaceClassName = [
  "flex flex-col",
  CARD_W,
  CARD_H,
  "rounded-[22px] border border-[rgba(13,12,9,0.07)] bg-surface p-[26px_28px]",
  "shadow-[0_20px_56px_rgba(13,12,9,0.1)]",
  "cursor-grab touch-none select-none active:cursor-grabbing",
].join(" ");

type StackCardPosition = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

function DraggableStackCard({
  stackZ,
  position,
  rotate,
  floatAnimate,
  floatDuration,
  children,
}: {
  stackZ: number;
  position: StackCardPosition;
  rotate: number;
  floatAnimate: { y: number | number[] };
  floatDuration: number;
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [lifted, setLifted] = useState(false);

  const floatTransition = reduceMotion
    ? { duration: 0.2 }
    : {
        duration: floatDuration,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      };

  const snapTransition = reduceMotion
    ? { type: "tween" as const, duration: 0.2, ease: "easeOut" as const }
    : { type: "spring" as const, stiffness: 380, damping: 28 };

  return (
    <motion.div
      className="absolute"
      style={{
        ...position,
        rotate,
        zIndex: lifted ? 50 : stackZ,
      }}
      animate={floatAnimate}
      transition={floatTransition}
    >
      <motion.div
        className={cardSurfaceClassName}
        style={{ x, y }}
        drag
        dragMomentum={false}
        dragElastic={0.08}
        whileDrag={{ scale: 1.02 }}
        onDragStart={() => setLifted(true)}
        onDragEnd={() => {
          setLifted(false);
          animate(x, 0, snapTransition);
          animate(y, 0, snapTransition);
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function LandingHeroProductStack() {
  const reduceMotion = useReducedMotion();

  const float1 = reduceMotion ? { y: 0 } : { y: [0, -12, 0] };
  const float2 = reduceMotion ? { y: -6 } : { y: [-6, 6, -6] };
  const float3 = reduceMotion ? { y: 4 } : { y: [4, -8, 4] };

  return (
    <div className="relative h-[420px] w-[320px] drop-shadow-[0_2px_8px_rgba(13,12,9,0.04)]">
      <DraggableStackCard
        stackZ={1}
        position={{ top: 0, left: 0 }}
        rotate={-4}
        floatAnimate={float1}
        floatDuration={6}
      >
        <span className="mb-3.5 block w-fit max-w-full border-b-2 border-[#9bb4e8] pb-2 text-[10px] font-semibold tracking-[0.16em] text-[#2a4a8c] uppercase">
          CELLULAR
        </span>
        <div className="mb-2 shrink-0 font-display text-xl font-extrabold text-ink">
          Daily Renewal
        </div>
        <div className="min-h-0 flex-1 text-xs leading-normal text-ink-dim">
          NMN 500mg · Morning formula. Restores cellular energy production.
        </div>
      </DraggableStackCard>

      <DraggableStackCard
        stackZ={2}
        position={{ top: 80, right: 0 }}
        rotate={2}
        floatAnimate={float2}
        floatDuration={7}
      >
        <span className="mb-3.5 block w-fit max-w-full border-b-2 border-[#a08c72] pb-2 text-[10px] font-semibold tracking-[0.16em] text-[#5c6648] uppercase">
          RESTORE
        </span>
        <div className="mb-2 shrink-0 font-display text-xl font-extrabold text-ink">
          Resilience
        </div>
        <div className="min-h-0 flex-1 text-xs leading-normal text-ink-dim">
          Magnesium + Ashwagandha KSM-66. For stress and recovery.
        </div>
      </DraggableStackCard>

      <DraggableStackCard
        stackZ={3}
        position={{ bottom: 0, left: 30 }}
        rotate={-1}
        floatAnimate={float3}
        floatDuration={8}
      >
        <span className="mb-3.5 block w-fit max-w-full border-b-2 border-[#d4b896] pb-2 text-[10px] font-semibold tracking-[0.16em] text-[#8a6b4f] uppercase">
          SLEEP
        </span>
        <div className="mb-2 shrink-0 font-display text-xl font-extrabold text-ink">
          Overnight Repair
        </div>
        <div className="min-h-0 flex-1 text-xs leading-normal text-ink-dim">
          Mag L-Threonate + L-Theanine. Felt within days, not weeks.
        </div>
      </DraggableStackCard>
    </div>
  );
}
