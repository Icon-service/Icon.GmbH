// Content ported from the real ICON GmbH WordPress site (icon_service posts +
// the homepage service grid). DE content is the original copy; EN is a short
// working translation for now — full EN parity is a later pass.

import type { ModulSystem } from "./modulSystem";
import { MODUL_SYSTEM } from "./modulSystem";
import type { BallisticUnit } from "./ballisticUnit";
import { BALLISTIC_UNIT } from "./ballisticUnit";

export type Block =
  | { type: "paragraphs"; heading?: string; text: string[] }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "columns"; heading?: string; intro?: string; columns: { heading: string; items: string[] }[] }
  | { type: "cards"; heading?: string; cards: { title: string; text: string }[] }
  | { type: "spec"; heading?: string; items: { label: string; text: string }[] }
  | { type: "steps"; heading?: string; items: { label: string; text: string }[] };

export type Leistung = {
  id: string;
  slugDe: string;
  slugEn: string;
  name: { de: string; en: string };
  homeCardText: { de: string; en: string };
  heroLead: { de: string; en: string };
  blocksDe: Block[];
  /** filenames in src/assets/images, resolved via src/lib/images.ts */
  heroImage?: string;
  cardImage?: string;
  ctaHref?: string;
  ctaLabel?: { de: string; en: string };
  modulSystem?: ModulSystem;
  ballisticUnit?: BallisticUnit;
  /** real project photography, filenames in src/assets/images */
  gallery?: { file: string; caption: string }[];
  /** shows a promo card linking to /grundrissplaner */
  plannerCta?: boolean;
};

