import { useState, useEffect } from 'react';
import { Home, Sofa, Image, MapPin, CalendarDays } from 'lucide-react';
import logoLecin from '@/assets/logo-lecin.jpg';

const navLinks = [
  { href: '#inicio', label: 'Inicio', icon: Home },
  { href: '#comodidades', label: 'Comodidades', icon: Sofa },
  { href: '#galeria', label: 'Galería', icon: Image },
  { href: '#ubicacion', label: 'Ubicación', icon: MapPin },
  { href: '#disponibilidad', label: 'Disponibilidad', icon: CalendarDays },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isScrolled) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft py-2 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#inicio')}
          className="flex items-center group"
        >
          <img 
            src={logoLecin} 
            alt="Casa LeCin - Complejo de viviendas" 
            className="h-10 w-auto"
          />
        </button>

        {/* Navigation with Icons - Always visible */}
        <nav className="flex items-center gap-1 sm:gap-4">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 px-2 py-1 text-foreground/80 hover:text-primary transition-colors"
                title={link.label}
              >
                <IconComponent size={20} />
                <span className="text-[10px] sm:text-sm font-medium hidden sm:inline">{link.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;