import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Lerne das Team von Radio Volare kennen: Mission, Werte und Zukunftsvision.'
};

const values = [
  {
    title: 'Community',
    description: 'Wir geben der italienischsprachigen Community eine Stimme – lokal, digital und on air.'
  },
  {
    title: 'Qualität',
    description: 'Redaktionelle Inhalte entstehen in Kooperation mit Journalist:innen aus der Schweiz und Italien.'
  },
  {
    title: 'Innovation',
    description: 'Technologie trifft Kultur: Wir entwickeln neue Formate für Streaming, Podcasts und Events.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Über Radio Volare</p>
          <h1 className="text-4xl font-semibold text-text">Passione italiana, made in Svizzera</h1>
          <p className="text-lg text-muted">
            Radio Volare wurde 2015 gegründet, um italienische Kultur und Lebensfreude in die ganze Schweiz zu bringen.
            Unser Team arbeitet zwischen Lugano, Zürich und Milano – remote-first und mehrsprachig.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="section-card p-6">
              <h2 className="text-xl font-semibold text-text">{value.title}</h2>
              <p className="mt-3 text-sm text-muted">{value.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-text">Team & Produktion</h2>
          <p className="text-base text-muted">
            Wir arbeiten mit einem hybriden Produktionsmodell: Live aus dem Studio in Lugano, mobile Sets für Events in
            der ganzen Schweiz und Remote-Interviews über Studiolink. Dank Cloud-Automation können wir Sendungen
            vorproduzieren und dennoch live mit der Community interagieren.
          </p>
        </section>
      </div>
    </div>
  );
}
