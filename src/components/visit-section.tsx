"use client";

import visitData from "@/content/visit.json";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { Helmet } from "react-helmet-async";

export default function VisitSection() {
  const [mapError, setMapError] = useState(false);
  const title = useFadeInOnScroll();
  const grid = useFadeInOnScroll();

  return (
    <>
      <Helmet>
        <title>{visitData.meta.title}</title>
        <meta name="description" content={visitData.meta.description} />
        <meta property="og:title" content={visitData.meta.title} />
        <meta property="og:description" content={visitData.meta.description} />
        <meta property="og:image" content={visitData.meta.image} />
        <meta property="og:type" content="place" />
        <meta
          property="og:url"
          content="https://highfieldroadchristmaslights.com/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={visitData.meta.title} />
        <meta name="twitter:description" content={visitData.meta.description} />
        <meta name="twitter:image" content={visitData.meta.image} />
      </Helmet>

      <section
        id="visit-section"
        className="relative pt-0 pb-10 sm:pb-16 md:pb-20 px-4 christmas-lights overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-20">
          {/* ✨ Title */}
          <div
            ref={title.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-christmas-gold animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {visitData.heading}
              </h2>
              <Sparkles className="w-6 h-6 text-christmas-gold animate-pulse" />
            </div>
            <div className="w-24 h-1 bg-linear-to-r from-christmas-red via-christmas-green to-christmas-gold mx-auto rounded-full" />
          </div>

          {/* 🗺️ Image + Map layout */}
          <div
            ref={grid.ref}
            className={`flex justify-center transition-all duration-700 ${
              grid.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1.6fr] gap-6 items-center justify-items-center md:justify-items-start w-full md:ml-8 lg:ml-16">
              {/* Left side - Visiting Hours */}
              <div className="flex justify-center md:justify-end w-full">
                <div className="rounded-lg overflow-hidden border-2 border-christmas-gold/30 shadow-lg bg-black/20 backdrop-blur-sm mx-auto">
                  <img
                    src={visitData.visitingHoursImage}
                    alt={visitData.visitingHoursAlt}
                    className="max-h-[400px] w-auto object-contain"
                  />
                </div>
              </div>

              {/* Right side - Map */}
              <div className="rounded-lg overflow-hidden border-2 border-christmas-gold/30 shadow-lg h-[400px] w-full max-w-[650px] mx-auto transition-all duration-500">
                {mapError ? (
                  <img
                    src={visitData.fallbackImage}
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    src={visitData.googleMapsUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onError={() => setMapError(true)}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
