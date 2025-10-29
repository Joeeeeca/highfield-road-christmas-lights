"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { Helmet } from "react-helmet-async"

const galleryImages = [
  {
    id: 1,
    src: "./images/about-image.jpg",
    alt: "Christmas lights display - front view",
    thumbnail: "./images/about-image.jpg",
  },
  {
    id: 2,
    src: "./images/donation-amount.jpg",
    alt: "Colorful yard decorations",
    thumbnail: "./images/donation-amount.jpg",
  },
  {
    id: 3,
    src: "./images/thumbnail1.jpg",
    alt: "Rooftop light display",
    thumbnail: "./images/thumbnail1.jpg",
  },
  {
    id: 4,
    src: "./images/thumbnail2.jpg",
    alt: "Outdoor Christmas tree",
    thumbnail: "./images/thumbnail2.jpg",
  },
  {
    id: 5,
    src: "./images/thumbnail3.jpg",
    alt: "Illuminated pathway",
    thumbnail: "./images/thumbnail3.jpg",
  },
  {
    id: 6,
    src: "./images/thumbnail4.jpg",
    alt: "Close-up of decorations",
    thumbnail: "./images/thumbnail4.jpg",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const title = useFadeInOnScroll()
  const mobileSlider = useFadeInOnScroll()

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const goToPreviousSlide = () =>
    setCurrentSlide(currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1)
  const goToNextSlide = () =>
    setCurrentSlide(currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1)

  // 🧠 Structured Data (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Highfield Road Christmas Lights Gallery",
    "description":
      "A festive collection of Christmas light display photos from Highfield Road, Isle of Wight.",
    "url": "https://highfieldroadchristmaslights.com/",
    "image": galleryImages.map((img) => ({
      "@type": "ImageObject",
      "contentUrl": img.src.replace("./", "/"),
      "caption": img.alt,
    })),
  }

  return (
    <>
      {/* 🧠 SEO + Social Metadata */}
      <Helmet>
        <title>Gallery | Highfield Road Christmas Lights 🎄</title>
        <meta
          name="description"
          content="Explore the Highfield Road Christmas Lights Gallery — a festive showcase of glowing decorations, colourful displays, and community spirit on the Isle of Wight."
        />
        <meta property="og:title" content="Gallery | Highfield Road Christmas Lights 🎄" />
        <meta
          property="og:description"
          content="Take a look at our sparkling Christmas light display on the Isle of Wight — captured in photos of joy, colour, and community magic!"
        />
        <meta property="og:image" content="/images/about-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://highfieldroadchristmaslights.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Highfield Road Christmas Lights Gallery 🎄" />
        <meta
          name="twitter:description"
          content="See highlights from our annual Christmas light display, raising funds and spreading cheer for local charities."
        />
        <meta name="twitter:image" content="/images/about-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-8 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* 🌟 Header with Sparkles + Animation */}
          <div
            ref={title.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">Photo Gallery</h2>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-christmas-gold animate-pulse" />
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 text-lg">Take a peek at our festive display!</p>
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
                  src={galleryImages[currentSlide].thumbnail || "/placeholder.svg"}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-red-500 w-6" : "bg-gray-500"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <p className="text-center text-gray-400 text-sm mt-2">
                {currentSlide + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* 🖼️ Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {galleryImages.map((image, index) => {
              const fade = useFadeInOnScroll()
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
                    className="group relative overflow-hidden rounded-lg border-2 border-red-500/30 hover:border-green-500/50 
                      transition-all duration-300 aspect-[4/3] bg-slate-800/50 backdrop-blur-sm w-full"
                  >
                    <img
                      src={image.thumbnail || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold">Click to view</span>
                    </div>
                  </button>
                </div>
              )
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
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 text-white hover:text-green-500 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <div
                className="max-w-5xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="text-gray-400 text-center text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 text-white hover:text-green-500 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
