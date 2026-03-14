import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-accent-gold/40 baroque-section"
      style={{
        background:
          "url('/images/texture-dark.jpg') center/cover no-repeat, #1a1208",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a1005]/80" />

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

      {/* Outer wrapper: relative so we can absolutely position the social icons */}
      <div
        className="relative px-4 sm:px-12"
        style={{ paddingTop: "5rem", paddingBottom: "3rem" }}
      >
        {/* Centered text content */
        <div className="flex flex-col items-center gap-6">
          {/* Crown / logo mark */
          <div className="flex flex-col items-center gap-3">
            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              fill="none"
              className="text-accent-gold/70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 2L24 12L34 6L29 18H9L4 6L14 12L19 2Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <rect
                x="7"
                y="20"
                width="24"
                height="4"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <rect
                x="9"
                y="26"
                width="20"
                height="3"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            <div className="font-heading tracking-[0.35em] text-sm text-accent-gold/80">
              BRITANNIA DEFENDER GROUP
            </div>
            <div className="font-body italic text-cream/40 text-xs tracking-widest">
              Est. London, England
            </div>
          </div>

          {/* Gold divider */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px bg-accent-gold/25" />
            <span className="text-accent-gold/50 text-[10px]">◆</span>
            <div className="flex-1 h-px bg-accent-gold/25" />
          </div>

          {/* Nav links row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-heading text-[11px] tracking-[0.2em] text-cream/50">
            <Link
              href="/"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              HOME
            </Link>
            <span className="text-accent-gold/30">|</span>
            <Link
              href="/philosophy"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              PHILOSOPHY
            </Link>
            <span className="text-accent-gold/30">|</span>
            <Link
              href="/contact"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Gold divider */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px bg-accent-gold/25" />
            <span className="text-accent-gold/50 text-[10px]">◆</span>
            <div className="flex-1 h-px bg-accent-gold/25" />
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-heading text-xs tracking-wider text-cream/60 text-center">
            <span className="text-accent-gold/50 shrink-0">◆</span>
            <span className="flex flex-col sm:flex-row sm:items-center sm:gap-1 leading-relaxed">
              <span>
                © 2022{" "}
                <strong className="font-heading tracking-widest">
                  BRITANNIA DEFENDER GROUP LTD.
                </strong>
              </span>
              <span className="hidden sm:inline text-accent-gold/50">—</span>
              <span>ALL RIGHTS RESERVED</span>
            </span>
            <span className="text-accent-gold/50 shrink-0">◆</span>
          </div>


        </div>
      </div>
    </footer>
  );
}
