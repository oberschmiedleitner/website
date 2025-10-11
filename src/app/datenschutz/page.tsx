import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Radio Volare: Verarbeitung personenbezogener Daten und Tracking.'
};

export default function DatenschutzPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Datenschutz</p>
          <h1 className="text-4xl font-semibold text-text">Deine Daten, unsere Verantwortung</h1>
          <p className="text-lg text-muted">
            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der schweizerischen und europäischen
            Datenschutzgesetze (DSG/DSGVO).
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Verantwortliche Stelle</h2>
          <p>Radio Volare SA, Via della Musica 12, 6900 Lugano, Schweiz</p>
        </section>

        <section className="space-y-3 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Verarbeitungszwecke</h2>
          <ul className="space-y-2">
            <li>Bereitstellung des Livestreams und der On-Demand-Inhalte</li>
            <li>Nutzung von Podcasts, Newsletter und Community-Angeboten</li>
            <li>Analyse der Reichweite mittels DSGVO-konformer Tools (z. B. Matomo, Fathom)</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Cookies & Tracking</h2>
          <p>
            Wir setzen wenn möglich cookiefreie Analysetools ein. Werden Cookies benötigt, erfolgt vorab eine aktive
            Einwilligung über ein Consent-Management-Tool. Alle Daten werden auf Servern in der EU oder Schweiz
            verarbeitet.
          </p>
        </section>

        <section className="space-y-3 text-sm text-muted">
          <h2 className="text-base font-semibold text-text">Kontakt</h2>
          <p>
            Für Auskunftsersuchen oder Löschanfragen wende dich an datenschutz@radiovolare.com. Wir beantworten Anfragen
            innerhalb von 30 Tagen.
          </p>
        </section>
      </div>
    </div>
  );
}
