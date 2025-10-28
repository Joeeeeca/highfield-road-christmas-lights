"use client"

import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll"
import { Helmet } from "react-helmet-async"


const galleryImages = [
  { id: 1, src: "/images/thumbnail1.jpg", alt: "Christmas lights display - front view", thumbnail: "/images/thumbnail1.jpg" },
  { id: 2, src: "/images/thumbnail2.jpg", alt: "Colorful yard decorations", thumbnail: "/images/thumbnail2.jpg" },
  { id: 3, src: "/images/thumbnail3.jpg", alt: "Rooftop light display", thumbnail: "/images/thumbnail3.jpg" },
  { id: 4, src: "/images/thumbnail4.jpg", alt: "Outdoor Christmas tree", thumbnail: "/images/thumbnail4.jpg" },
  { id: 5, src: "/images/donation-amount.jpg", alt: "Illuminated pathway", thumbnail: "/images/donation-amount.jpg" },
  { id: 6, src: "/images/about-image.jpg", alt: "Close-up of decorations", thumbnail: "/images/about-image.jpg" },
]

export default function GallerySection() {
   <Helmet>
    {/* 🔍 Section-level metadata */}
    <meta
      name="description"
      content="Browse our festive photo gallery featuring Thomas’ Christmas Lights Display — a joyful family project raising money for local Isle of Wight charities."
    />
    <meta
      property="og:title"
      content="Photo Gallery | Thomas’ Christmas Lights Display 🎄"
    />
    <meta
      property="og:description"
      content="Take a peek at our Christmas lights display and see the magic that brings smiles to the community."
    />
    <meta property="og:image" content="/images/thumbnail1.jpg" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/images/thumbnail1.jpg" />

    {/* Optional structured data for the gallery section */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: "Thomas’ Christmas Lights Display Gallery",
        description:
          "A collection of festive photos from our family’s Christmas light display on the Isle of Wight.",
        image: [
          "/images/thumbnail1.jpg",
          "/images/thumbnail2.jpg",
          "/images/thumbnail3.jpg",
          "/images/thumbnail4.jpg",
        ],
      })}
    </script>
  </Helmet>
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isOpening, setIsOpening] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  // Scroll animations
  const title = useFadeInOnScroll()
  const gallery = useFadeInOnScroll()

  // 🖱️ Lightbox Controls
  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setIsOpening(true)
    setTimeout(() => setIsOpening(false), 400)
  }

  const closeLightbox = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedImage(null)
      setIsClosing(false)
    }, 400)
  }

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

  // 🎹 Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 🌟 Title */}
        <div
          ref={title.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            title.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
  <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
  <h2 className="text-4xl md:text-5xl font-bold text-white">Photo Gallery</h2>
  <Sparkles className="w-8 h-8 text-christmas-gold animate-pulse" />
</div>
          <div className="w-24 h-1 bg-linear-to-r from-red-500 via-green-500 to-red-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg">Take a peek at our festive display!</p>
        </div>

        {/* 🖼️ Gallery Grid */}
        <div
          ref={gallery.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-200 ${
            gallery.isVisible ? "fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg border-2 border-red-500/30 hover:border-green-500/50 transition-all duration-300 aspect-4/3 bg-slate-800/50 backdrop-blur-sm"
            >
              <img
                src={image.thumbnail || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 cursor-pointer">
                <span className="text-white font-semibold">Click to view</span>
              </div>
            </button>
          ))}
        </div>

        {/* 💫 Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all ${
              isClosing ? "animate-fadeOut" : "animate-fadeIn"
            }`}
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* ❌ Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

              {/* ⬅️ Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 text-white hover:text-green-500 transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              {/* 🖼️ Image */}
              <div
                className={`max-w-5xl max-h-[90vh] relative z-10 ${
                  isOpening
                    ? "animate-zoomIn"
                    : isClosing
                    ? "animate-zoomOut"
                    : "opacity-100 scale-100"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-lg">{galleryImages[selectedImage].alt}</p>
                <p className="text-gray-400 text-center text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>

              {/* ➡️ Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 text-white hover:text-green-500 transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
