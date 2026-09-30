import { useEffect, useState } from "react";
import ParticleDrift from "./components/ParticleDrift";
import LiquidCarveButton from "./components/LiquidCarveButton";
import NeonBorder from "./components/NeonBorder";
import MonefyLogo from "./components/MonefyLogo";

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/C107723786P?checkoutMode=10&bid=1790527187655";
const PRIMARY_CTA_LABEL = "GET INSTANT ACCESS — £6.90";

const PRIMARY_CTA_PROPS = {
  label: PRIMARY_CTA_LABEL,
  link: HOTMART_CHECKOUT_URL,
  className: "hotmart-fb hotmart__button-checkout",
  newTab: false,
  rounded: 48,
  padding: "18px 28px",
  fill: "#22c55e",
  textColor: "#040814",
  blob: {
    color: "#16a34a",
    size: 90,
    smoothness: 55,
  },
  font: {
    fontFamily: "var(--font-family), 'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: 17.5,
    letterSpacing: "-0.01em",
  },
  style: {
    width: "100%",
    boxShadow: "0 4px 20px rgba(34, 197, 94, 0.35)",
  },
};

export default function App() {
  const [countdown, setCountdown] = useState("00:59:00");
  const [mobileCtaVisible, setMobileCtaVisible] = useState(false);

  // Midnight Countdown Timer (resets every midnight local time)
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      let diffMs = midnight.getTime() - now.getTime();
      if (diffMs <= 0) diffMs = 0;

      const totalSeconds = Math.floor(diffMs / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const pad = (n: number) => String(n).padStart(2, "0");
      setCountdown(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sticky Mobile CTA visibility: appears as user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const offerEl = document.getElementById("offer");
      const scrollY = window.scrollY || window.pageYOffset;

      const isPastHero = scrollY > 350;

      let isViewingOffer = false;
      if (offerEl) {
        const rect = offerEl.getBoundingClientRect();
        isViewingOffer = rect.top <= window.innerHeight && rect.bottom >= 0;
      }

      setMobileCtaVisible(isPastHero && !isViewingOffer);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadZip = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      const response = await fetch("/monefy-debt-freedom.zip");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "monefy-debt-freedom.zip";
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch {
      window.location.href = "/monefy-debt-freedom.zip";
    }
  };

  return (
    <>
      {/* Background WebGL Particle Drift Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleDrift
          background="#040814"
          baseColor="#2563eb"
          accentColor="#38bdf8"
          density={140}
          dotSize={4.5}
          speed={45}
          hover={140}
          linkDistance={140}
          linkThickness={1}
        />
      </div>

      <div className="content-wrapper relative z-10">
        {/* Top Urgency Sticky Bar with Midnight Countdown */}
        <aside className="urgency-banner" id="urgency-banner" role="alert">
          ⏰ This special price is locked in for the next:{" "}
          <span className="timer-badge" id="countdown-timer">
            {countdown}
          </span>{" "}
          after that, it goes back to £27
        </aside>

        {/* Brand Header with Monefy Logo */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <a href="#offer" aria-label="Monefy Homepage" className="logo-badge">
                <MonefyLogo height={30} />
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={handleDownloadZip}
                  style={{
                    background: "rgba(34, 197, 94, 0.15)",
                    border: "1px solid rgba(34, 197, 94, 0.4)",
                    color: "#22c55e",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    padding: "7px 14px",
                    borderRadius: "9999px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  title="Baixar todos os arquivos do projeto para o GitHub"
                >
                  📥 <span>Baixar ZIP (GitHub)</span>
                </button>
                <span className="header-badge">Official 90 Day Blueprint</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* 1. Hero Section (Sem preço no topo e sem botão CTA no hero, texto simplificado) */}
          <section className="hero-section">
            <div className="container">
              <div className="grid-2col">
                <div>
                  <h1 className="headline">
                    Stop Losing Sleep Over Debt. Start Your 90 Day Path to Freedom Today.
                  </h1>

                  <p className="subheadline">
                    A proven step-by-step system to take back control of your money, eliminate debt, and regain peace of mind.
                  </p>

                  <div className="trust-badges-row">
                    <span>🔒 Proven 90-Day Blueprint</span>
                    <span>•</span>
                    <span>⚡ Instant Digital Access</span>
                    <span>•</span>
                    <span>📱 Any Device</span>
                  </div>
                </div>

                {/* Monefy Learning Visual Card */}
                <div className="hero-visual-card">
                  <div className="hero-img-wrap">
                    <img
                      src="/src/assets/images/monefy_learning_1790513998991.jpg"
                      alt="Studying finances with The Debt Freedom Method by Monefy"
                      className="visual-img"
                      width={800}
                      height={533}
                      decoding="async"
                    />
                  </div>
                  <div className="hero-card-info">
                    <div className="hero-card-header">
                      <span className="summary-badge">Monefy Method</span>
                      <span className="summary-pricing">90 Day Blueprint</span>
                    </div>
                    <div className="hero-features-list">
                      <div className="hero-feature-item">
                        <span>⚡</span> <span>Clear step-by-step action plan</span>
                      </div>
                      <div className="hero-feature-item">
                        <span>🎯</span> <span>Snowball vs Avalanche comparison</span>
                      </div>
                      <div className="hero-feature-item">
                        <span>💬</span> <span>Word-for-word negotiation scripts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. História de Identificação (Texto simplificado, parágrafos curtos) */}
          <section className="section-spacing">
            <div className="container">
              <div className="grid-2col-equal">
                <div className="card story-card">
                  <p>
                    You check your banking app late at night. Another payment went through, but the balance barely moves.
                  </p>
                  <p>
                    You're not bad with money. You're just stuck juggling minimum payments without a clear system.
                  </p>
                  <p>
                    What if the next 90 days looked completely different?
                  </p>
                </div>

                <div className="visual-card visual-card-dark" style={{ height: "380px", aspectRatio: "3 / 2" }}>
                  <img
                    src="/src/assets/images/monefy_night_phone_1790514924914.jpg"
                    alt="Late night banking check in bed with glowing phone screen"
                    className="visual-img"
                    width={800}
                    height={533}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Agitação do Problema (Frases curtas e diretas) */}
          <section className="section-spacing">
            <div className="container">
              <div className="grid-2col-equal">
                <div className="card">
                  <p>
                    <strong>The truth:</strong> it's not that you need to earn more. You just need an exact system.
                  </p>
                  <p>
                    Without a plan, interest compounds and anxiety piles up.
                  </p>
                  <p style={{ marginTop: "14px", color: "var(--accent-green)", fontWeight: 700 }}>
                    People who break free aren't smarter—they simply follow a clear, ordered checklist, one step at a time.
                  </p>
                </div>

                <div className="visual-card" style={{ height: "380px", aspectRatio: "3 / 2" }}>
                  <img
                    src="/src/assets/images/monefy_steps_1790514012017.jpg"
                    alt="A clear list of steps to debt freedom done in order one at a time"
                    className="visual-img"
                    width={800}
                    height={533}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Apresentação da Solução (SEM o título "Introducing The Debt Freedom Method", direto para os benefícios) */}
          <section className="section-spacing">
            <div className="container">
              <div className="card solution-card-distributed">
                <p className="solution-intro" style={{ marginBottom: "28px", fontWeight: 600 }}>
                  A clear, practical 90-day checklist showing you exactly how to:
                </p>

                <div className="solution-checklist-grid">
                  <div className="checklist-col">
                    <div className="checklist-box">
                      <span className="checklist-icon">✅</span>
                      <div>
                        <strong>Map every debt you owe:</strong> in one simple 15-minute exercise.
                      </div>
                    </div>
                    <div className="checklist-box">
                      <span className="checklist-icon">✅</span>
                      <div>
                        <strong>Pick your payoff strategy:</strong> Snowball or Avalanche, using real numbers.
                      </div>
                    </div>
                    <div className="checklist-box">
                      <span className="checklist-icon">✅</span>
                      <div>
                        <strong>Negotiate lower rates:</strong> word-for-word scripts that work.
                      </div>
                    </div>
                  </div>

                  <div className="checklist-col">
                    <div className="checklist-box">
                      <span className="checklist-icon">✅</span>
                      <div>
                        <strong>Build a budget you stick to:</strong> no spreadsheets, no guilt.
                      </div>
                    </div>
                    <div className="checklist-box">
                      <span className="checklist-icon">✅</span>
                      <div>
                        <strong>Stop the cycle permanently:</strong> identify and avoid relapse triggers.
                      </div>
                    </div>
                    <div className="solution-highlight-box">
                      <strong>Practical & Actionable</strong>
                      <p>Read in one sitting. Apply immediately.</p>
                    </div>
                  </div>
                </div>

                {/* BOTÃO CTA 1 DE 2: Logo após o bloco de benefícios */}
                <div className="section-cta-center">
                  <div className="cta-button-container cta-pulse-btn">
                    <LiquidCarveButton {...PRIMARY_CTA_PROPS} />
                  </div>
                  <div className="trust-badges-mini">
                    🔒 Instant access • Read in one sitting • Keep it forever
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Prova Social (Reduzido para 3 depoimentos: Sarah, James, Emma - SEM CTA aqui) */}
          <section className="section-spacing">
            <div className="container">
              <div className="reviews-grid">
                <div className="review-card">
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  <p className="review-text">
                    "I finally understood why I kept going back into debt: it was about having a system."
                  </p>
                  <p className="review-author">Sarah, Manchester</p>
                </div>

                <div className="review-card">
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  <p className="review-text">
                    "Gave me an actual plan instead of just telling me to 'budget better.'"
                  </p>
                  <p className="review-author">James, Leeds</p>
                </div>

                <div className="review-card">
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  <p className="review-text">
                    "Straightforward and easy to follow. Finished in one sitting."
                  </p>
                  <p className="review-author">Emma, Bristol</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Quebra de Objeções (Texto simplificado - SEM CTA aqui) */}
          <section className="section-spacing">
            <div className="container">
              <div className="grid-3col">
                <div className="faq-item">
                  <h3 className="faq-q">"Tried budgeting apps before?"</h3>
                  <p className="faq-a">
                    This isn't an app tracking daily coffee. It's a method you follow once and master forever.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-q">"No time to read a book?"</h3>
                  <p className="faq-a">
                    Built to read in one sitting and start executing today. No filler.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-q">"Will it fit my situation?"</h3>
                  <p className="faq-a">
                    Every step uses real numbers: whether you have one card or five, it adapts directly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Oferta & Garantia (Preço aqui como originalmente) */}
          <section id="offer" className="section-spacing">
            <div className="container">
              <div className="offer-container-grid">
                <NeonBorder
                  color="#22c55e"
                  rounded={14}
                  thickness={3.5}
                  borderSize={50}
                  glow={90}
                  speed={16}
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <h2 className="offer-title">Your 90 Days Start Today</h2>
                  <p className="offer-subtext">Instant digital access. Read on any device. Keep it forever.</p>

                  <div className="price-wrap">
                    <span className="old-price">£27</span>
                    <span className="current-price">Just £6.90 today</span>
                  </div>

                  <div className="trust-badges">
                    <span>🔒 Secure checkout</span>
                    <span>•</span>
                    <span>⚡ Instant access</span>
                    <span>•</span>
                    <span>📱 Works on any device</span>
                  </div>

                  {/* BOTÃO CTA 2 DE 2: Na seção de oferta / fechamento */}
                  <div style={{ maxWidth: "440px", width: "100%" }} className="cta-pulse-btn">
                    <LiquidCarveButton {...PRIMARY_CTA_PROPS} />
                  </div>
                </div>

                {/* Guarantee Box */}
                <div className="guarantee-side-box" style={{ position: "relative", zIndex: 2 }}>
                  <div className="guarantee-shield-frame">
                    <img
                      src="/src/assets/images/monefy_shield_1790514024152.jpg"
                      alt="Monefy 100% Risk Free Guarantee Shield with green leaf"
                      className="guarantee-shield-img"
                      width={180}
                      height={180}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="guarantee-badge-title">100% Risk Free Guarantee</div>
                  <p>
                    Try it for 7 days. If you don't get absolute clarity on your debt payoff plan, get a full refund. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Fechamento Final */}
          <section className="section-spacing">
            <div className="container">
              <div className="closing-grid">
                <div>
                  <p>
                    Six months from now, you can have the same balance and stress.
                  </p>
                  <p>
                    Or, follow a proven 90-day method and take back complete control.
                  </p>
                </div>

                <div className="closing-img-card">
                  <img
                    src="/src/assets/images/monefy_transformation_1790514947478.jpg"
                    alt="Transformation from debt stress under a cloud to confidence with green leaf"
                    width={800}
                    height={533}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <span className="logo-badge" style={{ padding: "6px 14px" }}>
              <MonefyLogo height={24} />
            </span>
            <p>© Monefy. All rights reserved. The Debt Freedom Method.</p>
            <button
              onClick={handleDownloadZip}
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#94a3b8",
                fontSize: "13px",
                padding: "8px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📥 Baixar Arquivos do Projeto (.ZIP)
            </button>
          </div>
        </footer>
      </div>

      {/* Floating Download Button (Desktop & Mobile) */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 9999,
        }}
      >
        <button
          onClick={handleDownloadZip}
          style={{
            background: "#101d3a",
            border: "1.5px solid #22c55e",
            color: "#ffffff",
            padding: "10px 18px",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "13px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(34, 197, 94, 0.3)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <span style={{ fontSize: "16px" }}>📦</span>
          <span>Baixar ZIP (GitHub)</span>
        </button>
      </div>

      {/* Sticky Mobile Floating CTA */}
      <aside
        className={`sticky-mobile-cta ${mobileCtaVisible ? "visible" : ""}`}
        id="sticky-mobile-cta"
        aria-label="Quick Checkout"
      >
        <div className="sticky-pricing">
          <span className="sticky-pricing-old">£27</span>
          <span className="sticky-pricing-current">£6.90</span>
        </div>
        <div className="sticky-btn-wrap cta-pulse-btn">
          <LiquidCarveButton
            label="GET ACCESS — £6.90"
            link={HOTMART_CHECKOUT_URL}
            className="hotmart-fb hotmart__button-checkout"
            newTab={false}
            rounded={40}
            padding="12px 16px"
            fill="#22c55e"
            textColor="#040814"
            blob={{
              color: "#16a34a",
              size: 65,
              smoothness: 50,
            }}
            font={{
              fontFamily: "var(--font-family), 'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 14.5,
              letterSpacing: "-0.01em",
            }}
            style={{
              width: "100%",
              boxShadow: "0 2px 10px rgba(34, 197, 94, 0.3)",
            }}
          />
        </div>
      </aside>
    </>
  );
}
