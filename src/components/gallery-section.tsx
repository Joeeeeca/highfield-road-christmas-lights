"use client";

import galleryData from "@/content/gallery.json";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";
import { Helmet } from "react-helmet-async";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const title = useFadeInOnScroll();
  const mobileSlider = useFadeInOnScroll();

  const galleryImages = galleryData.images;

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const goToPreviousSlide = () =>
    setCurrentSlide(currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1);
  const goToNextSlide = () =>
    setCurrentSlide(currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1);

  // 🧠 Structured Data (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: galleryData.heading,
    description: galleryData.meta.description,
    url: "https://highfieldroadchristmaslights.com/",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.src,
      caption: img.alt,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{galleryData.meta.title}</title>
        <meta name="description" content={galleryData.meta.description} />
        <meta property="og:title" content={galleryData.meta.title} />
        <meta property="og:description" content={galleryData.meta.description} />
        <meta property="og:image" content={galleryData.meta.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://highfieldroadchristmaslights.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={galleryData.meta.title} />
        <meta name="twitter:description" content={galleryData.meta.description} />
        <meta name="twitter:image" content={galleryData.meta.image} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <section className="py-8 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* 🌟 Header */}
          <div
            ref={title.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-christmas-gold animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">{galleryData.heading}</h2>
              <Sparkles className="w-6 h-6 text-christmas-gold animate-pulse" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 text-lg">{galleryData.subtext}</p>
          </div>

          {/* 📱 Mobile Slider */}
          <div
            ref={mobileSlider.ref}
            className={`md:hidden mb-8 transition-all duration-700 ${
              mobileSlider.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              <button
                onClick={() => openLightbox(currentSlide)}
                className="w-full aspect-[4/3] rounded-lg border-2 border-red-500/30 overflow-hidden bg-slate-800/50 backdrop-blur-sm"
              >
                <img
                  src={galleryImages[currentSlide].thumbnail}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Arrows */}
              <button
                onClick={goToPreviousSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 🖼️ Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {galleryImages.map((image, index) => {
              const fade = useFadeInOnScroll();
              return (
                <div
                  key={image.id}
                  ref={fade.ref}
                  className={`transition-all duration-700 ${
                    fade.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative overflow-hidden rounded-lg border-2 border-red-500/30 hover:border-green-500/50 transition-all duration-300 aspect-[4/3] bg-slate-800/50 backdrop-blur-sm w-full"
                  >
                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold">Click to view</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* 💡 Lightbox */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-green-500 transition-colors z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-green-500 transition-colors z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
