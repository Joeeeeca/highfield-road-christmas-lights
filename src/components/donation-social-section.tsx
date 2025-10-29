"use client"

import { useState, useEffect } from "react"
import { Heart, Facebook, Sparkles } from "lucide-react"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { FairyLights } from "./fairy-lights"
import { Helmet } from "react-helmet-async"

export default function DonationSocialSection() {
  const [donationError, setDonationError] = useState(false)
  const [facebookLoaded, setFacebookLoaded] = useState(false)

  const goFundMeUrl =
    "https://www.gofundme.com/f/vectis-corps-of-drums-marching-band?lang=en_GB"

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

  // 🖼️ fallback images
  const fallbackDonationImage = "./images/donation-amount.jpg"
  const fallbackFacebookImage = "./images/facebook-preview.png"

  return (
    <>
      <Helmet>
        <title>Highfield Road Christmas Lights 🎄</title>
        <meta
          name="description"
          content="Support Highfield Road Christmas Lights by donating to our GoFundMe campaign and following our updates on Facebook."
        />
        <meta property="og:title" content="Donate & Stay Connected | Highfield Road Christmas Lights 🎄" />
<meta property="og:description" content="Support Highfield Road Christmas Lights by donating or following our updates on Facebook." />
<meta property="og:image" content="/images/donation-amount.jpg" />
<meta property="og:url" content="https://highfieldroadchristmaslights.com/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Donate & Stay Connected | Highfield Road Christmas Lights 🎄" />
<meta name="twitter:description" content="Donate and stay connected with our community Christmas lights display." />
<meta name="twitter:image" content="/images/facebook-preview.png" />

      </Helmet>

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
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-center">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">Stay Connected</h2>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />
            </div>

            <div className="w-24 h-1 bg-linear-to-r from-christmas-red via-christmas-green to-christmas-gold mx-auto mb-12 rounded-full" />
          </div>

          {/* 💞 Two-column Layout */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 justify-items-center md:justify-items-stretch w-full max-w-[1300px]">
              
              {/* ❤️ GoFundMe Donation Widget */}
              <div
                ref={donationCard.ref}
                className={`w-full max-w-[500px] mx-auto rounded-2xl p-6 bg-linear-to-br  
                from-slate-800/60 via-slate-900/60 to-slate-800/60 backdrop-blur-lg 
                shadow-[0_0_20px_rgba(255,0,0,0.15)] border border-red-500/30 
                transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,80,80,0.3)] 
                ${donationCard.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-linear-to-br from-red-500/40 to-red-800/40">
                    <Heart className="w-6 h-6 text-christmas-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Support Our Cause</h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  Every donation helps make a difference. Support our charity through our
                  official GoFundMe campaign.
                </p>

                <div className="relative w-full h-[400px] bg-slate-900/50 rounded-xl overflow-hidden border border-red-500/30 flex items-center justify-center">
                 {donationError ? (
  <a
    href={goFundMeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src={fallbackDonationImage}
      alt="GoFundMe Donation Fallback"
      className="w-full h-full object-cover rounded-xl hover:opacity-90 transition"
    />
  </a>
) : (
  <iframe
    src={goFundMeUrl}
    className="w-full h-full"
    title="GoFundMe Donation Widget"
    onError={() => setDonationError(true)}
  />
)}
                </div>
              </div>

              {/* 💙 Facebook Updates */}
              <div
                ref={facebookCard.ref}
                className={`w-full max-w-[1200px] mx-auto rounded-2xl p-6 bg-linear-to-br 
                from-slate-800/60 via-slate-900/60 to-slate-800/60 backdrop-blur-lg 
                shadow-[0_0_20px_rgba(0,150,255,0.15)] border border-blue-500/30 
                transition-all duration-700 hover:shadow-[0_0_30px_rgba(100,200,255,0.3)] delay-200 
                ${facebookCard.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"}`}
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
                  {!facebookLoaded ? (
  <a
    href="https://www.facebook.com/HighfieldRoadChristmasLights"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src={fallbackFacebookImage}
      alt="Facebook Updates Fallback"
      className="w-full h-full object-cover rounded-xl hover:opacity-90 transition"
    />
  </a>
) : (
  <div className="w-full max-h-[500px] overflow-y-auto rounded-md">
    <div
      className="sk-ww-facebook-page-posts w-full"
      data-embed-id="25615336"
    ></div>
  </div>
)}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
