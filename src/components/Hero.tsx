import { ArrowDown, CalendarDays } from 'lucide-react';
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

  const scrollToAvailability = () => {
    const element = document.querySelector('#disponibilidad');
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
            className="w-full h-full object-contain md:object-cover object-center brightness-110 contrast-[0.95] saturate-[1.05]"
            style={{ backgroundColor: 'hsl(25 20% 12%)' }}
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
              size="xl"
              onClick={scrollToAvailability}
              className="min-w-[200px] bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <CalendarDays className="w-5 h-5" />
              Ver disponibilidad
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={scrollToAccommodation}
              className="text-white border-white/50 bg-white/10 hover:bg-white/25"
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
