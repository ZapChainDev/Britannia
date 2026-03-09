"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const goHome = () => {
    setIsMobileMenuOpen(false);
    window.location.href = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="header-fixed fixed left-0 right-0 z-50 transition-all duration-500"
      style={{
        top: "var(--frame-size, 28px)",
        background:
          'url("/images/texture-dark.jpg") center/cover no-repeat, #1a1005',
        borderBottom: "2px solid rgba(212,175,55,0.5)",
        borderTop: "2px solid rgba(212,175,55,0.5)",
        overflow: "visible",
      }}
    >
      {/* Inner gold pinstripe lines */}
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: 0,
          right: 0,
          height: "1px",
          background: "rgba(212,175,55,0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3px",
          left: 0,
          right: 0,
          height: "1px",
          background: "rgba(212,175,55,0.25)",
        }}
      />

      {/* Left ornate corner */}
      <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none opacity-70 hidden md:block">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
            stroke="#d4af37"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
            fill="#d4af37"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Right ornate corner */}
      <div
        className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-70 hidden md:block"
        style={{ transform: "scaleX(-1)" }}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4 L60 4 Q72 4 72 16 Q72 28 60 28 L28 28 Q16 28 16 40 L16 60 Q16 72 4 72 L4 4Z"
            stroke="#d4af37"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M10 10 L44 10 Q52 10 52 18 Q52 26 44 26 L26 26 Q18 26 18 34 L18 44 Q18 52 10 52 L10 10Z"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M8 8 C8 4, 14 2, 16 6 C18 2, 24 4, 24 8 C24 14, 16 18, 16 18 C16 18, 8 14, 8 8Z"
            fill="#d4af37"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* 3-column grid: left links | logo | right links (desktop) */}
      {/* On mobile: logo + hamburger */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "flex-start",
          height: "64px",
          padding: "0 3rem",
          overflow: "visible",
        }}
      >
        {/* Left links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.5rem",
            height: "64px",
            paddingBottom: "12px",
          }}
        >
          <button
            onClick={goHome}
            style={{
              color: "#f5f1e8",
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              padding: "0 0.75rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f5f1e8")}
          >
            HOME
          </button>
          <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "12px" }}>
            |
          </span>
          <a
            href="#welcome"
            onClick={(e) => scrollToSection(e, "welcome")}
            style={{
              color: "#f5f1e8",
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              padding: "0 0.75rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f5f1e8")}
          >
            OUR DEFENDERS
          </a>
        </div>

        {/* Centre Logo — overflows below the bar */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            overflow: "visible",
            zIndex: 60,
            padding: "0 2rem",
          }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
            style={{ overflow: "visible", display: "block", cursor: "pointer" }}
          >
            <img
              src="/images/Logo.png"
              alt="Britannia Defender Group"
              style={{
                height: "140px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.95))",
                position: "relative",
                zIndex: 60,
              }}
            />
          </a>
        </div>

        {/* Right links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
            height: "64px",
            paddingBottom: "12px",
          }}
        >
          <Link
            href="/about"
            style={{
              color: "#f5f1e8",
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              padding: "0 0.75rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f5f1e8")}
          >
            ABOUT
          </Link>
          <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "12px" }}>
            |
          </span>
          <a
            href="#philosophy"
            onClick={(e) => scrollToSection(e, "philosophy")}
            style={{
              color: "#f5f1e8",
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              padding: "0 0.75rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f5f1e8")}
          >
            CERTIFICATION
          </a>
          <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "12px" }}>
            |
          </span>
          <Link
            href="/contact"
            style={{
              color: "#f5f1e8",
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              padding: "0 0.75rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f5f1e8")}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile header: logo centered + hamburger */}
      <div
        className="flex md:hidden items-center justify-between h-[70px] px-4"
        style={{ overflow: "visible" }}
      >
        {/* Spacer for centering — must match hamburger button size */}
        <div style={{ width: "44px", minWidth: "44px" }} />

        {/* Mobile logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
          style={{ overflow: "visible", zIndex: 60, cursor: "pointer" }}
        >
          <img
            src="/images/Logo.png"
            alt="Britannia Defender Group"
            style={{
              height: "90px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.9))",
              position: "relative",
              zIndex: 60,
              marginTop: "16px",
            }}
          />
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 flex flex-col items-center justify-center gap-1.5"
          style={{
            width: "44px",
            height: "44px",
            minWidth: "44px",
            minHeight: "44px",
          }}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className="block w-6 h-0.5 bg-cream origin-center"
            style={{
              transition:
                "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
              transform: isMobileMenuOpen
                ? "rotate(45deg) translate(0px, 8px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-cream"
            style={{
              transition:
                "opacity 0.25s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1)",
              opacity: isMobileMenuOpen ? 0 : 1,
              transform: isMobileMenuOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-cream origin-center"
            style={{
              transition:
                "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
              transform: isMobileMenuOpen
                ? "rotate(-45deg) translate(0px, -8px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu — always mounted, animated with max-height */}
      <div
        className="md:hidden absolute left-0 right-0 z-40 overflow-hidden"
        style={{
          top: "70px",
          background:
            'url("/images/texture-dark.jpg") center/cover no-repeat, #1a1005',
          maxHeight: isMobileMenuOpen ? "400px" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
          borderTop: isMobileMenuOpen
            ? "1px solid rgba(212,175,55,0.3)"
            : "none",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition:
            "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
        }}
      >
        <div className="flex flex-col items-center gap-0 py-4">
          <button
            onClick={goHome}
            className="w-full text-center py-3 text-cream hover:text-accent-gold transition-colors duration-300"
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              textDecoration: "none",
              background: "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "1px solid rgba(212,175,55,0.15)",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            HOME
          </button>
          {[
            { label: "OUR DEFENDERS", id: "welcome" },
            { label: "CERTIFICATION", id: "philosophy" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="w-full text-center py-3 text-cream hover:text-accent-gold transition-colors duration-300"
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontFamily: "var(--font-heading)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/about"
            className="w-full text-center py-3 text-cream hover:text-accent-gold transition-colors duration-300"
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(212,175,55,0.15)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="w-full text-center py-3 text-cream hover:text-accent-gold transition-colors duration-300"
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(212,175,55,0.15)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
