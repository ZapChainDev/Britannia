"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolume, setShowVolume] = useState(false);
  // null = not decided yet, true = allowed, false = declined
  const [musicAllowed, setMusicAllowed] = useState<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    setMusicAllowed(true);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const declineMusic = () => {
    setMusicAllowed(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/Iron%20Defender.mp3.mpeg" loop />

      {/* ── Music permission prompt ── */}
      {musicAllowed === null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(10,7,2,0.82)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              background: "rgba(20,14,4,0.97)",
              border: "1px solid rgba(212,175,55,0.55)",
              borderRadius: "6px",
              padding: "40px 48px",
              textAlign: "center",
              maxWidth: "360px",
              width: "90%",
              boxShadow: "0 8px 48px rgba(0,0,0,0.7)",
            }}
          >
            {/* Musical note icon */}
            <div style={{ marginBottom: "16px" }}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#d4af37"
                style={{ margin: "0 auto" }}
              >
                <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" />
              </svg>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "#d4af37",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                marginBottom: "8px",
              }}
            >
              Experience the Sound
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: "rgba(212,175,55,0.7)",
                fontSize: "15px",
                letterSpacing: "0.04em",
                marginBottom: "28px",
                lineHeight: 1.6,
              }}
            >
              Allow background music to enhance your visit?
            </p>

            <div
              style={{ display: "flex", gap: "12px", justifyContent: "center" }}
            >
              <button
                onClick={startMusic}
                style={{
                  background: "#d4af37",
                  color: "#140e04",
                  border: "none",
                  borderRadius: "3px",
                  padding: "10px 28px",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Allow
              </button>
              <button
                onClick={declineMusic}
                style={{
                  background: "transparent",
                  color: "rgba(212,175,55,0.6)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "3px",
                  padding: "10px 28px",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating player (shown after decision) ── */}
      {musicAllowed !== null && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(20,14,4,0.88)",
            border: "1px solid rgba(212,175,55,0.5)",
            borderRadius: "40px",
            padding: "8px 16px 8px 10px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          {/* Play / Pause button */}
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause music" : "Play music"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#d4af37",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {isPlaying ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="5" y="3" width="4" height="18" rx="1" />
                <rect x="15" y="3" width="4" height="18" rx="1" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>

          {/* Track label */}
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "rgba(212,175,55,0.85)",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            Iron Defender
          </span>

          {/* Volume toggle */}
          <button
            onClick={() => setShowVolume((v) => !v)}
            title="Volume"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(212,175,55,0.7)",
              display: "flex",
              alignItems: "center",
              padding: "0 2px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0013 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>

          {/* Volume slider */}
          {showVolume && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setVolume(val);
                if (audioRef.current) audioRef.current.volume = val;
              }}
              style={{
                width: "70px",
                accentColor: "#d4af37",
                cursor: "pointer",
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
