import { ClipboardList } from 'lucide-react';

const conditions = [
  {
    emoji: '🕑',
    title: 'Check in',
    content: 'De 15 a 18hs. Entrega de llaves y normas de convivencia.',
  },
  {
    emoji: '🕛',
    title: 'Check out',
    content: 'Hasta las 12hs.',
  },
  {
    emoji: '💲',
    title: 'Reserva',
    content: 'Se abona el valor de 1 noche (no reembolsable en caso de cancelación) y el saldo se paga al ingresar. Se solicitará foto del DNI para verificar identidad.',
  },
  {
    emoji: '📝',
    title: 'Ingreso',
    content: 'Al ingresar se toman los datos de los pasajeros, se explican las normas de convivencia y se entrega comprobante del pago del alquiler y del depósito en garantía.',
  },
  {
    emoji: '💲',
    title: 'Depósito en garantía',
    content: '$150.000 (reembolsable si la vivienda se entrega en las mismas condiciones que fue alquilada).',
  },
  {
    emoji: '‼️',
    title: 'Grupos de jóvenes',
    content: 'Reserva del valor de 1 noche (no reembolsable) y saldo al ingresar. Depósito en garantía de $250.000 (reembolsable si se entrega la vivienda en las mismas condiciones).',
  },
  {
    emoji: '🏠',
    title: 'Entrega de la casa',
    content: 'La casa se entrega limpia y ordenada. Cualquier rotura en instalaciones, mobiliario y/o equipamiento implicará la no devolución del depósito en garantía.',
  },
  {
    emoji: '🚫',
    title: 'Personas no declaradas',
    content: 'Prohibido el ingreso de personas no declaradas en la reserva. Se cobrará extra por noche de alojamiento.',
  },
  {
    emoji: '🔑',
    title: 'Extravío de llaves',
    content: 'Tiene costo adicional: $30.000 por cada llave.',
  },
  {
    emoji: '🧹',
    title: 'Servicio de limpieza',
    content: 'Se abona por única vez $25.000 (incluye lavado de ropa de cama, insumos de limpieza y aseo).',
  },
];

const RentalConditions = () => {
  return (
    <section id="condiciones" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <ClipboardList className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Condiciones de Alquiler
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Información importante para tu estadía en Casa LeCin
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{condition.emoji}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {condition.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {condition.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalConditions;
