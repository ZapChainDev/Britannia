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
      <div className="relative py-12 sm:py-20 px-4 sm:px-12">
        {/* Social icons — below content on mobile, absolute left on desktop */}
        <div className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 hover:text-accent-gold transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 hover:text-accent-gold transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Centered text content */}
        <div className="flex flex-col items-center gap-6">
          {/* Mobile social icons */}
          <div className="flex sm:hidden items-center justify-center gap-4 mb-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-accent-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-accent-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Crown / logo mark */}
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
              href="/inventory"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              INVENTORY
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
            <span className="text-accent-gold/50">◆</span>
            <span>
              © 2022{" "}
              <strong className="font-heading tracking-widest">
                BRITANNIA DEFENDER GROUP LTD.
              </strong>
              <span className="mx-1 sm:mx-2 text-accent-gold/50">—</span>
              ALL RIGHTS RESERVED
            </span>
            <span className="text-accent-gold/50">◆</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-heading text-[10px] tracking-[0.15em] text-cream/50">
            <span className="text-accent-gold/50">◆</span>
            <Link
              href="/privacy"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              PRIVACY POLICY
            </Link>
            <span className="text-accent-gold/50">•</span>
            <Link
              href="/terms"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              TERMS OF SERVICE
            </Link>
            <span className="text-accent-gold/50">•</span>
            <Link
              href="/visit"
              className="hover:text-accent-gold transition-colors duration-300"
            >
              BOOK A VISITATION
            </Link>
            <span className="text-accent-gold/50">◆</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
