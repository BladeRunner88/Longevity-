"use client";

import { useEffect } from "react";
import { SiteFooter } from "../layout/site-footer";
import { SiteHeader } from "../layout/site-header";
import { HomeCtaSection } from "./home-cta-section";
import { HomeHero } from "./home-hero";
import { HomeMarquee } from "./home-marquee";
import { HomeProductsSection } from "./home-products-section";
import { HowItWorksSection } from "./how-it-works-section";
import { PhilosophySection } from "./philosophy-section";
import { ProtocolQuizSection } from "./protocol-quiz-section";
import { ScienceSection } from "./science-section";

export function HomePage() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector<HTMLElement>('[data-site-nav="home"]');
      if (!nav) return;
      if (window.scrollY > 60) {
        nav.style.borderBottomColor = "rgba(13,12,9,0.12)";
      } else {
        nav.style.borderBottomColor = "rgba(13,12,9,0.10)";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SiteHeader variant="home" />
      <main>
        <HomeHero />
        <HomeMarquee />
        <HowItWorksSection />
        <ProtocolQuizSection />
        <HomeProductsSection />
        <PhilosophySection />
        <ScienceSection />
        <HomeCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
