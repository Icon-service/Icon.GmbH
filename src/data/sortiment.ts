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

export type DimensionRow = {
  size: string;
  outer: string;
  inner: string;
  area: string;
  weight: string;
};

export type SpecSection = {
  heading: string;
  rows: { label: string; value: string }[];
};

export type InsulationRow = {
  material: string;
  thickness: string;
  uValue: string;
};

export type TechnicalDescription = {
  /** where the placeholder figures below came from, shown as an on-page note */
  sourceNote: string;
  dimensions: DimensionRow[];
  sections: SpecSection[];
  /** wall-panel insulation build-up — same options across the whole range */
  insulationTable: InsulationRow[];
  loadNote: string;
  /** product-specific extras, e.g. sanitary fittings or approval notes */
  extraSections?: SpecSection[];
};

// Same for every product in the range, per ICON: the panel build-up options
// don't change between Bürocontainer, Sanitärcontainer, etc.
export const INSULATION_TABLE: InsulationRow[] = [
  { material: "PUR Polyurethanschaum", thickness: "50 mm (Standard)", uValue: "0,42 W/m²K" },
  { material: "PUR Polyurethanschaum", thickness: "60 mm", uValue: "0,34 W/m²K" },
  { material: "PUR Polyurethanschaum", thickness: "80 mm", uValue: "0,25 W/m²K" },
  { material: "PUR Polyurethanschaum", thickness: "100 mm", uValue: "0,20 W/m²K" },
  { material: "PUR Polyurethanschaum", thickness: "120 mm", uValue: "0,17 W/m²K" },
  { material: "PUR Polyurethanschaum", thickness: "150 mm", uValue: "0,14 W/m²K" },
  { material: "MW Mineralwolle", thickness: "60 mm", uValue: "0,62 W/m²K" },
  { material: "MW Mineralwolle", thickness: "80 mm", uValue: "0,48 W/m²K" },
  { material: "MW Mineralwolle", thickness: "100 mm", uValue: "0,39 W/m²K" },
  { material: "MW Mineralwolle", thickness: "120 mm", uValue: "0,33 W/m²K" },
  { material: "MW Mineralwolle", thickness: "150 mm", uValue: "0,26 W/m²K" },
  { material: "MW Mineralwolle", thickness: "200 mm", uValue: "0,20 W/m²K" },
];

// L×B×H stays the same across the whole range (10'/16'/20'/24'/30'); only
// the weight moves with fit-out (e.g. sanitary containers carry plumbing).
function buildDimensions(weights: [string, string, string, string, string]): DimensionRow[] {
  const sizes: [string, string, string, string][] = [
    ["10'", "2.991 × 2.438 × 2.791 mm", "2.820 × 2.267 × 2.500 mm", "ca. 6,4 m²"],
    ["16'", "4.886 × 2.438 × 2.791 mm", "4.715 × 2.267 × 2.500 mm", "ca. 10,7 m²"],
    ["20'", "6.058 × 2.438 × 2.791 mm", "5.887 × 2.267 × 2.500 mm", "ca. 13,4 m²"],
    ["24'", "7.335 × 2.438 × 2.791 mm", "7.164 × 2.267 × 2.500 mm", "ca. 16,3 m²"],
    ["30'", "9.125 × 2.438 × 2.791 mm", "8.954 × 2.267 × 2.500 mm", "ca. 20,3 m²"],
  ];
  return sizes.map(([size, outer, inner, area], i) => ({ size, outer, inner, area, weight: weights[i] }));
}

const STANDARD_LOAD_NOTE =
  "Windbeständigkeit bis ca. 100 km/h, Dach-Schneelast im Standard ca. 1,5 kN/m² (Verstärkung auf Anfrage). Die zulässige Schneelast am Aufstellort ist vor Bestellung zu prüfen; bei höheren örtlichen Lasten sind zusätzliche Maßnahmen erforderlich.";

const PLACEHOLDER_SOURCE_NOTE =
  "Vorläufige technische Angaben, orientiert an marktüblichen Standardgrößen. Wird durch die tatsächlichen ICON-Werte ersetzt.";

