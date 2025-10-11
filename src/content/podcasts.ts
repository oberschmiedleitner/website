export interface PodcastEntry {
  title: string;
  description: string;
  duration: string;
  slug: string;
  category: 'Musik' | 'Kultur' | 'Community';
}

export const podcasts: PodcastEntry[] = [
  {
    title: 'Cucina di Casa',
    description: 'Authentische Rezepte aus allen Regionen Italiens und die Geschichten dahinter.',
    duration: '28:32',
    slug: 'cucina-di-casa',
    category: 'Community'
  },
  {
    title: 'Nuova Musica',
    description: 'Frische Releases, Interviews mit italienischen Künstler:innen und Studiogäste.',
    duration: '35:04',
    slug: 'nuova-musica',
    category: 'Musik'
  },
  {
    title: 'Storie di Migrazione',
    description: 'Porträts von Italiener:innen, die in der Schweiz eine neue Heimat gefunden haben.',
    duration: '42:18',
    slug: 'storie-di-migrazione',
    category: 'Community'
  }
];
