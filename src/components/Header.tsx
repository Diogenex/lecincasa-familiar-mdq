import { useState, useEffect } from 'react';
import { Menu, X, Home, BedDouble, Image, MapPin, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoLecin from '@/assets/logo-lecin.jpg';

const WHATSAPP_NUMBER = '5492235959372';

const navLinks = [
  { href: '#inicio', label: 'Inicio', icon: Home },
  { href: '#alojamiento', label: 'Alojamiento', icon: BedDouble },
  { href: '#galeria', label: 'Galería', icon: Image },
  { href: '#ubicacion', label: 'Ubicación', icon: MapPin },
  { href: '#disponibilidad', label: 'Disponibilidad', icon: CalendarDays },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! Estoy consultando por Casa LeCin. ¿Podrían darme información sobre disponibilidad y precios?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  // Hide header completely when not scrolled
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
            className="h-10 md:h-12 w-auto"
          />
        </button>

        {/* Desktop Navigation with Icons */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                title={link.label}
              >
                <IconComponent size={18} />
                <span className="hidden lg:inline">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="whatsapp"
            size="sm"
            onClick={openWhatsApp}
          >
            Consultar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-left text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors flex items-center gap-3"
                >
                  <IconComponent size={20} />
                  {link.label}
                </button>
              );
            })}
            <Button
              variant="whatsapp"
              className="mt-2"
              onClick={openWhatsApp}
            >
              Consultar por WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
