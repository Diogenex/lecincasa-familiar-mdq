import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoLecin from '@/assets/logo-lecin.jpg';
import { useState, useEffect } from 'react';

// Import gallery images for background
import frente from '@/assets/gallery/frente.jpg';
import living from '@/assets/gallery/living.jpg';
import comedor from '@/assets/gallery/comedor.jpg';
import dormitorio1 from '@/assets/gallery/dormitorio1.jpg';
import patio from '@/assets/gallery/patio.jpg';

const backgroundImages = [frente, living, comedor, dormitorio1, patio];

const WHATSAPP_NUMBER = '5492235959372';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAccommodation = () => {
    const element = document.querySelector('#comodidades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! Estoy consultando por Casa LeCin. ¿Podrían darme información sobre disponibilidad y precios?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background images with fade transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <img 
            src={image} 
            alt=""
            className="w-full h-full object-cover object-center brightness-110 contrast-[0.95] saturate-[1.05]"
          />
        </div>
      ))}
      
      {/* Gradient overlay for text legibility - softer than pure black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <img 
              src={logoLecin} 
              alt="Casa LeCin - Complejo de viviendas" 
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-4 rounded-lg shadow-lg"
            />
            <p className="text-lg md:text-xl text-white/90 tracking-wide">
              Alquiler temporario en Mar del Plata
            </p>
          </div>

          {/* Welcome text */}
          <div className="mb-10">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Bienvenidos a Casa LeCin, un espacio pensado para disfrutar en familia. 
              Somos parte de un complejo familiar donde cada detalle está cuidado 
              para que tu estadía sea especial.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={openWhatsApp}
              className="min-w-[200px]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Consultar disponibilidad
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={scrollToAccommodation}
              className="text-white border-white/30 hover:bg-white/20"
            >
              Conocer más
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAccommodation}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
