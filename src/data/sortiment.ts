import type { Block } from "./leistungen";
import { PLANNER_BAUREIHEN, type PlannerCategory } from "./plannerCatalog";

// Sortiment ist nach FAGSIs eigener Baureihen-Struktur aufgebaut (technisches
// Datenblatt Miete): pro Baureihe eine Seite mit Leercontainer-/
// Treppencontainer-/Sanitärcontainer-Typen statt einzelner Use-Case-Produkte
// mit einer für alle Produkte identischen, abstrakten Größenleiter.
// `categories` kommt direkt aus plannerCatalog.ts, damit Sortiment-Seite und
// Grundrissplaner immer dieselben Typen/Maße zeigen.

export type SpecSection = {
  heading: string;
  rows: { label: string; value: string }[];
};

export type DimensionRow = {
  size: string;
  outer: string;
  inner: string;
  area: string;
  weight: string;
};

export type InsulationRow = {
  material: string;
  thickness: string;
  uValue: string;
};

export type TechnicalDescription = {
  sourceNote: string;
  dimensions: DimensionRow[];
  sections: SpecSection[];
  insulationTable: InsulationRow[];
  loadNote: string;
  extraSections?: SpecSection[];
};

export type SortimentProduct = {
  id: string;
  slugDe: string;
  slugEn: string;
  name: { de: string; en: string };
  excerpt: { de: string; en: string };
  heroLead: { de: string; en: string };
  introExtra?: string;
  categories: PlannerCategory[];
  detailBlocksDe: Block[];
  technicalDescription: TechnicalDescription;
};

const FAGSI_SOURCE_NOTE =
  "Typen, Maße und technische Kennwerte orientieren sich an FAGSIs Referenz-Baureihenstruktur (technisches Datenblatt Miete) und werden durch die tatsächlichen ICON-Werte ersetzt, sobald verfügbar.";

function technicalSections(d: {
  einsatzdauer: string;
  einsatzart: string;
  konstruktion: string;
  nutzlast: string;
  schneelast: string;
  brandschutz: string;
  dach: string;
  wand: string;
  boden: string;
  laenge: string;
  breite: string;
  aussenhoehe: string;
  raumhoehe: string;
}): SpecSection[] {
  return [
    {
      heading: "Einsatz",
      rows: [
        { label: "Einsatzdauer", value: d.einsatzdauer },
        { label: "Einsatzart", value: d.einsatzart },
        { label: "Konstruktion", value: d.konstruktion },
      ],
    },
    {
      heading: "Tragfähigkeit & Brandschutz",
      rows: [
        { label: "Typenstatik", value: "3-geschossig" },
        { label: "Nutzlast", value: d.nutzlast },
        { label: "Schneelast", value: d.schneelast },
        { label: "Brandschutz", value: d.brandschutz },
      ],
    },
    {
      heading: "Wärmedurchgangskoeffizient",
      rows: [
        { label: "Dach", value: d.dach },
        { label: "Wand", value: d.wand },
        { label: "Boden", value: d.boden },
      ],
    },
    {
      heading: "Abmessung",
      rows: [
        { label: "Länge", value: d.laenge },
        { label: "Breite", value: d.breite },
        { label: "Außenhöhe", value: d.aussenhoehe },
        { label: "Raumhöhe", value: d.raumhoehe },
      ],
    },
  ];
}

function categoriesFor(baureiheId: string): PlannerCategory[] {
  return PLANNER_BAUREIHEN.find((b) => b.id === baureiheId)!.categories;
}

