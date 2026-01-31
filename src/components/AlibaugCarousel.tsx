"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDE_DURATION_MS = 6000;

export default function AlibaugCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % 2);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, [isPaused]);

  return (
    <div className="mt-16 pt-12 border-t border-white/20">
      <div
        className="relative grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl min-h-[520px] lg:min-h-[460px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide 1: Beach image left, Green Vista text right */}
        <div
          className="absolute inset-0 grid lg:grid-cols-2 gap-0 transition-opacity duration-500 ease-out"
          style={{
            opacity: current === 0 ? 1 : 0,
            zIndex: current === 0 ? 1 : 0,
            pointerEvents: current === 0 ? "auto" : "none",
          }}
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] order-2 lg:order-1">
            <Image
              src="/images/alibaug-beach.png"
              alt="Alibaug – Premium Coastal Plots & Second Home Developments"
              fill
              className="object-cover object-top animate-live-image"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-[#FAF8F5] order-1 lg:order-2 min-h-0 overflow-y-auto">
            <h4 className="text-2xl md:text-3xl font-semibold text-[#1B4D3E] mb-6 tracking-tight">
              GREEN VISTA
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Green Vista Realty & Developers is a premium land and development company focused on creating secure, future-ready real estate opportunities across emerging growth corridors. We specialize in acquiring clear-title land, developing well-planned plotted layouts, and offering end-to-end development support enabling our clients to invest, build, and grow with confidence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every Green Vista project is guided by transparency, strategic location selection, and a long-term vision ensuring that each investment delivers lasting value beyond just ownership.
            </p>
          </div>
        </div>

        {/* Slide 2: Connectivity text left, Ferry image right */}
        <div
          className="absolute inset-0 grid lg:grid-cols-2 gap-0 transition-opacity duration-500 ease-out"
          style={{
            opacity: current === 1 ? 1 : 0,
            zIndex: current === 1 ? 1 : 0,
            pointerEvents: current === 1 ? "auto" : "none",
          }}
        >
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-[#FAF8F5] order-2 lg:order-1 min-h-0 overflow-y-auto">
            <h4 className="text-2xl md:text-3xl font-semibold text-[#1B4D3E] mb-6 tracking-tight leading-tight">
              Connectivity Highlights & Infrastructure
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Alibaug&apos;s transformation from a weekend destination to a premium coastal investment hub is driven by rapidly improving connectivity and infrastructure.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-[#C6A664] mt-1">•</span>
                <span>Ferry and water taxi services from South Mumbai to Mandwa Jetty</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A664] mt-1">•</span>
                <span>Ro-Ro connectivity enabling vehicle access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A664] mt-1">•</span>
                <span>Improved road access via Mumbai–Goa Highway</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] order-1 lg:order-2">
            <Image
              src="/images/connectivity-ferry.png"
              alt="Ferry and water taxi services – Alibaug connectivity"
              fill
              className="object-cover object-center animate-live-image"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          <button
            type="button"
            aria-label="Show Green Vista"
            className={`h-2 rounded-full transition-all duration-300 ${
              current === 0 ? "w-8 bg-[#1B4D3E]" : "w-2 bg-[#1B4D3E]/30 hover:bg-[#1B4D3E]/50"
            }`}
            onClick={() => setCurrent(0)}
          />
          <button
            type="button"
            aria-label="Show Connectivity"
            className={`h-2 rounded-full transition-all duration-300 ${
              current === 1 ? "w-8 bg-[#1B4D3E]" : "w-2 bg-[#1B4D3E]/30 hover:bg-[#1B4D3E]/50"
            }`}
            onClick={() => setCurrent(1)}
          />
        </div>
      </div>
    </div>
  );
}
