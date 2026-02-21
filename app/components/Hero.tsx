export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col"
    >
      {/* ── Video / Fallback Background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75)" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback gradient (shows when no video/poster yet) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1005] via-[#2d1f0e] to-[#1a1208] opacity-20" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Atmospheric vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

        {/* Top fade for nav readability */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2d1f0e] to-transparent" />
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-8 sm:px-10 pt-24 sm:pt-40 pb-12 sm:pb-20">
        {/* Ornate top divider */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-accent-gold/70" />
          <div className="w-1.5 h-1.5 rotate-45 bg-accent-gold" />
          <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-accent-gold/70" />
        </div>

        {/* Main Heading — stacked on mobile */}
        <h1
          className="font-heading font-bold text-cream leading-tight mb-3 sm:mb-4"
          style={{
            fontSize: "clamp(1.75rem, 8vw, 5.5rem)",
            textShadow:
              "0 2px 4px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)",
          }}
        >
          <span className="block sm:inline">RESTORING ICONS</span>{" "}
          <span
            className="italic text-accent-gold"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            of
          </span>
          <br />
          BRITISH ENGINEERING
        </h1>

        {/* Sub-heading */}
        <p
          className="text-cream/80 font-body tracking-wide mb-8 sm:mb-10"
          style={{ fontSize: "clamp(0.85rem, 3.5vw, 1.25rem)" }}
        >
          Classic Land Rover Defenders Rebuilt.{" "}
          <em className="italic text-cream/90">Perfected. Reborn.</em>
        </p>

        {/* VIEW INVENTORY Button — enlarged for mobile */}
        <button className="btn-medieval btn-medieval--hero mt-2">
          VIEW INVENTORY
        </button>
      </div>

      {/* ── Bottom gold rule ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
    </section>
  );
}
