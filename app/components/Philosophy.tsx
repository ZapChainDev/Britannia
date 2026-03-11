"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative w-full overflow-hidden baroque-section"
      style={{
        background:
          "url('/images/Philsophy.png') center/cover no-repeat, #1a1208",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a1005]/70" />

      {/* Victorian-Baroque corner ornaments — hidden on mobile */}
      <div className="absolute top-3 left-3 w-20 h-20 z-10">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L40 2Q50 2 50 12Q50 22 40 22L22 22Q12 22 12 32L12 40Q12 50 2 50L2 2Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M6 6L30 6Q36 6 36 12Q36 18 30 18L18 18Q12 18 12 24L12 30Q12 36 6 36L6 6Z"
            stroke="#d4af37"
            strokeWidth="0.6"
            fill="none"
            opacity="0.25"
          />
          <circle cx="8" cy="8" r="2" fill="#d4af37" opacity="0.35" />
        </svg>
      </div>
      <div
        className="absolute top-3 right-3 w-20 h-20 z-10"
        style={{ transform: "scaleX(-1)" }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L40 2Q50 2 50 12Q50 22 40 22L22 22Q12 22 12 32L12 40Q12 50 2 50L2 2Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M6 6L30 6Q36 6 36 12Q36 18 30 18L18 18Q12 18 12 24L12 30Q12 36 6 36L6 6Z"
            stroke="#d4af37"
            strokeWidth="0.6"
            fill="none"
            opacity="0.25"
          />
          <circle cx="8" cy="8" r="2" fill="#d4af37" opacity="0.35" />
        </svg>
      </div>
      <div
        className="absolute bottom-3 left-3 w-20 h-20 z-10"
        style={{ transform: "scaleY(-1)" }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L40 2Q50 2 50 12Q50 22 40 22L22 22Q12 22 12 32L12 40Q12 50 2 50L2 2Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M6 6L30 6Q36 6 36 12Q36 18 30 18L18 18Q12 18 12 24L12 30Q12 36 6 36L6 6Z"
            stroke="#d4af37"
            strokeWidth="0.6"
            fill="none"
            opacity="0.25"
          />
          <circle cx="8" cy="8" r="2" fill="#d4af37" opacity="0.35" />
        </svg>
      </div>
      <div
        className="absolute bottom-3 right-3 w-20 h-20 z-10"
        style={{ transform: "scale(-1,-1)" }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L40 2Q50 2 50 12Q50 22 40 22L22 22Q12 22 12 32L12 40Q12 50 2 50L2 2Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M6 6L30 6Q36 6 36 12Q36 18 30 18L18 18Q12 18 12 24L12 30Q12 36 6 36L6 6Z"
            stroke="#d4af37"
            strokeWidth="0.6"
            fill="none"
            opacity="0.25"
          />
          <circle cx="8" cy="8" r="2" fill="#d4af37" opacity="0.35" />
        </svg>
      </div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[480px] border border-accent-gold/15">
          {/* ── Left Column ── */}
          <div
            className="relative flex flex-col justify-center gap-6 md:border-r border-accent-gold/20"
            style={{
              backgroundImage: "url('/images/Philsophy.png')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              paddingTop: "3rem",
              paddingBottom: "4rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
            }}
          >
            {/* Image overlay so text stays readable */}
            <div className="absolute inset-0 bg-[#1a1005]/65" />

            <div
              className="relative z-10 flex flex-col gap-6 max-w-sm mx-auto text-center"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {/* Heading */}
              <motion.h2
                className="font-heading text-3xl md:text-4xl text-accent-gold tracking-[0.12em] font-bold leading-snug text-center"
                style={{
                  fontFamily: "var(--font-heading)",
                  textShadow: "0 2px 12px rgba(212,175,55,0.3)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                Restoration Philosophy
              </motion.h2>

              {/* Body text */}
              <motion.p
                className="text-cream/90 text-base md:text-lg leading-loose font-body text-center italic"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15,
                }}
                viewport={{ once: true }}
              >
                We meticulously restore, refurbish, and refine each Defender,
                blending timeless British craftsmanship with modern upgrades.
              </motion.p>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div
            className="relative flex flex-col justify-between"
            style={{
              background:
                "url('/images/Phil.right.png') center/cover no-repeat, #1a1005",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0e0a05]/80" />

            {/* Ornate corners */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-accent-gold/60 z-10"></div>
            <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-accent-gold/60 z-10"></div>
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-accent-gold/60 z-10"></div>
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-accent-gold/60 z-10"></div>

            <div className="relative z-10 flex flex-col h-full p-8 items-center">
              {/* Logo centered at top */}
              <motion.div
                className="flex justify-center mb-5"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/Logo.png"
                  alt="Britannia Defender Group"
                  style={{
                    height: "120px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.9))",
                  }}
                />
              </motion.div>

              {/* Gold divider */}
              <div
                style={{
                  width: "60%",
                  margin: "0 auto 1.25rem",
                  height: "1px",
                  background: "rgba(212,175,55,0.4)",
                }}
              />

              {/* Checklist — centered block */}
              <div
                className="flex flex-col gap-3 mb-6"
                style={{
                  width: "100%",
                  maxWidth: "260px",
                  margin: "0 auto 1.5rem",
                }}
              >
                {[
                  "Pride, Precision, Perfection",
                  "Hand-selected & stripped bare",
                  "Expertly rebuilt by craftsmen",
                  "Rigorous testing & Quality Integrity validation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <span
                      style={{
                        color: "#d4af37",
                        fontSize: "13px",
                        marginTop: "1px",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        color: "rgba(245,241,232,0.92)",
                        fontFamily: "var(--font-heading)",
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* GBD wax seal bottom right */}
              <div
                className="flex justify-end"
                style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
              >
                <div
                  className="relative rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#5a1a0a",
                    border: "2px solid #d4af37",
                  }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      inset: "5px",
                      border: "1px solid rgba(212,175,55,0.4)",
                    }}
                  />
                  <div className="text-center relative z-10">
                    <div
                      style={{
                        color: "#d4af37",
                        fontSize: "11px",
                        fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      GBD
                    </div>
                    <div
                      style={{
                        color: "rgba(245,241,232,0.8)",
                        fontSize: "6px",
                        letterSpacing: "0.15em",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      CERTIFIED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
