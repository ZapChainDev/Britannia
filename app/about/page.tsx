"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* Scroll-triggered fade-in + scale wrapper */
function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* Reusable gold section divider */
function GoldDivider() {
  return (
    <div className="flex items-center gap-4 w-full max-w-sm mx-auto my-10">
      <div className="flex-1 h-px bg-accent-gold/30" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60"
      >
        <path
          d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9Z"
          fill="#d4af37"
          opacity="0.5"
        />
      </svg>
      <div className="flex-1 h-px bg-accent-gold/30" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Victorian page-frame edges */}
      <div className="historic-frame-top" />
      <div className="historic-frame-bottom" />
      <div className="historic-frame-left" />
      <div className="historic-frame-right" />

      <Header />

      <main className="relative w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "url('/images/Welcome%20Background.png') center/cover no-repeat, #1a1208",
          }}
        />

        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 z-[1] bg-[#1a1005]/75"
          style={{ pointerEvents: "none" }}
        />

        {/* Vignette edges */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Victorian-Baroque corner ornaments */}
        <div className="absolute top-32 left-4 w-24 h-24 z-10 hidden md:block">
          <svg
            width="96"
            height="96"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
              stroke="#d4af37"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
              stroke="#d4af37"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
              fill="#d4af37"
              opacity="0.25"
            />
          </svg>
        </div>
        <div
          className="absolute top-32 right-4 w-24 h-24 z-10 hidden md:block"
          style={{ transform: "scaleX(-1)" }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
              stroke="#d4af37"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
              stroke="#d4af37"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
              fill="#d4af37"
              opacity="0.25"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-32 left-4 w-24 h-24 z-10 hidden md:block"
          style={{ transform: "scaleY(-1)" }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
              stroke="#d4af37"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
              stroke="#d4af37"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
              fill="#d4af37"
              opacity="0.25"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-32 right-4 w-24 h-24 z-10 hidden md:block"
          style={{ transform: "scale(-1,-1)" }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
              stroke="#d4af37"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
              stroke="#d4af37"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
              fill="#d4af37"
              opacity="0.25"
            />
          </svg>
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center px-4 pb-32 sm:pb-40"
          style={{ paddingTop: "220px" }}
        >
          {/* Page heading */}
          <motion.div
            className="flex flex-col items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Lion / shield crest icon */}
            <svg
              width="48"
              height="56"
              viewBox="0 0 48 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-70"
            >
              <path
                d="M24 2L4 12V28C4 40 12 50 24 54C36 50 44 40 44 28V12L24 2Z"
                stroke="#d4af37"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M24 8L8 16V28C8 38 14 46 24 50C34 46 40 38 40 28V16L24 8Z"
                stroke="#d4af37"
                strokeWidth="0.8"
                fill="none"
                opacity="0.4"
              />
              <line
                x1="24"
                y1="18"
                x2="24"
                y2="40"
                stroke="#d4af37"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <line
                x1="16"
                y1="28"
                x2="32"
                y2="28"
                stroke="#d4af37"
                strokeWidth="1.2"
                opacity="0.5"
              />
            </svg>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-cream text-center">
              <span className="text-accent-gold">ABOUT</span>{" "}
              <span className="text-cream/90">US</span>
            </h1>

            {/* Gold divider */}
            <div className="flex items-center gap-3 w-48">
              <div className="flex-1 h-px bg-accent-gold/40" />
              <span className="text-accent-gold/60 text-xs">◆</span>
              <div className="flex-1 h-px bg-accent-gold/40" />
            </div>
          </motion.div>

          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="relative w-full max-w-2xl rounded-sm overflow-hidden"
            style={{
              background: "rgba(26, 16, 5, 0.85)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              boxShadow:
                "0 0 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.1)",
            }}
          >
            {/* Card inner border */}
            <div
              className="absolute inset-[3px] pointer-events-none rounded-sm"
              style={{ border: "1px solid rgba(212, 175, 55, 0.12)" }}
            />

            <div
              className="relative"
              style={{
                paddingLeft: "clamp(1.5rem, 5vw, 3rem)",
                paddingRight: "clamp(1.5rem, 5vw, 3rem)",
                paddingTop: "3rem",
                paddingBottom: "3.5rem",
              }}
            >
              {/* Company name header */}
              <FadeIn delay={0.1}>
                <div className="flex flex-col items-center gap-2 mb-10">
                  <p className="font-heading text-[10px] tracking-[0.35em] text-accent-gold/50 text-center uppercase">
                    Est. 17 February 2026
                  </p>
                  <h2 className="font-heading text-lg sm:text-xl tracking-[0.22em] text-accent-gold text-center">
                    BRITANNIA DEFENDER GROUP
                  </h2>
                  <div className="flex items-center gap-3 w-40">
                    <div className="flex-1 h-px bg-accent-gold/30" />
                    <span className="text-accent-gold/50 text-[8px]">✦</span>
                    <div className="flex-1 h-px bg-accent-gold/30" />
                  </div>
                </div>
              </FadeIn>

              {/* ── Section 1: About ── */}
              <FadeIn>
                <div className="mb-2">
                  <h3 className="font-heading text-[11px] tracking-[0.3em] text-accent-gold/70 mb-4 text-center uppercase">
                    🇬🇧 &nbsp;Our Story
                  </h3>
                  <div className="flex flex-col gap-4 font-body text-cream/80 text-sm sm:text-base leading-relaxed">
                    <p>
                      Britannia Defender Group was founded on{" "}
                      <span className="text-accent-gold/90">
                        17 February 2026
                      </span>
                      , beneath the quiet energy of a New Moon and at the dawn
                      of the Chinese New Year — the Year of the Fire Horse.
                    </p>
                    <p>It was an appropriate beginning.</p>
                    <p>
                      For years, the idea had existed only on paper — a vision
                      to restore and preserve one of Britain's most iconic
                      machines: the Land Rover Defender. Vehicles built in the
                      United Kingdom and trusted across the Commonwealth for
                      generations.
                    </p>
                    <p>These machines were never simply vehicles.</p>
                    <p>
                      They were tools of exploration, service, and endurance —
                      working in the harshest environments on earth.
                    </p>
                    <p>
                      At Britannia Defender Group, our mission is to ensure
                      these icons continue their journey.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <GoldDivider />
              </FadeIn>

              {/* ── Section 2: The Founder ── */}
              <FadeIn>
                <div className="mb-2">
                  <h3 className="font-heading text-[11px] tracking-[0.3em] text-accent-gold/70 mb-4 text-center uppercase">
                    The Founder
                  </h3>
                  <div className="flex flex-col gap-4 font-body text-cream/80 text-sm sm:text-base leading-relaxed">
                    <p>
                      Britannia Defender Group was created by{" "}
                      <span className="text-accent-gold/90">
                        Zakaria Eze-Love
                      </span>
                      , a lifelong admirer of classic engineering and mechanical
                      heritage.
                    </p>
                    <p>
                      The journey began with Zak's own Defender — a{" "}
                      <span className="text-cream/95">2001 TD5</span> imported
                      from Singapore. The vehicle was restored and reimagined
                      with bold styling, large wheels, and aggressive off-road
                      tyres.
                    </p>
                    <p>
                      It quickly became a head-turner at local rallies, standing
                      out among modern vehicles and reminding people of the
                      Defender's enduring character.
                    </p>
                    <p>
                      What began as a personal project soon revealed something
                      deeper:
                    </p>
                    <p className="italic text-cream/70">
                      these machines still inspired loyalty, admiration, and
                      nostalgia wherever they appeared.
                    </p>
                    <p>
                      That moment sparked the vision for Britannia Defender
                      Group.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <GoldDivider />
              </FadeIn>

              {/* ── Section 3: Our Philosophy ── */}
              <FadeIn>
                <div className="mb-2">
                  <h3 className="font-heading text-[11px] tracking-[0.3em] text-accent-gold/70 mb-4 text-center uppercase">
                    Our Philosophy
                  </h3>
                  <div className="flex flex-col gap-4 font-body text-cream/80 text-sm sm:text-base leading-relaxed">
                    <p>
                      At BDG we believe that the Defender is more than a
                      vehicle.
                    </p>
                    <p>
                      It represents a tradition of British engineering built for
                      resilience, exploration, and service.
                    </p>
                    <p>
                      Every Defender we work on is treated as a future classic —
                      restored with respect for its heritage while ensuring it
                      remains reliable and capable for modern use.
                    </p>
                    <p className="text-accent-gold/70 font-heading text-[10px] tracking-[0.2em] uppercase">
                      Our process focuses on:
                    </p>
                    <ul className="flex flex-col gap-2 pl-2">
                      {[
                        "Careful vehicle selection",
                        "Structural integrity and chassis preservation",
                        "Precision mechanical refurbishment",
                        "Thoughtful upgrades where appropriate",
                        "Authentic character and timeless styling",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-accent-gold/60 mt-1 text-xs flex-shrink-0">
                            ◆
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Each vehicle is approached not as a commodity, but as a
                      machine with history and purpose.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <GoldDivider />
              </FadeIn>

              {/* ── Section 4: Restoring Icons ── */}
              <FadeIn>
                <div className="mb-2">
                  <h3 className="font-heading text-[11px] tracking-[0.3em] text-accent-gold/70 mb-4 text-center uppercase">
                    Restoring Icons
                  </h3>
                  <div className="flex flex-col gap-4 font-body text-cream/80 text-sm sm:text-base leading-relaxed">
                    <p>
                      The Land Rover Defender served farmers, explorers,
                      engineers, soldiers, and adventurers around the world for
                      more than half a century.
                    </p>
                    <p>
                      Britannia Defender Group exists to ensure these vehicles
                      continue that legacy.
                    </p>
                    <p>
                      Through careful restoration and respectful modernisation,
                      we aim to return these machines to the road — ready for
                      the next chapter of their journey.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Bottom tagline */}
              <FadeIn>
                <div className="mt-12 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 w-full max-w-xs">
                    <div className="flex-1 h-px bg-accent-gold/25" />
                    <span className="text-accent-gold/50 text-[10px]">◆</span>
                    <div className="flex-1 h-px bg-accent-gold/25" />
                  </div>
                  <p className="font-heading text-sm sm:text-base tracking-[0.28em] text-cream/70 text-center">
                    RESTORING <span className="text-accent-gold/80">ICONS</span>{" "}
                    OF BRITISH ENGINEERING
                  </p>
                  <div className="flex items-center gap-3 w-full max-w-xs">
                    <div className="flex-1 h-px bg-accent-gold/25" />
                    <span className="text-accent-gold/50 text-[10px]">◆</span>
                    <div className="flex-1 h-px bg-accent-gold/25" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </motion.div>

          {/* Back to home */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/"
              className="font-heading text-[11px] tracking-[0.25em] text-cream/50 hover:text-accent-gold transition-colors duration-300 flex items-center gap-2"
            >
              <span className="text-accent-gold/40">←</span>
              RETURN HOME
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
