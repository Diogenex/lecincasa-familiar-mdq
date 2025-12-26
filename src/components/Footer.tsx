import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-1">LeCin</h3>
            <p className="text-primary-foreground/60 text-sm">
              Alquiler temporario en Mar del Plata
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#inicio"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Inicio
            </a>
            <a
              href="#alojamiento"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Alojamiento
            </a>
            <a
              href="#galeria"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Galería
            </a>
            <a
              href="#ubicacion"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Ubicación
            </a>
            <a
              href="#disponibilidad"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Disponibilidad
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-primary-foreground/60">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary" fill="currentColor" /> para tu familia
            </p>
            <p className="mt-1">© {currentYear} LeCin. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
