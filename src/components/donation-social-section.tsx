"use client"

import { useState, useEffect } from "react"
import { Heart, Facebook, Sparkles } from "lucide-react"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { FairyLights } from "./fairy-lights"
import { Helmet } from "react-helmet-async"


export default function DonationSocialSection() {
  <>
  <Helmet>
    {/* 🏷️ Core SEO */}
    <title>Donate & Stay Connected | Thomas’ Christmas Lights Display 🎄</title>
    <meta
      name="description"
      content="Support Thomas’ Christmas Lights Display by donating to local Isle of Wight charities and following our updates on Facebook."
    />

    {/* 📣 Open Graph (Facebook / Meta) */}
    <meta property="og:title" content="Donate & Stay Connected | Thomas’ Christmas Lights Display 🎄" />
    <meta
      property="og:description"
      content="Every donation makes a difference. Support our family-run Christmas Lights Display and help local Isle of Wight charities."
    />
    <meta property="og:image" content="/images/donation-amount.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com/#donate" />

    {/* 🐦 Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Donate & Stay Connected | Thomas’ Christmas Lights Display 🎄" />
    <meta
      name="twitter:description"
      content="Help us spread joy and raise funds for Isle of Wight charities through our annual Christmas Lights Display."
    />
    <meta name="twitter:image" content="/images/donation-amount.jpg" />

    {/* 💖 Structured Data — DonateAction + CharitableOrganization */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "DonateAction",
        name: "Donate to Thomas’ Christmas Lights Display",
        description:
          "Support Thomas’ Christmas Lights Display by donating to Isle of Wight charities via JustGiving.",
        actionStatus: "https://schema.org/ActiveActionStatus",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.justgiving.com/your-campaign",
          actionPlatform: [
            "https://www.justgiving.com",
            "https://www.facebook.com",
            "https://www.instagram.com",
          ],
        },
        recipient: {
          "@type": "CharitableOrganization",
          name: "Thomas’ Christmas Lights Display",
          url: "https://yourdomain.com/",
          sameAs: [
            "https://www.facebook.com/yourpage",
            "https://www.justgiving.com/your-campaign",
          ],
          description:
            "A family-run Christmas light display raising funds for Isle of Wight charities through community donations.",
          location: {
            "@type": "Place",
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

  {/* existing donation + facebook section JSX here */}
</>

  const [justGivingError, setJustGivingError] = useState(false)
  const [facebookLoaded, setFacebookLoaded] = useState(false)

  const justGivingUrl = "https://www.justgiving.com/your-campaign"

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widgets.sociablekit.com/facebook-page-posts/widget.js"
    script.defer = true
    script.onload = () => setFacebookLoaded(true)
    script.onerror = () => console.error("⚠️ Failed to load SociableKIT script")
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const title = useFadeInOnScroll()
  const donationCard = useFadeInOnScroll()
  const facebookCard = useFadeInOnScroll()

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* ✨ Fairy Lights Divider */}
      <div className="absolute top-0 left-0 w-full z-10">
        <FairyLights />
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        {/* 🌟 Header */}
        <div
          ref={title.ref}
          className={`flex flex-col items-center transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Stay Connected</h2>
            <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-christmas-red via-christmas-green to-christmas-gold mx-auto mb-12 rounded-full" />
        </div>

        {/* 💞 Two-column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ❤️ JustGiving Donation Widget */}
          <div
            ref={donationCard.ref}
            className={`rounded-2xl p-6 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-800/60 backdrop-blur-lg shadow-[0_0_20px_rgba(255,0,0,0.15)] border border-red-500/30 transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,80,80,0.3)] hover:scale-[1.02] ${
              donationCard.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-br from-red-500/40 to-red-800/40">
                <Heart className="w-6 h-6 text-christmas-red" />
              </div>
              <h3 className="text-2xl font-bold text-white">Support Our Cause</h3>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Every donation helps make a difference. Support our charity through JustGiving.
            </p>

            <div className="relative w-full h-[400px] bg-slate-900/50 rounded-xl overflow-hidden border border-red-500/30">
              {!justGivingError ? (
                <iframe
                  src={`${justGivingUrl}/widget`}
                  className="w-full h-full"
                  title="JustGiving Donation Widget"
                  onError={() => setJustGivingError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <Heart className="w-16 h-16 text-christmas-red mx-auto mb-4 animate-pulse" />
                  <h4 className="text-xl font-semibold text-white mb-2">Make a Donation</h4>
                  <p className="text-slate-400 mb-6">
                    Visit our JustGiving page to support our charity
                  </p>
                  <a
                    href={justGivingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-christmas-red hover:bg-christmas-red/80 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition"
                  >
                    Donate on JustGiving
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* 💙 Facebook Updates */}
          <div
          
            ref={facebookCard.ref}
            className={`rounded-2xl p-6 bg-linear-to-br from-slate-800/60 via-slate-900/60 to-slate-800/60 backdrop-blur-lg shadow-[0_0_20px_rgba(0,150,255,0.15)] border border-blue-500/30 transition-all duration-700 hover:shadow-[0_0_30px_rgba(100,200,255,0.3)] hover:scale-[1.02] delay-200 ${
              facebookCard.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-800/40">
                <Facebook className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Latest Updates</h3>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Follow our Facebook page for the latest news and photos from the display.
            </p>

            <div className="relative w-full min-h-[400px] bg-slate-900/50 rounded-xl overflow-hidden border border-blue-500/30 flex items-center justify-center">
              {!facebookLoaded && (
                <p className="text-slate-400 text-center animate-pulse">
                  Loading Facebook posts...
                </p>
              )}
              <div
                className="sk-ww-facebook-page-posts w-full"
                data-embed-id="25615336"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
