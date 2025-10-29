"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { Helmet } from "react-helmet-async"

export default function VisitSection() {
  const [mapError, setMapError] = useState(false)

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.28936298611!2d-1.3109951!3d50.751667999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48747ca6f74e9673%3A0xbb6d2ce0440d27c7!2sHighfield%20Rd%2C%20Cowes!5e0!3m2!1sen!2suk!4v1761574654081!5m2!1sen!2suk"

  const staticMapUrl = "./images/location-image.jpeg"

  // scroll animations
  const title = useFadeInOnScroll()
  const grid = useFadeInOnScroll()

  return (
    <>
      <Helmet>
        <title>Visit Us | Highfield Road Christmas Lights 🎄</title>
        <meta
          name="description"
          content="Plan your visit to Highfield Road Christmas Lights Display on the Isle of Wight. Find directions, parking info, and see our festive lights in person!"
        />
        <meta property="og:title" content="Visit Us | Highfield Road Christmas Lights 🎄" />
        <meta
          property="og:description"
          content="Come see Highfield Road Christmas Lights — a festive community event on the Isle of Wight supporting local charities."
        />
        <meta property="og:image" content="/images/location-image.jpg" />
        <meta property="og:type" content="place" />
        <meta property="og:url" content="https://highfieldroadchristmaslights.com/" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Visit Us | Highfield Road Christmas Lights 🎄" />
<meta name="twitter:description" content="Plan your visit to see our Christmas Lights on the Isle of Wight and support local charities!" />
<meta name="twitter:image" content="/images/mlocation-image.jpg" />

      </Helmet>

      <section id="visit-section" className="relative pt-0 pb-10 sm:pb-16 md:pb-20 px-4 christmas-lights overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-20">
          {/* ✨ Title */}
          <div
            ref={title.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />

              <h2 className="text-3xl md:text-5xl font-bold text-white">Visit Us</h2>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />

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
    
    {/* Left side - Display Times Image */}
    <div className="flex justify-center md:justify-end w-full">
      <div className="rounded-lg overflow-hidden border-2 border-christmas-gold/30 shadow-lg bg-black/20 backdrop-blur-sm mx-auto">
        <img
          src="./images/visiting-hours.jpg"
          alt="Display Times - December 1–20: 5:00–8:30 PM, December 21–31: 4:30–8:30 PM"
          className="max-h-[400px] w-auto object-contain"
        />
      </div>
    </div>

    {/* Right side - Map */}
    <div className="rounded-lg overflow-hidden border-2 border-christmas-gold/30 shadow-lg h-[400px] w-full max-w-[650px] mx-auto transition-all duration-500">
      {mapError ? (
        <img
          src={staticMapUrl || "/placeholder.svg"}
          alt="Location Map"
          className="w-full h-full object-cover"
        />
      ) : (
        <iframe
          src={googleMapsUrl}
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
  )
}
