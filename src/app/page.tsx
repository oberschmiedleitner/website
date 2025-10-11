import Link from 'next/link';
import { Section } from '@/components/section';
import { NowPlayingTicker } from '@/components/now-playing-ticker';
import { edicolaArticles } from '@/content/articles';
import { podcasts } from '@/content/podcasts';
import { featuredDays, weeklySchedule } from '@/content/schedule';

const heroHighlights = [
  'Livestream in AAC/HLS-Qualität',
  'Programmschema mit Fokus auf italienische Kultur',
  'Podcasts, Edicola-Magazin und Community-Events'
];

export default function HomePage() {
  const highlightedShows = weeklySchedule.filter((slot) => featuredDays.includes(slot.days[0])).slice(0, 3);

  return (
    <div className="bg-surface">
      <section className="bg-gradient-to-br from-white via-primary/10 to-accent/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Radio Volare</p>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              La voce italiana in Svizzera – überall, jederzeit.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Erlebe das Lebensgefühl Italiens mit unserem 24/7 Livestream, liebevoll kuratierten Sendungen und
              journalistischen Geschichten für die italienischsprachige Community in der Schweiz.
            </p>
            <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5">
                      <path d="M7.629 13.233 4.4 9.79l1.2-1.23 2.1 2.12 6.7-6.88 1.2 1.23-7.972 8.101z" fill="currentColor" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/live"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent"
              >
                Jetzt live hören
              </Link>
              <Link
                href="/programm"
                className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Programm entdecken
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <NowPlayingTicker />
            <div className="section-card p-6">
              <h2 className="text-lg font-semibold text-text">Core Web Vitals optimiert</h2>
              <p className="mt-2 text-sm text-muted">
                Headless-Architektur mit Next.js & Tailwind CSS für schnelle Ladezeiten, SEO-Optimierung und optimale
                Barrierefreiheit.
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted">
                <div>
                  <dt className="font-semibold text-text">Livestream</dt>
                  <dd>HLS/AAC mit DSGVO-konformer Auslieferung</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text">CMS</dt>
                  <dd>WordPress Headless oder Alternative via API</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text">Analytics</dt>
                  <dd>Serverseitig, cookiefrei & datenschutzkonform</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text">Mehrsprachigkeit</dt>
                  <dd>Optional via i18n-Routing erweiterbar</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="programm"
        eyebrow="Programm"
        title="Ein Tagesprogramm voller Klangfarben"
        description="Live-Shows, Talks und Spezialformate: Radio Volare begleitet dich durch den Tag mit einer Mischung aus Musik, Kultur und Service."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {highlightedShows.map((slot) => (
            <article key={slot.slug} className="section-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{slot.time}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{slot.title}</h3>
              <p className="mt-1 text-sm text-muted">Mit {slot.host}</p>
              <p className="mt-3 text-sm text-muted">{slot.description}</p>
              <Link
                href={`/sendung/${slot.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                Mehr erfahren
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/programm"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            Gesamtes Programmschema ansehen
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section
        id="podcasts"
        eyebrow="Podcasts"
        title="On-Demand hören"
        description="Serien für Pendelstrecken, Pausen und lange Abende: Entdecke unsere Podcast-Welt."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {podcasts.map((podcast) => (
            <article key={podcast.slug} className="section-card flex h-full flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{podcast.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{podcast.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted">{podcast.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted">
                <span>Laufzeit {podcast.duration}</span>
                <Link href="/podcast" className="font-semibold text-primary hover:text-accent">
                  Zur Übersicht
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="edicola"
        eyebrow="Edicola"
        title="Geschichten aus der Community"
        description="Reportagen, Interviews und Newsletter: Das Edicola-Magazin verbindet Italien und die Schweiz."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {edicolaArticles.map((article) => (
            <article key={article.title} className="section-card flex h-full flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{article.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{article.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted">{article.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-wide text-muted">
                <span>{article.readingTime} Lesezeit</span>
                <span className="font-semibold text-primary">Bald verfügbar</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="empfang"
        eyebrow="Empfang"
        title="So empfängst du Radio Volare"
        description="Egal ob Smartphone, Smart Speaker oder DAB+: Wir bringen italienische Musik zu dir."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Livestream & Player',
              description: 'Direkter Zugang via Webplayer mit AAC/HLS-Streaming und AirPlay/Chromecast-Unterstützung.'
            },
            {
              title: 'Mobile Apps',
              description: 'Progressive Web App mit Offline-Funktion und Push-Benachrichtigungen für neue Podcasts.'
            },
            {
              title: 'Smart Speaker & DAB+',
              description: 'Integration für Alexa, Google Assistant und regionale DAB+-Multiplexe in Planung.'
            }
          ].map((item) => (
            <article key={item.title} className="section-card p-6">
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
