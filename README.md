# ICON GmbH — Website

Astro + Tailwind CSS, statisch, zweisprachig (DE Standard / EN unter `/en`).

Design und Inhalte sind an das reale ICON-Markensystem angelehnt, das aus einem
früheren WordPress-Aufbau (`icon-WP.zip`) rekonstruiert wurde: Farben, Schrift
(Inter) und die dort bereits fertig getexteten Inhalte für Startseite,
Leistungen und Container-Modelle.

## Struktur

```
src/
├── data/leistungen.ts        6 echte Leistungsbereiche (Containerbau … Interim-Gebäude)
├── data/containerModelle.ts  6 echte Modellreihen (ICON Eco … ICON Technik)
├── i18n/                     Übersetzungswörterbuch (ui.ts) + Routing-Helfer (utils.ts)
├── components/               Header, Footer, SpecPlate, PlaceholderFrame, BlockRenderer
├── layouts/Layout.astro      Basislayout (Meta, Header, Footer)
└── pages/                     DE-Seiten im Root, EN-Seiten unter /en
```

Design-Tokens (Ink/Graphite/Steel/Mist/Signal, Inter) stehen in
`src/styles/global.css` als Tailwind-v4-`@theme`-Block.

## Befehle

| Befehl            | Aktion                              |
| ------------------ | ------------------------------------ |
| `npm run dev`       | Lokaler Dev-Server auf Port 4321     |
| `npm run build`     | Produktionsbuild nach `./dist/`      |
| `npm run preview`   | Build lokal ansehen                  |

## Aktueller Stand (Phase 1 — Kernseiten)

Fertig mit echten Original-Texten: Startseite, Leistungen-Übersicht + 6
Detailseiten (Containerbau, Modulbau, Stahlbau & Hallen, Militärische
Infrastruktur, Unterkunftsanlagen, Interim-Gebäude), Container-Modelle,
Über uns, Kontakt. EN-Seiten sind eine kürzere Arbeitsübersetzung, keine
1:1-Übertragung der ausführlichen DE-Inhalte.

**Referenzen** zeigen bewusst einen "in Vorbereitung"-Zustand: Der alte
Datenbestand enthielt null echte Referenzprojekte, deshalb keine
Platzhalter-Fallstudien.

## Phase 2 — noch nicht übertragen

Im alten System vorhanden, aber noch nicht in die neue Seite migriert:

- **Sortiment**: 14 Produkte (Bürocontainer, Sanitärcontainer, Containeranlagen,
  Industrie-/Gewerbehallen usw.) mit Größenvarianten (10'/16'/20'/20'XL/Sonderbau)
- **Militärische Infrastruktur**: 4 weitere Unterthemen (Robuste Unterkünfte,
  Technik- & Versorgungsmodule, Planung & Dokumentation, Standortvorbereitung
  & Montage) — aktuell zeigt die Seite nur den Überblicksartikel
- **Downloads**: nur Platzhaltertitel im alten System, keine echten PDFs
- **Nutzungsarten / Branchen / Planung & Technik**: eigene Content-Typen im
  alten System, noch nicht als Seiten übertragen
- Vollständige EN-Übersetzung der langen Inhalte (Stahlbau-Landingpage,
  Sortiment, Militär-Unterthemen)

## Offene Punkte vor dem Launch

- **Markenmaterial**: echtes Logo und Projektfotos einpflegen (aktuell
  blaupausenartige Platzhalterflächen in `PlaceholderFrame.astro`).
- **Kontaktformular**: `src/pages/kontakt.astro` / `en/contact.astro` haben
  noch kein Backend (siehe `TODO`-Kommentar im Formular).
- **Kontaktdaten**: Nur `info@icon.gmbh` und "Deutschland und Europa" sind
  als echte Angaben belegt. Telefonnummer und Postanschrift fehlen — im alten
  Datenbestand nicht vorhanden. Nicht raten, sondern von ICON nachtragen lassen.
- **Impressum/Datenschutz**: Footer-Links sind aktuell `#` — Pflichtseiten
  für ein deutsches Unternehmen müssen noch ergänzt werden.
