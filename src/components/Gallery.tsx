import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import entradaImg from '@/assets/gallery/entrada.jpg';
import patioImg from '@/assets/gallery/patio.jpg';
import comedorImg from '@/assets/gallery/comedor.jpg';
import livingImg from '@/assets/gallery/living.jpg';
import frenteImg from '@/assets/gallery/frente.jpg';
import cocina1Img from '@/assets/gallery/cocina1.jpg';
import cocina2Img from '@/assets/gallery/cocina2.jpg';
import lavaderoImg from '@/assets/gallery/lavadero.jpg';
import cocina3Img from '@/assets/gallery/cocina3.jpg';

const galleryImages = [
  { src: frenteImg, alt: 'Frente de la casa', caption: 'Frente de Casa LeCin' },
  { src: entradaImg, alt: 'Entrada', caption: 'Entrada al complejo' },
  { src: patioImg, alt: 'Patio interno', caption: 'Patio interno' },
  { src: livingImg, alt: 'Living comedor', caption: 'Living comedor con TV' },
  { src: comedorImg, alt: 'Comedor', caption: 'Comedor' },
  { src: cocina1Img, alt: 'Cocina', caption: 'Cocina equipada' },
  { src: cocina2Img, alt: 'Cocina vista', caption: 'Vista de la cocina' },
  { src: cocina3Img, alt: 'Cocina completa', caption: 'Cocina completa' },
  { src: lavaderoImg, alt: 'Lavadero', caption: 'Lavadero' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

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

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Galería de fotos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conocé cada rincón de Casa LeCin antes de tu visita
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-soft hover:shadow-warm transition-all duration-300"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="absolute bottom-4 left-4 right-4 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {image.caption}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 shadow-soft flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 shadow-soft flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-primary w-6'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2"
            aria-label="Siguiente"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-primary-foreground/80 mt-4">
              {galleryImages[selectedImage].caption}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImage
                    ? 'bg-primary-foreground w-6'
                    : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
