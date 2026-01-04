import { useState, useEffect } from 'react';
import { isSameDay, parseISO, startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';

const CALENDAR_ID = 'a98435e579b0be97df0f1794c5d0195f1382eb3937619fca29c8e8bdf8efc8de@group.calendar.google.com';

// Public iCal feed URL
const ICAL_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`;

// CORS proxy for fetching the iCal feed
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

interface CalendarEvent {
  start: Date;
  end: Date;
}

export const useGoogleCalendarAvailability = () => {
  const [busyDates, setBusyDates] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${CORS_PROXY}${encodeURIComponent(ICAL_URL)}`);
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la disponibilidad');
        }

        const icsData = await response.text();
        const events = parseICS(icsData);
        
        // Convert events to individual busy dates
        const allBusyDates: Date[] = [];
        
        events.forEach(event => {
          const days = eachDayOfInterval({
            start: startOfDay(event.start),
            end: endOfDay(event.end)
          });
          allBusyDates.push(...days);
        });

        // Remove duplicates
        const uniqueDates = allBusyDates.filter((date, index, self) =>
          index === self.findIndex(d => isSameDay(d, date))
        );

        setBusyDates(uniqueDates);
      } catch (err) {
        console.error('Error fetching calendar:', err);
        setError('No se pudo cargar la disponibilidad');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvailability();
  }, []);

  return { busyDates, isLoading, error };
};

// Simple ICS parser to extract VEVENT start/end dates
function parseICS(icsData: string): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const lines = icsData.split(/\r?\n/);
  
  let inEvent = false;
  let currentEvent: Partial<CalendarEvent> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      inEvent = true;
      currentEvent = {};
    } else if (line === 'END:VEVENT') {
      inEvent = false;
      if (currentEvent.start && currentEvent.end) {
        events.push(currentEvent as CalendarEvent);
      } else if (currentEvent.start) {
        // If no end date, assume it's a single day event
        events.push({
          start: currentEvent.start,
          end: currentEvent.start
        });
      }
    } else if (inEvent) {
      if (line.startsWith('DTSTART')) {
        currentEvent.start = parseICSDate(line);
      } else if (line.startsWith('DTEND')) {
        currentEvent.end = parseICSDate(line);
      }
    }
  }

  return events;
}

// Parse ICS date format (YYYYMMDD or YYYYMMDDTHHMMSSZ)
function parseICSDate(line: string): Date | undefined {
  const match = line.match(/(\d{8})(T(\d{6})Z?)?/);
  if (!match) return undefined;

  const dateStr = match[1];
  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1;
  const day = parseInt(dateStr.substring(6, 8));

  if (match[3]) {
    // Has time component
    const timeStr = match[3];
    const hour = parseInt(timeStr.substring(0, 2));
    const minute = parseInt(timeStr.substring(2, 4));
    const second = parseInt(timeStr.substring(4, 6));
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }

  return new Date(year, month, day);
}

export default useGoogleCalendarAvailability;
