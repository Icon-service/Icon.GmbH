// Ported from the real icon_container_model posts — ICON's actual product-line
// naming. DE content is the original copy; EN is a short working translation.

export type ContainerModell = {
  id: string;
  slugDe: string;
  slugEn: string;
  name: string;
  tagline: { de: string; en: string };
  description: { de: string; en: string };
  features: { de: string[]; en: string[] };
};

export const containerModelle: ContainerModell[] = [
  {
    id: "eco",
    slugDe: "icon-eco",
    slugEn: "icon-eco",
    name: "ICON Eco",
    tagline: {
      de: "Wirtschaftliches Basismodul für Baustelle, Lager, einfache Büro- und Nebenräume.",
      en: "Economical base module for site, storage and simple office or ancillary use.",
    },
    description: {
      de: "ICON Eco ist als wirtschaftliche Einstiegslösung für funktionale Raumaufgaben gedacht. Das Modell eignet sich für Baustellenbüros, einfache Aufenthaltsbereiche, Lager- und Nebenräume sowie temporäre Nutzungen mit klar begrenztem Ausstattungsumfang.",
      en: "ICON Eco is the economical entry-level solution for functional space needs — site offices, simple common areas, storage and short-term use with a clearly limited fit-out scope.",
    },
    features: {
      de: [
        "robuste Basisausführung",
        "schnell verfügbar und gut kombinierbar",
        "standardisierte Tür- und Fenstervarianten",
        "geeignet für kurzfristige Projektstandorte",
      ],
      en: ["robust base build", "quickly available and easy to combine", "standardized door/window options", "suited to short-term project sites"],
    },
  },
  {
    id: "eco-plus",
    slugDe: "icon-eco-plus",
    slugEn: "icon-eco-plus",
    name: "ICON Eco Plus",
    tagline: {
      de: "Erweitertes Basismodul mit mehr Komfort, besserer Ausstattung und längerer Nutzungsdauer.",
      en: "Extended base module with more comfort and fit-out for longer use.",
    },
    description: {
      de: "ICON Eco Plus erweitert die wirtschaftliche Grundlogik um mehr Komfort und bessere technische Ausstattung. Das Modell eignet sich für mittel- bis längerfristige Nutzung, bei der Arbeitsumgebung, Klima, Licht und Innenausbau stärker zählen.",
      en: "ICON Eco Plus builds on the economical base with more comfort and better technical fit-out — for medium to longer-term use where climate, light and interior finish matter more.",
    },
    features: {
      de: [
        "verbesserte Dämm- und Ausstattungsoptionen",
        "erweiterte Elektro-, Heizungs- und Klimavorbereitung",
        "geeignet für Büro, Verwaltung, Sozialräume und Unterkunft",
        "kombinierbar zu größeren Anlagen",
      ],
      en: ["improved insulation and fit-out options", "extended electrical, heating and climate provisioning", "suited to office, admin, common rooms and housing", "combinable into larger complexes"],
    },
  },
  {
    id: "standard",
    slugDe: "icon-standard",
    slugEn: "icon-standard",
    name: "ICON Standard",
    tagline: {
      de: "Solide Standardlösung für Büro, Unterkunft, Sanitär, Technik und Projektstandorte.",
      en: "Solid standard solution for office, housing, sanitary, technical and project sites.",
    },
    description: {
      de: "ICON Standard bildet die flexible Mitte der Modellpalette. Das Modell ist für viele typische Container- und Modulbauprojekte geeignet und lässt sich über Grundriss, Ausstattung und technische Optionen auf den Einsatzbereich abstimmen.",
      en: "ICON Standard is the flexible middle of the range — suited to most typical container and modular projects, tunable by layout, fit-out and technical options.",
    },
    features: {
      de: [
        "breites Anwendungsspektrum",
        "gute Balance aus Kosten, Komfort und Ausstattung",
        "geeignet für Einzelmodule und Anlagen",
        "Basis für viele kommunale und gewerbliche Projekte",
      ],
      en: ["broad range of applications", "good balance of cost, comfort and fit-out", "suited to single units and complexes", "base for many municipal and commercial projects"],
    },
  },
  {
    id: "comfort",
    slugDe: "icon-comfort",
    slugEn: "icon-comfort",
    name: "ICON Comfort",
    tagline: {
      de: "Höherwertige Raumlösung für lange Nutzung, repräsentative Bereiche und anspruchsvolle Innenräume.",
      en: "Higher-grade space solution for long-term use and demanding interiors.",
    },
    description: {
      de: "ICON Comfort richtet sich an Projekte, bei denen Aufenthaltsqualität, Innenraumwirkung, Akustik, Licht und Fassadengestaltung stärker im Vordergrund stehen. Das Modell eignet sich besonders für Verwaltung, Schulen, Kitas und langfristige Interim-Gebäude.",
      en: "ICON Comfort targets projects where interior quality, acoustics, light and facade design matter most — especially administration, schools, kindergartens and long-term interim buildings.",
    },
    features: {
      de: [
        "hochwertiger Innenausbau möglich",
        "größere Fenster- und Fassadenoptionen",
        "gute Akustik- und Komfortausstattung",
        "geeignet für mehrgeschossige Modulgebäude nach technischer Prüfung",
      ],
      en: ["high-quality interior fit-out available", "larger window and facade options", "good acoustics and comfort fit-out", "suited to multi-storey modular buildings, subject to engineering review"],
    },
  },
  {
    id: "protect",
    slugDe: "icon-protect",
    slugEn: "icon-protect",
    name: "ICON Protect",
    tagline: {
      de: "Gehärtete Sonderlösung für sicherheitsrelevante Nutzung, Technik und geschützte Aufenthaltsbereiche.",
      en: "Hardened special solution for security-relevant use, technical and protected spaces.",
    },
    description: {
      de: "ICON Protect ist als projektbezogene Sonderlösung für erhöhte Schutz- und Sicherheitsanforderungen gedacht. Die konkrete Ausführung wird abhängig von Nutzung, Standort, Risikoanalyse und technischen Vorgaben geplant.",
      en: "ICON Protect is a project-specific special solution for elevated protection and security requirements. The exact configuration is planned per use, site, risk analysis and technical spec.",
    },
    features: {
      de: [
        "verstärkte Konstruktion und projektbezogene Schutzoptionen",
        "geeignet für Technik, Unterkunft, Arbeits- und Bereitschaftsräume",
        "Integration von Kommunikation, Zutritt, Klima und Energie möglich",
        "technische Klärung nach konkreter Anforderung",
      ],
      en: ["reinforced construction with project-specific protection options", "suited to technical, accommodation, work and standby rooms", "integration of comms, access, climate and power available", "technical scope clarified per specific requirement"],
    },
  },
  {
    id: "technik",
    slugDe: "icon-technik",
    slugEn: "icon-technik",
    name: "ICON Technik",
    tagline: {
      de: "Technik- und Betriebscontainer für Energie, Steuerung, Lagerung, IT, Anlagen und Sondertechnik.",
      en: "Technical and operations container for power, control, storage, IT and special equipment.",
    },
    description: {
      de: "ICON Technik schafft robuste Räume für technische Anlagen und betriebliche Infrastruktur. Konstruktion, Ausbau und Öffnungen werden auf Lasten, Klima, Wartung, Verkabelung und Sicherheit abgestimmt.",
      en: "ICON Technik provides robust space for technical equipment and operational infrastructure, with construction and openings matched to load, climate, maintenance and safety needs.",
    },
    features: {
      de: [
        "für Energie, Steuerung, IT, Lagerung und Sondertechnik",
        "optionale Lüftungs-, Klima- und Elektroausstattung",
        "robuste Außenhülle und definierte Wartungszugänge",
        "kombinierbar mit Schutz- oder Stahlbaukomponenten",
      ],
      en: ["for power, control, IT, storage and special equipment", "optional ventilation, climate and electrical fit-out", "robust exterior shell with defined maintenance access", "combinable with protective or steel-construction components"],
    },
  },
];

export function getModellBySlug(lang: "de" | "en", slug: string) {
  return containerModelle.find((m) => (lang === "en" ? m.slugEn : m.slugDe) === slug);
}
