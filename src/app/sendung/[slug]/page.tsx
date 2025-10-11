import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSlotBySlug, weeklySchedule } from '@/content/schedule';

interface SendungPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return weeklySchedule.map((slot) => ({ slug: slot.slug }));
}

export function generateMetadata({ params }: SendungPageProps): Metadata {
  const slot = getSlotBySlug(params.slug);
  if (!slot) {
    return {
      title: 'Sendung nicht gefunden'
    };
  }

  return {
    title: slot.title,
    description: `${slot.title} mit ${slot.host} – ${slot.description}`
  };
}

export default function SendungPage({ params }: SendungPageProps) {
  const slot = getSlotBySlug(params.slug);

  if (!slot) {
    notFound();
  }

  return (
    <div className="bg-surface">
      <article className="mx-auto max-w-4xl px-4 py-16">
        <Link href="/programm" className="text-sm font-semibold text-primary hover:text-accent">
          ← Zurück zum Programmschema
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">Sendungsporträt</p>
        <h1 className="mt-2 text-4xl font-semibold text-text">{slot.title}</h1>
        <p className="mt-4 text-lg text-muted">Mit {slot.host}</p>
        <p className="mt-6 text-base leading-relaxed text-muted">{slot.description}</p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-text">Sendetermine</h2>
          <ul className="flex flex-wrap gap-2 text-sm text-muted">
            {slot.days.map((day) => (
              <li key={day} className="rounded-full border border-primary/40 px-3 py-1">
                {day} · {slot.time}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-text">Hintergrund</h2>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Jede Ausgabe von {slot.title} wird live aus unserem Studio in Lugano gesendet. Wir kombinieren aktuelle
              Themen, inspirierende Interviews und kuratierte Playlists, die die Vielfalt der italienischen Musikszene
              widerspiegeln.
            </p>
            <p>
              Über unsere headless CMS-Anbindung können Redaktionsteams Show-Notizen, Playlists und begleitende Artikel
              in Echtzeit veröffentlichen. So bleiben Hörer:innen auch nach der Sendung auf dem Laufenden.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-text">On-Demand & Archive</h2>
          <p className="text-base leading-relaxed text-muted">
            Wiederholungen und Podcast-Versionen werden automatisch aus unserem RSS-Feed importiert. Über die Radio
            Volare App kannst du Lieblingsfolgen speichern, offline hören und mit Freund:innen teilen.
          </p>
        </section>
      </article>
    </div>
  );
}
