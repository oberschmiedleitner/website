# Radio Volare – Next.js Prototyp

Dieser Prototyp skizziert eine moderne, barrierearme und performante Radio-Website für Radio Volare auf Basis von Next.js 14 (App Router) und Tailwind CSS.

## Features

- Globaler, sticky Audio-Player mit AAC-Stream (`https://ice16.fluidstream.net/rvolare.aac`)
- Headless-ready Inhaltsstruktur mit Programmschema, Sendungsseiten, Podcasts und Edicola-Magazin
- Design-Tokens entsprechend der Radio-Volare-Farbwelt (Primär: Rot, Akzent: Grün)
- SEO-freundliche Metadaten und strukturierte Layout-Komponenten
- Responsives, barrierebewusstes UI (Keyboard, Screenreader, klare Kontraste)

## Struktur

```
src/
├─ app/              # App Router Seiten & Layouts
├─ components/       # Wiederverwendbare UI-Komponenten (Header, Player, etc.)
├─ content/          # Beispielinhalte für Programm, Podcasts, Magazin
├─ context/          # Audio-Context für globalen Player
└─ lib/              # Hilfsfunktionen (z. B. Now-Playing Mock)
```

## Entwicklung

> Hinweis: In der aktuellen Umgebung kann `npm install` ggf. aufgrund fehlender Internetverbindung scheitern. Die Projektstruktur ist dennoch lauffähig, sobald Abhängigkeiten installiert sind.

```bash
npm install
npm run dev
```

Das Projekt nutzt TypeScript, ESLint, Tailwind CSS und den Next.js App Router.
