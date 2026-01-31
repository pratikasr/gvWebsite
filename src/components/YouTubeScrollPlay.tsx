"use client";

import { useEffect, useRef, useId } from "react";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

declare namespace YT {
  interface PlayerOptions {
    videoId: string;
    width?: string | number;
    height?: string | number;
    playerVars?: Record<string, number | string>;
    events?: { onReady?: (event: { target: Player }) => void };
  }
  interface Player {
    playVideo(): void;
    pauseVideo(): void;
    mute(): void;
    unmute(): void;
    destroy(): void;
  }
  const Player: new (elementId: string, options: PlayerOptions) => Player;
}

interface YouTubeScrollPlayProps {
  videoId: string;
  className?: string;
}

export default function YouTubeScrollPlay({ videoId, className = "" }: YouTubeScrollPlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const playerReadyRef = useRef(false);
  const id = useId().replace(/:/g, "-");

  useEffect(() => {
    if (!containerRef.current) return;

    const loadYouTubeAPI = (): Promise<void> => {
      if (window.YT?.Player) return Promise.resolve();
      return new Promise((resolve) => {
        window.onYouTubeIframeAPIReady = () => resolve();
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      });
    };

    let player: YT.Player | null = null;

    loadYouTubeAPI().then(() => {
      if (!containerRef.current || !document.getElementById(id)) return;
      player = new window.YT.Player(id, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 0,
          rel: 0,
          modestbranding: 1,
          mute: 1, // Required for autoplay without user click (browser policy)
        },
        events: {
          onReady: () => {
            playerReadyRef.current = true;
            playerRef.current = player;
            // If video is already in view when player becomes ready, start playing
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
              if (inView && player) {
                try {
                  player.mute?.();
                  player.playVideo?.();
                } catch {
                  // ignore
                }
              }
            }
          },
        },
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const p = playerRef.current;
        if (!p || !playerReadyRef.current) return;

        try {
          if (entry.isIntersecting) {
            p.mute?.(); // Muted autoplay is allowed by browsers without user click
            p.playVideo?.();
          } else {
            p.pauseVideo?.();
          }
        } catch {
          // ignore
        }
      },
      { threshold: 0.5, rootMargin: "0px" }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      playerReadyRef.current = false;
    };
  }, [videoId, id]);

  return (
    <div ref={containerRef} className={`relative w-full aspect-video ${className}`}>
      <div id={id} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
