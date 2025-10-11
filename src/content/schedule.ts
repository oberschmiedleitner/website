export interface ProgramSlot {
  time: string;
  title: string;
  host: string;
  description: string;
  slug: string;
  days: string[];
}

export const weeklySchedule: ProgramSlot[] = [
  {
    time: '06:00 – 09:00',
    title: 'Mattinata Italiana',
    host: 'Giulia Bianchi',
    description: 'Der perfekte Start in den Tag mit Klassikern und neuen Stimmen aus Italien.',
    slug: 'mattinata-italiana',
    days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']
  },
  {
    time: '09:00 – 12:00',
    title: 'Volare Magazine',
    host: 'Luca Ferretti',
    description: 'Interviews, Kultur und Geschichten aus der italienischen Community in der Schweiz.',
    slug: 'volare-magazine',
    days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag']
  },
  {
    time: '12:00 – 14:00',
    title: 'Pranzo con Musica',
    host: 'Sofia Conti',
    description: 'Mittagszeit mit aktuellen Chart-Hits und kulinarischen Tipps.',
    slug: 'pranzo-con-musica',
    days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']
  },
  {
    time: '17:00 – 19:00',
    title: 'Drive Time Lugano',
    host: 'Marco Rossi',
    description: 'Das Update für den Feierabend mit Verkehr, Wetter und bester Musik.',
    slug: 'drive-time-lugano',
    days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag']
  },
  {
    time: '19:00 – 21:00',
    title: 'Notte Jazz',
    host: 'Chiara Leone',
    description: 'Zweimal pro Woche entführen wir euch in die Welt des italienischen Jazz.',
    slug: 'notte-jazz',
    days: ['Dienstag', 'Donnerstag']
  },
  {
    time: '10:00 – 12:00',
    title: 'Dolce Domenica',
    host: 'Paolo & Marta',
    description: 'Der entspannte Sonntagvormittag mit Familiengeschichten und Lieblingssongs.',
    slug: 'dolce-domenica',
    days: ['Sonntag']
  }
];

export const featuredDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

export function getSlotBySlug(slug: string) {
  return weeklySchedule.find((slot) => slot.slug === slug);
}
