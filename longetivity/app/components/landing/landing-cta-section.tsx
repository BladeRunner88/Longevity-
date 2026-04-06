"use client";

import { useState } from "react";
import { RevealOnScroll } from "../shared/reveal-on-scroll";

type LandingCtaSectionProps = {
  listPosition: number;
  onJoinWaitlist: () => void;
};

export function LandingCtaSection({
  listPosition,
  onJoinWaitlist,
}: LandingCtaSectionProps) {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      return;
    }
    onJoinWaitlist();
    setShowSuccess(true);
  };

  return (
    <section className="relative overflow-hidden px-7 py-20 text-center text-ink lg:px-20 lg:py-40">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle opacity-25"
        aria-hidden
      />

      <RevealOnScroll className="relative z-[2]">
        <p className="mb-6 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          Wave 1 · 200 spots
        </p>
        <h2 className="mb-6 font-display text-[clamp(40px,5vw,72px)] font-extrabold leading-none tracking-[-0.025em] text-ink">
          Take the quiz.
          <br />
          Get your protocol.
        </h2>
        <p className="mx-auto mb-12 max-w-[480px] text-[17px] leading-relaxed text-ink-dim">
          Join the waitlist. When your access window opens, take the 3-minute quiz and
          receive your personalised longevity protocol.
        </p>
        <div>
          {!showSuccess ? (
            <form
              className="mx-auto inline-flex max-w-[380px] flex-col overflow-hidden rounded-md border border-border-subtle bg-surface shadow-[0_8px_40px_rgba(13,12,9,0.08)] sm:max-w-none sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                id="cta-email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full min-w-0 border-0 bg-transparent px-6 py-[18px] text-[15px] text-ink placeholder:text-ink-faint outline-none sm:w-80"
              />
              <button
                type="submit"
                className="shrink-0 bg-ink px-7 py-4 font-display text-[13px] font-bold tracking-[0.1em] text-bg uppercase transition hover:bg-[#1e1c16] active:translate-y-px sm:rounded-none"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div
              className="mx-auto mt-4 max-w-[420px] rounded-md border border-border-subtle bg-cream px-6 py-4 text-left text-sm text-ink"
              id="cta-success"
            >
              <strong className="font-display font-bold">You&apos;re in.</strong>{" "}
              We&apos;ll notify you when your access window opens. Position:{" "}
              <strong className="font-display font-bold">#{listPosition}</strong>.
            </div>
          )}
          <p className="mt-5 text-xs text-ink-faint">
            {listPosition} people ahead of you · No payment until access opens
            <span className="mt-2 block font-medium text-ink-dim">
              A protocol designed for lasting metabolic health, not just quick fixes.
            </span>
          </p>
          <p className="mx-auto mt-3 max-w-[420px] text-left text-[10px] leading-normal text-ink-faint">
            * These statements have not been evaluated by the FDA. This product is not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
