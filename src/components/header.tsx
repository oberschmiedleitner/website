'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/live', label: 'Live' },
  { href: '/programm', label: 'Programm' },
  { href: '/podcast', label: 'Podcasts' },
  { href: '/edicola', label: 'Edicola' },
  { href: '/empfang', label: 'Empfang' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Radio Volare Startseite">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">RV</span>
          <span className="text-lg font-semibold text-text">Radio Volare</span>
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-primary ${isActive ? 'text-primary' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white p-2 text-primary md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <span className="sr-only">Menü öffnen</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
            <path
              fill="currentColor"
              d={isOpen ? 'M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-4.89 4.3-1.41-1.42L10.59 12 5.7 7.12 7.11 5.7 12 10.59l4.89-4.88z' : 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="border-t border-emerald-200/50 bg-white px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-2 text-base font-medium text-text">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 transition hover:bg-primary/10 ${
                      isActive ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
