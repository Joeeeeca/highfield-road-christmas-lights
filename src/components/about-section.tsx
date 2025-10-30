import aboutData from "@/content/about.json";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { FairyLights } from "./fairy-lights";
import { Helmet } from "react-helmet-async";
import * as Icons from "lucide-react";

export default function AboutSection() {
  const title = useFadeInOnScroll();
  const cards = aboutData.cards.map(() => useFadeInOnScroll());

  return (
    <section
      id="about-section"
      className="relative py-16 px-4 sm:px-6 lg:pt-8 pb-6 christmas-lights text-glow"
    >
      <Helmet>
        {/* 🏷️ Core SEO */}
        <title>{aboutData.meta.title}</title>
        <meta name="description" content={aboutData.meta.description} />
        <meta property="og:title" content={aboutData.meta.title} />
        <meta property="og:description" content={aboutData.meta.description} />
        <meta property="og:image" content={aboutData.meta.image} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://highfieldroadchristmaslights.com/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={aboutData.meta.title} />
        <meta name="twitter:description" content={aboutData.meta.description} />
        <meta name="twitter:image" content={aboutData.meta.image} />
      </Helmet>

      {/* ✨ Fairy Lights Divider */}
      <div className="absolute -top-8 left-0 w-full z-20">
        <FairyLights />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* ✨ Section Title */}
        <div
          ref={title.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mt-8 mb-4">
            <Icons.Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />
            <h2 className="text-4xl font-bold text-white">
              {aboutData.title}
            </h2>
            <Icons.Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />
          </div>

          <div
            className={`w-24 h-1 mx-auto rounded-full bg-linear-to-r from-christmas-red via-christmas-green to-christmas-gold transition-all duration-700 delay-150 ${
              title.isVisible
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* ✨ About Cards */}
        <div className="space-y-8 text-lg leading-relaxed">
          {aboutData.cards.map((card, index) => {
  const LucideIcons = Icons as unknown as Record<string, React.ComponentType<any>>;
  const CardIcon = LucideIcons[card.icon];

            const fade = cards[index];
            return (
              <div
                key={index}
                ref={fade.ref}
                className={`rounded-lg p-8 border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,150,0.25)] transition-all duration-700 ${
                  fade.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {CardIcon && <CardIcon className="w-6 h-6 text-christmas-gold" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {card.heading}
                    </h3>
                    {card.text.map((paragraph: string, i: number) => (
                      <p key={i} className="text-slate-300 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
