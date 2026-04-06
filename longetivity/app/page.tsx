"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function LandingPage() {
  const router = useRouter();

  // Quiz state
  const [quizStep, setQuizStep] = useState(1);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const nextQuizStep = (step: number) => {
    setQuizStep(step);
  };

  const finishQuiz = () => {
    setShowQuizResult(true);
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setShowQuizResult(false);
  };

  // Waitlist state
  const [emailHero, setEmailHero] = useState("");
  const [emailCta, setEmailCta] = useState("");
  const [isSubmittingHero, setIsSubmittingHero] = useState(false);
  const [isSubmittingCta, setIsSubmittingCta] = useState(false);

  // Simulating the user passing the form and transitioning to index
  const submitWaitlist = (source: 'hero' | 'cta', e: React.FormEvent) => {
    e.preventDefault();
    const email = source === 'hero' ? emailHero : emailCta;
    if (!email) return;

    if (source === 'hero') setIsSubmittingHero(true);
    if (source === 'cta') setIsSubmittingCta(true);

    // Simulate API delay then route to index
    setTimeout(() => {
      if (source === 'hero') setIsSubmittingHero(false);
      if (source === 'cta') setIsSubmittingCta(false);
      router.push("/index");
    }, 800);
  };

  return (
    <>
      {/* Landing specific nav */}
      <nav>
        <div className="nav-logo">Longevity Protocol</div>
        <div className="nav-badge">Early Access · April 2026</div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="eyebrow-dot"></div>
            <span className="eyebrow-text">Launching Wave 1 · 200 Members Only</span>
          </div>

          <h1 className="hero-heading">
            Your longevity<br />
            <em>protocol.</em><br />
            Personalised.
          </h1>

          <p className="hero-sub">
            Not a supplement brand. A protocol platform. Our intelligent framework builds a personalised, adaptive system designed for lasting results — delivered thoughtfully to your door every month.
          </p>

          <div className="micro-quiz" id="micro-quiz">
            <div className="quiz-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              See your protocol in 30 seconds
            </div>
            
            {!showQuizResult && quizStep === 1 && (
              <div className="quiz-step active" id="qs-1">
                <div className="quiz-question">1. How is your morning energy?</div>
                <div className="quiz-options">
                  <div className="quiz-opt" onClick={() => nextQuizStep(2)}>Slow to wake</div>
                  <div className="quiz-opt" onClick={() => nextQuizStep(2)}>Consistent</div>
                  <div className="quiz-opt" onClick={() => nextQuizStep(2)}>Needs caffeine</div>
                </div>
              </div>
            )}

            {!showQuizResult && quizStep === 2 && (
              <div className="quiz-step active" id="qs-2">
                <div className="quiz-question">2. How do you handle daily stress?</div>
                <div className="quiz-options">
                  <div className="quiz-opt" onClick={() => nextQuizStep(3)}>I feel overwhelmed</div>
                  <div className="quiz-opt" onClick={() => nextQuizStep(3)}>Generally fine</div>
                  <div className="quiz-opt" onClick={() => nextQuizStep(3)}>Physical tension</div>
                </div>
              </div>
            )}

            {!showQuizResult && quizStep === 3 && (
              <div className="quiz-step active" id="qs-3">
                <div className="quiz-question">3. How is your sleep quality?</div>
                <div className="quiz-options">
                  <div className="quiz-opt" onClick={finishQuiz}>Fragmented</div>
                  <div className="quiz-opt" onClick={finishQuiz}>Hard to fall asleep</div>
                  <div className="quiz-opt" onClick={finishQuiz}>Deep & restful</div>
                </div>
              </div>
            )}

            {showQuizResult && (
              <div className="quiz-result active" id="qs-result">
                <div className="qr-card-preview">
                   <div className="pc-tag">THE DAILY SYSTEM PREVIEW</div>
                   <div className="pc-name" style={{fontSize: '18px'}}>Your Baseline Protocol</div>
                   <div className="pc-desc" style={{marginBottom: '12px'}}>Based on your responses, we recommend pairing <strong>NMN 500mg</strong> with our <strong>Restore Blend</strong> for optimal cellular resilience and deep recovery.</div>
                </div>
                <div className="qr-reset" onClick={resetQuiz}>Try different answers</div>
              </div>
            )}
          </div>

          <div className="waitlist-form">
            <form className="input-row" onSubmit={(e) => submitWaitlist('hero', e)}>
              <input 
                type="email" 
                id="hero-email" 
                placeholder="Enter your email address" 
                value={emailHero}
                onChange={(e) => setEmailHero(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmittingHero}
              >
                {isSubmittingHero ? "Securing spot..." : "Request Access"}
              </button>
            </form>
            <p className="form-note">No spam. No discounts. Just a notification when your spot opens. Unsubscribe anytime.</p>
          </div>

          <div className="trust-bar">
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> FDA Lawful NMN (Sept 2025)</div>
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg> Third-Party Tested (NSF)</div>
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg> GMP Certified</div>
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg> 2025 Clinical Data</div>
          </div>
          <div className="disclaimer-text">* These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</div>

          <div className="waitlist-count">
            <div className="count-faces">
              <div className="count-face">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </div>
              <div className="count-face">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </div>
              <div className="count-face">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </div>
              <div className="count-face">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </div>
            </div>
            <div className="count-text">
              <strong>847 people</strong> ahead of you
              <p>on the Wave 1 access list</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="product-stack">
              <div className="product-card cellular">
                <div className="pc-tag">CELLULAR</div>
                <div className="pc-dot" style={{background: '#D4A853'}}></div>
                <div className="pc-name">Daily Renewal</div>
                <div className="pc-desc">NMN 500mg · Morning formula. Restores cellular energy production.</div>
              </div>
              <div className="product-card restore">
                <div className="pc-tag">RESTORE</div>
                <div className="pc-dot" style={{background: '#7A9E7E'}}></div>
                <div className="pc-name">Resilience</div>
                <div className="pc-desc">Magnesium + Ashwagandha KSM-66. For stress and recovery.</div>
              </div>
              <div className="product-card sleep">
                <div className="pc-tag">SLEEP</div>
                <div className="pc-dot" style={{background: '#8A9EC0'}}></div>
                <div className="pc-name">Overnight Repair</div>
                <div className="pc-desc">Mag L-Threonate + L-Theanine. Felt within days, not weeks.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why different */}
      <section className="section-why">
        <div className="reveal">
          <div className="section-label">The difference</div>
          <h2 className="section-heading">Built different.<br />Priced with<br />conviction.</h2>
        </div>
        <div className="why-grid reveal">
          <div className="why-item">
            <div className="why-num">01</div>
            <div className="why-title">Intelligent Personalization</div>
            <div className="why-desc">Seven questions. Three minutes. A dynamic protocol output that listens and adapts. Deep, reliable long-term care, not a generic vitamin pack.</div>
          </div>
          <div className="why-item">
            <div className="why-num">02</div>
            <div className="why-title">Longevity-specific</div>
            <div className="why-desc">Nobody has built a longevity protocol platform combining an intelligent quiz, personalised system, and premium ritual.</div>
          </div>
          <div className="why-item">
            <div className="why-num">03</div>
            <div className="why-title">No discounts. Ever.</div>
            <div className="why-desc">The price is the signal. We run out of stock before we discount. Currently unavailable is more powerful than 20% off.</div>
          </div>
          <div className="why-item">
            <div className="why-num">04</div>
            <div className="why-title">Real scarcity</div>
            <div className="why-desc">We open 200 spots. We close them. We open 200 more. This is genuine — managing supply chain and onboarding quality deliberately.</div>
          </div>
        </div>
      </section>

      {/* Backed by Science */}
      <section className="section-science">
        <div className="science-header reveal">
          <div className="section-label">Evidence</div>
          <h2 className="science-heading">Backed by conservative,<br />real-world data.</h2>
        </div>
        <div className="science-grid reveal">
          <div className="science-card">
            <div className="sc-date">Latest Data · 2026</div>
            <div className="sc-title">NAD+ levels elevated by 38% at day 60</div>
            <div className="sc-desc">Recent placebo-controlled trials confirm 500mg daily dosing provides the optimal balance of sustained cellular energy without receptor saturation.</div>
            <div className="sc-compound">NMN 500mg</div>
          </div>
          <div className="science-card">
            <div className="sc-date">Meta-Analysis · 2025</div>
            <div className="sc-title">Cortisol baseline reduction of 22%</div>
            <div className="sc-desc">Gold-standard adaptogen data showing meaningful improvements in perceived stress and recovery metrics across an 8-week structured protocol.</div>
            <div className="sc-compound">Ashwagandha KSM-66</div>
          </div>
          <div className="science-card">
            <div className="sc-date">Clinical Observation</div>
            <div className="sc-title">Enhanced sleep architecture & deep phase</div>
            <div className="sc-desc">Demonstrated ability to cross the blood-brain barrier efficiently, facilitating faster onset of sleep and reduced nighttime awakenings.</div>
            <div className="sc-compound">Magnesium L-Threonate</div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-item">The quiz is the product <span className="marquee-sep"></span></div>
          <div className="marquee-item">Longevity as a system <span className="marquee-sep"></span></div>
          <div className="marquee-item">NMN 500mg · FDA cleared Sept 2025 <span className="marquee-sep"></span></div>
          <div className="marquee-item">Personalised protocol · monthly delivery <span className="marquee-sep"></span></div>
          <div className="marquee-item">76%+ gross margin · zero inventory risk <span className="marquee-sep"></span></div>
          <div className="marquee-item">Wave 1 · 200 members only <span className="marquee-sep"></span></div>
        </div>
      </div>

      {/* Products */}
      <section className="section-products">
        <div className="products-header reveal">
          <h2 className="products-heading">Three products.<br /><span>One system.</span></h2>
          <p style={{fontSize: '14px', color: 'rgba(255,255,255,0.40)', maxWidth: '280px', lineHeight: '1.6'}}>
            Never lead with individual products. Always lead with the Daily System.
          </p>
        </div>
        <div className="products-grid reveal">
          <div className="prod-card cellular">
            <div className="prod-tag"><span className="prod-tag-dot"></span>Cellular</div>
            <div className="prod-name">Daily Renewal</div>
            <div className="prod-subtitle">NMN 500mg · Morning · Fuel for your cells. FDA-cleared as of September 2025.</div>
            <div className="prod-price">$79 <span>/ month</span></div>
            <div className="prod-margin">77% gross margin</div>
          </div>
          <div className="prod-card restore">
            <div className="prod-tag"><span className="prod-tag-dot"></span>Restore</div>
            <div className="prod-name">Resilience</div>
            <div className="prod-subtitle">Magnesium Glycinate 400mg + Ashwagandha KSM-66. The adaptogen with the strongest human trial data.</div>
            <div className="prod-price">$69 <span>/ month</span></div>
            <div className="prod-margin">81% gross margin</div>
          </div>
          <div className="prod-card sleep">
            <div className="prod-tag"><span className="prod-tag-dot"></span>Sleep</div>
            <div className="prod-name">Overnight Repair</div>
            <div className="prod-subtitle">Magnesium L-Threonate 144mg + L-Theanine 200mg. Felt within days, not weeks.</div>
            <div className="prod-price">$65 <span>/ month</span></div>
            <div className="prod-margin">77% gross margin</div>
          </div>
          <div className="system-card">
            <div className="system-left">
              <div className="system-eyebrow">Most popular · Start here</div>
              <div className="system-name">The Daily System</div>
              <div className="system-desc">All three products. One protocol. Delivered monthly. This is what 80% of members choose — and the only way we recommend starting. The system compounds. Individual products don't.</div>
            </div>
            <div className="system-right">
              <div className="system-price">$189</div>
              <div className="system-per">per month · all three</div>
              <div className="system-saving">Save $24 vs separate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="cta-bg-ring"></div>
        <div className="cta-bg-ring"></div>
        <div className="cta-bg-ring"></div>
        <div className="cta-content reveal">
          <p className="cta-eyebrow">Wave 1 · 200 spots</p>
          <h2 className="cta-heading">Take the quiz.<br />Get your protocol.</h2>
          <p className="cta-sub">Join the waitlist. When your access window opens, take the 3-minute quiz and receive your personalised longevity protocol.</p>
          <div>
            <form className="cta-form" onSubmit={(e) => submitWaitlist('cta', e)}>
              <input 
                type="email" 
                id="cta-email" 
                placeholder="Your email address" 
                value={emailCta}
                onChange={(e) => setEmailCta(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmittingCta}
              >
                {isSubmittingCta ? "Securing spot..." : "Join Waitlist"}
              </button>
            </form>
            <p className="cta-positions">847 people ahead of you · No payment until access opens<span className="cta-positions-strong">A protocol designed for lasting metabolic health, not just quick fixes.</span></p>
            <p className="disclaimer-text" style={{maxWidth: '420px', textAlign: 'left', margin: '12px auto 0'}}>* These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">Longevity Protocol</div>
        <div style={{maxWidth: '400px'}}>
          <p className="footer-note">© 2026 · Confidential pre-launch · All rights reserved</p>
          <p className="disclaimer-text" style={{marginTop: '8px'}}>* These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
        <p className="footer-note">
          <Link href="/index" style={{color: 'var(--ink-dim)', textDecoration: 'none', fontSize: '12px'}}>View full site →</Link>
        </p>
      </footer>
    </>
  );
}