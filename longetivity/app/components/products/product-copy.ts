import type { ProductDetailCopy } from "./product-types";

export const CELLULAR_DETAIL: ProductDetailCopy = {
  slug: "cellular",
  detailId: "cellular",
  dotColorClass: "bg-c-gold",
  label: "Cellular · Daily Renewal",
  title: "Fuel for",
  titleLine2: "your cells.",
  tagline:
    "NAD+ is the molecule that powers every cell in your body. It declines by roughly 50% between ages 40 and 60. NMN is the most studied precursor to restore it. Every member starts here.",
  ingredients: [
    "NMN 500mg",
    "β-Nicotinamide Mononucleotide",
    "FDA-cleared Sept 2025",
    "Morning formula",
  ],
  price: "$79",
  priceNote: "per month · 30 servings\nSubscribe and adjust or pause anytime",
  cardBgClass: "bg-[#1A1610]",
  circle: { size: "240px", color: "#D4A853", top: "-60px", right: "-60px" },
  cardLabel: "CELLULAR",
  cardName: "Daily",
  cardNameLine2: "Renewal",
  cardSub: "NMN 500mg · Once daily · Morning",
  timingIcon: "clock",
  timingText: "Take every morning on an empty stomach",
  details: [
    {
      title: "Why NAD+ matters",
      body: "NAD+ (Nicotinamide Adenine Dinucleotide) is present in every cell in your body. It's essential for energy metabolism, DNA repair, and cellular signalling. The problem: it declines with age — rapidly. By your mid-forties, cellular NAD+ levels are roughly half what they were in your twenties. NMN is the precursor that your body uses to manufacture NAD+.",
    },
    {
      title: "Why 500mg",
      body: "Most NMN products on the market dose at 250mg — positioned for price competitiveness rather than efficacy. We use 500mg because that is the dose range used in human clinical trials showing meaningful results in NAD+ biomarker levels. The extra cost is absorbed in our margin, not passed to you.",
    },
    {
      title: "The FDA clearance",
      body: "In September 2025, NMN was formally cleared by the FDA as a dietary supplement ingredient after a period of regulatory uncertainty. This is significant. It means the ingredient is legal to sell, clearly labelled, and the category has legitimate standing. We always knew it would — and we were ready the day it happened.",
    },
    {
      title: "Protocol positioning",
      body: "CELLULAR is the foundation of the system. For most members, it is the first product in the protocol. In high-stress profiles, we sometimes have members start with RESTORE first — but CELLULAR is always in the stack. It is the reason the other two compounds work better: cellular energy is the substrate everything else builds on.",
    },
  ],
  whoHeading: "CELLULAR is for you if —",
  whoCards: [
    {
      icon: "🔋",
      title: "Your energy has shifted",
      desc: "You notice your energy isn't what it was in your thirties. Not dramatically — just a subtle shift. That's not lifestyle. That's biology. This is what addresses it directly.",
    },
    {
      icon: "🕐",
      title: "You're in the 40–60 window",
      desc: "NAD+ decline is steepest between 40 and 60. If you're in that window, this is the highest-leverage cellular intervention available without a prescription.",
    },
    {
      icon: "🧬",
      title: "You think long-term",
      desc: "NMN is not a stimulant. You won't feel a jolt. The benefit is cumulative: cellular energy production that compounds over weeks and months, not days.",
    },
  ],
};

export const RESTORE_DETAIL: ProductDetailCopy = {
  slug: "restore",
  detailId: "restore",
  dotColorClass: "bg-c-green",
  label: "Restore · Resilience",
  title: "Recovery",
  titleLine2: "and resilience.",
  tagline:
    "The number one complaint among 35–50 year olds: stress, poor recovery, and a body that takes longer to bounce back. RESTORE addresses the root — not the symptom.",
  ingredients: [
    "Magnesium Glycinate 400mg",
    "Ashwagandha KSM-66",
    "Full-spectrum root extract",
    "Morning or midday",
  ],
  price: "$69",
  priceNote: "per month · 30 servings\n81% gross margin — our highest",
  cardBgClass: "bg-[#101A12]",
  circle: { size: "220px", color: "#7A9E7E", top: "-50px", right: "-50px" },
  cardLabel: "RESTORE",
  cardName: "Resilience",
  cardSub: "Magnesium Glycinate 400mg + Ashwagandha KSM-66",
  timingIcon: "clock",
  timingText: "Morning or midday with food",
  details: [
    {
      title: "Ashwagandha KSM-66 — the standard",
      body: "Of all the adaptogens, Ashwagandha has the largest body of human clinical trial data. KSM-66 specifically is the full-spectrum root extract — not a leaf extract or an inferior standardisation. It's the form with the most consistent results across cortisol, stress response, testosterone, thyroid function, and cognitive performance markers.",
    },
    {
      title: "Magnesium Glycinate — why this form",
      body: "Magnesium is involved in over 300 enzymatic reactions in the body. Most people over 35 are deficient — not severely, but functionally. Glycinate is the chelated form with the highest bioavailability and the least digestive disruption. We don't use oxide (cheap, poorly absorbed) or citrate (common but inconsistent). We use Glycinate at the full 400mg dose.",
    },
    {
      title: "Why stress disrupts cellular health",
      body: "Chronic stress elevates cortisol, which depletes magnesium, suppresses testosterone, impairs sleep quality, and — critically — disrupts the same cellular energy pathways that NMN is designed to support. This is why, for high-stress profiles, we often sequence RESTORE before CELLULAR. You cannot optimise a system that is under siege.",
    },
    {
      title: "The recovery layer",
      body: "RESTORE sits in the middle of the system deliberately. It is the modulator. CELLULAR provides the energy substrate. SLEEP provides overnight repair. RESTORE ensures the body's stress response doesn't undermine both. For members with high stress loads, this is often the product that changes their experience of the entire protocol.",
    },
  ],
  whoHeading: "RESTORE is for you if —",
  whoCards: [
    {
      icon: "🌊",
      title: "Stress is physical",
      desc: "Your stress doesn't stay in your head. It's in your body — tight shoulders, disrupted sleep, a jaw you clench. RESTORE addresses the physiological response, not just the mental one.",
    },
    {
      icon: "⏱️",
      title: "Recovery takes longer",
      desc: "You used to bounce back in a day. Now it takes three. That's not weakness — it's a combination of cortisol dysregulation and magnesium depletion. Both are addressable.",
    },
    {
      icon: "🎯",
      title: "You need the recovery layer",
      desc: "Even for members with low perceived stress, RESTORE provides the hormonal resilience that makes CELLULAR's cellular energy usable. It's the middle of the system for a reason.",
    },
  ],
};

