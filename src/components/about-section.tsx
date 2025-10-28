import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { Gift, Star, Sparkles } from "lucide-react"
import { FairyLights } from "./fairy-lights"
import { Helmet } from "react-helmet-async"

export default function AboutSection() {
   <Helmet>
  {/* 🏷️ Core SEO */}
  <title>About | Thomas’ Christmas Lights Display 🎄</title>
  <meta
    name="description"
    content="Learn how Thomas’ Christmas Lights Display began — a family tradition bringing festive joy and raising money for Isle of Wight charities."
  />

  {/* 📣 Open Graph (for Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="About | Thomas’ Christmas Lights Display 🎄" />
  <meta
    property="og:description"
    content="Discover the story behind Thomas’ Christmas Lights Display — a heartwarming family project supporting Isle of Wight charities."
  />
  <meta property="og:image" content="/images/about-image.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/#about" />

  {/* 🐦 Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About | Thomas’ Christmas Lights Display 🎄" />
  <meta
    name="twitter:description"
    content="Meet the family behind Thomas’ Christmas Lights Display and the causes we support on the Isle of Wight."
  />
  <meta name="twitter:image" content="/images/about-image.jpg" />

  {/* 🧩 Schema.org JSON-LD (Charitable Organization + Event) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CharitableOrganization",
      name: "Thomas’ Christmas Lights Display",
      url: "https://yourdomain.com/",
      logo: "/images/og-image.webp",
      sameAs: [
        "https://www.facebook.com/yourpage",
        "https://www.justgiving.com/your-campaign"
      ],
      description:
        "A family-run Christmas light display on the Isle of Wight raising money for local charities.",
      founder: {
        "@type": "Person",
        name: "Thomas",
        description: "Creator of the annual Christmas Lights Display.",
      },
      event: {
        "@type": "Event",
        name: "Thomas’ Christmas Lights Display",
        startDate: "2025-12-01",
        endDate: "2026-01-01",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Isle of Wight, UK",
        },
      },
    })}
  </script>
</Helmet>

  const title = useFadeInOnScroll()
  const card1 = useFadeInOnScroll()
  const card2 = useFadeInOnScroll()
  const card3 = useFadeInOnScroll()

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:pt-8 pb-6 christmas-lights text-glow">
      {/* ✨ Fairy Lights Divider (top of section) */}
      <div className="absolute -top-8 left-0 w-full z-20">
        <FairyLights />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* ✨ Section Title */}
        <div className="text-center mb-12">
{/* ✨ Section Title */}
<div
  ref={title.ref}
  className={`text-center mb-12 transition-all duration-700 ${
    title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
  }`}
>
  <div className="flex items-center justify-center gap-3 mt-8 mb-4">
    <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
    <h2 className="text-4xl font-bold text-white">About Our Display</h2>
    <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
  </div>

  {/* ✨ Animated underline */}
  <div
    className={`w-24 h-1 mx-auto rounded-full bg-linear-to-r from-christmas-red via-christmas-green to-christmas-gold transition-all duration-700 delay-150 ${
      title.isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
    }`}
  />
</div>

        </div>

        {/* ✨ About Cards */}
        <div className="space-y-8 text-lg leading-relaxed">
          {/* 🧑 About Me */}
          <div
            ref={card1.ref}
            className={`rounded-lg p-8 border border-christmas-red/50 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,80,80,0.3)] transition-all duration-700 ${
              card1.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-christmas-red/20 p-3 rounded-full">
                <Star className="w-6 h-6 text-christmas-red" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Our Story</h3>
                <p className="text-slate-300">
                  Our Christmas light display combines a love of Christmas with a desire to make people smile.
                  It all began in 2020 when our son, Thomas, was just eight years old and decided to decorate our
                  home with a handful of lights. What started as a small display quickly grew into a family tradition
                  that brings festive joy to our community every year.
                </p>
              </div>
            </div>
          </div>

          {/* ❤️ Why We Do This */}
          <div
            ref={card2.ref}
            className={`rounded-lg p-8 border border-christmas-green/50 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,150,0.25)] transition-all duration-700 ${
              card2.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-christmas-green/20 p-3 rounded-full">
                <Gift className="w-6 h-6 text-christmas-green" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Why We Do This</h3>
                <p className="text-slate-300 mb-4">
                  In 2023, he invited visitors to make charity donations and raised £251.44 for Mountbatten Isle of Wight,
                  a charity that has supported our family and many others in times of need.
                </p>
                <p className="text-slate-300">
                  In 2024, Thomas raised £200.31 for RSPCA Isle of Wight, to thank them for caring for our kittens rescued
                  from Lynbottom Household Waste Recycling Centre in 2022.
                </p>
              </div>
            </div>
          </div>

          {/* 🎶 The Display */}
          <div
            ref={card3.ref}
            className={`rounded-lg p-8 border border-christmas-gold/50 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,150,0.25)] transition-all duration-700 ${
              card3.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-christmas-gold/20 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-christmas-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">The Display</h3>
                <p className="text-slate-300">
                  Each year, Thomas has built up the display to be bigger and better — not only to spread Christmas cheer but also to give back.
                </p>
                <p className="text-slate-300">
                  We look forward to welcoming visitors again this year and raising even more for charity — but above all, we just love making people smile!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
