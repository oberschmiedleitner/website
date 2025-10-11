import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Empfang',
  description: 'Alle Empfangswege von Radio Volare: Webplayer, Apps, Smart Speaker und DAB+.'
};

const receptionOptions = [
  {
    title: 'Web & Desktop',
    description:
      'Schneller Zugriff über die responsiven Webplayer. Unterstützt Tastaturnavigation, Screenreader und Dark Mode.',
    details: ['Browser: Chrome, Firefox, Safari, Edge', 'Streaming: AAC/HLS, Fallback MP3', 'PWA: Offline-Modus inklusive']
  },
  {
    title: 'Mobile & Apps',
    description: 'Progressive Web App mit Homescreen-Install, Push-Mitteilungen und Podcast-Downloads.',
    details: ['iOS & Android optimiert', 'Offline-Playlisten', 'Analytics via Matomo oder Fathom (DSGVO-konform)']
  },
  {
    title: 'Smart Speaker & Connected Devices',
    description: 'Alexa-Skill, Google Assistant Action und CarPlay/Android Auto Anbindung sind vorgesehen.',
    details: ['Voice Commands in Deutsch & Italienisch', 'Fallback-Streams für niedrige Bandbreiten']
  }
];

export default function EmpfangPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Empfang</p>
          <h1 className="text-4xl font-semibold text-text">So hörst du Radio Volare</h1>
          <p className="text-lg text-muted">
            Ob unterwegs oder zu Hause – Radio Volare ist auf vielen Kanälen empfangbar. Alle Wege sind DSGVO-konform
            umgesetzt und sorgen für eine stabile Performance.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {receptionOptions.map((option) => (
            <article key={option.title} className="section-card flex flex-col gap-4 p-6">
              <h2 className="text-2xl font-semibold text-text">{option.title}</h2>
              <p className="text-base text-muted">{option.description}</p>
              <ul className="space-y-2 text-sm text-muted">
                {option.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
