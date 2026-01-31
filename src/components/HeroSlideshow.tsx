"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDES = [
  "/hero-slides/slide-5.png",
  "/hero-slides/slide-2.png",
  "/hero-slides/slide-4.png",
];

const DURATION_MS = 5500;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, DURATION_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            className={`object-cover animate-hero-zoom ${
              i === 1 ? "object-top" : i === 2 ? "object-bottom" : ""
            }`}
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}
      {/* Dark overlay so hero text stays readable */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,51,41,0.75) 0%, rgba(27,77,62,0.85) 40%, rgba(15,51,41,0.9) 100%)",
        }}
      />
      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-[#C6A664]"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
