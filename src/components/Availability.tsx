import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CalendarDays, Info } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { format, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

// Example blocked dates - replace with actual data
const blockedDates = [
  { from: new Date(2024, 11, 20), to: new Date(2024, 11, 28) },
  { from: new Date(2025, 0, 5), to: new Date(2025, 0, 15) },
];

const Availability = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const isDateBlocked = (date: Date) => {
    return blockedDates.some(
      (range) => date >= range.from && date <= range.to
    );
  };

  const handleSelect = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      // Check if any date in the range is blocked
      let currentDate = range.from;
      while (currentDate <= range.to) {
        if (isDateBlocked(currentDate)) {
          // Don't allow selection if it includes blocked dates
          return;
        }
        currentDate = addDays(currentDate, 1);
      }
    }
    setSelectedRange(range);
  };

  const openWhatsAppWithDates = () => {
    let message = '¡Hola! Me interesa reservar el alojamiento LeCin.';
    
    if (selectedRange?.from && selectedRange?.to) {
      const fromDate = format(selectedRange.from, "d 'de' MMMM yyyy", { locale: es });
      const toDate = format(selectedRange.to, "d 'de' MMMM yyyy", { locale: es });
      message = `¡Hola! Me interesa reservar el alojamiento LeCin para las siguientes fechas:\n\n📅 Check-in: ${fromDate}\n📅 Check-out: ${toDate}\n\n¿Está disponible?`;
    }
    
    window.open(`https://wa.me/5492235000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="disponibilidad" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Disponibilidad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Consultá las fechas disponibles y hacé tu reserva directamente por WhatsApp
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10">
            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/20 border border-primary" />
                <span className="text-muted-foreground">Seleccionado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-destructive/20 border border-destructive" />
                <span className="text-muted-foreground">No disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-card border border-border" />
                <span className="text-muted-foreground">Disponible</span>
              </div>
            </div>

            {/* Calendar */}
            <div className="flex justify-center mb-8">
              <Calendar
                mode="range"
                selected={selectedRange}
                onSelect={handleSelect}
                numberOfMonths={2}
                disabled={(date) => date < new Date() || isDateBlocked(date)}
                modifiers={{
                  blocked: (date) => isDateBlocked(date),
                }}
                modifiersStyles={{
                  blocked: {
                    backgroundColor: 'hsl(var(--destructive) / 0.15)',
                    color: 'hsl(var(--destructive))',
                    textDecoration: 'line-through',
                  },
                }}
                locale={es}
                className="rounded-lg border-0 pointer-events-auto"
              />
            </div>

            {/* Selected Dates Display */}
            {selectedRange?.from && (
              <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-foreground mb-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span className="font-medium">Fechas seleccionadas:</span>
                </div>
                <p className="text-foreground/80 ml-7">
                  {format(selectedRange.from, "d 'de' MMMM yyyy", { locale: es })}
                  {selectedRange.to && (
                    <> → {format(selectedRange.to, "d 'de' MMMM yyyy", { locale: es })}</>
                  )}
                </p>
              </div>
            )}

            {/* Info Note */}
            <div className="flex items-start gap-3 text-sm text-muted-foreground mb-6 p-4 bg-muted/50 rounded-lg">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                Este calendario es solo informativo. La confirmación de disponibilidad 
                y reserva se realiza a través de WhatsApp.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center" id="reservar">
              <Button
                variant="whatsapp"
                size="xl"
                onClick={openWhatsAppWithDates}
                className="w-full sm:w-auto min-w-[280px]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {selectedRange?.from && selectedRange?.to
                  ? 'Consultar estas fechas'
                  : 'Consultar disponibilidad'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
