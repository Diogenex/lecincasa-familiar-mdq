import { 
  Users, Bed, Bath, TreePine, Wifi, Tv, Utensils, Flame, 
  WashingMachine, PawPrint, BedDouble, Gamepad2, Car, Store 
} from 'lucide-react';

const features = [
  { icon: Users, label: 'Capacidad', value: 'Hasta 5 personas' },
  { icon: Bed, label: 'Dormitorios', value: '2 dormitorios' },
  { icon: Bath, label: 'Baño', value: '1 baño completo' },
  { icon: TreePine, label: 'Exterior', value: 'Patio delantero y trasero' },
];

const amenities = [
  { 
    icon: BedDouble, 
    label: '2 Dormitorios', 
    description: '1 matrimonial + 1 cama individual y cucheta' 
  },
  { 
    icon: Bath, 
    label: 'Baño completo', 
    description: 'Con ducha (toallas no incluidas)' 
  },
  { 
    icon: Wifi, 
    label: 'WiFi gratuito', 
    description: 'Internet en todos los ambientes' 
  },
  { 
    icon: Tv, 
    label: 'TV LED Smart', 
    description: 'Entretenimiento para toda la familia' 
  },
  { 
    icon: Utensils, 
    label: 'Cocina equipada', 
    description: 'Cocina a gas, vajilla completa, microondas, pava eléctrica, heladera con freezer' 
  },
  { 
    icon: Flame, 
    label: 'Termotanque', 
    description: 'A gas de alta recuperación' 
  },
  { 
    icon: WashingMachine, 
    label: 'Lavarropas', 
    description: 'Disponible para uso' 
  },
  { 
    icon: TreePine, 
    label: 'Patio delantero y trasero', 
    description: 'Espacio al aire libre' 
  },
  { 
    icon: PawPrint, 
    label: 'Pet friendly', 
    description: 'Mascotas pequeñas y medianas bienvenidas (con aviso previo)' 
  },
  { 
    icon: Bed, 
    label: 'Ropa blanca incluida', 
    description: 'Sábanas, acolchados y mantas provistas' 
  },
];

const extras = [
  { icon: Gamepad2, label: 'Juegos de mesa' },
  { icon: Car, label: 'Cochera descubierta (consultar disponibilidad)' },
  { icon: Store, label: 'Comercios cercanos' },
];

const Accommodation = () => {
  return (
    <section id="comodidades" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comodidades y Equipamiento
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un espacio cómodo y funcional, diseñado para que disfrutes cada momento 
            de tu estadía en Mar del Plata junto a tu familia.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{feature.label}</p>
                  <p className="text-lg font-semibold text-foreground">{feature.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft mb-10">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Servicios incluidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">{amenity.label}</span>
                  <span className="text-sm text-muted-foreground">{amenity.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Extras
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {extras.map((extra) => (
              <div
                key={extra.label}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/30"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <extra.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-foreground/80">{extra.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;