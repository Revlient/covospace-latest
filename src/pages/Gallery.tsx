import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuotePanel } from '../components/ui/QuotePanelProvider';
import { cmsApi } from '../lib/api';
import { GalleryImage as CMSGalleryImage } from '../types/cms';

// Icon components
const GalleryIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

// Gallery data structure
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const categories = ['All', 'Private Offices', 'Coworking Spaces', 'Conference Rooms', 'Common Areas'];

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { openQuote } = useQuotePanel();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await cmsApi.getGallery();
        // Map API response to component structure
        const mappedImages: GalleryItem[] = data.map((img: CMSGalleryImage) => ({
          id: img.id,
          src: img.imageUrl,
          alt: img.title,
          category: img.category
        }));
        setGalleryImages(mappedImages);
      } catch (error) {
        console.error('Failed to fetch gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759083000/b16da8c5-83c7-49aa-a157-725f02ca5753.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <GalleryIcon />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-lime-400">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our bold workspaces built to inspire you. From private offices to collaborative
              coworking areas, discover the perfect environment for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-lime-600 text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-600"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
                    onClick={() => openLightbox(index)}
                    onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${image.alt}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <p className="text-white font-semibold text-base sm:text-lg">{image.alt}</p>
                        <p className="text-lime-400 text-sm mt-1">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No images found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-lime-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Our Workspace?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule a tour to see our facilities in person and find the perfect workspace solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openQuote}
              className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-lime-600 text-lime-600 font-semibold py-3 px-8 rounded-lg hover:bg-lime-50 transition-colors duration-300"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 sm:py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-lime-600 hover:text-lime-700 font-semibold text-base sm:text-lg transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-lime-400 transition-colors duration-200 z-10 p-2"
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white hover:text-lime-400 transition-colors duration-200 z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeftIcon />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] mx-auto px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">{filteredImages[currentImageIndex]?.alt}</p>
              <p className="text-lime-400 text-sm mt-1">{filteredImages[currentImageIndex]?.category}</p>
              <p className="text-gray-400 text-sm mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white hover:text-lime-400 transition-colors duration-200 z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </main>
  );
}
