"use client";

import { useRef, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // Pre-create and preload audio so it's ready to play instantly
    const audio = new Audio("/Iron%20Defender.mp3.mpeg");
    audio.volume = 0.4;
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const events = [
      "click",
      "keydown",
      "mousedown",
      "pointerup",
      "touchend",
      "touchstart",
      "wheel",
      "scroll",
    ] as const;

    const tryPlay = () => {
      if (startedRef.current) return;
      // Attempt play — only succeeds if the browser considers this a user activation
      audio
        .play()
        .then(() => {
          startedRef.current = true;
          events.forEach((e) => window.removeEventListener(e, tryPlay));
        })
        .catch(() => {
          // Not allowed yet — keep listeners active to retry on next interaction
        });
    };

    events.forEach((e) =>
      window.addEventListener(e, tryPlay, { passive: true }),
    );

    return () => {
      events.forEach((e) => window.removeEventListener(e, tryPlay));
      audio.pause();
    };
  }, []);

  return null;
}
