"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative w-full baroque-section"
      style={{
        background:
          "url('/images/Welcome%20Background.png') center/cover no-repeat, #1a1208",
        marginBottom: "6rem",
        overflowX: "hidden" as const,
        paddingTop: "8rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#1a1208]/80" />

      {/* Victorian-Baroque corner ornaments */}
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

      {/* Bordered panel content */}
      <div
        className="relative flex justify-center"
        style={{
          paddingLeft: "clamp(1.5rem, 5vw, 3rem)",
          paddingRight: "clamp(1.5rem, 5vw, 3rem)",
        }}
      >
        <div
          className="w-full max-w-2xl text-center py-20 sm:py-40 border border-accent-gold/20"
          style={{
            paddingLeft: "clamp(1.25rem, 4vw, 6rem)",
            paddingRight: "clamp(1.25rem, 4vw, 6rem)",
          }}
        >
          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-12"
          >
            <div className="h-px w-12 bg-accent-gold/60"></div>
            <div className="w-1.5 h-1.5 mx-3 bg-accent-gold rotate-45"></div>
            <div className="h-px w-12 bg-accent-gold/60"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl text-cream mb-10 tracking-[0.15em] font-bold"
          >
            Welcome to Britannia Defender Group
          </motion.h2>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-cream/80 text-sm md:text-base leading-loose space-y-3 font-body"
            style={{
              overflowWrap: "break-word" as const,
              wordBreak: "break-word" as const,
            }}
          >
            <p>
              At Britannia Defender Group, we specialize in the meticulous
              restoration of Land Rover Defenders. Each vehicle is hand-selected
              and masterfully rebuilt with precision, blending timeless British
              craftsmanship with modern reliability and performance.
            </p>
          </motion.div>

          {/* Italic quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-base md:text-lg italic text-cream font-semibold mt-14 leading-loose font-body"
          >
            These are not simply vehicles.
            <br />
            They are icons – reborn.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="btn-medieval mt-14"
          >
            VIEW INVENTORY
          </motion.button>
        </div>
      </div>
    </section>
  );
}
