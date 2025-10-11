import type { Metadata } from 'next';
import Link from 'next/link';
import { weeklySchedule } from '@/content/schedule';

export const metadata: Metadata = {
  title: 'Programm',
  description:
    'Das aktuelle Programmschema von Radio Volare: Alle Sendungen, Hosts und Sendezeiten im Überblick.'
};

const daysOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

export default function ProgramPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Programmschema</p>
          <h1 className="text-4xl font-semibold text-text">Was läuft bei Radio Volare?</h1>
          <p className="text-lg text-muted">
            Unser Programmschema ist modular aufgebaut und lässt sich flexibel an saisonale Schwerpunkte anpassen.
            Highlights wie die Morgensendung und das Volare Magazine laufen täglich, Spezialformate ergänzen das
            Wochenendprogramm.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {daysOfWeek.map((day) => {
            const slots = weeklySchedule.filter((slot) => slot.days.includes(day));
            if (slots.length === 0) return null;
            return (
              <section key={day} aria-labelledby={`day-${day}`} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 id={`day-${day}`} className="text-2xl font-semibold text-text">
                    {day}
                  </h2>
                  <span className="text-sm text-muted">{slots.length} Sendungen</span>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {slots.map((slot) => (
                    <article key={slot.slug} className="section-card p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{slot.time}</p>
                      <h3 className="mt-3 text-xl font-semibold text-text">{slot.title}</h3>
                      <p className="mt-1 text-sm text-muted">Mit {slot.host}</p>
                      <p className="mt-3 text-sm text-muted">{slot.description}</p>
                      <Link
                        href={`/sendung/${slot.slug}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                      >
                        Mehr zur Sendung
                        <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
