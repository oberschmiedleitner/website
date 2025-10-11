import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Radio Volare: Verantwortliche, Adresse und rechtliche Hinweise.'
};

export default function ImpressumPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Impressum</p>
          <h1 className="text-4xl font-semibold text-text">Radio Volare</h1>
          <p className="text-lg text-muted">Angaben gemäß schweizerischem Radio- und Fernsehgesetz (RTVG).</p>
        </header>

        <section className="space-y-2 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Verantwortlich für den Inhalt</h2>
          <p>Radio Volare SA<br />Via della Musica 12<br />6900 Lugano</p>
          <p>
            Vertreten durch den Verwaltungsrat<br />
            Telefon: +41 91 123 45 67<br />
            E-Mail: info@radiovolare.com
          </p>
        </section>

        <section className="space-y-2 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Umsatzsteuer-Identifikationsnummer</h2>
          <p>CHE-123.456.789 MWST</p>
        </section>

        <section className="space-y-2 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Haftung für Inhalte</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
            den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </div>
  );
}
