export interface ArticleTeaser {
  title: string;
  description: string;
  category: string;
  readingTime: string;
  href: string;
}

export const edicolaArticles: ArticleTeaser[] = [
  {
    title: 'Festival di Sanremo – Stimmen aus dem Backstage',
    description: 'Unsere Korrespondentin berichtet live vom roten Teppich und spricht mit den Stars.',
    category: 'Musik',
    readingTime: '6 Min',
    href: '#'
  },
  {
    title: 'Lugano incontra Milano',
    description: 'Eine Brücke zwischen zwei Metropolen: Wie Kulturprojekte die Regionen verbinden.',
    category: 'Kultur',
    readingTime: '4 Min',
    href: '#'
  },
  {
    title: 'Community Spotlight: Il Circolo Italiano di Zurigo',
    description: 'Wie ein lokaler Verein Traditionen bewahrt und neue Generationen begeistert.',
    category: 'Community',
    readingTime: '5 Min',
    href: '#'
  }
];
