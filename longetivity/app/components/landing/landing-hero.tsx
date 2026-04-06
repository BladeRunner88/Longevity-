"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LandingHeroProductStack } from "./landing-hero-product-stack";

type LandingHeroProps = {
  listPosition: number;
  onRequestAccess: () => void;
};

const quizBtn =
  "rounded-full border border-border-subtle bg-surface px-4 py-2 text-[13px] text-ink transition-colors hover:border-warm hover:bg-warm/10";

export function LandingHero({ listPosition, onRequestAccess }: LandingHeroProps) {
  const [quizStep, setQuizStep] = useState(1);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [emailHero, setEmailHero] = useState("");
  const [heroSuccess, setHeroSuccess] = useState(false);

  const submitHero = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = emailHero.trim();
    if (!trimmed || !trimmed.includes("@")) return;
    onRequestAccess();
    setHeroSuccess(true);
  };

  return (
    <section className="relative grid min-h-screen grid-cols-1 items-stretch text-left text-ink lg:grid-cols-2">
      <div className="relative z-[2] flex flex-col justify-center px-6 pt-[120px] pb-16 sm:px-7 lg:pl-20 lg:pr-16 lg:pt-[140px] lg:pb-20">
        <motion.div
          className="mb-10 inline-flex items-center gap-2.5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="size-1.5 rounded-full bg-warm" aria-hidden />
          <span className="text-[11px] font-medium tracking-[0.15em] text-ink-dim uppercase">
            Launching Wave 1 · 200 Members Only
          </span>
        </motion.div>

        <motion.h1
          className="mb-8 font-display text-[clamp(52px,6vw,88px)] font-extrabold leading-none tracking-[-0.025em] text-ink"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Your longevity
          <br />
          <em className="not-italic text-landing-accent">protocol.</em>
          <br />
          Personalised.
        </motion.h1>

        <motion.p
          className="mb-[52px] max-w-[440px] text-[17px] leading-[1.65] text-ink-dim"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Not a supplement brand. A protocol platform. Our intelligent framework
          builds a personalised, adaptive system designed for lasting results —
          delivered thoughtfully to your door every month.
        </motion.p>

        <motion.div
          className="mb-10 max-w-[420px] rounded-xl border border-[rgba(13,12,9,0.08)] bg-[#faf8f4] p-6 shadow-[0_2px_28px_rgba(13,12,9,0.05)]"
          id="micro-quiz"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center gap-2 font-display text-base font-bold text-ink">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            See your protocol in 30 seconds
          </div>

          {!showQuizResult && quizStep === 1 && (
            <motion.div
              id="qs-1"
              className="block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-3 text-sm text-ink-dim">
                1. How is your morning energy?
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" className={quizBtn} onClick={() => setQuizStep(2)}>
                  Slow to wake
                </button>
                <button type="button" className={quizBtn} onClick={() => setQuizStep(2)}>
                  Consistent
                </button>
                <button type="button" className={quizBtn} onClick={() => setQuizStep(2)}>
                  Needs caffeine
                </button>
              </div>
            </motion.div>
          )}

          {!showQuizResult && quizStep === 2 && (
            <motion.div
              id="qs-2"
              className="block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-3 text-sm text-ink-dim">
                2. How do you handle daily stress?
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" className={quizBtn} onClick={() => setQuizStep(3)}>
                  I feel overwhelmed
                </button>
                <button type="button" className={quizBtn} onClick={() => setQuizStep(3)}>
                  Generally fine
                </button>
                <button type="button" className={quizBtn} onClick={() => setQuizStep(3)}>
                  Physical tension
                </button>
              </div>
            </motion.div>
          )}

          {!showQuizResult && quizStep === 3 && (
            <motion.div
              id="qs-3"
              className="block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-3 text-sm text-ink-dim">3. How is your sleep quality?</div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className={quizBtn}
                  onClick={() => setShowQuizResult(true)}
                >
                  Fragmented
                </button>
                <button
                  type="button"
                  className={quizBtn}
                  onClick={() => setShowQuizResult(true)}
                >
                  Hard to fall asleep
                </button>
                <button
                  type="button"
                  className={quizBtn}
                  onClick={() => setShowQuizResult(true)}
                >
                  Deep & restful
                </button>
              </div>
            </motion.div>
          )}

          {showQuizResult && (
            <motion.div
              id="qs-result"
              className="block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-xl border border-border-subtle bg-surface p-5">
                <div className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-warm uppercase">
                  THE DAILY SYSTEM PREVIEW
                </div>
                <div className="mb-1 font-display text-lg font-extrabold text-ink">
                  Your Baseline Protocol
                </div>
                <div className="mb-3 text-xs leading-normal text-ink-dim">
                  Based on your responses, we recommend pairing{" "}
                  <strong className="text-ink">NMN 500mg</strong> with our{" "}
                  <strong className="text-ink">Restore Blend</strong> for optimal cellular
                  resilience and deep recovery.
                </div>
              </div>
              <button
                type="button"
                className="mt-4 cursor-pointer text-xs text-ink-dim underline transition-colors hover:text-ink"
                onClick={() => {
                  setShowQuizResult(false);
                  setQuizStep(1);
                }}
              >
                Try different answers
              </button>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="flex max-w-[420px] flex-col gap-3.5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {!heroSuccess ? (
            <form
              className="flex overflow-hidden rounded-md border border-border-subtle bg-surface focus-within:shadow-[0_0_0_3px_rgba(160,140,114,0.2)]"
              onSubmit={submitHero}
            >
              <input
                type="email"
                id="hero-email"
                placeholder="Enter your email address"
                value={emailHero}
                onChange={(e) => setEmailHero(e.target.value)}
                autoComplete="email"
                className="min-w-0 flex-1 border-0 bg-transparent px-5 py-4 text-[15px] text-ink placeholder:text-ink-faint outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-ink px-7 py-4 font-display text-[13px] font-bold tracking-[0.1em] text-bg uppercase transition hover:bg-[#1e1c16] active:translate-y-px"
              >
                Request Access
              </button>
            </form>
          ) : (
            <div
              className="rounded-md border border-border-subtle bg-cream px-6 py-4 text-sm text-ink"
              id="hero-success"
            >
              <strong className="font-display font-bold">You&apos;re on the list.</strong>{" "}
              We&apos;ll email you when your access window opens. You are{" "}
              <strong className="font-display font-bold">#{listPosition}</strong> on the
              access list.
            </div>
          )}
          <p className="text-xs leading-normal text-ink-faint">
            No spam. No discounts. Just a notification when your spot opens. Unsubscribe
            anytime.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 flex max-w-[420px] flex-wrap gap-x-6 gap-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {[
            "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
            "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
          ].map((d, i) => (
            <div
              key={i}
              className="flex max-w-[200px] items-center gap-2 text-[11px] font-medium tracking-[0.05em] text-ink-dim"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-3.5 shrink-0 text-warm"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d={d} />
              </svg>
              <span>
                {i === 0 && "FDA Lawful NMN (Sept 2025)"}
                {i === 1 && "Third-Party Tested (NSF)"}
                {i === 2 && "GMP Certified"}
                {i === 3 && "2025 Clinical Data"}
              </span>
            </div>
          ))}
        </motion.div>
        <p className="mt-3 max-w-[420px] text-[10px] leading-normal text-ink-faint">
          * These statements have not been evaluated by the FDA. This product is not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <motion.div
          className="mt-[52px] flex items-center gap-4 border-t border-border-subtle pt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "flex size-[34px] items-center justify-center overflow-hidden rounded-full border-2 border-landing bg-cream text-[13px]",
                  i > 0 && "-ml-2",
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
            ))}
          </div>
          <div>
            <strong className="font-display text-[15px] font-bold text-ink">
              {listPosition} people
            </strong>{" "}
            <span className="text-ink-dim">ahead of you</span>
            <p className="mt-0.5 text-xs text-ink-dim">on the Wave 1 access list</p>
          </div>
        </motion.div>
      </div>

      <div className="relative hidden min-h-[50vh] overflow-hidden lg:block">
        <div className="absolute inset-0 flex items-center justify-center bg-cream">
          <motion.div
            className="flex h-full w-full min-h-full items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <LandingHeroProductStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
