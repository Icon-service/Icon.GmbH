// Real construction data for ICON's own ballistic-protection container system,
// read from the client-supplied CAD drawing set "balistic.pdf" (Projekt-Nr. 03,
// mehrere Baulose/Sheets, Stand 2025/2026) plus product photography and the
// STANAG 2280 test/certification fact supplied directly by the client. This is
// ICON's own product and own IP, not competitor material — dimensions and
// material call-outs are taken directly from the drawings; only the framing/
// copy around them is written for the website. The deployment location named
// in the earlier drawing title blocks is deliberately not published here
// (client and exact site are treated as confidential, consistent with how
// ICON's other defense-related project material is handled); only the
// technical system, the certification, and the fact of a real deployment are
// used.

export type ArmorBuildup = {
  heading: string;
  totalThickness: string;
  layers: string[];
  note?: string;
};

export type BallisticUsp = {
  title: string;
  text: string;
};

export type BallisticCertification = {
  standard: string;
  threatLevels: string;
  testedBy: string;
  note: string;
};

export type BallisticUnit = {
  intro: string;
  certification: BallisticCertification;
  frame: { label: string; value: string }[];
  usps: BallisticUsp[];
  fitOut: { intro: string; options: string[] };
  buildups: ArmorBuildup[];
  assemblyNote: string;
  provenNote: string;
  sourceNote: string;
  gallery: { file: string; caption: string }[];
};