// Shared construction sections (Dach/Boden/Ecksäulen/Lackierung) repeat almost
// verbatim across the range — only Wandpaneele/Türen/Fenster/Elektro tend to
// vary by product. Kept as a function (not a constant) so each product gets
// its own array instance to extend/override.
function baseConstructionSections(): SpecSection[] {
  return [
    {
      heading: "Dach",
      rows: [
        { label: "Rahmenkonstruktion", value: "Kaltgewalzte Stahlprofile, 3 mm, verschweißt; Containerecken nach ISO-Norm" },
        { label: "Dachdeckung", value: "Verzinktes, beschichtetes Stahlblech, 0,6 mm, umlaufender Doppelfalz" },
        { label: "Isolierung", value: "Mineralwolle 100 mm - 140 mm, Brandklasse A1 (nicht brennbar)" },
        { label: "Wärmedämmung", value: "U-Wert ca. 0,36 W/m²K" },
        { label: "Farbe innen", value: "RAL 9002 Grauweiß" },
      ],
    },
    {
      heading: "Boden",
      rows: [
        { label: "Rahmenkonstruktion", value: "Kaltgewalzte Stahlprofile, 3 mm, verschweißt" },
        { label: "Gabelstaplertaschen", value: "Optional, Achsabstand 1.200 mm" },
        { label: "Unterboden", value: "Verzinktes Blech, 0,6 mm" },
	{ label: "Dämmung", value: "Steinwolle WLG 035, 100mm" },
        { label: "Fußboden", value: "Zementgebundene Spanplatte, 21 mm, wasserabweisend, formaldehydfrei" },
        { label: "Bodenbelag", value: "Homogener PVC-Belag, 2 mm, Rutschfestigkeitsklasse R10" },
        { label: "Wärmedämmung", value: "U-Wert ca. 0,34 W/m²K" },
      ],
    },
    {
      heading: "Wandpaneele",
      rows: [
        { label: "Ausführung", value: "Auswechselbare Wandelemente" },
        { label: "Außen-/Innenverkleidung", value: "Verzinktes, farbbeschichtetes Stahlblech, 0,55 mm" },
        { label: "Farbe innen/außen", value: "RAL 9002 Grauweiß, weitere RAL-Töne auf Anfrage" },
        { label: "Isolierung", value: "PUR-Hartschaum 50–150 mm oder Mineralwolle 60–200 mm — siehe Isolierungstabelle unten" },
      ],
    },
    {
      heading: "Ecksäulen",
      rows: [
        { label: "Ausführung", value: "Kaltgewalzte Stahlprofile, 3 mm, mit Boden- und Dachrahmen verschweißt oder verschraubt; Tragfähigkeit ab ca. 1.800 kg/Säule" },
        { label: "Isolierung", value: "Gepresste Steinwolleplatten gegen Kältebrücken" },
      ],
    },
    {
      heading: "Lackierung",
      rows: [
        { label: "Vorbehandlung", value: "Entfettung und Grundierung der Stahlprofile, galvanische Verzinkung der Dünnbleche" },
        { label: "Beschichtung", value: "Epoxy-Grundierung mit Vinylacryl-Decklack bzw. PUR-Einschichtlack auf Dünnblech" },
      ],
    },
    {
      heading: "Türen",
      rows: [
        { label: "Konstruktion", value: "Einflügelige Stahltür, lichtes Maß ca. 820 × 2.000 mm, links oder rechts angeschlagen" },
        { label: "Isolierung", value: "Isolierplatte, ca. 40 mm" },
      ],
    },
    {
      heading: "Fenster",
      rows: [
        { label: "Konstruktion", value: "Kunststofffenster mit Dreh-/Kippbeschlag, ca. 790 × 1.000 mm, Isolierverglasung, Rollladen optional" },
        { label: "Wärmedämmung", value: "Uw-Wert ca. 1,6 W/m²K" },
      ],
    },
    {
      heading: "Elektroinstallation",
      rows: [
        { label: "Netzanschluss", value: "CEE-Anschluss, 5-polig, 32 A, 400 V, nach VDE-Richtlinien" },
        { label: "Verteilung", value: "Unterputz mit FI-Schutzschalter und Sicherungsautomaten" },
        { label: "Beleuchtung", value: "Wannenleuchten, Spiegelrasterleuchte optional" },
        { label: "Heizung", value: "Elektrokonvektor, ca. 2 kW, mit Thermostat" },
        { label: "Klima", value: "Optional als Kompakt- oder Split-Klimagerät" },
      ],
    },
  ];
}

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
  technicalDescription?: TechnicalDescription;
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
    // TODO(ICON): Platzhalterwerte, orientiert an einem Referenz-Datenblatt eines
    // Mitbewerbers (Conzept) — durch echte ICON-Werte ersetzen, sobald verfügbar.
    technicalDescription: {
      sourceNote: PLACEHOLDER_SOURCE_NOTE,
      dimensions: buildDimensions(["ca. 1.225 kg", "ca. 1.650 kg", "ca. 1.850 kg", "ca. 2.150 kg", "ca. 2.550 kg"]),
      sections: baseConstructionSections(),
      insulationTable: INSULATION_TABLE,
      loadNote: STANDARD_LOAD_NOTE,
    },
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
    // TODO(ICON): Platzhalter, 1:1 Struktur wie Bürocontainer — bitte mit echten
    // Werten für Wohn-/Unterkunftscontainer ersetzen (Wandpaneele, Türen ggf. gleich).
    technicalDescription: {
      sourceNote: PLACEHOLDER_SOURCE_NOTE,
      dimensions: buildDimensions(["ca. 1.225 kg", "ca. 1.650 kg", "ca. 1.850 kg", "ca. 2.150 kg", "ca. 2.550 kg"]),
      sections: baseConstructionSections(),
      insulationTable: INSULATION_TABLE,
      loadNote: STANDARD_LOAD_NOTE,
    },
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
    // TODO(ICON): Platzhalterwerte, orientiert an einem Referenz-Datenblatt eines
    // Mitbewerbers (Conzept, WC-Container) — durch echte ICON-Werte ersetzen.
    technicalDescription: {
      sourceNote:
        "Vorläufige technische Angaben, orientiert an marktüblichen Sanitärcontainer-Standardgrößen. Wird durch die tatsächlichen ICON-Werte ersetzt.",
      dimensions: buildDimensions(["ca. 2.175 kg", "ca. 2.525 kg", "ca. 2.875 kg", "ca. 3.250 kg", "ca. 3.700 kg"]),
      sections: [
        ...baseConstructionSections().filter((s) => !["Fenster", "Elektroinstallation"].includes(s.heading)),
        {
          heading: "Fenster",
          rows: [
            { label: "Konstruktion", value: "Kunststofffenster mit Dreh-/Kippbeschlag, lichtes Maß ca. 550 × 550 mm, Isolierverglasung — kleinformatig aus Gründen der Privatsphäre" },
            { label: "Wärmedämmung", value: "Uw-Wert ca. 1,6 W/m²K" },
          ],
        },
        {
          heading: "Elektroinstallation",
          rows: [
            { label: "Ausführung", value: "Feuchtraumausführung, Unterputz, nach VDE-Richtlinien" },
            { label: "Netzanschluss", value: "CEE-Anschluss, 5-polig, 32 A, 230/400 V, 50/60 Hz" },
            { label: "Verteilung", value: "Unterputz-Verteilerkasten mit FI-Schutzschalter und Sicherungsautomaten" },
            { label: "Beleuchtung", value: "Wannenleuchten" },
            { label: "Heizung", value: "Von Frostwächter (ca. 0,5 kW) bis Elektrokonvektor (ca. 2 kW), feuchtraumgeeignet" },
            { label: "Entlüftung", value: "Ventilator zur Luftabsaugung, ca. 170 m³/h" },
            { label: "Klima", value: "Optional als Kompakt- oder Split-Klimagerät" },
          ],
        },
      ],
      insulationTable: INSULATION_TABLE,
      loadNote: STANDARD_LOAD_NOTE,
      extraSections: [
        {
          heading: "Sanitärausstattung",
          rows: [
            { label: "Verrohrung", value: "Nutzwasser in Kunststoff oder Alu-Verbund; Ab- und Brauchwasser in PVC" },
            { label: "WC-Kabinen", value: "Porzellanmuschel mit Spülkasten, inkl. Papierhalter" },
            { label: "Urinal", value: "Porzellan mit Druckspüler" },
            { label: "Dusche", value: "Kunststoffdusche inkl. Vorhang und Duscharmatur" },
            { label: "Waschbecken", value: "Porzellanbecken inkl. Armatur, Spiegel, Abfluss und Handtuchhalter" },
            { label: "Bodenabfluss", value: "Optional, PVC, bodeneben integriert" },
            { label: "Warmwasser", value: "Je nach Bedarf vom Durchlauferhitzer (ca. 5 l) bis zum Boiler (10–500 l)" },
            { label: "Option", value: "Barrierefreie Ausstattung mit Sicherheitsarmaturen" },
          ],
        },
      ],
    },
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
    // TODO(ICON): Platzhalter, 1:1 Struktur wie Bürocontainer — bitte mit echten
    // Werten für Schulcontainer/Bildungsgebäude ersetzen. Die "Genehmigung &
    // Regularien"-Zeilen sind eine grobe Orientierung (u. a. aus FAGSI-Recherche
    // zu temporären Schulbauten) und ersetzen keine rechtliche Prüfung.
    technicalDescription: {
      sourceNote: PLACEHOLDER_SOURCE_NOTE,
      dimensions: buildDimensions(["ca. 1.225 kg", "ca. 1.650 kg", "ca. 1.850 kg", "ca. 2.150 kg", "ca. 2.550 kg"]),
      sections: baseConstructionSections(),
      insulationTable: INSULATION_TABLE,
      loadNote: STANDARD_LOAD_NOTE,
      extraSections: [
        {
          heading: "Genehmigung & Regularien",
          rows: [
            { label: "Nutzungsdauer", value: "Temporäre Schulbauten werden oft als befristete bauliche Anlage genehmigt (in der Praxis nicht selten bis ca. 24 Monate) — Fristen und Verfahren sind je nach Bundesland und zuständiger Bauaufsicht unterschiedlich und im Einzelfall zu prüfen" },
            { label: "Brandschutz", value: "Brandschutzkonzept mit Fluchtwegen und Rauchwarnmeldern; in mehreren Bundesländern sind vereinfachte Zulassungen (vBG) für Schulbauten in Modulbauweise möglich" },
            { label: "Barrierefreiheit", value: "Barrierefreie Ausführung nach DIN-Vorgaben planbar" },
            { label: "Raumluft", value: "Schadstoffarme, geprüfte Materialien; niedrige VOC-Werte deutlich unter üblichen Richtwerten anstrebbar" },
            { label: "Rückbau", value: "Vollständig rückbaubar und versetzbar bei Nutzungsende" },
          ],
        },
      ],
    },
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
    // TODO(ICON): Platzhalter, 1:1 Struktur wie Bürocontainer — bitte mit echten
    // Werten für Baustellencontainer ersetzen.
    technicalDescription: {
      sourceNote: PLACEHOLDER_SOURCE_NOTE,
      dimensions: buildDimensions(["ca. 1.225 kg", "ca. 1.650 kg", "ca. 1.850 kg", "ca. 2.150 kg", "ca. 2.550 kg"]),
      sections: baseConstructionSections(),
      insulationTable: INSULATION_TABLE,
      loadNote: STANDARD_LOAD_NOTE,
    },
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
    // TODO(ICON): Platzhalter, 1:1 Struktur wie Bürocontainer — bitte mit echten
    // Werten für Aufenthalts-/Sozialräume ersetzen.
    technicalDescription: {
      sourceNote: PLACEHOLDER_SOURCE_NOTE,
      dimensions: buildDimensions(["ca. 1.225 kg", "ca. 1.650 kg", "ca. 1.850 kg", "ca. 2.150 kg", "ca. 2.550 kg"]),
      sections: baseConstructionSections(),
      insulationTable: INSULATION_TABLE,
      loadNote: STANDARD_LOAD_NOTE,
    },
  },
];

export function getProductBySlug(lang: "de" | "en", slug: string) {
  return sortiment.find((p) => (lang === "en" ? p.slugEn : p.slugDe) === slug);
}