export const sortiment: SortimentProduct[] = [
  {
    id: "icon-eco",
    slugDe: "icon-eco",
    slugEn: "icon-eco",
    name: { de: "ICON Eco", en: "ICON Eco" },
    excerpt: {
      de: "Die wirtschaftliche Standardlösung für Baustellenunterkünfte, Baustellenbüros und Sanitärcontainer — als temporäre Lösung bei Umbau- oder Sanierungsmaßnahmen.",
      en: "The economical standard solution for site accommodation, site offices and sanitary containers — a temporary solution during renovation work.",
    },
    heroLead: {
      de: "ICON Eco ist die wirtschaftliche Einstiegslösung für die Bauindustrie — vollverzinkter, geschweißter Stahlrahmen mit Sandwichwänden, ideal für Baustellenunterkünfte, Baustellenbüros und Sanitärcontainer bei temporärem Bedarf.",
      en: "ICON Eco is the economical entry-level solution for the construction industry — fully galvanized, welded steel frame with sandwich walls, ideal for site accommodation, site offices and sanitary containers for temporary needs.",
    },
    categories: categoriesFor("icon-eco"),
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "ICON Eco ist die wirtschaftliche Standardlösung für die Bauindustrie: Baustellenunterkünfte, Baustellenbüros und Sanitärcontainer, sowie Übergangslösungen bei Umbau- und Sanierungsmaßnahmen.",
          "Vollverzinkter, geschweißter Stahlrahmen mit Sandwichwänden auf PU-Kernbasis — eine robuste, kosteneffiziente Bauweise für temporäre Standorte mit hohem Praxisbedarf.",
        ],
      },
    ],
    technicalDescription: {
      sourceNote: FAGSI_SOURCE_NOTE,
      dimensions: [],
      sections: technicalSections({
        einsatzdauer: "Temporäre Lösung",
        einsatzart: "Baustellenunterkünfte, Baustellenbüros, Sanitärcontainer, Übergangslösung bei Umbau-/Sanierungsmaßnahmen",
        konstruktion: "Vollverzinkter, geschweißter Stahlrahmen, Sandwichwände mit PU-Kern",
        nutzlast: "2,0 kN/m²",
        schneelast: "1,0 kN/m²",
        brandschutz: "nicht spezifiziert",
        dach: "U = 0,412 W/m²K",
        wand: "U = 0,380 W/m²K",
        boden: "U = 0,598 W/m²K",
        laenge: "6,058 m",
        breite: "2,438 m",
        aussenhoehe: "2,800 m",
        raumhoehe: "2,500 m",
      }),
      insulationTable: [],
      loadNote: "Nutzlast 2,0 kN/m², Dach-Schneelast im Standard 1,0 kN/m² (Verstärkung auf Anfrage). Die zulässige Schneelast am Aufstellort ist vor Bestellung zu prüfen.",
    },
  },
  {
    id: "icon-basic",
    slugDe: "icon-basic",
    slugEn: "icon-basic",
    name: { de: "ICON Basic", en: "ICON Basic" },
    excerpt: {
      de: "Die flexible Einstiegslösung für temporäre Nutzung bis 24 Monate — als Bürogebäude, Schule, Kindergarten oder Übergangslösung bei Umbau- und Sanierungsmaßnahmen.",
      en: "The flexible entry-level solution for temporary use up to 24 months — as office building, school, kindergarten or interim solution during renovation.",
    },
    heroLead: {
      de: "ICON Basic ist die richtige Wahl, wenn kurzfristig und temporär Raum benötigt wird — als Baubüro, Schule, Kindergarten oder Übergangslösung während Umbau oder Sanierung. Stahlrahmen mit Profilblechwänden, bis zu dreigeschossig kombinierbar.",
      en: "ICON Basic is the right choice when space is needed quickly and temporarily — as a site office, school, kindergarten or interim solution during renovation. Steel frame with profiled sheet walls, combinable up to three storeys.",
    },
    categories: categoriesFor("icon-basic"),
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "ICON Basic deckt die klassischen temporären Einsatzfälle ab: Bürogebäude, Schulen oder Kindergärten sowie Übergangslösungen bei Umbau- und Sanierungsmaßnahmen, in der Regel bis 24 Monate Standzeit.",
          "Die Baureihe umfasst Leercontainer (offen, mit Trennwand oder mit Flur), Treppencontainer für mehrgeschossige Anlagen sowie Sanitärcontainer in verschiedenen WC- und Duschausführungen — alle mit denselben Grundmaßen kombinierbar.",
        ],
      },
    ],
    technicalDescription: {
      sourceNote: FAGSI_SOURCE_NOTE,
      dimensions: [],
      sections: technicalSections({
        einsatzdauer: "Temporäre Lösung bis 24 Monate",
        einsatzart: "Bürogebäude, Schulen oder Kindergärten, Übergangslösung bei Umbau-/Sanierungsmaßnahmen",
        konstruktion: "Stahlrahmen mit Profilblechwänden",
        nutzlast: "2,0–5,0 kN/m²",
        schneelast: "1,5 kN/m²",
        brandschutz: "analog F30",
        dach: "U = 0,510 W/m²K",
        wand: "U = 0,641 W/m²K",
        boden: "U = 0,598 W/m²K",
        laenge: "6,058–10,000 m",
        breite: "2,500 / 3,000 m",
        aussenhoehe: "2,800 m",
        raumhoehe: "2,500 m",
      }),
      insulationTable: [],
      loadNote: "Nutzlast 2,0–5,0 kN/m², Dach-Schneelast im Standard 1,5 kN/m² (Verstärkung auf Anfrage). Die zulässige Schneelast am Aufstellort ist vor Bestellung zu prüfen.",
    },
  },
  {
    id: "icon-basic-2",
    slugDe: "icon-basic-2-0",
    slugEn: "icon-basic-2-0",
    name: { de: "ICON Basic 2.0", en: "ICON Basic 2.0" },
    excerpt: {
      de: "Der Fortschritt des Bewährten: gleiche temporäre Einsatzdauer wie ICON Basic, mit optionaler Kassettenfassade und erweiterten Sanitärvarianten für Bildungseinrichtungen sowie Büro- und Verwaltungsgebäude.",
      en: "The next step from the proven Basic range: same temporary use case, with an optional cassette façade and extended sanitary variants for education, office and administration buildings.",
    },
    heroLead: {
      de: "ICON Basic 2.0 baut auf der bewährten Basic-Reihe auf — für dieselben temporären Einsatzbereiche, aber mit optionaler Kassettenfassade für ein höherwertiges Erscheinungsbild und deutlich mehr Sanitärvarianten für Schulen, Kitas, Büro- und Verwaltungsgebäude.",
      en: "ICON Basic 2.0 builds on the proven Basic range — same temporary use cases, but with an optional cassette façade for a higher-quality appearance and significantly more sanitary variants for schools, kindergartens, office and administration buildings.",
    },
    categories: categoriesFor("icon-basic-2"),
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "ICON Basic 2.0 richtet sich an dieselben Einsatzfälle wie ICON Basic, bietet aber mehr Auswahl bei der Fassade (Profilblech oder optionale Kassettenfassade) sowie deutlich mehr Sanitärvarianten — getrennt nach Bildungssektor (Kita, Schule) und Büro-/Verwaltungsnutzung.",
          "Auch hier sind Leercontainer, Treppencontainer und Sanitärcontainer frei zu Anlagen kombinierbar, bis zu dreigeschossig.",
        ],
      },
    ],
    technicalDescription: {
      sourceNote: FAGSI_SOURCE_NOTE,
      dimensions: [],
      sections: technicalSections({
        einsatzdauer: "Temporäre Lösung bis 24 Monate",
        einsatzart: "Bürogebäude, Schulen oder Kindergärten, Übergangslösung bei Umbau-/Sanierungsmaßnahmen",
        konstruktion: "Stahlrahmen mit Profilblechwänden oder Kassettenfassade (optional)",
        nutzlast: "2,0–5,0 kN/m²",
        schneelast: "1,5 kN/m²",
        brandschutz: "analog F30",
        dach: "U = 0,460 W/m²K",
        wand: "U = 0,208 W/m²K kopfseitig, U = 0,638 W/m²K längsseitig",
        boden: "U = 0,580 W/m²K",
        laenge: "6,058 m",
        breite: "2,500 / 3,000 m",
        aussenhoehe: "2,800 m",
        raumhoehe: "2,500 m",
      }),
      insulationTable: [],
      loadNote: "Nutzlast 2,0–5,0 kN/m², Dach-Schneelast im Standard 1,5 kN/m² (Verstärkung auf Anfrage). Die zulässige Schneelast am Aufstellort ist vor Bestellung zu prüfen.",
    },
  },
  {
    id: "icon-energy",
    slugDe: "icon-energy",
    slugEn: "icon-energy",
    name: { de: "ICON Energy", en: "ICON Energy" },
    excerpt: {
      de: "Die energieeffiziente Mittelfristlösung für 24 bis 60 Monate — als Neubau, Anbau oder Aufstockung für Büro-, Verwaltungs-, Schul- und Kindergartengebäude.",
      en: "The energy-efficient medium-term solution for 24 to 60 months — as new build, extension or additional storey for office, administration, school and kindergarten buildings.",
    },
    heroLead: {
      de: "ICON Energy ist für mittelfristige Projekte mit erhöhten Anforderungen an Wärmedämmung ausgelegt — Stahlrahmen mit Kassetten- und Zusatzfassade, deutlich niedrigere U-Werte als die Basic-Reihen, auch als großformatiges XL-Modul verfügbar.",
      en: "ICON Energy is designed for medium-term projects with higher insulation requirements — steel frame with cassette and additional façade, significantly lower U-values than the Basic ranges, also available as a large-format XL module.",
    },
    categories: categoriesFor("icon-energy"),
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "ICON Energy eignet sich für Büro- und Verwaltungsgebäude, Schulen und Kindergärten als Neubau, Anbau oder Aufstockung mit einer Nutzungsdauer von etwa 24 bis 60 Monaten — bei deutlich besserer Wärmedämmung als die Basic-Reihen.",
          "Neben den Standardmodulen mit 6,058 m Länge stehen XL-Module mit 14,646 m sowie eigene Treppencontainer-Typen für größere Anlagen zur Verfügung.",
        ],
      },
    ],
    technicalDescription: {
      sourceNote: FAGSI_SOURCE_NOTE,
      dimensions: [],
      sections: technicalSections({
        einsatzdauer: "Mittelfristige Lösung ab 24 bis 60 Monate",
        einsatzart: "Büro- und Verwaltungsgebäude, Schulen, Kindergärten als Neubau, Anbau, Aufstockung",
        konstruktion: "Stahlrahmen mit Kassettenfassade und Zusatzfassade",
        nutzlast: "2,0–5,0 kN/m²",
        schneelast: "1,5 kN/m²",
        brandschutz: "analog F30",
        dach: "U = 0,347 W/m²K (o. Zusatzdach), U ≤ 0,200 W/m²K (m. Zusatzdach)",
        wand: "U = 0,209 W/m²K",
        boden: "U = 0,293 W/m²K",
        laenge: "6,058 / 14,646 m",
        breite: "3,000 m / 3,400 m",
        aussenhoehe: "3,150 m",
        raumhoehe: "2,750 m",
      }),
      insulationTable: [],
      loadNote: "Nutzlast 2,0–5,0 kN/m², Dach-Schneelast im Standard 1,5 kN/m² (Verstärkung auf Anfrage). Die zulässige Schneelast am Aufstellort ist vor Bestellung zu prüfen.",
    },
  },
  {
    id: "icon-comfort",
    slugDe: "icon-comfort",
    slugEn: "icon-comfort",
    name: { de: "ICON Comfort", en: "ICON Comfort" },
    excerpt: {
      de: "Die langfristige Mietlösung in Modulbauweise — für Büro- und Verwaltungsgebäude, die dauerhaft ab 60 Monaten Komfort und Architektur auf hohem Niveau bieten sollen.",
      en: "The long-term rental solution in modular construction — for office and administration buildings that need lasting comfort and architecture from 60 months onward.",
    },
    heroLead: {
      de: "ICON Comfort vereint die Flexibilität eines Mietsystems mit dem Komfort eines auf Langzeitnutzung ausgelegten Modulgebäudes — für Empfangsgebäude, Büro- und Verwaltungsflächen mit hohem Anspruch an Architektur und Ausstattung.",
      en: "ICON Comfort combines the flexibility of a rental system with the comfort of a module building designed for long-term use — for reception buildings, office and administration space with high architectural and fit-out standards.",
    },
    categories: categoriesFor("icon-comfort"),
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "ICON Comfort ist die langfristige Mietlösung in Modulbauweise, ab etwa 60 Monaten Standzeit — für Büro- und Verwaltungsgebäude, beispielsweise Empfangsgebäude, als Neubau, Anbau oder Aufstockung.",
          "Leermodule, Funktionsmodule (WC-Bereiche) und Treppenmodule lassen sich zu vollständigen, mehrgeschossigen Bürogebäuden mit durchdachter Architektur kombinieren.",
        ],
      },
    ],
    technicalDescription: {
      sourceNote: FAGSI_SOURCE_NOTE,
      dimensions: [],
      sections: technicalSections({
        einsatzdauer: "Langfristige Lösung ab 60 Monate",
        einsatzart: "Büro- und Verwaltungsgebäude, bspw. Empfangsgebäude als Neubau, Anbau, Aufstockung",
        konstruktion: "Stahlrahmen mit Zusatzfassade",
        nutzlast: "3,0–5,0 kN/m²",
        schneelast: "1,5 kN/m²",
        brandschutz: "analog F30–F90",
        dach: "U ≤ 0,200 W/m²K (mit Zusatzdach)",
        wand: "U ≤ 0,240 W/m²K (mit Zusatzfassade)",
        boden: "U ≤ 0,2300 W/m²K (mit Estrich)",
        laenge: "14,000 m",
        breite: "3,000 / 3,250 m",
        aussenhoehe: "3,450 m",
        raumhoehe: "2,979 m",
      }),
      insulationTable: [],
      loadNote: "Nutzlast 3,0–5,0 kN/m², Dach-Schneelast im Standard 1,5 kN/m² (Verstärkung auf Anfrage). Die zulässige Schneelast am Aufstellort ist vor Bestellung zu prüfen.",
    },
  },
];

export function getProductBySlug(lang: "de" | "en", slug: string) {
  return sortiment.find((p) => (lang === "en" ? p.slugEn : p.slugDe) === slug);
}
