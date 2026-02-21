import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/WelcomeAnimated";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";

/* Large Victorian-Baroque corner ornament — elaborate scrollwork */
function BaroqueCorner({ className }: { className: string }) {
  return (
    <div className={`baroque-corner ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer L-bracket with scrollwork */}
        <path
          d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
          stroke="#d4af37"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
        {/* Inner bracket scroll */}
        <path
          d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
          stroke="#d4af37"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        {/* Filigree spiral top */}
        <path
          d="M60 4 C68 4, 78 8, 80 16 C82 24, 76 30, 68 28 C60 26, 58 20, 62 16"
          stroke="#d4af37"
          strokeWidth="0.7"
          fill="none"
          opacity="0.35"
        />
        {/* Filigree spiral left */}
        <path
          d="M4 60 C4 68, 8 78, 16 80 C24 82, 30 76, 28 68 C26 60, 20 58, 16 62"
          stroke="#d4af37"
          strokeWidth="0.7"
          fill="none"
          opacity="0.35"
        />
        {/* Fleur-de-lis in corner */}
        <path
          d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
          fill="#d4af37"
          opacity="0.25"
        />
        {/* Corner square */}
        <rect
          x="4"
          y="4"
          width="8"
          height="8"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="none"
          opacity="0.2"
        />
        {/* Leaf flourish top */}
        <path
          d="M34 6 Q40 2, 46 6 Q40 10, 34 6Z"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="#d4af37"
          fillOpacity="0.12"
          opacity="0.35"
        />
        {/* Leaf flourish side */}
        <path
          d="M6 34 Q2 40, 6 46 Q10 40, 6 34Z"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="#d4af37"
          fillOpacity="0.12"
          opacity="0.35"
        />
        {/* Extended scrollwork along edge */}
        <path
          d="M80 4 Q88 4, 92 8 Q96 12, 92 18 Q88 14, 84 12"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M4 80 Q4 88, 8 92 Q12 96, 18 92 Q14 88, 12 84"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="none"
          opacity="0.2"
        />
        {/* Tiny accent dots */}
        <circle cx="16" cy="6" r="1.5" fill="#d4af37" opacity="0.35" />
        <circle cx="6" cy="16" r="1.5" fill="#d4af37" opacity="0.35" />
        <circle cx="50" cy="6" r="1" fill="#d4af37" opacity="0.2" />
        <circle cx="6" cy="50" r="1" fill="#d4af37" opacity="0.2" />
        <circle cx="70" cy="6" r="0.8" fill="#d4af37" opacity="0.15" />
        <circle cx="6" cy="70" r="0.8" fill="#d4af37" opacity="0.15" />
      </svg>
    </div>
  );
}

/* Victorian section divider with central ornament */
function VictorianDivider() {
  return (
    <div className="victorian-divider">
      <svg
        width="60"
        height="20"
        viewBox="0 0 60 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <path
          d="M30 2 L38 10 L30 18 L22 10Z"
          stroke="#d4af37"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        <path d="M30 5 L35 10 L30 15 L25 10Z" fill="#d4af37" opacity="0.2" />
        <path
          d="M20 10 Q16 6 10 10 Q16 14 20 10Z"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M40 10 Q44 6 50 10 Q44 14 40 10Z"
          stroke="#d4af37"
          strokeWidth="0.5"
          fill="none"
          opacity="0.35"
        />
        <circle cx="6" cy="10" r="1.5" fill="#d4af37" opacity="0.25" />
        <circle cx="54" cy="10" r="1.5" fill="#d4af37" opacity="0.25" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* ── Thick textured frame bands (fixed to viewport) ── */}
      <div className="historic-frame-top" />
      <div className="historic-frame-bottom" />
      <div className="historic-frame-left" />
      <div className="historic-frame-right" />
      {/* Inner gold pinstripe */}
      <div className="historic-frame-inner" />

      {/* Four large baroque corner ornaments */}
      <BaroqueCorner className="baroque-corner--tl" />
      <BaroqueCorner className="baroque-corner--tr" />
      <BaroqueCorner className="baroque-corner--bl" />
      <BaroqueCorner className="baroque-corner--br" />

      <Header />
      <main>
        <Hero />
        <VictorianDivider />
        <Welcome />
        <VictorianDivider />
        <Philosophy />
      </main>
      <VictorianDivider />
      <Footer />
    </div>
  );
}
