import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pointsOfInterest = [
  {
    category: '🏖️ Playas',
    places: [
      { name: 'Playa Popular (Punta Mogotes)', distance: '2.5 km' },
      { name: 'Complejo Punta Mogotes', distance: '3 km' },
      { name: 'Playa Alfar', distance: '4 km' },
    ],
  },
  {
    category: '🛒 Zonas comerciales',
    places: [
      { name: 'Supermercado Carrefour', distance: '800 m' },
      { name: 'Farmacia', distance: '400 m' },
      { name: 'Panadería/Despensa', distance: '200 m' },
    ],
  },
  {
    category: '📍 Puntos de interés',
    places: [
      { name: 'Terminal de ómnibus', distance: '5 km' },
      { name: 'Centro de Mar del Plata', distance: '6 km' },
      { name: 'Faro Punta Mogotes', distance: '3.5 km' },
    ],
  },
];

const Location = () => {
  const address = 'San Salvador 3734, Mar del Plata, Buenos Aires, Argentina';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const openInMaps = () => {
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ubicación
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ubicados estratégicamente para que puedas disfrutar de todo lo que 
            Mar del Plata tiene para ofrecer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map and Address */}
          <div>
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
              {/* Map */}
              <div className="aspect-[4/3] bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.8!2d-57.55!3d-38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d948ed57b8a7%3A0xa80a92f7d3f3e88!2sSan%20Salvador%203734%2C%20Mar%20del%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Casa LeCin"
                  className="absolute inset-0"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Dirección</p>
                    <p className="text-muted-foreground">San Salvador 3734, Mar del Plata</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    onClick={openInMaps}
                    className="flex-1"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo llegar
                  </Button>
                  <Button
                    variant="outline"
                    onClick={openInMaps}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Points of Interest */}
          <div className="space-y-6">
            {pointsOfInterest.map((category) => (
              <div
                key={category.category}
                className="bg-card rounded-xl p-6 shadow-soft"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.places.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="text-foreground/80">{place.name}</span>
                      <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {place.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
