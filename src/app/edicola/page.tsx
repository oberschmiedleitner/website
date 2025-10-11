import type { Metadata } from 'next';
import Link from 'next/link';
import { edicolaArticles } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Edicola',
  description: 'Das Edicola-Magazin von Radio Volare: Reportagen, Interviews und Newsletter.'
};

export default function EdicolaPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Edicola</p>
          <h1 className="text-4xl font-semibold text-text">Mehr als Radio</h1>
          <p className="text-lg text-muted">
            Geschichten, Interviews und Newsletter – das Edicola-Magazin schlägt die Brücke zwischen Italien und der
            Schweiz. Inhalte können über das CMS geplant und automatisiert ausgespielt werden.
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {edicolaArticles.map((article) => (
            <article key={article.title} className="section-card flex flex-col gap-4 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{article.category}</p>
              <h2 className="text-2xl font-semibold text-text">{article.title}</h2>
              <p className="flex-1 text-base text-muted">{article.description}</p>
              <div className="flex items-center justify-between text-sm text-muted">
                <span>{article.readingTime} Lesezeit</span>
                <span className="font-semibold text-primary">Demnächst im Magazin</span>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-text">Newsletter</h2>
          <p className="text-base text-muted">
            Leser:innen können sich für themenspezifische Newsletter anmelden. Double-Opt-In, DSGVO-konforme Speicherung
            und Performance-Tracking sind integriert.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
          >
            Redaktion kontaktieren
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
