"use client"

import { MapPin, Clock, Navigation, Sparkles } from "lucide-react"
import { useState } from "react"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { Helmet } from "react-helmet-async"


export default function VisitSection() {
  <>
  <Helmet>
    {/* 🏷️ Core SEO */}
    <title>Visit Us | Thomas’ Christmas Lights Display 🎄</title>
    <meta
      name="description"
      content="Plan your visit to Thomas’ Christmas Lights Display on the Isle of Wight. Find directions, parking info, and see our festive lights in person!"
    />

    {/* 📣 Open Graph (Facebook, etc.) */}
    <meta property="og:title" content="Visit Us | Thomas’ Christmas Lights Display 🎄" />
    <meta
      property="og:description"
      content="Come see Thomas’ Christmas Lights Display — a festive community event on the Isle of Wight supporting local charities."
    />
    <meta property="og:image" content="/images/map-preview.jpg" />
    <meta property="og:url" content="https://yourdomain.com/#visit" />
    <meta property="og:type" content="place" />

    {/* 🐦 Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Visit Us | Thomas’ Christmas Lights Display 🎄" />
    <meta
      name="twitter:description"
      content="Get directions and visit Thomas’ Christmas Lights Display — spreading joy and raising funds for Isle of Wight charities."
    />
    <meta name="twitter:image" content="/images/map-preview.jpg" />

    {/* 🗺️ Structured Data (Location + Event) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Thomas’ Christmas Lights Display",
        image: "/images/map-preview.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Isle of Wight",
          addressCountry: "UK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.6938, // replace with your actual coordinates
          longitude: -1.3047,
        },
        hasMap: "https://yourdomain.com/#visit",
        event: {
          "@type": "Event",
          name: "Thomas’ Christmas Lights Display",
          description:
            "An annual family-run Christmas light display raising money for Isle of Wight charities.",
          startDate: "2025-12-01",
          endDate: "2026-01-01",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Thomas’ Christmas Lights Display",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Isle of Wight",
              addressCountry: "UK",
            },
          },
        },
      })}
    </script>
  </Helmet>

  {/* existing visit section JSX here */}
</>

  const [mapError, setMapError] = useState(false)

  const address = "Highfield Road, Cowes"
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.28936298611!2d-1.3109951!3d50.751667999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48747ca6f74e9673%3A0xbb6d2ce0440d27c7!2sHighfield%20Rd%2C%20Cowes!5e0!3m2!1sen!2suk!4v1761574654081!5m2!1sen!2suk"
  const staticMapUrl = "/christmas-house-neighborhood-map.jpg"

  // ✨ Scroll animations
  const title = useFadeInOnScroll()
  const map = useFadeInOnScroll()
  const card1 = useFadeInOnScroll()
  const card2 = useFadeInOnScroll()

  return (
    <section className="relative py-20 pt-6 pb-4 christmas-lights">
      <div className="max-w-6xl mx-auto">
        {/* ✨ Section Title */}
        <div
          ref={title.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white text-glow {
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}">Visit Us</h2>
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-christmas-red via-christmas-green to-christmas-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 🗺️ Map Section */}
          <div
            ref={map.ref}
            className={`festive-card bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl transition-all duration-700 ${
              map.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            {!mapError ? (
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapError(true)}
                className="w-full"
              />
            ) : (
              <img
                src={staticMapUrl || "/placeholder.svg"}
                alt="Map to Christmas Lights Display"
                className="w-full h-[400px] object-cover"
              />
            )}
          </div>

          {/* 📍 Details Section */}
          <div className="space-y-6">
            {/* Address Card */}
            <div
              ref={card1.ref}
              className={`rounded-lg p-6 border border-christmas-red/50 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,80,80,0.3)] transition-all duration-700 ${
                card1.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-christmas-red/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-christmas-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300 leading-relaxed">{address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 hover:text-christmas-red/80 transition-colors font-semibold"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              ref={card2.ref}
              className={`rounded-lg p-6 border border-christmas-green/50 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,150,0.25)] transition-all duration-700 delay-200 ${
                card2.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-christmas-green/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-christmas-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Viewing Hours</h3>

                  <div className="grid grid-cols-2 gap-y-1.5 text-slate-300">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-right">6:00 PM – 9:00 PM</span>

                    <span className="font-medium">Saturday:</span>
                    <span className="text-right">6:00 PM – 10:00 PM</span>

                    <span className="font-medium">Sunday:</span>
                    <span className="text-right text-slate-500 italic">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
