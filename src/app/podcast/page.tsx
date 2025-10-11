import type { Metadata } from 'next';
import Link from 'next/link';
import { podcasts } from '@/content/podcasts';

export const metadata: Metadata = {
  title: 'Podcasts',
  description: 'Alle Podcasts von Radio Volare – zum Streamen, Abonnieren und Teilen.'
};

export default function PodcastPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Podcasts</p>
          <h1 className="text-4xl font-semibold text-text">Italienisch auf Abruf</h1>
          <p className="text-lg text-muted">
            Von Kulinarik über Kultur bis zu Community-Storys: Unsere Podcasts liefern dir spannende Inhalte im Abo.
            Über unseren RSS-Import landen neue Episoden automatisch im Web und in deiner Lieblings-App.
          </p>
        </header>

        <div className="mt-12 grid gap-8">
          {podcasts.map((podcast) => (
            <article key={podcast.slug} className="section-card p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{podcast.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-text">{podcast.title}</h2>
                  <p className="mt-3 max-w-2xl text-base text-muted">{podcast.description}</p>
                </div>
                <div className="flex flex-col items-start gap-3 text-sm text-muted md:items-end">
                  <span>Laufzeit der letzten Episode: {podcast.duration}</span>
                  <Link href="/live" className="font-semibold text-primary hover:text-accent">
                    Live anhören
                  </Link>
                  <Link href="/kontakt" className="font-semibold text-primary hover:text-accent">
                    Feedback senden
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
