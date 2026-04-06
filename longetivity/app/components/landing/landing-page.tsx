"use client";

import { useCallback, useState } from "react";
import { LandingCtaSection } from "./landing-cta-section";
import { LandingFooter } from "./landing-footer";
import { LandingHero } from "./landing-hero";
import { LandingMarquee } from "./landing-marquee";
import { LandingNav } from "./landing-nav";
import { LandingProductsPreview } from "./landing-products-preview";
import { LandingScienceSection } from "./landing-science-section";
import { LandingWhySection } from "./landing-why-section";

export function LandingPage() {
  const [listPosition, setListPosition] = useState(847);

  const bumpPosition = useCallback(() => {
    setListPosition((n) => n + 1);
  }, []);

  return (
    <div className="min-h-screen bg-landing text-ink antialiased">
      <LandingNav />
      <main>
        <LandingHero listPosition={listPosition} onRequestAccess={bumpPosition} />
        <LandingWhySection />
        <LandingScienceSection />
        <LandingMarquee />
        <LandingProductsPreview />
        <LandingCtaSection
          listPosition={listPosition}
          onJoinWaitlist={bumpPosition}
        />
      </main>
      <LandingFooter />
    </div>
  );
}
