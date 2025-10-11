import Link from 'next/link';

const footerLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/kontakt', label: 'Kontakt' }
];

export function Footer() {
  return (
    <footer className="border-t border-emerald-200/60 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-2 text-sm text-muted">
          <p className="text-base font-semibold text-text">Radio Volare</p>
          <p>Die italienische Stimme in der Schweiz – mit Livestream, Podcasts und Geschichten aus der Community.</p>
          <p className="text-xs">© {new Date().getFullYear()} Radio Volare. Alle Rechte vorbehalten.</p>
        </div>
        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-4 text-sm font-medium text-text">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