export const leistungen: Leistung[] = [
  {
    id: "containerbau",
    slugDe: "containerbau",
    slugEn: "container-construction",
    heroImage: "containerbau-hero.png",
    cardImage: "containerbau-icon-hero.png",
    plannerCta: true,
    name: { de: "Containerbau", en: "Container Construction" },
    homeCardText: {
      de: "Büro-, Wohn-, Sanitär-, Technik-, Lager-, Baustellen- und Schutzcontainer als Einzelcontainer, Anlage oder Sonderbau.",
      en: "Office, residential, sanitary, technical, storage, site and protective containers — as single units, complexes or custom builds.",
    },
    heroLead: {
      de: "ICON entwickelt und realisiert Containerlösungen für Industrie, Kommunen, Baustellen, Unterbringung und technische Infrastruktur.",
      en: "ICON develops and delivers container solutions for industry, municipalities, construction sites, accommodation and technical infrastructure.",
    },
    blocksDe: [
      {
        type: "columns",
        heading: "Sortiment nach Containertyp",
        intro:
          "Die Unterkategorien orientieren sich an der Art, wie Kunden tatsächlich suchen: Bürocontainer, Wohnen, Sanitär, Schule, Baustelle, Technik, Lager, Zutritt, Erste Hilfe, Schutz und komplette Anlagen.",
        columns: [
          {
            heading: "",
            items: [
              "Bürocontainer",
              "Wohn- und Unterkunftscontainer",
              "Duschcontainer",
              "WC Container",
              "Schulcontainer und Bildungsgebäude",
              "Baustellencontainer",
              "Aufenthalts- und Sozialräume",
            ],
          },
          {
            heading: "",
            items: [
              "Lager- und Materialcontainer",
              "Technik- und Werkstattcontainer",
              "Pförtner- und Zutrittscontainer",
              "Sanitäts- und Erste-Hilfe-Container",
              "Schutzcontainer",
              "Containeranlagen",
            ],
          },
        ],
      },
    ],
    ctaHref: "/sortiment",
    ctaLabel: { de: "Sortiment ansehen", en: "View products" },
  },
  {
    id: "modulbau",
    slugDe: "modulbau",
    slugEn: "modular-construction",
    heroImage: "modulbau-hero-building.png",
    modulSystem: MODUL_SYSTEM,
    name: { de: "Modulbau", en: "Modular Construction" },
    homeCardText: {
      de: "Schulen, Kitas, Hochschulen, Bürogebäude, Unterkünfte und Interim-Gebäude mit Grundriss, Technik und Ausbaukonzept.",
      en: "Schools, kindergartens, universities, office buildings, accommodation and interim buildings, planned down to layout and fit-out.",
    },
    heroLead: {
      de: "Im Modulbau entstehen flexible Gebäude, die schnell verfügbar, erweiterbar und auf konkrete Betriebsabläufe zugeschnitten sind. Dazu gehören Büroflächen, Unterrichtsräume, Wohnbereiche, Sanitärzonen, Technikräume und kombinierte Anlagen.",
      en: "Modular construction creates flexible buildings that are quickly available, expandable and tailored to real operating needs.",
    },
    blocksDe: [
      {
        type: "paragraphs",
        heading: "Planung mit Grundrissen und Detailzeichnungen",
        text: [
          "Für Modulbauprojekte werden Grundrisse, Erschließung, Sanitärbereiche, Technikzonen, Fluchtwege, Fassaden, Fundamente und Montageabläufe früh sichtbar gemacht. Dadurch können Auftraggeber Varianten vergleichen und Entscheidungen belastbarer treffen.",
        ],
      },
      {
        type: "columns",
        columns: [
          {
            heading: "Gebäudetypen",
            items: [
              "Schul- und Klassenraumgebäude",
              "Kita- und Betreuungsgebäude",
              "Büro- und Verwaltungsgebäude",
              "Unterkunfts- und Wohnanlagen",
              "Interim-Gebäude über 24 Monate",
            ],
          },
          {
            heading: "Planungsbereiche",
            items: [
              "Raumprogramm und Modulraster",
              "Flure, Treppen und Sanitärbereiche",
              "Fassade, Fenster, Sonnenschutz und Akustik",
              "Heizung, Klima, Lüftung, Elektro und Daten",
              "Fundament, Montage, Brandschutz und Genehmigung",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "stahlbau-hallen",
    slugDe: "stahlbau-hallenbau",
    slugEn: "steel-construction",
    heroImage: "stahlbau-hallen-hero.jpeg",
    gallery: [
      { file: "stahlbau-hallenmontage-kran.jpg", caption: "Hallenmontage, Stahlskelett mit Mobilkran" },
      { file: "stahlbau-stuetzenmontage.jpg", caption: "Stützenmontage im Rohbau" },
      { file: "stahlbau-rahmenmontage-daemmerung.jpg", caption: "Rahmenmontage in der Abenddämmerung" },
      { file: "stahlbau-schweissarbeiten.jpg", caption: "Schweißarbeiten an der Stahlkonstruktion" },
    ],
    name: { de: "Stahlbau & Hallen", en: "Steel Construction & Halls" },
    homeCardText: {
      de: "Tragwerke, Hallen, Bühnen, Unterkonstruktionen und Sonderstahlbau für robuste Infrastruktur.",
      en: "Structures, halls, platforms, substructures and custom steelwork for robust infrastructure.",
    },
    heroLead: {
      de: "Stahlbau ist bei ICON mehr als ein einzelnes Gewerk. Er bildet die konstruktive Grundlage für Hallen, technische Gebäude, Unterkonstruktionen, Podeste, Treppen, Bühnen, Wartungszugänge und Schnittstellen zu Container- und Modulbauprojekten.",
      en: "At ICON, steel construction is more than a single trade — it's the structural foundation for halls, technical buildings, substructures and interfaces to container and modular projects.",
    },
    blocksDe: [
      {
        type: "paragraphs",
        heading: "Stahlbau entscheidet früh über Nutzbarkeit, Montage und spätere Erweiterung.",
        text: [
          "Bei vielen Bau- und Infrastrukturprojekten wird Stahlbau erst sichtbar, wenn die Konstruktion montiert wird. Entscheidend ist aber die Phase davor: Lastannahmen, Raster, Spannweiten, Fundamente, Fassadenanschlüsse, Technik, Korrosionsschutz, Transport, Kranstellung und Montagefenster müssen sauber zusammenpassen.",
          "ICON betrachtet Stahlbau deshalb als planungsintensiven Baustein, der die spätere Nutzung und Umsetzung stark beeinflusst.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Hallen für Industrie, Gewerbe, Lager, Werkstatt und technische Nutzung.",
        text: [
          "Eine Halle ist selten nur eine Gebäudehülle. Sie muss zum Betrieb passen: Spannweite, lichte Höhe, Tore, Verkehrswege, Kran- oder Lastanforderungen, Dach- und Fassadenaufbau, Entwässerung, technische Anschlüsse und spätere Erweiterbarkeit müssen zusammen gedacht werden.",
          "ICON strukturiert Hallenbauprojekte so, dass Bauherr, Fachplanung, Fertigung und Montage mit klaren Schnittstellen arbeiten können.",
        ],
      },
      {
        type: "list",
        heading: "Hallentypen aus einer Hand",
        items: [
          "Industrie- und Gewerbehallen",
          "Ausstellungshallen",
          "Lagerhallen",
          "Überdachungen und Carports",
          "Dachkonstruktionen",
        ],
      },
      {
        type: "cards",
        cards: [
          {
            title: "Tragwerke und Hallenstruktur",
            text: "Stützen, Riegel, Binder, Verbände, Pfetten und Sekundärkonstruktionen bilden das statische System — mit klarer Lastabtragung und wirtschaftlichen Spannweiten.",
          },
          {
            title: "Sonderkonstruktionen",
            text: "Podeste, Bühnen, Treppen, Geländer, Wartungsebenen, Schutzdächer, technische Einhausungen oder Rahmenkonstruktionen für Anlagen und Infrastruktur.",
          },
          {
            title: "Schnittstellen zu Container- und Modulbau",
            text: "Stahlbau kann Containeranlagen und Modulgebäude vorbereiten, tragen, erschließen oder technisch ergänzen.",
          },
          {
            title: "Tiefbau als Fundament",
            text: "Baugrubenaushub, Bodenaustausch, Regen- und Abwasserkanäle sowie Ver- und Entsorgungsleitungen werden im eigenen Team geplant und ausgeführt — auch bei schwierigem Untergrund oder beengten Baufeldern.",
          },
        ],
      },
      {
        type: "spec",
        heading: "Seriöser Stahlbau braucht klare Unterlagen, nicht nur eine Skizze.",
        items: [
          { label: "Statisches Konzept", text: "Lastannahmen, Tragwerksraster, Aussteifung, Auflager und relevante Montagezustände werden nachvollziehbar vorbereitet." },
          { label: "Anschlussdetails", text: "Schraub- und Schweißverbindungen, Auflager, Fundamentanschlüsse, Fassadenübergänge und Schnittstellen zu Technik oder Modulbau werden sauber definiert." },
          { label: "Fertigung & Beschichtung", text: "Werkstattplanung, Toleranzen, Korrosionsschutz, Oberflächenanforderungen und Transportgrößen beeinflussen Qualität und Wirtschaftlichkeit." },
          { label: "Montage & Dokumentation", text: "Kranstellung, Hebevorgänge, Arbeitssicherheit, Baustellenlogistik und Übergabeunterlagen werden früh mitgedacht." },
          { label: "Planung für Sonderbauten", text: "Neben klassischen Hallen erstellen unsere technischen Zeichner auch Ausführungspläne für gehärtete Bauwerke und militärische Unterkünfte, eng abgestimmt mit dem Bereich Militärische Infrastruktur." },
        ],
      },
      {
        type: "paragraphs",
        heading: "Eigenes Montageteam statt Fremdvergabe.",
        text: [
          "Ein Mix aus erfahrenen Supervisoren, Monteuren und motiviertem Nachwuchs montiert unsere Stahlbauten nahezu ausschließlich selbst. Sicherheit und eine mit Konstruktion und Fertigung eng abgestimmte Montageplanung stehen dabei an erster Stelle — als Gesamtpaket aus Konstruktion, Fertigung und Montage.",
        ],
      },
      {
        type: "steps",
        heading: "Vom Bedarf zur montierbaren Konstruktion.",
        items: [
          { label: "Anforderung klären", text: "Nutzung, Standort, Abmessungen, Lasten, Anschlüsse, Genehmigungsrahmen und vorhandene Unterlagen werden zusammengeführt." },
          { label: "Konstruktion strukturieren", text: "Tragwerk, Raster, Auflager, Anschlüsse, Korrosionsschutz und Schnittstellen werden technisch abgestimmt." },
          { label: "Fertigung und Montage vorbereiten", text: "Werkstatt- und Montageunterlagen, Transportlogik, Kranstellung, Montagefenster und Dokumentation werden geplant." },
        ],
      },
    ],
    ctaHref: "/kontakt",
    ctaLabel: { de: "Stahlbauprojekt anfragen", en: "Enquire about a steel project" },
  },
  {
    id: "militaerische-infrastruktur",
    slugDe: "militaerische-infrastruktur",
    slugEn: "defense-infrastructure",
    heroImage: "militaerische-infrastruktur-hero.png",
    gallery: [
      { file: "schutzanlage-luftaufnahme.jpg", caption: "Luftaufnahme einer gehärteten Anlage mit Schutzwällen" },
      { file: "schutzanlage-schutzwall-technik.jpg", caption: "Schutzwall mit Klima- und Lüftungstechnik" },
      { file: "schutzanlage-abenddaemmerung.jpg", caption: "Gehärtete Anlage in der Abenddämmerung" },
      { file: "einsatzstandort-gebaeude.jpg", caption: "Fertiggestelltes Gebäude auf einem Einsatzstandort" },
    ],
    ballisticUnit: BALLISTIC_UNIT,
    name: { de: "Militärische Infrastruktur", en: "Defense Infrastructure" },
    homeCardText: {
      de: "ICON Schutzcontainer (STANAG 2280, Bedrohungsstufen A3/C4, TNO-zertifiziert), gehärtete Unterkünfte, Schutz- und Technikcontainer, Montage und vertrauliche Projektabwicklung.",
      en: "ICON Ballistic Unit (STANAG 2280, threat levels A3/C4, TNO-certified), hardened accommodation, protective and technical containers, installation and confidential project handling.",
    },
    heroLead: {
      de: "Mit dem ICON Schutzcontainer bietet ICON eine nach STANAG 2280 zertifizierte, beschusshemmende Raumlösung für Unterkunft, Büro, Sanitär und Technik. Darüber hinaus entsteht sicherheitsrelevante Infrastruktur selten aus einem einzelnen Produkt — meist geht es um das Zusammenspiel aus Nutzung, Raumlösung, technischer Ausstattung, Standort, Montage und nachvollziehbarer Dokumentation.",
      en: "With the ICON Ballistic Unit, ICON offers a STANAG 2280-certified, ballistic-resistant room solution for accommodation, office, sanitary and technical use. Beyond that, security-relevant infrastructure rarely comes from a single product — it's the interplay of use, spatial solution, technical fit-out, site and documentation.",
    },
    blocksDe: [
      {
        type: "paragraphs",
        text: [
          "ICON bündelt dafür Containerbau, Modulbau, Stahlbau, Planung, Standortvorbereitung und Projektkoordination. Die konkrete Ausführung wird immer projektbezogen geprüft. Diese Seite dient als Orientierung, damit Anforderungen früh sortiert und realistisch besprochen werden können.",
        ],
      },
      {
        type: "list",
        heading: "Was in der frühen Klärung wichtig ist",
        items: [
          "Nutzung, Personenanzahl, Laufzeit und Betriebsabläufe",
          "Standortbedingungen, Zufahrt, Flächen, Anschlüsse und Montagefenster",
          "Räume für Unterkunft, Arbeit, Technik, Lagerung oder Versorgung",
          "erforderliche Unterlagen, Abstimmungen und Dokumentation",
          "projektbezogene Anforderungen an Robustheit, Zugang, Schutz und Betrieb",
        ],
      },
      {
        type: "paragraphs",
        heading: "Bewusst allgemein, konkret im Projekt",
        text: [
          "Wir vermeiden pauschale technische Versprechen. Schutzanforderungen, Nachweise, Ausstattungen und bauliche Details werden vertraulich, fachlich und passend zum Standort geklärt.",
        ],
      },
    ],
    ctaHref: "/kontakt",
    ctaLabel: { de: "Projekt vertraulich besprechen", en: "Discuss a project confidentially" },
  },
  {
    id: "unterkunftsanlagen",
    slugDe: "fluechtlingsunterkuenfte",
    slugEn: "accommodation-facilities",
    name: { de: "Unterkunftsanlagen", en: "Accommodation Facilities" },
    homeCardText: {
      de: "Wohn-, Sanitär-, Aufenthalts-, Verwaltungs- und Versorgungsbereiche für kommunale oder projektbezogene Bedarfe.",
      en: "Residential, sanitary, common, administrative and logistics areas for municipal or project-specific needs.",
    },
    heroLead: {
      de: "ICON unterstützt Kommunen und Projektträger bei der Umsetzung temporärer und modularer Unterkunftsanlagen. Im Fokus stehen kurze Realisierungszeiten, klare Grundrisse, robuste Ausstattung und verlässliche Projektabwicklung.",
      en: "ICON supports municipalities and project sponsors in delivering temporary and modular accommodation facilities — fast, with clear layouts and reliable project handling.",
    },
    blocksDe: [],
  },
  {
    id: "interim-gebaeude",
    slugDe: "interim-gebaeude",
    slugEn: "interim-buildings",
    heroImage: "leistungen-hero-feuerwehr-interim.jpg",
    name: { de: "Interim-Gebäude", en: "Interim Buildings" },
    homeCardText: {
      de: "Ersatzflächen während Umbau, Sanierung, Kapazitätserweiterung oder laufendem Betrieb.",
      en: "Replacement space during conversion, renovation, capacity expansion or ongoing operations.",
    },
    heroLead: {
      de: "Interim-Gebäude schaffen nutzbare Flächen, wenn Neubau, Sanierung oder kurzfristiger Mehrbedarf schnelle Lösungen erfordern. Die Anlagen können modular geplant, erweitert und später versetzt oder zurückgebaut werden.",
      en: "Interim buildings provide usable space when new construction, renovation or short-notice demand call for a fast solution — modular, expandable, and relocatable later.",
    },
    blocksDe: [],
  },
];

export function getLeistungBySlug(lang: "de" | "en", slug: string) {
  return leistungen.find((l) => (lang === "en" ? l.slugEn : l.slugDe) === slug);
}