export const BALLISTIC_UNIT: BallisticUnit = {
  intro:
    "Der ICON Schutzcontainer ist die beschusshemmende Weiterentwicklung des klassischen Raumcontainers: ein Sandwichelement aus beidseitigem Panzerstahlblech mit dämmendem Kern, tragend ausgeführt in Stahlprofilen und werkseigen geschweißt. Einzeln nutzbar als Unterkunfts-, Büro-, Wach- oder Funktionsraum, oder zu mehrgeschossigen Anlagen kombinierbar — geprüft, zertifiziert und in der Praxis erprobt.",
  certification: {
    standard: "STANAG 2280",
    threatLevels: "Bedrohungsstufen A3 (ballistisch) und C4 (Splitter-/Sprengwirkung)",
    testedBy: "TNO, Niederlande",
    note: "Der ICON Schutzcontainer ist nach STANAG 2280 für die Bedrohungsstufen A3 und C4 geprüft und zertifiziert — Prüfbericht auf Anfrage.",
  },
  frame: [
    { label: "Modulmaß (Referenzeinheit)", value: "6.058 × 2.438 × 2.580 mm außen, ≈12,95 m² Nutzfläche" },
    { label: "Skalierbarkeit", value: "Baugleiche Einheiten bis 3,5 m Breite und 12 m Länge herstellbar — Abmessungen sind projektspezifisch, nicht fix" },
    { label: "Panzerung", value: "Panzerstahlblech, 10 mm, beidseitig (Außen- und Innenschale)" },
    { label: "Tragstruktur", value: "Stahlprofile HEB120, UPN80, SHS 80×4, Baustahl S235JR" },
    { label: "Gewicht (Referenzeinheit)", value: "Panzerstahl ≈6.540 kg, Tragstruktur ≈3.480 kg, gepanzerte Tür ≈400 kg — Gesamtgewicht ≈10.420 kg" },
    { label: "Gepanzerte Tür", value: "Lichte Durchgangsöffnung 970 × 2.050 mm, Türblatt-Außenmaß 1.153 × 2.135 mm, umlaufende Gummidichtung, 3-Punkt-Bandaufhängung mit Fixierstiften" },
  ],
  usps: [
    {
      title: "Zertifizierter Schutz, kein Werbeversprechen",
      text: "STANAG 2280, Bedrohungsstufen A3 und C4 — die Schutzwirkung ist unabhängig nachgewiesen, nicht nur konstruktiv behauptet.",
    },
    {
      title: "Durchgehende Panzerung ohne Schwachstellen",
      text: "Wände, Boden und Dach sind konsequent aus beidseitig gepanzerten Sandwichelementen aufgebaut. Auch Ecken und Modulübergänge werden mit eigenen Eckdetails aus Panzerstahl geschlossen, sodass die Schutzwirkung an keiner Stelle unterbrochen wird.",
    },
    {
      title: "Skalierbar statt Katalogware",
      text: "Bis 3,5 m Breite und 12 m Länge herstellbar — die Abmessungen werden auf Raumprogramm und Standort zugeschnitten, statt ein festes Containermaß vorzugeben.",
    },
    {
      title: "Geschützte Gebäudedurchdringungen",
      text: "Lüftung, Zuluft, Elektro-, Sanitär- und Klimaanschlüsse werden nicht einfach durch die Panzerung geführt, sondern mit eigens konstruierten Abschirmblechen umbaut — Gebäudetechnik ohne Kompromiss beim Schutz.",
    },
    {
      title: "Offene Innenausstattung",
      text: "Unterkunft, Büro, WC/Sanitär, Küche oder Lager — der Innenausbau ist projektspezifisch und wird erst nach Bedarf festgelegt, die Schutzhülle bleibt dabei unverändert.",
    },
    {
      title: "Kombinierbar zu mehrgeschossigen Anlagen",
      text: "Einzeleinheiten lassen sich zu Unterkunfts-, Sanitär- und Funktionsgebäuden mit mehreren Geschossen, überdachtem Erschließungskorridor, Außentreppen und Geländer zusammenschließen — vom Einzelraum bis zur kompletten Anlage.",
    },
    {
      title: "Praxiserprobt im Auslandseinsatz",
      text: "Das System wurde für ein mehrgeschossiges Unterkunfts- und Sanitärgebäude in einem internationalen Einsatzgebiet mit erhöhtem Schutzbedarf realisiert — Standort und Auftraggeber unterliegen der Vertraulichkeit.",
    },
  ],
  fitOut: {
    intro:
      "Die Schutzhülle ist bei jeder Einheit gleich aufgebaut — was darin entsteht, wird pro Projekt festgelegt:",
    options: [
      "Unterkunft / Wohnraum",
      "Büro / Arbeitsraum",
      "WC / Sanitärraum",
      "Küche / Teeküche",
      "Lager- und Technikraum",
      "Wach- und Kontrollraum",
    ],
  },
  buildups: [
    {
      heading: "Wand — Grundausführung",
      totalThickness: "≈110 mm zzgl. Innenausbau",
      layers: [
        "Panzerstahl, 10 mm (Außenschale)",
        "Dämmkern PIR, 80 mm",
        "Dampfsperre (Typ Alutrix 600 / Sika Samavap)",
        "Panzerstahl, 10 mm (Innenschale)",
        "Innenausbau: 16 mm Zementplatte, 2 mm PVC-Belag",
      ],
      note: "Zusätzliche Innendämmung von 40 oder 50 mm optional (Nutzfläche dann ≈12,31 bzw. ≈12,15 m² bei der Referenzeinheit); lichte Raumhöhe bleibt in jeder Ausführung bei 2.300 mm.",
    },
    {
      heading: "Eck- und Modulübergang",
      totalThickness: "—",
      layers: [
        "Eckguss (Corner Casting) als Verbindungspunkt zwischen Einheiten",
        "Panzerstahl, 10 mm, beidseitig um den Eckguss geführt",
        "PIR-Dämmung im Eckbereich",
      ],
      note: "Die Panzerung bleibt auch an Ecken und Modulstößen geschlossen, statt an der Verbindungsstelle zu unterbrechen.",
    },
    {
      heading: "Boden und Dach",
      totalThickness: "—",
      layers: [
        "Tragende Stahlträger IPE120 auf HEB120",
        "Gabeltaschen (Forklift-Box) für Transport und Kranung",
        "Oberseitig Panzerstahlblech",
        "Dämmung im Aufbau integriert",
      ],
    },
    {
      heading: "Durchdringungsschutz (Lüftung, Elektro, Sanitär, Klima)",
      totalThickness: "10 mm",
      layers: [
        "Abschirmblech Panzerstahl (Typ Sidur500), 10 mm",
        "Verschraubung mit Gewindestangen M20",
        "Beidseitige Abschirmung der Durchführung",
      ],
      note: "Eigene Abschirmdetails für Lüftungsgitter, Zuluft, Elektro-/Klimaanschlüsse und Sanitärleitungen, damit keine ungeschützte Durchführung durch die Panzerung entsteht.",
    },
  ],
  assemblyNote:
    "Für Unterkunfts- und Sanitärgebäude werden mehrere Einheiten giebelseitig und geschossweise zusammengeschlossen: Erschließung über einen zentralen, überdachten Korridor, Verbindung der Geschosse über Außentreppen mit Geländer, gemeinsames Dach mit Regenrinnen und Fallrohren. Sanitäre Einheiten erhalten je Raum eigene Elektro-, Abwasser-, Wasser- und Klimaanschlüsse mit eigens geschützten Durchführungen.",
  provenNote:
    "Das System wurde in mehreren Ausbaustufen für ein reales Projekt in einem internationalen Einsatzgebiet mit erhöhtem Schutzbedarf realisiert — von der Einzeleinheit bis zum zweigeschossigen Unterkunfts- und Sanitärgebäude mit rund 16 Wohn- und Funktionsräumen sowie eigens abgeschirmter Sanitär- und Elektrotechnik. Standort und Auftraggeber unterliegen der Vertraulichkeit.",
  sourceNote:
    "Technische Angaben aus eigenen ICON-Konstruktionsunterlagen für beschusshemmende Containereinheiten (Projekt-Nr. 03, mehrere Baulose, Stand 2025/2026) sowie eigener Produktfotografie. Werte gelten für die dargestellte Referenzeinheit und können je nach Schutzanforderung, Standort und Ausbau abweichen.",
  gallery: [
    { file: "schutzcontainer-fertigung-schweissroboter-01.jpg", caption: "Automatisierte Fertigung: Robotergeschweißte Panzerstahlnähte" },
    { file: "schutzcontainer-fertigung-schweissroboter-02.jpg", caption: "Robotergeschweißte Ecknaht am Containerrahmen" },
    { file: "schutzcontainer-rohbau-panzerstahl.jpg", caption: "Rohbau: Tragstruktur und Panzerstahlbeplankung" },
    { file: "schutzcontainer-fertig-aussenansicht.jpg", caption: "Fertige Einheit, Außenansicht" },
    { file: "schutzcontainer-tuer-offen.jpg", caption: "Gepanzerte Tür, geöffnet" },
    { file: "schutzcontainer-innenausbau.jpg", caption: "Innenausbau, bezugsfertig" },
    { file: "schutzcontainer-anlieferung-kran.jpg", caption: "Anlieferung und Kranung vor Ort" },
    { file: "schutzcontainer-anlieferung-kran-nah.jpg", caption: "Verladung einer fertigen Einheit" },
  ],
};
