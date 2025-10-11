import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Nimm Kontakt mit Radio Volare auf: Redaktion, Partnerschaften, Musikpromotion.'
};

export default function KontaktPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Kontakt</p>
          <h1 className="text-4xl font-semibold text-text">Schreib uns</h1>
          <p className="text-lg text-muted">
            Wir freuen uns über Feedback, Musikvorschläge oder Kooperationsanfragen. Nutze das Formular oder schreibe an
            <a href="mailto:info@radiovolare.com" className="text-primary hover:text-accent"> info@radiovolare.com</a>.
          </p>
        </header>

        <form className="mt-10 space-y-6" aria-label="Kontaktformular">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold text-text">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-text">
              E-Mail
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label htmlFor="contact-topic" className="block text-sm font-semibold text-text">
              Anliegen
            </label>
            <select
              id="contact-topic"
              name="topic"
              className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              defaultValue="Partnerschaft"
            >
              <option>Partnerschaft</option>
              <option>Redaktion</option>
              <option>Musikpromotion</option>
              <option>Technik</option>
              <option>Community</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-text">
              Nachricht
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-accent"
          >
            Nachricht senden
          </button>
        </form>

        <section className="mt-12 space-y-4 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Postanschrift</h2>
          <address className="not-italic">
            Radio Volare<br />
            Via della Musica 12<br />
            6900 Lugano
          </address>
        </section>
      </div>
    </div>
  );
}
