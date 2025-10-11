import type { Metadata } from 'next';
import Link from 'next/link';
import { NowPlayingTicker } from '@/components/now-playing-ticker';

export const metadata: Metadata = {
  title: 'Live',
  description: 'Höre Radio Volare im Livestream: AAC/HLS-Streaming, Metadaten und Now-Playing-Infos.'
};

export default function LivePage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Livestream</p>
          <h1 className="text-4xl font-semibold text-text">Radio Volare live hören</h1>
          <p className="text-lg text-muted">
            Unser globale Player begleitet dich auf allen Geräten. Starte den Stream über den roten Button unten oder
            füge den Link in deinem bevorzugten Player hinzu.
          </p>
        </header>

        <div className="mt-8">
          <NowPlayingTicker />
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="section-card p-6">
            <h2 className="text-xl font-semibold text-text">Stream-Details</h2>
            <dl className="mt-4 space-y-2 text-sm text-muted">
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-text">URL</dt>
                <dd className="truncate text-right">https://ice16.fluidstream.net/rvolare.aac</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-text">Codec</dt>
                <dd>AAC-LC 128 kbps</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-text">Fallback</dt>
                <dd>MP3 / HLS Variant</dd>
              </div>
            </dl>
          </article>

          <article className="section-card p-6">
            <h2 className="text-xl font-semibold text-text">Player-Features</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Sticky Player mit Keyboard-Steuerung und Screenreader-Beschriftungen</li>
              <li>Now-Playing-Anbindung via API oder RDS-Daten</li>
              <li>Progressive Enhancement für Browser ohne Autoplay</li>
            </ul>
          </article>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-text">Player einbetten</h2>
          <p className="text-base text-muted">
            Dank Headless-Architektur lässt sich der Player in Microsites, Event-Landingpages oder mobile Apps
            einbetten. Über Tokens können Partner:innen Zugänge erhalten, ohne den Datenschutz zu gefährden.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accent"
          >
            Beratung anfragen
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
