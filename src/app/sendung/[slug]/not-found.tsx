import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Fehler 404</p>
        <h1 className="mt-4 text-4xl font-semibold text-text">Diese Sendung gibt es (noch) nicht.</h1>
        <p className="mt-4 text-base text-muted">
          Vielleicht wurde die Sendung archiviert oder befindet sich gerade in der Vorbereitung. Schau dir unser
          Programmschema an oder kontaktiere uns bei Fragen.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/programm" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accent">
            Zum Programm
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
