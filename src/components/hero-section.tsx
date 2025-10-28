"use client"

import Button from "@/components/ui/button"
import { Snowfall } from "@/components/snowfall"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { Helmet } from "react-helmet-async"


export default function HeroSection() {
  <Helmet>
    <title>Thomas’ Christmas Lights Display 🎄 | Isle of Wight Charity Event</title>
    <meta
      name="description"
      content="Experience the magic of Thomas’ Christmas Lights Display — a family tradition spreading joy and raising funds for Isle of Wight charities."
    />
    <meta
      property="og:title"
      content="Thomas’ Christmas Lights Display 🎄 | Isle of Wight Charity Event"
    />
    <meta
      property="og:description"
      content="Visit our festive light display and support local Isle of Wight charities this Christmas season!"
    />
    <meta property="og:image" content="/images/og-image.webp" />
    <meta property="og:url" content="https://yourdomain.com/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Thomas’ Christmas Lights Display 🎄" />
    <meta
      name="twitter:description"
      content="Spreading festive joy and supporting Isle of Wight charities every Christmas."
    />
    <meta name="twitter:image" content="/images/og-image.webp" />
  </Helmet>
  const title = useFadeInOnScroll()
  const paragraph = useFadeInOnScroll()
  const buttons = useFadeInOnScroll()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 🌌 Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/main-image.jpeg')",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-[2px]" />
      </div>

      {/* ❄️ Snowfall Layer */}
      <Snowfall />

      {/* ✨ Animated Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1
          ref={title.ref}
          className={`mb-6 text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-6xl transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          Come See Our Christmas Lights!
        </h1>

        <p
          ref={paragraph.ref}
          className={`mb-8 text-pretty text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl transition-all duration-700 delay-200 ${
            paragraph.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          A festive display created with love to spread holiday cheer. If you'd like, donations welcome for charity!
        </p>

        <div
          ref={buttons.ref}
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            buttons.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <Button
            size="lg"
            className="bg-primary text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 cursor-pointer"
          >
            Visit Us
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 cursor-pointer"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* 🌫️ Bottom Fade — smooth transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-[#0b1221] pointer-events-none" />
    </section>
  )
}
