export default function Page() {
  return (
    <div>


  

  {/* Hero */}
  <section className="hero" id="home">
    <div className="hero-rings"></div>
    <div className="hero-rings"></div>
    <div className="hero-rings"></div>
    <div className="hero-content">
      <div className="hero-badge">
        <span className="badge-dot"></span>
        Wave 1 — 200 Members — Now Open
      </div>
      <h1 className="hero-h1">
        The longevity<br />
        <span className="line-warm">protocol</span><br />
        platform.
      </h1>
      <p className="hero-p">
        The quiz is the product. The supplements are the delivery mechanism. Take three minutes to receive your personalised longevity protocol — then we handle the rest.
      </p>
      <div className="hero-actions">
        <Link href="#quiz" className="btn-lg">Take the Quiz</Link>
        <Link href="products" className="btn-lg-ghost">View the System</Link>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">3</div>
          <div className="stat-label">Products. One system</div>
        </div>
        <div className="stat-sep"></div>
        <div className="stat-item">
          <div className="stat-num">76%</div>
          <div className="stat-label">Gross margin</div>
        </div>
        <div className="stat-sep"></div>
        <div className="stat-item">
          <div className="stat-num">200</div>
          <div className="stat-label">Wave 1 spots</div>
        </div>
        <div className="stat-sep"></div>
        <div className="stat-item">
          <div className="stat-num">$189</div>
          <div className="stat-label">Full system / month</div>
        </div>
      </div>
    </div>
  </section>

  {/* Marquee */}
  <div className="marquee">
    <div className="marquee-track">
      <div className="marquee-item">NMN 500mg · FDA cleared September 2025 <span className="mq-dot"></span></div>
      <div className="marquee-item">Magnesium L-Threonate · Ashwagandha KSM-66 <span className="mq-dot"></span></div>
      <div className="marquee-item">Personalised protocol · three minutes <span className="mq-dot"></span></div>
      <div className="marquee-item">Zero inventory risk · Supliful fulfilled <span className="mq-dot"></span></div>
      <div className="marquee-item">No discounts. Ever. <span className="mq-dot"></span></div>
      <div className="marquee-item">The quiz is the product <span className="mq-dot"></span></div>
      <div className="marquee-item">NMN 500mg · FDA cleared September 2025 <span className="mq-dot"></span></div>
      <div className="marquee-item">Magnesium L-Threonate · Ashwagandha KSM-66 <span className="mq-dot"></span></div>
      <div className="marquee-item">Personalised protocol · three minutes <span className="mq-dot"></span></div>
      <div className="marquee-item">Zero inventory risk · Supliful fulfilled <span className="mq-dot"></span></div>
      <div className="marquee-item">No discounts. Ever. <span className="mq-dot"></span></div>
      <div className="marquee-item">The quiz is the product <span className="mq-dot"></span></div>
    </div>
  </div>

  {/* How it works */}
  <section className="how-section" id="how">
    <div className="how-header reveal">
      <p className="section-eyebrow">How it works</p>
      <h2 className="section-h2">Four steps.<br />One daily ritual.</h2>
    </div>
    <div className="how-steps">
      <div className="how-step reveal">
        <div className="step-number">01</div>
        <div className="step-title">Take the quiz</div>
        <div className="step-desc">Seven questions. Three minutes. Your age, energy, stress, sleep, and goals — mapped to the right protocol for your biology.</div>
      </div>
      <div className="how-step reveal reveal-delay">
        <div className="step-number">02</div>
        <div className="step-title">Receive your protocol</div>
        <div className="step-desc">A personalised output — not a generic vitamin recommendation. Specific products, specific timing, specific language for your profile.</div>
      </div>
      <div className="how-step reveal reveal-delay">
        <div className="step-number">03</div>
        <div className="step-title">We deliver monthly</div>
        <div className="step-desc">Your protocol ships every 30 days. Premium packaging. No decisions required. The ritual handles itself.</div>
      </div>
      <div className="how-step reveal reveal-delay-2">
        <div className="step-number">04</div>
        <div className="step-title">Protocol evolves</div>
        <div className="step-desc">30-day check-ins refine your stack as your biology responds. The system learns. Most supplements don't even try.</div>
      </div>
    </div>
  </section>

  {/* Quiz section */}
  <section className="quiz-section" id="quiz">
    <div className="quiz-text reveal">
      <p className="section-eyebrow">The Protocol Quiz</p>
      <h2 className="section-h2">Seven questions.<br />Your protocol.</h2>
      <p style={{fontSize: '15px', color: 'var(--ink-dim)', lineHeight: '1.7', margin: '24px 0 36px'}}>
        Generic brands sell products. We build a system around your biology. The quiz determines which of our three formulas leads, in what order, and how to frame your protocol.
      </p>
      <div className="quiz-benefit">
        <div className="qb-icon">⚡</div>
        <div>
          <div className="qb-title">Energy calibration</div>
          <div className="qb-desc">We map your energy curve — whether CELLULAR is the priority or whether you need RESTORE first.</div>
        </div>
      </div>
      <div className="quiz-benefit">
        <div className="qb-icon">🌙</div>
        <div>
          <div className="qb-title">Sleep priority scoring</div>
          <div className="qb-desc">If your sleep is poor, we lead with SLEEP — because felt benefits drive retention, and retention is everything.</div>
        </div>
      </div>
      <div className="quiz-benefit">
        <div className="qb-icon">🧬</div>
        <div>
          <div className="qb-title">Longevity sequencing</div>
          <div className="qb-desc">Your protocol output includes a staged introduction — or a full-system day-one plan if your profile supports it.</div>
        </div>
      </div>
    </div>

    {/* Interactive quiz */}
    <div className="quiz-panel reveal reveal-delay" id="quiz-panel">
      <div className="quiz-progress" id="quiz-progress">
        <div className={`quiz-bar ${currentQ >= 0 ? "active" : ""}`}></div>
        <div className={`quiz-bar ${currentQ >= 1 ? "active" : ""}`}></div>
        <div className={`quiz-bar ${currentQ >= 2 ? "active" : ""}`}></div>
        <div className={`quiz-bar ${currentQ >= 3 ? "active" : ""}`}></div>
        <div className={`quiz-bar ${currentQ >= 4 ? "active" : ""}`}></div>
        <div className={`quiz-bar ${currentQ >= 5 ? "active" : ""}`}></div>
        <div className={`quiz-bar ${currentQ >= 6 ? "active" : ""}`}></div>
      </div>

      
      <div id="quiz-body" style={{ display: showResult ? 'none' : 'block' }}>
        <div className="quiz-q" id="quiz-qnum">Question {currentQ + 1} of 7</div>
        <div className="quiz-question" id="quiz-question">{quizData[currentQ].q}</div>
        <div className="quiz-options" id="quiz-options">
          {quizData[currentQ].opts.map((opt, i) => (
            <div 
              key={i} 
              className={`quiz-opt ${selectedOpt === i ? 'selected' : ''}`} 
              onClick={() => setSelectedOpt(i)}
            >
              {opt}
            </div>
          ))}
        </div>
        <div className="quiz-nav">
          <button className="quiz-back" onClick={handleBack} style={{ opacity: currentQ === 0 ? 0.3 : 1 }}>← Back</button>
          <button className="quiz-next" onClick={handleNext}>Continue →</button>
        </div>
      </div>

      {showResult && res && (
        <div id="quiz-result">
          <div style={{marginBottom: '20px'}}>
            <div style={{fontSize: '10px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '14px'}}>Your Protocol</div>
            <div style={{fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '20px', fontWeight: '800', color: '#FDFCF9', marginBottom: '16px', lineHeight: '1.2'}}>{res.head}</div>
            <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65'}}>{res.body}</p>
          </div>
          <Link href="/" style={{display: 'block', textAlign: 'center', padding: '16px', background: 'var(--warm)', color: 'var(--ink)', fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.10em', textTransform: 'uppercase', borderRadius: '6px', textDecoration: 'none', marginTop: '28px'}}>
            Claim Your Access Spot →
          </Link>
        </div>
      )}
    </div>
  </section>


  {/* Products */}
  <section className="products-section" id="products">
    <div className="products-header reveal">
      <h2 className="products-h2">Three products.<br /><em>One system.</em><br />Daily.</h2>
      <p className="products-right-text">
        We never present individual products first. The Daily System is what 80% of members choose — because the system compounds in ways individual supplements don't.
      </p>
    </div>
    <div className="products-grid reveal">
      <div className="pc cellular">
        <div className="pc-header">
          <div className="pc-dot"></div>
          <div className="pc-label">Cellular</div>
        </div>
        <div className="pc-name">Daily Renewal</div>
        <div className="pc-ing">NMN 500mg · Morning · FDA-cleared Sept 2025</div>
        <div className="pc-body">NAD+ declines from your mid-thirties. NMN restores the cellular energy production that makes everything else work. Take it every morning. This is the foundation.</div>
        <div className="pc-footer">
          <div className="pc-price">$79 <small>/ mo</small></div>
          <Link href="products#cellular" className="pc-link">Details →</Link>
        </div>
      </div>
      <div className="pc restore">
        <div className="pc-header">
          <div className="pc-dot"></div>
          <div className="pc-label">Restore</div>
        </div>
        <div className="pc-name">Resilience</div>
        <div className="pc-ing">Magnesium Glycinate 400mg + Ashwagandha KSM-66</div>
        <div className="pc-body">The number one complaint of 35–50 year olds: stress and poor recovery. Ashwagandha has the strongest human trial data of any adaptogen. This is the recovery layer.</div>
        <div className="pc-footer">
          <div className="pc-price">$69 <small>/ mo</small></div>
          <Link href="products#restore" className="pc-link">Details →</Link>
        </div>
      </div>
      <div className="pc sleep">
        <div className="pc-header">
          <div className="pc-dot"></div>
          <div className="pc-label">Sleep</div>
        </div>
        <div className="pc-name">Overnight Repair</div>
        <div className="pc-ing">Magnesium L-Threonate 144mg + L-Theanine 200mg</div>
        <div className="pc-body">Sleep is the most underrated longevity intervention. This formula is felt within days — not weeks. It drives more word of mouth and subscription retention than anything else we offer.</div>
        <div className="pc-footer">
          <div className="pc-price">$65 <small>/ mo</small></div>
          <Link href="products#sleep" className="pc-link">Details →</Link>
        </div>
      </div>
    </div>
    <div className="bundle-card reveal">
      <div className="bundle-left">
        <div className="bundle-tag">Most Popular · Start Here</div>
        <div className="bundle-name">The Daily System</div>
        <div className="bundle-desc">All three. One protocol. Monthly delivery. This is the default purchase — and the only way we genuinely recommend starting. The system works where individual products don't.</div>
      </div>
      <div className="bundle-right">
        <div className="bundle-price">$189</div>
        <div className="bundle-per">per month · all three products</div>
        <Link href="landing" className="bundle-cta">Request Access</Link>
      </div>
    </div>
  </section>

  {/* Philosophy */}
  <section className="philosophy-section" id="philosophy">
    <div className="philosophy-text reveal">
      <p className="section-eyebrow">Our philosophy</p>
      <h2 className="section-h2">Calm.<br />Informed.<br />No hype.</h2>
      <p className="philosophy-body">
        Most longevity is noise. The most powerful protocol is the one you actually take. Consistency outperforms complexity every time.
      </p>
      <div className="philosophy-pull">
        <p>"We are not building a supplement brand. We are building a longevity protocol platform that enters the market as a supplement brand."</p>
      </div>
      <p className="philosophy-body">
        The supplements are the entry point. The quiz is the differentiator. The data is the moat. And none of it matters without the experience being exceptional.
      </p>
    </div>
    <div className="philosophy-visual reveal reveal-delay">
      <div className="philo-card">
        <div className="philo-rule">
          <div className="philo-rule-num">R1</div>
          <div className="philo-rule-text">
            <strong>Never discount</strong>
            <p>Not 10% off. Not a flash sale. Not ever. The price is the signal. We run out of stock before we discount.</p>
          </div>
        </div>
        <div className="philo-rule">
          <div className="philo-rule-num">R2</div>
          <div className="philo-rule-text">
            <strong>No fake urgency</strong>
            <p>No countdown timers. No "only 3 left." Your scarcity is structural, not manufactured. Wave releases are real.</p>
          </div>
        </div>
        <div className="philo-rule">
          <div className="philo-rule-num">R3</div>
          <div className="philo-rule-text">
            <strong>The quiz earns the price</strong>
            <p>At launch we white-label generic supplements with better packaging and a smarter onboarding experience. That is fine — if the experience is exceptional.</p>
          </div>
        </div>
        <div className="philo-rule">
          <div className="philo-rule-num">R4</div>
          <div className="philo-rule-text">
            <strong>Invite-only referral</strong>
            <p>Members give 2 access codes per quarter. Not a referral discount — an access gift. This rewards loyalty without cheapening the brand.</p>
          </div>
        </div>
        <div className="philo-rule">
          <div className="philo-rule-num">R5</div>
          <div className="philo-rule-text">
            <strong>Lead with the system</strong>
            <p>Never present individual products first. Always lead with the Daily System. The system compounds. Individual products don't.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Science */}
  <section className="science-section" id="science">
    <div className="science-header reveal">
      <div>
        <p className="section-eyebrow">The science, made human</p>
        <h2 className="section-h2">Why these<br />ingredients.</h2>
      </div>
      <p style={{fontSize: '14px', color: 'var(--ink-dim)', maxWidth: '300px', lineHeight: '1.7', textAlign: 'right'}}>
        We chose each ingredient for one reason: the evidence. Not trends. Not marketing. Evidence.
      </p>
    </div>
    <div className="science-grid reveal">
      <div className="sci-card">
        <div className="sci-icon">🔋</div>
        <div className="sci-title">NMN &amp; NAD+ decline</div>
        <div className="sci-body">NAD+ — the molecule that powers cellular energy — declines by roughly 50% between the ages of 40 and 60. NMN is the most studied precursor for restoring it. FDA-cleared as of September 2025.</div>
        <div className="sci-tag">CELLULAR product →</div>
      </div>
      <div className="sci-card">
        <div className="sci-icon">🌿</div>
        <div className="sci-title">Ashwagandha KSM-66</div>
        <div className="sci-body">Of all the adaptogens, Ashwagandha has the largest body of human clinical trial data. KSM-66 is the full-spectrum root extract with the most consistent efficacy. Not a trend — a standard.</div>
        <div className="sci-tag">RESTORE product →</div>
      </div>
      <div className="sci-card">
        <div className="sci-icon">😴</div>
        <div className="sci-title">Magnesium L-Threonate</div>
        <div className="sci-body">The only form of magnesium shown to cross the blood-brain barrier effectively. Combined with L-Theanine for sleep quality — not just sleep onset. Felt within days, not weeks. This drives retention.</div>
        <div className="sci-tag">SLEEP product →</div>
      </div>
    </div>
  </section>

  {/* Final CTA */}
  <section className="cta-section">
    <div className="cta-rings"></div>
    <div className="cta-rings"></div>
    <div className="cta-rings"></div>
    <div className="cta-inner reveal">
      <p className="section-eyebrow">Wave 1 · Limited to 200 members</p>
      <h2 className="cta-h2">Your protocol<br />starts here.</h2>
      <p className="cta-sub">Request access. Take the quiz when your window opens. Receive your personalised longevity protocol monthly.</p>
      <div className="cta-actions">
        <Link href="landing" className="btn-lg">Request Access</Link>
        <Link href="products" className="btn-lg-ghost">View the products</Link>
      </div>
    </div>
  </section>

  

  
    
      <Footer />
    </>
  );
}
