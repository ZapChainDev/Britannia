export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative baroque-section"
      style={{
        background:
          "url('/images/Welcome%20Background.png') center/cover no-repeat, #1a1208",
        paddingTop: "12rem",
        paddingBottom: "12rem",
        paddingLeft: "clamp(2.5rem, 6vw, 6rem)",
        paddingRight: "clamp(2.5rem, 6vw, 6rem)",
        overflowX: "hidden",
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

      <div
        className="relative w-full max-w-3xl mx-auto text-center border border-accent-gold/20"
        style={{
          paddingTop: "clamp(3rem, 8vw, 8rem)",
          paddingBottom: "clamp(3rem, 8vw, 8rem)",
          paddingLeft: "clamp(1.25rem, 4vw, 6rem)",
          paddingRight: "clamp(1.25rem, 4vw, 6rem)",
          minWidth: 0,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Top ornament */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-accent-gold/60"></div>
          <div className="w-2 h-2 mx-4 bg-accent-gold rotate-45"></div>
          <div className="h-px w-16 bg-accent-gold/60"></div>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12 tracking-[0.15em] font-bold">
          Welcome to Britannia Defender Group
        </h2>

        {/* Body Text */}
        <div
          className="text-cream/80 text-sm md:text-lg leading-loose space-y-4 font-body"
          style={{
            overflowWrap: "break-word",
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          <p>
            At Britannia Defender Group, we specialize in the meticulous
            restoration of Land Rover Defenders. Each vehicle is hand-selected
            and masterfully rebuilt with precision, blending timeless British
            craftsmanship with modern reliability and performance.
          </p>
        </div>

        {/* Italic quote */}
        <p className="text-lg md:text-xl italic text-cream font-semibold mt-16 leading-loose font-body">
          These are not simply vehicles.
          <br />
          They are icons – reborn.
        </p>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-px w-16 bg-accent-gold/60"></div>
          <div className="w-2 h-2 mx-4 bg-accent-gold rotate-45"></div>
          <div className="h-px w-16 bg-accent-gold/60"></div>
        </div>
      </div>
    </section>
  );
}
