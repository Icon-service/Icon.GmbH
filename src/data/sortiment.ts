import type { Block } from "./leistungen";

// Content ported from the real icon_product posts. DE content is the
// original copy; EN is a short working translation for now.

export type Variant = {
  code: string;
  title: string;
  text: string;
  einsatz: string;
  planung: string;
};

export type SortimentProduct = {
  id: string;
  slugDe: string;
  slugEn: string;
  name: { de: string; en: string };
  excerpt: { de: string; en: string };
  heroLead: { de: string; en: string };
  introExtra?: string;
  variants: Variant[];
  detailBlocksDe: Block[];
};

export const sortiment: SortimentProduct[] = [
  {
    id: "buerocontainer",
    slugDe: "buerocontainer",
    slugEn: "office-containers",
    name: { de: "Bürocontainer", en: "Office Containers" },
    excerpt: {
      de: "Bürocontainer schaffen schnell nutzbare Arbeits- und Verwaltungsräume für Baustellen, Projektstandorte, Industrie und temporäre Erweiterungen.",
      en: "Office containers provide quickly usable work and administrative space for construction sites, project locations, industry and temporary expansion.",
    },
    heroLead: {
      de: "Bürocontainer sind die richtige Lösung, wenn Arbeitsplätze, Bauleitung, Besprechung, Empfang oder Verwaltung kurzfristig und sauber organisiert werden müssen. Sie können einzeln eingesetzt oder zu größeren Büroanlagen kombiniert werden.",
      en: "Office containers are the right solution when workstations, site management, meetings, reception or administration need to be organized quickly and cleanly.",
    },
    introExtra:
      "Wichtig sind Tageslicht, Raumklima, Elektroausstattung, Möblierungslogik, Schallschutz und eine sinnvolle Wegeführung. Je nach Projekt können kompakte Einheiten, 20-Fuß-Container, XL-Breiten oder Sonderbau sinnvoll sein.",
    variants: [
      { code: "10'", title: "Kompakte Büroeinheit", text: "Für einzelne Arbeitsplätze, Kontrollpunkte oder kleine Bauleitungsbüros mit begrenzter Stellfläche.", einsatz: "Arbeitsplatz, Pförtnerfunktion, Projektbüro", planung: "kurze Wege, schnelle Stellung" },
      { code: "16'", title: "Erweiterte Büroeinheit", text: "Mehr Platz für zwei Arbeitsplätze, kleine Besprechungen oder eine getrennte Büro- und Ablagezone.", einsatz: "Bauleitung, Verwaltung, Besprechung", planung: "mehr Fläche bei kompakter Logistik" },
      { code: "20'", title: "Standard-Bürocontainer", text: "Vollwertige temporäre Bürofläche mit guter Möblierbarkeit und flexibler Nutzung.", einsatz: "Projektbüro, Verwaltung, Empfang", planung: "Standardformat, gut kombinierbar" },
      { code: "20' XL", title: "XL-Bürocontainer", text: "Breitere Ausführung für komfortablere Arbeitsplätze und bessere Bewegungsflächen.", einsatz: "Büro, Besprechung, Verwaltung", planung: "mehr Breite, bessere Raumwirkung" },
      { code: "Sonderbau", title: "Bürocontainer als Sonderbau", text: "Individuelle Maße, Fensterachsen, Türen, Ausbau, Klima, Datenanschlüsse oder Fassadenanpassungen.", einsatz: "projektspezifische Büroflächen", planung: "individuelle technische Abstimmung" },
    ],
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "Ein guter Bürocontainer muss nicht nur schnell verfügbar sein, sondern im Alltag funktionieren. Dazu gehören ausreichend Licht, passende Steckdosenpositionen, Heizung oder Kühlung, robuste Oberflächen und eine Raumaufteilung, die zu den Arbeitsabläufen passt.",
          "Bei größeren Projekten können mehrere Bürocontainer mit Fluren, Sanitärbereichen, Aufenthaltsräumen oder Treppenanlagen kombiniert werden. Dadurch entstehen strukturierte Büroanlagen, die temporär genutzt und später erweitert oder versetzt werden können.",
        ],
      },
    ],
  },
  {
    id: "wohn-unterkunftscontainer",
    slugDe: "wohn-und-unterkunftscontainer",
    slugEn: "residential-accommodation-containers",
    name: { de: "Wohn- und Unterkunftscontainer", en: "Residential & Accommodation Containers" },
    excerpt: {
      de: "Wohn- und Unterkunftscontainer bieten temporäre Wohnflächen für Personal, Projektstandorte, kommunale Bedarfe und Übergangslösungen.",
      en: "Residential and accommodation containers provide temporary living space for staff, project sites, municipal needs and transitional housing.",
    },
    heroLead: {
      de: "Wohn- und Unterkunftscontainer werden eingesetzt, wenn sichere und funktionale Unterbringung kurzfristig benötigt wird. Sie eignen sich für Personalwohnen, Projektstandorte, kommunale Unterkünfte oder temporäre Wohnanlagen.",
      en: "Residential and accommodation containers are used when safe, functional housing is needed at short notice — for staff, project sites, municipal or temporary housing.",
    },
    introExtra:
      "Die Planung umfasst Schlafbereiche, Sanitärnähe, Aufenthaltsflächen, Erschließung, Brandschutz, technische Versorgung und Betreiberanforderungen. Häufig sind 20-Fuß- oder XL-Lösungen sinnvoller als kleine Einzelgrößen.",
    variants: [
      { code: "20'", title: "Wohncontainer 20 Fuß", text: "Standardisierte Unterkunftseinheit für Schlafen, Aufenthalt oder kombinierte Nutzung.", einsatz: "Personalunterkunft, Projektstandort", planung: "klare Grundrisse, kombinierbar" },
      { code: "20' XL", title: "Wohncontainer XL", text: "Mehr Breite und bessere Bewegungsflächen für komfortablere Unterbringung.", einsatz: "temporäres Wohnen, kommunale Bedarfe", planung: "komfortablere Möblierung" },
      { code: "Anlage", title: "Unterkunftsanlage", text: "Kombination aus Wohn-, Sanitär-, Aufenthalts-, Verwaltungs- und Technikbereichen.", einsatz: "größere Unterkünfte", planung: "Erschließung und Betrieb mitdenken" },
      { code: "Sonderbau", title: "Unterkunft als Sonderbau", text: "Individuelle Raumprogramme, besondere Ausstattung oder Betreiberanforderungen.", einsatz: "spezielle Unterkunftsprojekte", planung: "projektbezogene Abstimmung" },
    ],
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "Bei Unterkunftslösungen zählen nicht nur einzelne Räume, sondern das Zusammenspiel aus Schlafen, Waschen, Aufenthalt, Verwaltung, Wegen und technischer Versorgung. Eine gute Planung reduziert spätere Betriebsprobleme.",
          "Je nach Nutzung können einfache Schlafräume, komfortablere Wohnbereiche, gemeinschaftliche Aufenthaltsräume oder komplette Anlagen sinnvoll sein.",
        ],
      },
    ],
  },
  {
    id: "sanitaercontainer",
    slugDe: "sanitaercontainer",
    slugEn: "sanitary-containers",
    name: { de: "Sanitärcontainer", en: "Sanitary Containers" },
    excerpt: {
      de: "Sanitärcontainer bündeln WC, Dusche, Waschbereiche und Umkleiden für Baustellen, Unterkünfte, Veranstaltungen und Anlagen.",
      en: "Sanitary containers combine WC, shower, washing and changing areas for construction sites, accommodation, events and complexes.",
    },
    heroLead: {
      de: "Sanitärcontainer stellen WC-, Dusch-, Wasch- und Umkleidebereiche dort bereit, wo feste Infrastruktur fehlt oder temporär erweitert werden muss. Sie werden einzeln genutzt oder in Containeranlagen eingebunden.",
      en: "Sanitary containers provide WC, shower, washing and changing facilities wherever fixed infrastructure is missing or needs temporary expansion.",
    },
    introExtra:
      "Wichtig sind Wasser- und Abwasserführung, Lüftung, Reinigung, robuste Oberflächen, Frostschutz, Nutzerfrequenz und die Trennung von Bereichen. Die passende Variante richtet sich nach Personenanzahl und Nutzungsart.",
    variants: [
      { code: "10'", title: "Kompakter Sanitärcontainer", text: "Für kleine Standorte, kurze Wege oder ergänzende Sanitärpunkte mit begrenzter Nutzerzahl.", einsatz: "WC, Waschplatz, kleiner Standort", planung: "kompakt, schnell anschließbar" },
      { code: "16'", title: "Sanitäreinheit mit mehr Kapazität", text: "Für kombinierte WC- und Waschbereiche oder kleinere Duschlösungen.", einsatz: "Baustelle, Betrieb, temporäre Nutzung", planung: "mehr Nutzerkapazität" },
      { code: "20'", title: "Sanitärcontainer 20 Fuß", text: "Standardlösung für WC, Dusche, Waschbereiche oder Umkleiden.", einsatz: "Sanitärversorgung, Duschbereich", planung: "standardisiert, gut kombinierbar" },
      { code: "20' XL", title: "Sanitärcontainer XL", text: "Mehr Breite für komfortablere Kabinen und höhere Ausstattung.", einsatz: "intensivere Nutzung", planung: "komfortabler Betrieb" },
      { code: "Sonderbau", title: "Sanitärcontainer als Sonderbau", text: "Individuelle Kabinenaufteilung, robuste Oberflächen oder projektbezogene Technik.", einsatz: "besondere Betreiberanforderungen", planung: "Sanitärplanung nach Bedarf" },
    ],
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "Die passende Sanitärlösung hängt von Nutzerzahl, Nutzungsdauer, Reinigungsintervallen und Anschlussmöglichkeiten ab. Ein kleiner Standort benötigt eine andere Lösung als eine Unterkunftsanlage oder ein stark frequentierter Baustellenbereich.",
          "Für größere Anlagen werden Sanitärcontainer oft mit Wohn-, Aufenthalts- oder Bürobereichen kombiniert. Dadurch entstehen kurze Wege und eine klare Versorgung innerhalb der gesamten Containeranlage.",
        ],
      },
    ],
  },
  {
    id: "schulcontainer-bildungsgebaeude",
    slugDe: "schulcontainer-und-bildungsgebaeude",
    slugEn: "school-containers-education-buildings",
    name: { de: "Schulcontainer und Bildungsgebäude", en: "School Containers & Education Buildings" },
    excerpt: {
      de: "Klassenräume, Kitas, Interim-Flächen und modulare Bildungsgebäude.",
      en: "Classrooms, kindergartens, interim space and modular education buildings.",
    },
    heroLead: {
      de: "Schulcontainer und Bildungsgebäude werden nicht nur nach Containermaßen geplant, sondern nach Raumprogramm, Nutzerführung, Akustik, Licht, Lüftung, Sanitär, Brandschutz und Genehmigungsfähigkeit.",
      en: "School containers and education buildings are planned not just by container size, but by room programme, acoustics, light, ventilation, sanitary provision, fire protection and approval requirements.",
    },
    variants: [
      { code: "Klassenraum", title: "Klassenraum-Modul", text: "Für temporäre oder dauerhafte Unterrichtsflächen mit klarer Raumstruktur.", einsatz: "Schule und Bildung", planung: "Akustik, Licht, Lüftung und Sanitär klären" },
      { code: "Kita", title: "Kita- und Betreuungsmodul", text: "Für Gruppenräume, Nebenräume, Sanitärbereiche und kindgerechte Raumkonzepte.", einsatz: "Kita und Betreuung", planung: "Raumprogramm, Sanitär und Erschließung klären" },
      { code: "Interim", title: "Interim-Gebäude", text: "Ersatzflächen während Sanierung, Umbau oder Kapazitätserweiterung.", einsatz: "temporäre Bildungsfläche", planung: "Standzeit, Genehmigung und Montage klären" },
      { code: "Sonderbau", title: "Individuelles Bildungsgebäude", text: "Angepasste Gebäudegrößen, Fachräume, Verwaltung, Mensa, Flure, Treppen und technische Sonderanforderungen.", einsatz: "komplexes Raumprogramm", planung: "Grundriss, Technik und Brandschutz klären" },
    ],
    detailBlocksDe: [
      {
        type: "paragraphs",
        text: [
          "Ob einzelner Klassenraum, Kita-Erweiterung oder mehrteilige Interim-Schule: Entscheidend sind klare Grundrisse, robuste Ausstattung, gute Aufenthaltsqualität und eine technische Planung, die Behörden, Nutzer und Projektbeteiligte nachvollziehen können.",
        ],
      },
      {
        type: "columns",
        columns: [
          {
            heading: "Typische Einsatzbereiche",
            items: ["Schulen und Klassenräume", "Kitas und Betreuungsgebäude", "Interim während Sanierung", "Verwaltung und Nebenräume", "Ganztag, Mensa und Fachräume"],
          },
          {
            heading: "Planungshinweise",
            items: [
              "Raumprogramm, Nutzerzahl und Standort klären",
              "Akustik, Licht, Lüftung, Sanitär und Brandschutz früh planen",
              "Grundrisse, Ansichten, Schnitte und Technikdetails vorbereiten",
              "Downloads für Grundrissbeispiele und Datenblätter ergänzen",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "baustellencontainer",
    slugDe: "baustellencontainer",
    slugEn: "site-containers",
    name: { de: "Baustellencontainer", en: "Site Containers" },
    excerpt: {
      de: "Baustellencontainer organisieren Bauleitung, Sozialräume, Umkleiden, Sanitär, Lager und Material direkt am Projektstandort.",
      en: "Site containers organize management, welfare, changing, sanitary and storage facilities right at the project site.",
    },
    heroLead: {
      de: "Baustellencontainer schaffen die notwendige Infrastruktur auf dem Baufeld: Bauleitung, Besprechung, Sozialräume, Umkleiden, Sanitär, Lager oder Materialausgabe. Sie müssen robust, schnell verfügbar und praktisch sein.",
      en: "Site containers provide the infrastructure a construction site needs: management, meetings, welfare, changing, sanitary or storage — robust, quickly available and practical.",
    },
    introExtra:
      "Je nach Projekt werden einzelne Container oder komplette Baustelleneinrichtungen geplant. Entscheidend sind Stellfläche, Kran- und Zufahrtslogik, Anschlüsse, Wegeführung, Sicherheit und die Anpassung an Bauphasen.",
    variants: [
      { code: "Büro", title: "Bauleitungs- und Projektbüro", text: "Arbeits- und Besprechungsräume für Bauleitung, Projektsteuerung und Dokumentation.", einsatz: "Bauleitung, Besprechung", planung: "Büroflächen nahe am Baufeld" },
      { code: "Sozial", title: "Sozial- und Aufenthaltscontainer", text: "Pausen-, Umkleide- und Aufenthaltsbereiche für Mitarbeitende.", einsatz: "Sozialräume, Pausen", planung: "robuste Nutzung" },
      { code: "Sanitär", title: "Sanitärbereich für Baustellen", text: "WC-, Dusch- und Waschbereiche als Ergänzung zur Baustelleneinrichtung.", einsatz: "Sanitärversorgung", planung: "Anschlusslogik beachten" },
      { code: "Lager", title: "Lager- und Materialcontainer", text: "Sichere Lagerung für Werkzeuge, Material und Ausrüstung.", einsatz: "Material, Werkzeug", planung: "sicher und zugänglich" },
      { code: "Anlage", title: "Komplette Baustelleneinrichtung", text: "Kombination aus Büro, Sozial, Sanitär, Lager und Technik.", einsatz: "größere Baustellen", planung: "Bauphasen abstimmen" },
    ],
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "Eine gute Baustelleneinrichtung unterstützt den Bauablauf. Sie schafft klare Anlaufstellen, kurze Wege und sichere Lagerflächen. Gleichzeitig muss sie flexibel bleiben, weil sich Baufelder, Zufahrten und Projektphasen verändern können.",
          "ICON kann einzelne Einheiten oder kombinierte Anlagen strukturieren. Dabei geht es nicht nur um Container, sondern auch um Logistik, Montage, Anschlüsse und eine nachvollziehbare Dokumentation.",
        ],
      },
    ],
  },
  {
    id: "aufenthalts-sozialraeume",
    slugDe: "aufenthalts-und-sozialraeume",
    slugEn: "break-and-welfare-rooms",
    name: { de: "Aufenthalts- und Sozialräume", en: "Break & Welfare Rooms" },
    excerpt: {
      de: "Aufenthalts- und Sozialräume bieten Pausen-, Umkleide-, Kantinen- und Gemeinschaftsflächen für intensive temporäre Nutzung.",
      en: "Break and welfare rooms provide space for breaks, changing, canteens and shared use under intensive temporary conditions.",
    },
    heroLead: {
      de: "Aufenthalts- und Sozialcontainer schaffen Räume, in denen Menschen Pause machen, sich umkleiden, essen oder organisatorische Abläufe erledigen. Sie werden auf Baustellen, in Industriearealen, Unterkünften oder temporären Anlagen eingesetzt.",
      en: "Break and welfare containers give people a place to rest, change, eat or handle daily routines — used on construction sites, industrial areas, accommodation and temporary complexes.",
    },
    introExtra:
      "Wichtig sind robuste Oberflächen, gute Reinigung, angenehmes Raumklima, ausreichend Bewegungsfläche und eine Aufteilung, die zu Nutzerzahl und Betriebsablauf passt.",
    variants: [
      { code: "Pause", title: "Pausen- und Aufenthaltsraum", text: "Temporärer Aufenthaltsbereich für Mitarbeitende, Besucher oder Bewohner.", einsatz: "Pause, Aufenthalt", planung: "Möblierung beachten" },
      { code: "Umkleide", title: "Umkleidecontainer", text: "Robuste Umkleidebereiche mit Spinden, Sitzflächen und optionaler Sanitärnähe.", einsatz: "Umkleiden, Personal", planung: "Reinigung mitdenken" },
      { code: "Kantine", title: "Kantinen- oder Essbereich", text: "Größere Aufenthaltsfläche für Essen, Pausen und gemeinschaftliche Nutzung.", einsatz: "Kantine, Gemeinschaft", planung: "Nutzerzahl klären" },
      { code: "Anlage", title: "Sozialbereich als Anlage", text: "Kombination aus Aufenthalts-, Umkleide-, Sanitär- und Verwaltungsbereichen.", einsatz: "Baustellen, Industrie", planung: "Bereiche verbinden" },
      { code: "Sonderbau", title: "Sozialräume als Sonderbau", text: "Individuelle Raumaufteilung, Oberflächen, Ausstattung oder Betreiberanforderungen.", einsatz: "projektspezifisch", planung: "Nutzung abstimmen" },
    ],
    detailBlocksDe: [
      {
        type: "paragraphs",
        heading: "Produktbeschreibung und Einsatzbereiche",
        text: [
          "Sozialräume müssen im Alltag funktionieren. Zu kleine oder schlecht organisierte Räume führen schnell zu Engpässen. Deshalb werden Nutzerzahl, Aufenthaltsdauer, Reinigung, Möblierung und Nähe zu Sanitärbereichen früh betrachtet.",
          "Je nach Projekt können einfache Pausencontainer, Umkleiden, Kantinenbereiche oder vollständige Sozialanlagen sinnvoll sein.",
        ],
      },
    ],
  },
];

export function getProductBySlug(lang: "de" | "en", slug: string) {
  return sortiment.find((p) => (lang === "en" ? p.slugEn : p.slugDe) === slug);
}
