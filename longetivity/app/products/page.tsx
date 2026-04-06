"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('cellular');

  return (
    <>
      <Nav />

  {/* Products Hero */}
  <section className="products-hero">
    <div className="ph-ring" style={{width: '700px', height: '700px'}}></div>
    <div className="ph-ring" style={{width: '500px', height: '500px', opacity: '0.5'}}></div>
    <div className="ph-ring" style={{width: '300px', height: '300px', opacity: '0.3'}}></div>
    <div style={{position: 'relative', zIndex: '2'}}>
      <p className="ph-eyebrow">The Daily System</p>
      <h1 className="ph-h1">Three formulas.<br />One protocol.</h1>
      <p className="ph-sub">Never presented individually. Always experienced as a system. This is how the protocol works — because the compounds compound.</p>
      <div className="product-tabs">
        <button className={`tab-btn ${activeTab === 'cellular' ? 'active' : ''}`} onClick={() => setActiveTab('cellular')}>CELLULAR</button>
        <button className={`tab-btn ${activeTab === 'restore' ? 'active' : ''}`} onClick={() => setActiveTab('restore')}>RESTORE</button>
        <button className={`tab-btn ${activeTab === 'sleep' ? 'active' : ''}`} onClick={() => setActiveTab('sleep')}>SLEEP</button>
        <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>Daily System</button>
      </div>
    </div>
  </section>

  {/* ═══════════════════════════════════════ */}
  {/* CELLULAR PRODUCT ─────────────────────── */}
  {/* ═══════════════════════════════════════ */}
  <div className={`product-detail ${activeTab === 'cellular' ? 'active' : ''}`} id="detail-cellular" style={{ display: activeTab === 'cellular' ? 'block' : 'none' }}>

    <div className="pd-hero">
      <div className="reveal">
        <div className="pd-eyebrow">
          <div className="pd-dot" style={{background: 'var(--c-gold)'}}></div>
          <div className="pd-label">Cellular · Daily Renewal</div>
        </div>
        <h2 className="pd-h2">Fuel for<br />your cells.</h2>
        <p className="pd-tagline">
          NAD+ is the molecule that powers every cell in your body. It declines by roughly 50% between ages 40 and 60. NMN is the most studied precursor to restore it. Every member starts here.
        </p>
        <div className="pd-ingredients">
          <span className="ing-tag">NMN 500mg</span>
          <span className="ing-tag">β-Nicotinamide Mononucleotide</span>
          <span className="ing-tag">FDA-cleared Sept 2025</span>
          <span className="ing-tag">Morning formula</span>
        </div>
        <div className="pd-price-row">
          <div className="pd-price">$79</div>
          <div className="pd-price-note">per month · 30 servings<br />Subscribe and adjust or pause anytime</div>
        </div>
        <div className="pd-actions">
          <a href="landing.html" className="btn-pd-primary">Request Access</a>
          <a href="#cellular" className="btn-pd-ghost">Full details ↓</a>
        </div>
      </div>
      <div className="pd-visual reveal">
        <div className="pd-card cellular-card">
          <div className="pd-card-circle" style={{width: '240px', height: '240px', background: '#D4A853', top: '-60px', right: '-60px'}}></div>
          <div>
            <div className="pd-card-label">CELLULAR</div>
          </div>
          <div>
            <div className="pd-card-name">Daily<br />Renewal</div>
            <div className="pd-card-sub">NMN 500mg · Once daily · Morning</div>
          </div>
          <div className="pd-card-timing">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l3 3"/></svg>
            Take every morning on an empty stomach
          </div>
        </div>
      </div>
    </div>

    <div className="pd-details reveal" id="cellular">
      <div className="pd-detail-card">
        <div className="pdc-title">Why NAD+ matters</div>
        <div className="pdc-body">NAD+ (Nicotinamide Adenine Dinucleotide) is present in every cell in your body. It's essential for energy metabolism, DNA repair, and cellular signalling. The problem: it declines with age — rapidly. By your mid-forties, cellular NAD+ levels are roughly half what they were in your twenties. NMN is the precursor that your body uses to manufacture NAD+.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">Why 500mg</div>
        <div className="pdc-body">Most NMN products on the market dose at 250mg — positioned for price competitiveness rather than efficacy. We use 500mg because that is the dose range used in human clinical trials showing meaningful results in NAD+ biomarker levels. The extra cost is absorbed in our margin, not passed to you.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">The FDA clearance</div>
        <div className="pdc-body">In September 2025, NMN was formally cleared by the FDA as a dietary supplement ingredient after a period of regulatory uncertainty. This is significant. It means the ingredient is legal to sell, clearly labelled, and the category has legitimate standing. We always knew it would — and we were ready the day it happened.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">Protocol positioning</div>
        <div className="pdc-body">CELLULAR is the foundation of the system. For most members, it is the first product in the protocol. In high-stress profiles, we sometimes have members start with RESTORE first — but CELLULAR is always in the stack. It is the reason the other two compounds work better: cellular energy is the substrate everything else builds on.</div>
      </div>
    </div>

    <div className="pd-who">
      <div className="pd-who-header reveal">
        <h2 className="pd-who-h2">CELLULAR is for you if —</h2>
      </div>
      <div className="who-grid reveal">
        <div className="who-card">
          <div className="who-icon">🔋</div>
          <div className="who-title">Your energy has shifted</div>
          <div className="who-desc">You notice your energy isn't what it was in your thirties. Not dramatically — just a subtle shift. That's not lifestyle. That's biology. This is what addresses it directly.</div>
        </div>
        <div className="who-card">
          <div className="who-icon">🕐</div>
          <div className="who-title">You're in the 40–60 window</div>
          <div className="who-desc">NAD+ decline is steepest between 40 and 60. If you're in that window, this is the highest-leverage cellular intervention available without a prescription.</div>
        </div>
        <div className="who-card">
          <div className="who-icon">🧬</div>
          <div className="who-title">You think long-term</div>
          <div className="who-desc">NMN is not a stimulant. You won't feel a jolt. The benefit is cumulative: cellular energy production that compounds over weeks and months, not days.</div>
        </div>
      </div>
    </div>
  </div>

  {/* ═══════════════════════════════════════ */}
  {/* RESTORE PRODUCT ──────────────────────── */}
  {/* ═══════════════════════════════════════ */}
  <div className={`product-detail ${activeTab === 'restore' ? 'active' : ''}`} id="detail-restore" style={{ display: activeTab === 'restore' ? 'block' : 'none' }}>

    <div className="pd-hero">
      <div className="reveal">
        <div className="pd-eyebrow">
          <div className="pd-dot" style={{background: 'var(--c-green)'}}></div>
          <div className="pd-label">Restore · Resilience</div>
        </div>
        <h2 className="pd-h2">Recovery<br />and resilience.</h2>
        <p className="pd-tagline">
          The number one complaint among 35–50 year olds: stress, poor recovery, and a body that takes longer to bounce back. RESTORE addresses the root — not the symptom.
        </p>
        <div className="pd-ingredients">
          <span className="ing-tag">Magnesium Glycinate 400mg</span>
          <span className="ing-tag">Ashwagandha KSM-66</span>
          <span className="ing-tag">Full-spectrum root extract</span>
          <span className="ing-tag">Morning or midday</span>
        </div>
        <div className="pd-price-row">
          <div className="pd-price">$69</div>
          <div className="pd-price-note">per month · 30 servings<br />81% gross margin — our highest</div>
        </div>
        <div className="pd-actions">
          <a href="landing.html" className="btn-pd-primary">Request Access</a>
          <a href="#restore" className="btn-pd-ghost">Full details ↓</a>
        </div>
      </div>
      <div className="pd-visual reveal">
        <div className="pd-card restore-card">
          <div className="pd-card-circle" style={{width: '220px', height: '220px', background: '#7A9E7E', top: '-50px', right: '-50px'}}></div>
          <div>
            <div className="pd-card-label">RESTORE</div>
          </div>
          <div>
            <div className="pd-card-name">Resilience</div>
            <div className="pd-card-sub">Magnesium Glycinate 400mg + Ashwagandha KSM-66</div>
          </div>
          <div className="pd-card-timing">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l3 3"/></svg>
            Morning or midday with food
          </div>
        </div>
      </div>
    </div>

    <div className="pd-details reveal" id="restore">
      <div className="pd-detail-card">
        <div className="pdc-title">Ashwagandha KSM-66 — the standard</div>
        <div className="pdc-body">Of all the adaptogens, Ashwagandha has the largest body of human clinical trial data. KSM-66 specifically is the full-spectrum root extract — not a leaf extract or an inferior standardisation. It's the form with the most consistent results across cortisol, stress response, testosterone, thyroid function, and cognitive performance markers.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">Magnesium Glycinate — why this form</div>
        <div className="pdc-body">Magnesium is involved in over 300 enzymatic reactions in the body. Most people over 35 are deficient — not severely, but functionally. Glycinate is the chelated form with the highest bioavailability and the least digestive disruption. We don't use oxide (cheap, poorly absorbed) or citrate (common but inconsistent). We use Glycinate at the full 400mg dose.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">Why stress disrupts cellular health</div>
        <div className="pdc-body">Chronic stress elevates cortisol, which depletes magnesium, suppresses testosterone, impairs sleep quality, and — critically — disrupts the same cellular energy pathways that NMN is designed to support. This is why, for high-stress profiles, we often sequence RESTORE before CELLULAR. You cannot optimise a system that is under siege.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">The recovery layer</div>
        <div className="pdc-body">RESTORE sits in the middle of the system deliberately. It is the modulator. CELLULAR provides the energy substrate. SLEEP provides overnight repair. RESTORE ensures the body's stress response doesn't undermine both. For members with high stress loads, this is often the product that changes their experience of the entire protocol.</div>
      </div>
    </div>

    <div className="pd-who">
      <div className="pd-who-header reveal">
        <h2 className="pd-who-h2">RESTORE is for you if —</h2>
      </div>
      <div className="who-grid reveal">
        <div className="who-card">
          <div className="who-icon">🌊</div>
          <div className="who-title">Stress is physical</div>
          <div className="who-desc">Your stress doesn't stay in your head. It's in your body — tight shoulders, disrupted sleep, a jaw you clench. RESTORE addresses the physiological response, not just the mental one.</div>
        </div>
        <div className="who-card">
          <div className="who-icon">⏱️</div>
          <div className="who-title">Recovery takes longer</div>
          <div className="who-desc">You used to bounce back in a day. Now it takes three. That's not weakness — it's a combination of cortisol dysregulation and magnesium depletion. Both are addressable.</div>
        </div>
        <div className="who-card">
          <div className="who-icon">🎯</div>
          <div className="who-title">You need the recovery layer</div>
          <div className="who-desc">Even for members with low perceived stress, RESTORE provides the hormonal resilience that makes CELLULAR's cellular energy usable. It's the middle of the system for a reason.</div>
        </div>
      </div>
    </div>
  </div>

  {/* ═══════════════════════════════════════ */}
  {/* SLEEP PRODUCT ────────────────────────── */}
  {/* ═══════════════════════════════════════ */}
  <div className={`product-detail ${activeTab === 'sleep' ? 'active' : ''}`} id="detail-sleep" style={{ display: activeTab === 'sleep' ? 'block' : 'none' }}>

    <div className="pd-hero">
      <div className="reveal">
        <div className="pd-eyebrow">
          <div className="pd-dot" style={{background: 'var(--c-slate)'}}></div>
          <div className="pd-label">Sleep · Overnight Repair</div>
        </div>
        <h2 className="pd-h2">Overnight<br />repair.</h2>
        <p className="pd-tagline">
          Sleep is the most underrated longevity intervention. This formula is felt within days, not weeks — and it drives more word of mouth and subscription retention than anything else we offer.
        </p>
        <div className="pd-ingredients">
          <span className="ing-tag">Magnesium L-Threonate 144mg</span>
          <span className="ing-tag">L-Theanine 200mg</span>
          <span className="ing-tag">Crosses blood-brain barrier</span>
          <span className="ing-tag">45 min before bed</span>
        </div>
        <div className="pd-price-row">
          <div className="pd-price">$65</div>
          <div className="pd-price-note">per month · 30 servings<br />Fastest felt benefit — drives retention</div>
        </div>
        <div className="pd-actions">
          <a href="landing.html" className="btn-pd-primary">Request Access</a>
          <a href="#sleep" className="btn-pd-ghost">Full details ↓</a>
        </div>
      </div>
      <div className="pd-visual reveal">
        <div className="pd-card sleep-card">
          <div className="pd-card-circle" style={{width: '220px', height: '220px', background: '#8A9EC0', top: '-50px', right: '-50px'}}></div>
          <div>
            <div className="pd-card-label">SLEEP</div>
          </div>
          <div>
            <div className="pd-card-name">Overnight<br />Repair</div>
            <div className="pd-card-sub">Mag L-Threonate 144mg + L-Theanine 200mg</div>
          </div>
          <div className="pd-card-timing">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            45 minutes before bed
          </div>
        </div>
      </div>
    </div>

    <div className="pd-details reveal" id="sleep">
      <div className="pd-detail-card">
        <div className="pdc-title">Magnesium L-Threonate — why it's different</div>
        <div className="pdc-body">Most magnesium supplements don't cross the blood-brain barrier efficiently. L-Threonate is the one form that does — developed specifically for neurological applications. It raises cerebrospinal magnesium levels in a way other forms cannot. This is why it affects sleep quality and cognitive function more meaningfully than standard magnesium supplements.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">L-Theanine — the pairing</div>
        <div className="pdc-body">L-Theanine is an amino acid found naturally in tea that promotes alpha brain wave activity — a state of relaxed alertness that transitions naturally into deep sleep. Combined with Magnesium L-Threonate, it doesn't just help you fall asleep. It improves sleep architecture: more time in deep and REM sleep, which is where cellular repair and memory consolidation happen.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">Felt within days</div>
        <div className="pdc-body">Most longevity supplements work on a weeks-to-months timeline — which is correct, but difficult for retention. SLEEP is the exception. Most members notice meaningful improvement in sleep quality within 3–7 days. This is the product that creates word of mouth. If someone feels better sleeping within a week, they tell people. That's the retention mechanism built into the formula itself.</div>
      </div>
      <div className="pd-detail-card">
        <div className="pdc-title">The overnight repair function</div>
        <div className="pdc-body">Sleep is not passive recovery. During deep sleep, the glymphatic system clears metabolic waste from the brain, growth hormone pulses trigger tissue repair, and the immune system consolidates. SLEEP is designed to improve the quality of this repair cycle — not just its duration. That's why we call it Overnight Repair, not "Better Sleep."</div>
      </div>
    </div>

    <div className="pd-who">
      <div className="pd-who-header reveal">
        <h2 className="pd-who-h2">SLEEP is for you if —</h2>
      </div>
      <div className="who-grid reveal">
        <div className="who-card">
          <div className="who-icon">🌙</div>
          <div className="who-title">Sleep isn't deep</div>
          <div className="who-desc">You might fall asleep fine but wake groggy or unrestored. That's a sleep architecture problem, not a sleep onset problem. L-Threonate + L-Theanine improves quality, not just duration.</div>
        </div>
        <div className="who-card">
          <div className="who-icon">🧠</div>
          <div className="who-title">You want felt results fast</div>
          <div className="who-desc">SLEEP is our fastest product to produce noticeable change — within days, not weeks. If your sleep profile is poor, this is the product the quiz will lead with, and it's the right call.</div>
        </div>
        <div className="who-card">
          <div className="who-icon">♻️</div>
          <div className="who-title">Overnight repair matters to you</div>
          <div className="who-desc">Sleep is when your body does its most important longevity work. If you're not sleeping well, the other two products in your protocol can't compound properly. SLEEP is the foundation of recovery.</div>
        </div>
      </div>
    </div>
  </div>

  {/* ═══════════════════════════════════════ */}
  {/* DAILY SYSTEM ─────────────────────────── */}
  {/* ═══════════════════════════════════════ */}
  <div className={`product-detail ${activeTab === 'system' ? 'active' : ''}`} id="detail-system" style={{ display: activeTab === 'system' ? 'block' : 'none' }}>
    <div style={{padding: '100px 80px 60px'}}>
      <div className="reveal" style={{maxWidth: '680px', margin: '0 auto', textAlign: 'center'}}>
        <p style={{fontSize: '11px', fontWeight: '500', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '24px'}}>Most Popular · Default Purchase</p>
        <h2 style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: 'clamp(44px,6vw,80px)', fontWeight: '900', lineHeight: '0.97', letterSpacing: '-0.03em', marginBottom: '24px'}}>The Daily System</h2>
        <p style={{fontSize: '17px', color: 'var(--ink-dim)', lineHeight: '1.65', marginBottom: '48px'}}>
          All three. One protocol. Monthly delivery. This is what 80% of our members choose. The system compounds in ways individual supplements don't — and the quiz tells you exactly how to sequence it for your biology.
        </p>
      </div>
      <div className="reveal" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', maxWidth: '900px', margin: '0 auto 60px'}}>
        <div style={{background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-gold)'}}></div>
            <span style={{fontSize: '10px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-dim)'}}>Cellular</span>
          </div>
          <div style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: '22px', fontWeight: '800', marginBottom: '8px'}}>Daily Renewal</div>
          <div style={{fontSize: '12px', color: 'var(--ink-faint)', marginBottom: '20px', lineHeight: '1.5'}}>NMN 500mg · Morning</div>
          <div style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: '18px', fontWeight: '700', color: 'var(--ink-faint)', textDecoration: 'line-through'}}>$79</div>
        </div>
        <div style={{background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-green)'}}></div>
            <span style={{fontSize: '10px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-dim)'}}>Restore</span>
          </div>
          <div style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: '22px', fontWeight: '800', marginBottom: '8px'}}>Resilience</div>
          <div style={{fontSize: '12px', color: 'var(--ink-faint)', marginBottom: '20px', lineHeight: '1.5'}}>Magnesium + Ashwagandha</div>
          <div style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: '18px', fontWeight: '700', color: 'var(--ink-faint)', textDecoration: 'line-through'}}>$69</div>
        </div>
        <div style={{background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px'}}>
            <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-slate)'}}></div>
            <span style={{fontSize: '10px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-dim)'}}>Sleep</span>
          </div>
          <div style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: '22px', fontWeight: '800', marginBottom: '8px'}}>Overnight Repair</div>
          <div style={{fontSize: '12px', color: 'var(--ink-faint)', marginBottom: '20px', lineHeight: '1.5'}}>Mag L-Threonate + L-Theanine</div>
          <div style={{fontFamily: '\'Cabinet Grotesk\',sans-serif', fontSize: '18px', fontWeight: '700', color: 'var(--ink-faint)', textDecoration: 'line-through'}}>$65</div>
        </div>
      </div>
    </div>
  </div>

  {/* System bundle */}
  <section className="system-section">
    <p className="sys-eyebrow">The Default Purchase</p>
    <h2 className="sys-h2">The Daily System</h2>
    <p className="sys-sub">All three formulas. One protocol. Monthly delivery. The system always leads. Individual products are available — but this is where you start.</p>

    <div className="sys-bundle reveal">
      <div className="sys-bundle-items">
        <div className="sbi">
          <div className="sbi-dot" style={{background: 'var(--c-gold)'}}></div>
          <div>
            <div className="sbi-name">CELLULAR — Daily Renewal</div>
            <div className="sbi-sub">NMN 500mg · Morning</div>
          </div>
          <div className="sbi-price">$79</div>
        </div>
        <div className="sbi">
          <div className="sbi-dot" style={{background: 'var(--c-green)'}}></div>
          <div>
            <div className="sbi-name">RESTORE — Resilience</div>
            <div className="sbi-sub">Mag + Ashwagandha · AM/Midday</div>
          </div>
          <div className="sbi-price">$69</div>
        </div>
        <div className="sbi">
          <div className="sbi-dot" style={{background: 'var(--c-slate)'}}></div>
          <div>
            <div className="sbi-name">SLEEP — Overnight Repair</div>
            <div className="sbi-sub">Mag L-Threonate + L-Theanine · PM</div>
          </div>
          <div className="sbi-price">$65</div>
        </div>
      </div>

      <div className="sys-bundle-center">
        <div className="sbc-label">Daily System Bundle</div>
        <div className="sbc-price">$189</div>
        <div className="sbc-per">per month · all three</div>
        <div className="sbc-saving">Save $24 vs separate</div>
      </div>

      <div className="sys-bundle-right">
        <a href="landing.html" className="sbr-cta">Request Access →</a>
        <p className="sbr-note">Access opens by invitation only.<br />Wave 1 limited to 200 members.<br />No payment until access opens.</p>
      </div>
    </div>
  </section>

      <Footer />
    </>
  );
}