export const SLEEP_DETAIL: ProductDetailCopy = {
  slug: "sleep",
  detailId: "sleep",
  dotColorClass: "bg-c-slate",
  label: "Sleep · Overnight Repair",
  title: "Overnight",
  titleLine2: "repair.",
  tagline:
    "Sleep is the most underrated longevity intervention. This formula is felt within days, not weeks — and it drives more word of mouth and subscription retention than anything else we offer.",
  ingredients: [
    "Magnesium L-Threonate 144mg",
    "L-Theanine 200mg",
    "Crosses blood-brain barrier",
    "45 min before bed",
  ],
  price: "$65",
  priceNote: "per month · 30 servings\nFastest felt benefit — drives retention",
  cardBgClass: "bg-[#10121A]",
  circle: { size: "220px", color: "#8A9EC0", top: "-50px", right: "-50px" },
  cardLabel: "SLEEP",
  cardName: "Overnight",
  cardNameLine2: "Repair",
  cardSub: "Mag L-Threonate 144mg + L-Theanine 200mg",
  timingIcon: "moon",
  timingText: "45 minutes before bed",
  details: [
    {
      title: "Magnesium L-Threonate — why it's different",
      body: "Most magnesium supplements don't cross the blood-brain barrier efficiently. L-Threonate is the one form that does — developed specifically for neurological applications. It raises cerebrospinal magnesium levels in a way other forms cannot. This is why it affects sleep quality and cognitive function more meaningfully than standard magnesium supplements.",
    },
    {
      title: "L-Theanine — the pairing",
      body: "L-Theanine is an amino acid found naturally in tea that promotes alpha brain wave activity — a state of relaxed alertness that transitions naturally into deep sleep. Combined with Magnesium L-Threonate, it doesn't just help you fall asleep. It improves sleep architecture: more time in deep and REM sleep, which is where cellular repair and memory consolidation happen.",
    },
    {
      title: "Felt within days",
      body: "Most longevity supplements work on a weeks-to-months timeline — which is correct, but difficult for retention. SLEEP is the exception. Most members notice meaningful improvement in sleep quality within 3–7 days. This is the product that creates word of mouth. If someone feels better sleeping within a week, they tell people. That's the retention mechanism built into the formula itself.",
    },
    {
      title: "The overnight repair function",
      body: "Sleep is not passive recovery. During deep sleep, the glymphatic system clears metabolic waste from the brain, growth hormone pulses trigger tissue repair, and the immune system consolidates. SLEEP is designed to improve the quality of this repair cycle — not just its duration. That's why we call it Overnight Repair, not \"Better Sleep.\"",
    },
  ],
  whoHeading: "SLEEP is for you if —",
  whoCards: [
    {
      icon: "🌙",
      title: "Sleep isn't deep",
      desc: "You might fall asleep fine but wake groggy or unrestored. That's a sleep architecture problem, not a sleep onset problem. L-Threonate + L-Theanine improves quality, not just duration.",
    },
    {
      icon: "🧠",
      title: "You want felt results fast",
      desc: "SLEEP is our fastest product to produce noticeable change — within days, not weeks. If your sleep profile is poor, this is the product the quiz will lead with, and it's the right call.",
    },
    {
      icon: "♻️",
      title: "Overnight repair matters to you",
      desc: "Sleep is when your body does its most important longevity work. If you're not sleeping well, the other two products in your protocol can't compound properly. SLEEP is the foundation of recovery.",
    },
  ],
};

export const PRODUCT_DETAILS: ProductDetailCopy[] = [
  CELLULAR_DETAIL,
  RESTORE_DETAIL,
  SLEEP_DETAIL,
];
