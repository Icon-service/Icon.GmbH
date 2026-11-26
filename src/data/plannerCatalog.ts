// Container catalog for the client-side Grundrissplaner and the Sortiment
// pages. Structured after FAGSI's own technical datasheet
// (Baureihe -> Kategorie -> benannter Typ mit echten Maßen) instead of an
// abstract, product-independent foot-size ladder. Both the planner
// (GrundrissPlaner.astro) and the marketing pages (sortiment.ts) read from
// PLANNER_BAUREIHEN so the tool and the product pages can never drift apart.

export type PlannerType = {
  code: string;
  name: string;
  /** metres */
  width: number;
  /** metres */
  length: number;
};

export type PlannerCategory = {
  key: string;
  label: string;
  types: PlannerType[];
};

export type PlannerBaureihe = {
  id: string;
  label: string;
  /** short label used inside the drawn block */
  shortLabel: string;
  abmessung: { laenge: string; breite: string; aussenhoehe: string; raumhoehe: string };
  categories: PlannerCategory[];
};

export const PLANNER_BAUREIHEN: PlannerBaureihe[] = [
  {
    id: "icon-eco",
    label: "ICON Eco",
    shortLabel: "Eco",
    abmessung: { laenge: "6,058 m", breite: "2,438 m", aussenhoehe: "2,800 m", raumhoehe: "2,500 m" },
    categories: [
      {
        key: "leercontainer",
        label: "Leercontainer",
        types: [
          { code: "ECO-10", name: "Leercontainer", width: 2.438, length: 6.058 },
          { code: "ECO-20", name: "Leercontainer mit Trennwand", width: 2.438, length: 6.058 },
          { code: "ECO-50", name: "Leercontainer mit Trennwand + WC", width: 2.438, length: 6.058 },
          { code: "ECO-F1", name: "Flurcontainer", width: 2.438, length: 4.891 },
        ],
      },
      {
        key: "sanitaer",
        label: "Sanitärcontainer",
        types: [
          { code: "ECO-52", name: "Schwarz-Weiß-Container", width: 2.438, length: 6.058 },
          { code: "ECO-60", name: "Büroversorger mit Flur", width: 2.438, length: 6.058 },
          { code: "ECO-71", name: "Sanitärcontainer mit Flur", width: 2.438, length: 6.058 },
          { code: "ECO-73", name: "Duschcontainer mit Flur", width: 2.438, length: 6.058 },
          { code: "ECO-83", name: "Sanitärcontainer Herren WC mit Flur", width: 2.438, length: 6.058 },
        ],
      },
    ],
  },
  {
    id: "icon-basic",
    label: "ICON Basic",
    shortLabel: "Basic",
    abmessung: { laenge: "6,058–10,000 m", breite: "2,500 / 3,000 m", aussenhoehe: "2,800 m", raumhoehe: "2,500 m" },
    categories: [
      {
        key: "leercontainer",
        label: "Leercontainer",
        types: [
          { code: "IB-6.1", name: "Leercontainer", width: 2.5, length: 6.058 },
          { code: "IB-6.2", name: "Leercontainer", width: 3.0, length: 6.058 },
          { code: "IB-1.1", name: "Leercontainer mit Trennwand", width: 2.5, length: 6.058 },
          { code: "IB-1.2", name: "Leercontainer mit Flur", width: 3.0, length: 6.058 },
          { code: "IB-8.1", name: "Flurcontainer", width: 2.5, length: 5.015 },
          { code: "IB-8.3", name: "Flurcontainer", width: 2.5, length: 7.53 },
        ],
      },
      {
        key: "treppencontainer",
        label: "Treppencontainer",
        types: [
          { code: "IB-2.10", name: "Treppencontainer EG", width: 3.0, length: 6.058 },
          { code: "IB-2.12", name: "Treppencontainer ZG", width: 3.0, length: 6.058 },
          { code: "IB-2.11", name: "Treppencontainer OG", width: 3.0, length: 6.058 },
          { code: "IB-2.7", name: "Treppenturm EG+ZG", width: 2.5, length: 4.5 },
          { code: "IB-2.9", name: "Treppenpodest OG", width: 2.5, length: 1.36 },
        ],
      },
      {
        key: "sanitaer",
        label: "Sanitärcontainer",
        types: [
          { code: "IB-4.88", name: "Sanitärcontainer Damen WC", width: 3.0, length: 6.058 },
          { code: "IB-4.99", name: "Sanitärcontainer Herren WC", width: 3.0, length: 6.058 },
          { code: "IB-4.7", name: "Leercontainer mit Flur + WC", width: 3.0, length: 6.058 },
          { code: "IB-5.11", name: "Sanitärcontainer mit Dusche + Flur", width: 3.0, length: 6.058 },
          { code: "IB-4.32", name: "Sanitärcontainer WC mit Flur", width: 3.0, length: 6.058 },
          { code: "IB-4.3", name: "Sanitärcontainer Damen WC mit Flur", width: 3.0, length: 6.058 },
          { code: "IB-4.8", name: "Damen WC mit Flur", width: 2.5, length: 6.058 },
          { code: "IB-4.9", name: "Herren WC mit Flur", width: 2.5, length: 6.058 },
          { code: "IB-4.1", name: "Leercontainer mit Flur + WC", width: 2.5, length: 6.058 },
          { code: "IB-5.1", name: "Büroversorger mit Flur", width: 2.5, length: 6.058 },
          { code: "IB-4.31", name: "Damen und Herren WC", width: 2.5, length: 6.058 },
          { code: "IB-4.2", name: "Sanitärcontainer mit WC", width: 2.5, length: 6.058 },
          { code: "IB-4.3-S", name: "Sanitärcontainer mit Flur", width: 3.0, length: 6.058 },
          { code: "IB-4.42", name: "Duschcontainer mit Flur", width: 2.5, length: 6.058 },
          { code: "IB-1.3", name: "Leercontainer mit Flur (Anlage)", width: 3.0, length: 10.0 },
          { code: "IB-5.3", name: "Leercontainer mit Flur und Sanitär (Anlage)", width: 3.0, length: 10.0 },
        ],
      },
    ],
  },
  {
    id: "icon-basic-2",
    label: "ICON Basic 2.0",
    shortLabel: "Basic 2.0",
    abmessung: { laenge: "6,058 m", breite: "2,500 / 3,000 m", aussenhoehe: "2,800 m", raumhoehe: "2,500 m" },
    categories: [
      {
        key: "leercontainer",
        label: "Leercontainer",
        types: [
          { code: "IB2-6.2G", name: "Leercontainer mit Außenwand", width: 3.0, length: 6.058 },
          { code: "IB2-6.2R", name: "Leercontainer einseitig geschlossen", width: 3.0, length: 6.058 },
          { code: "IB2-6.2O", name: "Leercontainer ohne Außenwand", width: 3.0, length: 6.058 },
          { code: "IB2-6.1G", name: "Leercontainer mit Außenwand", width: 2.5, length: 6.058 },
        ],
      },
      {
        key: "treppencontainer",
        label: "Treppencontainer",
        types: [
          { code: "IB2-2.10", name: "Treppencontainer EG", width: 3.0, length: 6.058 },
          { code: "IB2-2.12", name: "Treppencontainer ZG", width: 3.0, length: 6.058 },
          { code: "IB2-2.11", name: "Treppencontainer OG", width: 3.0, length: 6.058 },
        ],
      },
      {
        key: "sanitaer-bildung",
        label: "Sanitärcontainer für den Bildungssektor",
        types: [
          { code: "IB2-9.1", name: "Sanitärcontainer Kita (Mädchen und Jungen)", width: 3.0, length: 6.058 },
          { code: "IB2-9.2", name: "Sanitärcontainer Schule (bis 60 Mädchen)", width: 3.0, length: 6.058 },
          { code: "IB2-9.5", name: "Sanitärcontainer Schule bis 20x Lehrerinnen", width: 3.0, length: 6.058 },
          { code: "IB2-9.6", name: "Sanitärcontainer Schule (100 Jungen +10x Lehrer)", width: 3.0, length: 6.058 },
          { code: "IB2-9.12", name: "Sanitärcontainer Schule (100 Mädchen +10x Lehrerinnen)", width: 3.0, length: 6.058 },
          { code: "IB2-9.13", name: "Sanitärcontainer Schule (100 Mädchen +10x Lehrerinnen)", width: 3.0, length: 6.058 },
        ],
      },
      {
        key: "sanitaer-buero",
        label: "Sanitärcontainer für Büro und Verwaltung",
        types: [
          { code: "IB2-9.7", name: "Sanitärcontainer Frauen WC", width: 3.0, length: 6.058 },
          { code: "IB2-9.8", name: "Sanitärcontainer Herren WC", width: 3.0, length: 6.058 },
          { code: "IB2-9.9", name: "Sanitärcontainer Behinderten WC", width: 3.0, length: 6.058 },
          { code: "IB2-9.10", name: "Sanitärcontainer Herren WC mit Vorraum", width: 3.0, length: 6.058 },
          { code: "IB2-9.11", name: "Sanitärcontainer Frauen WC mit Vorraum", width: 3.0, length: 6.058 },
        ],
      },
    ],
  },
  {
    id: "icon-energy",
    label: "ICON Energy",
    shortLabel: "Energy",
    abmessung: { laenge: "6,058 / 14,646 m", breite: "3,000 m / 3,400 m", aussenhoehe: "3,150 m", raumhoehe: "2,750 m" },
    categories: [
      {
        key: "leercontainer",
        label: "Leercontainer",
        types: [
          { code: "IE-R6058-1", name: "Leercontainer mit Außenwand", width: 3.0, length: 6.058 },
          { code: "IE-R6058-2", name: "Leercontainer mit Außenwand", width: 3.0, length: 6.058 },
          { code: "IE-R14646-1", name: "Leercontainer mit Außenwand (XL)", width: 3.0, length: 14.646 },
          { code: "IE-R14646-2", name: "Leercontainer mit Außenwand (XL)", width: 3.0, length: 14.646 },
        ],
      },
      {
        key: "treppencontainer",
        label: "Treppencontainer",
        types: [
          { code: "IE-T8573-1", name: "Treppencontainer EG", width: 3.4, length: 8.573 },
          { code: "IE-T8573-2", name: "Treppencontainer ZG", width: 3.4, length: 8.573 },
          { code: "IE-T8573-3", name: "Treppencontainer OG", width: 3.4, length: 8.573 },
          { code: "IE-R6058-5", name: "Treppengegenstück", width: 3.4, length: 6.058 },
        ],
      },
      {
        key: "sanitaer-bildung",
        label: "Sanitärcontainer für den Bildungssektor",
        types: [
          { code: "IE-S6058-1", name: "Sanitärcontainer Kita", width: 3.0, length: 6.058 },
          { code: "IE-S6058-11", name: "Sanitärcontainer Kinderkrippe", width: 3.0, length: 6.058 },
          { code: "IE-S6058-4", name: "Sanitärcontainer Schule Lehrer(innen)", width: 3.0, length: 6.058 },
          { code: "IE-S6058-5", name: "Sanitärcontainer Schule bis 20x Lehrerinnen", width: 3.0, length: 6.058 },
          { code: "IE-S6058-6", name: "Sanitärcontainer Schule bis 15 Lehrer", width: 3.0, length: 6.058 },
        ],
      },
      {
        key: "sanitaer-buero",
        label: "Sanitärcontainer für Büro und Verwaltung",
        types: [
          { code: "IE-S6058-7", name: "Sanitärcontainer Frauen WC", width: 3.0, length: 6.058 },
          { code: "IE-S6058-8", name: "Sanitärcontainer Herren WC", width: 3.0, length: 6.058 },
          { code: "IE-S6058-10", name: "Sanitärcontainer Behinderten WC", width: 3.0, length: 6.058 },
          { code: "IE-S6058-12", name: "Sanitärcontainer WC und Technik", width: 3.0, length: 6.058 },
          { code: "IE-S6058-13", name: "Sanitärcontainer Herren WC", width: 3.0, length: 6.058 },
          { code: "IE-S6058-14", name: "Sanitärcontainer Frauen WC", width: 3.0, length: 6.058 },
        ],
      },
    ],
  },
  {
    id: "icon-comfort",
    label: "ICON Comfort",
    shortLabel: "Comfort",
    abmessung: { laenge: "14,000 m", breite: "3,000 / 3,250 m", aussenhoehe: "3,450 m", raumhoehe: "2,979 m" },
    categories: [
      {
        key: "leermodule",
        label: "Leermodule",
        types: [
          { code: "IC-01", name: "Leermodul", width: 3.0, length: 14.0 },
          { code: "IC-02", name: "Leermodul mit Außenwand", width: 3.0, length: 14.0 },
        ],
      },
      {
        key: "funktionsmodule",
        label: "Funktionsmodule",
        types: [
          { code: "IC-04", name: "Funktionsmodul Damen WC", width: 3.25, length: 14.0 },
          { code: "IC-05", name: "Funktionsmodul Herren WC", width: 3.25, length: 14.0 },
          { code: "IC-06", name: "Funktionsmodul Behinderten WC", width: 3.25, length: 14.0 },
          { code: "IC-13", name: "Funktionsmodul Damen und Herren WC", width: 3.25, length: 14.0 },
        ],
      },
      {
        key: "treppenmodule",
        label: "Treppenmodule",
        types: [{ code: "IC-10", name: "Treppenmodul", width: 3.25, length: 14.0 }],
      },
    ],
  },
];
