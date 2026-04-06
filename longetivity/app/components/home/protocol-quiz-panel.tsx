"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const quizData = [
  {
    q: "How old are you?",
    opts: ["35–44", "45–54", "55–64", "65+"],
  },
  {
    q: "What matters most to you right now?",
    opts: [
      "Energy and focus",
      "Sleep and recovery",
      "Longevity and cellular health",
      "All of the above",
    ],
  },
  {
    q: "How would you describe your energy across the day?",
    opts: [
      "Consistent throughout",
      "Drops after lunch",
      "Low all day",
      "Variable — depends on the week",
    ],
  },
  {
    q: "How well do you sleep?",
    opts: [
      "Well — deeply and consistently",
      "Okay but not deeply",
      "Poorly — struggle to stay asleep",
      "Very poorly — a real problem",
    ],
  },
  {
    q: "How would you rate your daily stress?",
    opts: [
      "Low — manageable",
      "Moderate",
      "High — affects me physically",
      "Very high — burned out",
    ],
  },
  {
    q: "Are you currently taking any supplements?",
    opts: [
      "None at all",
      "Basic vitamins",
      "A few targeted supplements",
      "A comprehensive stack",
    ],
  },
  {
    q: "What does consistency look like for you?",
    opts: [
      "Highly disciplined — never miss",
      "I try but miss days",
      "Need something simple",
      "I need reminders to stay on track",
    ],
  },
];

function computeResult(answers: number[]) {
  const sleepBad = answers[3] >= 2;
  const stressHigh = answers[4] >= 2;
  const age = answers[0];

  if (sleepBad && stressHigh) {
    return {
      headline:
        "Start with recovery. Layer cellular energy in week two.",
      body: "Your nervous system needs recovery before cellular optimisation. Trying to boost energy before addressing recovery is like adding fuel to a misfiring engine. Start with SLEEP for 14 days. Add RESTORE in week two. Introduce CELLULAR at full system by day 30.",
    };
  }
  if (stressHigh) {
    return {
      headline:
        "RESTORE leads your protocol. Stress is depleting the same pathways NMN targets.",
      body: "Sustained stress depletes the cellular pathways NMN is designed to restore. Stabilise first, then layer in cellular energy. Start with RESTORE. Add SLEEP in week two for recovery depth. Introduce CELLULAR at week four.",
    };
  }
  if (sleepBad) {
    return {
      headline: "SLEEP is your priority. It compounds everything else.",
      body: "Sleep is the most underrated longevity intervention. Until your overnight repair cycle is working, nothing else compounds properly. Start with SLEEP. You'll feel it within days. Layer in CELLULAR and RESTORE once your baseline improves.",
    };
  }
  return {
    headline:
      age >= 1
        ? "Your cellular energy has been declining for a decade. Start all three, day one."
        : "Strong foundation. Run the full system from day one.",
    body: "Your profile supports a full-system approach. CELLULAR addresses the NAD+ decline that's been building since your thirties. RESTORE supports hormonal resilience. SLEEP maintains the overnight repair cycle that compounds the system over time. Take all three from day one.",
  };
}

export function ProtocolQuizPanel() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() => Array(7).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const selectedOpt = answers[currentQ] >= 0 ? answers[currentQ] : null;

  const selectOption = (i: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQ] = i;
      return next;
    });
  };

  const handleNext = () => {
    if (selectedOpt === null) return;

    if (currentQ < 6) {
      setCurrentQ((q) => q + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQ === 0) return;
    setCurrentQ((q) => q - 1);
  };

  const displayResult = useMemo(() => {
    if (!showResult) return null;
    return computeResult(answers);
  }, [showResult, answers]);

  return (
    <div
      className="relative overflow-hidden rounded-[20px] bg-ink px-8 py-12 text-surface lg:px-11 lg:py-12"
      id="quiz-panel"
    >
      <div
        className="pointer-events-none absolute -top-[60px] -right-[60px] size-[200px] rounded-full bg-warm opacity-[0.08]"
        aria-hidden
      />

      <div className="relative z-[1] mb-10 flex gap-1.5" id="quiz-progress">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-0.5 flex-1 rounded-sm bg-white/12 transition-colors duration-300",
              i <= currentQ && "bg-warm",
            )}
          />
        ))}
      </div>

      {!showResult && (
        <div id="quiz-body">
          <div className="mb-4 text-[11px] font-semibold tracking-[0.14em] text-warm uppercase">
            Question {currentQ + 1} of 7
          </div>
          <div className="mb-8 font-display text-2xl font-bold leading-tight text-surface">
            {quizData[currentQ].q}
          </div>
          <div className="mb-8 flex flex-col gap-2.5" id="quiz-options">
            {quizData[currentQ].opts.map((opt, i) => (
              <div
                key={opt}
                role="button"
                tabIndex={0}
                className={cn(
                  "cursor-pointer rounded-lg border border-white/10 bg-white/[0.06] px-[18px] py-3.5 text-sm text-white/75 transition-all",
                  "hover:border-warm/50 hover:bg-warm/20 hover:text-surface",
                  selectedOpt === i && "border-warm/50 bg-warm/20 text-surface",
                )}
                onClick={() => selectOption(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectOption(i);
                  }
                }}
              >
                {opt}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="border-0 bg-transparent text-[13px] text-white/35 transition-colors hover:text-white/70 disabled:opacity-30"
              id="quiz-back"
              onClick={handleBack}
              disabled={currentQ === 0}
            >
              ← Back
            </button>
            <button
              type="button"
              className="rounded-[5px] border-0 bg-warm px-6 py-3 font-display text-xs font-bold tracking-[0.1em] text-ink uppercase transition hover:bg-[#b09a80] hover:-translate-y-px"
              onClick={handleNext}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {showResult && displayResult && (
        <div id="quiz-result">
          <div className="mb-5">
            <div className="mb-3.5 text-[10px] font-bold tracking-[0.16em] text-warm uppercase">
              Your Protocol
            </div>
            <div className="mb-4 font-display text-xl font-extrabold leading-tight text-surface">
              {displayResult.headline}
            </div>
            <p className="text-[13px] leading-relaxed text-white/55">{displayResult.body}</p>
          </div>
          <Link
            href="/landing"
            className="mt-7 block rounded-md bg-warm py-4 text-center font-display text-xs font-bold tracking-[0.1em] text-ink uppercase no-underline transition hover:bg-[#b09a80]"
          >
            Claim Your Access Spot →
          </Link>
        </div>
      )}
    </div>
  );
}
