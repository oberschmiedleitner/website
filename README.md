# Radio Volare Website

Eine moderne, barrierearme und performante Radio-Präsenz für **Radio Volare**. Die
Informationsarchitektur, Navigationslogik und Nutzerflüsse folgen der Struktur von
[vintageradio.ch](https://vintageradio.ch) und wurden inhaltlich für Radio Volare adaptiert.

## Features

- Hochkontrast-Design, Skip-Link und semantische Struktur für bessere Zugänglichkeit
- Responsives Layout mit Fokus auf schnelle Ladezeiten (nur Vanilla HTML, CSS & JS)
- Livestream-Player inklusive Keyboard-Steuerung, Statusanzeigen und Lautstärkeregelung
- Sektionen für Programm, Sendungen, Podcasts, Events, Support und Kontakt
- Rotierende "Jetzt läuft"-Informationen als Platzhalter für ein künftiges Backend
- Eigenständiger, schlanker Node-Server für lokale Entwicklung

## Schnellstart

```bash
npm install   # optional, nur nötig wenn zusätzliche Pakete ergänzt werden
npm run start # erzeugt assets/js/env.js aus .env und startet den lokalen Server auf http://localhost:4173
```

Der Server liest standardmäßig den Port aus der Umgebungsvariable `PORT`, fällt sonst auf
`4173` zurück.

## Streaming-Konfiguration

1. Erstelle eine `.env`-Datei auf Projektebene (siehe `.env.example`).
2. Trage darin den finalen Streaming-Endpunkt ein:

   ```env
   STREAM_URL=https://radiorho.streaming.deliver.media/radiorho_aac_128
   ```

3. Führe `npm run generate:env` aus (in `npm run start` bereits enthalten). Dadurch wird
   `assets/js/env.js` aktualisiert, welches den Wert im Browser bereitstellt.
4. Ohne `.env` fällt der Player automatisch auf den Volare-Stream zurück.

## Ordnerstruktur

```
.
├── assets/
│   ├── css/      # zentrale Styles (main.css)
│   └── js/       # JavaScript (env.js, main.js)
├── scripts/      # Hilfsskripte für Env-Generierung und lokalen Server
├── index.html    # Startseite
├── .env.example  # Vorlage für Streaming-Endpunkt
└── README.md
```

## Tests & Qualität

Aktuell existieren keine automatisierten Tests. Der Fokus liegt auf statischer Auslieferung.
Die Seite wurde so aufgebaut, dass sie ohne Build-Tool läuft und mit jedem modernen Browser
verfügbar ist.
