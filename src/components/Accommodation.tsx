import { Users, Bed, Bath, Wifi, Snowflake, Utensils, Tv, ShowerHead, Coffee, TreePine } from 'lucide-react';

const features = [
  { icon: Users, label: 'Capacidad', value: 'Hasta 5 personas' },
  { icon: Bed, label: 'Dormitorios', value: '2 dormitorios' },
  { icon: Bath, label: 'Baño', value: '1 baño (ducha)' },
  { icon: TreePine, label: 'Exterior', value: 'Patio interno' },
];

const amenities = [
  { icon: Wifi, label: 'WiFi de alta velocidad' },
  { icon: Snowflake, label: 'Aire acondicionado frío/calor' },
  { icon: Tv, label: 'Smart TV con streaming' },
  { icon: Utensils, label: 'Cocina equipada' },
  { icon: Coffee, label: 'Cafetera y utensilios' },
  { icon: ShowerHead, label: 'Agua caliente' },
];

const Accommodation = () => {
  return (
    <section id="alojamiento" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            El Alojamiento
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
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Servicios incluidos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-foreground/80">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
