import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Britannia Defender Group",
  description:
    "Get in touch with Britannia Defender Group. Enquire about bespoke Land Rover Defender restorations, availability, and commissions. Est. London, England.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://britanniadefendergroup.com/contact",
    siteName: "Britannia Defender Group",
    title: "Contact Us | Britannia Defender Group",
    description:
      "Enquire about bespoke Land Rover Defender restorations, availability, and commissions. Est. London, England.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Britannia Defender Group — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Britannia Defender Group",
    description:
      "Enquire about bespoke Land Rover Defender restorations, availability, and commissions.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Victorian page-frame edges */}
      <div className="historic-frame-top" />
      <div className="historic-frame-bottom" />
      <div className="historic-frame-left" />
      <div className="historic-frame-right" />

      <Header />

      <main className="relative min-h-screen w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "url('/images/Contact.png') center/cover no-repeat, #1a1208",
          }}
        />

        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 z-[1] bg-[#1a1005]/60"
          style={{ pointerEvents: "none" }}
        />

        {/* Vignette edges */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32 sm:py-40">
          {/* Page heading */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {/* Shield icon */}
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
              {/* Cross */}
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
              <span className="text-accent-gold">CONTACT</span>{" "}
              <span className="text-cream/90">ME</span>
            </h1>

            {/* Gold divider */}
            <div className="flex items-center gap-3 w-48">
              <div className="flex-1 h-px bg-accent-gold/40" />
              <span className="text-accent-gold/60 text-xs">◆</span>
              <div className="flex-1 h-px bg-accent-gold/40" />
            </div>
          </div>

          {/* Contact card */}
          <div
            className="relative w-full max-w-lg rounded-sm overflow-hidden"
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
              style={{
                border: "1px solid rgba(212, 175, 55, 0.12)",
              }}
            />

            <div
              className="relative"
              style={{
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                paddingTop: "3rem",
                paddingBottom: "3rem",
              }}
            >
              {/* Company name */}
              <div className="flex flex-col items-center gap-2 mb-10">
                <h2 className="font-heading text-lg sm:text-xl tracking-[0.25em] text-accent-gold text-center">
                  BRITANNIA DEFENDER GROUP
                </h2>
                <div className="flex items-center gap-3 w-32">
                  <div className="flex-1 h-px bg-accent-gold/30" />
                  <span className="text-accent-gold/50 text-[8px]">✦</span>
                  <div className="flex-1 h-px bg-accent-gold/30" />
                </div>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-7">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-accent-gold/25 bg-accent-gold/5 mt-0.5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                      className="opacity-70"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-[10px] tracking-[0.25em] text-accent-gold/60 mb-1.5">
                      ADDRESS
                    </div>
                    <div className="font-body text-cream/80 text-sm sm:text-base leading-relaxed">
                      Britannia Defender Group
                      <br />
                      BA11 4PZ
                      <br />
                      United Kingdom
                    </div>
                  </div>
                </div>

                {/* Thin divider */}
                <div className="h-px bg-accent-gold/15 mx-4" />

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-accent-gold/25 bg-accent-gold/5 mt-0.5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                      className="opacity-70"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13L2 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-[10px] tracking-[0.25em] text-accent-gold/60 mb-1.5">
                      EMAIL
                    </div>
                    <a
                      href="mailto:zakezelove@gmail.com"
                      className="font-body text-cream/80 text-sm sm:text-base hover:text-accent-gold transition-colors duration-300"
                    >
                      zakezelove@gmail.com
                    </a>
                  </div>
                </div>

                {/* Thin divider */}
                <div className="h-px bg-accent-gold/15 mx-4" />

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-accent-gold/25 bg-accent-gold/5 mt-0.5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="1.5"
                      className="opacity-70"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-[10px] tracking-[0.25em] text-accent-gold/60 mb-1.5">
                      TELEPHONE
                    </div>
                    <a
                      href="tel:+447443522526"
                      className="font-body text-cream/80 text-sm sm:text-base hover:text-accent-gold transition-colors duration-300"
                    >
                      +44 (0) 7443 522526
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom tagline */}
              <div className="mt-12 flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <div className="flex-1 h-px bg-accent-gold/25" />
                  <span className="text-accent-gold/50 text-[10px]">◆</span>
                  <div className="flex-1 h-px bg-accent-gold/25" />
                </div>
                <p className="font-heading text-sm sm:text-base tracking-[0.3em] text-cream/70 text-center">
                  SECURITY.{" "}
                  <span className="text-accent-gold/80">STRENGTH.</span>{" "}
                  STRATEGY.
                </p>
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <div className="flex-1 h-px bg-accent-gold/25" />
                  <span className="text-accent-gold/50 text-[10px]">◆</span>
                  <div className="flex-1 h-px bg-accent-gold/25" />
                </div>
              </div>
            </div>
          </div>

          {/* Back to home link */}
          <div className="mt-10">
            <Link
              href="/"
              className="font-heading text-[11px] tracking-[0.25em] text-cream/50 hover:text-accent-gold transition-colors duration-300 flex items-center gap-2"
            >
              <span className="text-accent-gold/40">←</span>
              RETURN HOME
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
