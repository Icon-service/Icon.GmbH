// Real construction data for ICON's own module system ("ICON Modul", internal
// project code G-CAP), read from two client-supplied documents: the CAD
// drawing set "G-CAP modul Entwurf" (Projekt-Nr. 18, Lot 100, Stand
// 15.04.2026, GD-18-100-001…006-03) and the floor-plan set "Gcap Grundrisse"
// from a later tender submission (Projekt-Nr. 18, Lot 200/500, Stand
// 22.04.2026/30.05.2026). Both are ICON's own IP, not competitor material —
// dimensions and material call-outs are taken directly from the drawings;
// only the framing/copy around them is written for the website. The tender
// buildings are referenced anonymously (no client is named in the source
// files, and it was a bid, not a confirmed build) purely as evidence of
// scale.

export type LayerBuildup = {
  heading: string;
  totalThickness: string;
  /** ordered outside → inside (walls) or top → bottom (floor/roof) */
  layers: string[];
  note?: string;
};

export type ModulUsp = {
  title: string;
  text: string;
};

export type ModulSystem = {
  intro: string;
  grid: { title: string; text: string };
  frame: { label: string; value: string }[];
  usps: ModulUsp[];
  buildups: LayerBuildup[];
  stackingNote: string;
  provenNote: string;
  sourceNote: string;
};

export const MODUL_SYSTEM: ModulSystem = {
  intro:
    "ICON Modul ist das eigene Raummodulsystem von ICON: ein geschweißter Stahlrahmen aus Baustahl S235JR, beidseitig komplett beplankt, mit einem durchgängigen 600-mm-Bauraster für Innenwände. Aus denselben Bauteilen entstehen Einzelbüros ebenso wie mehrgeschossige Gebäude.",
  grid: {
    title: "Planungsraster statt Einzelanfertigung",
    text: "Innenwände sitzen auf einem festen 600-mm-Raster und werden aus drei geprüften Wandtypen kombiniert. Grundrisse lassen sich dadurch wie in einer Matrix konfigurieren — Räume vergrößern, teilen oder verschieben, ohne die Tragstruktur zu berühren.",
  },
  frame: [
    { label: "Rahmenkonstruktion", value: "Geschweißter Stahlrahmen, kaltgewalzte Profile IPE120 und UPE180, Baustahl S235JR" },
    { label: "Eckverstärkung", value: "Stahlhohlprofil QR 100×5-S235JR an Ecken, Öffnungen und Lastpunkten" },
    { label: "Modulmaß (Beispiel)", value: "6.058 × 2.990 × 3.426 mm außen, ≈15,9 m² Nutzfläche pro Modul" },
    { label: "Skalierbarkeit", value: "Baugleiche Module bis 13 × 4 m Kantenlänge herstellbar, für größere Räume mit weniger Fugen" },
    { label: "Stapelbarkeit", value: "Geprüftes Boden+Dach-Verbindungsdetail für mehrgeschossige Gebäude" },
  ],
  usps: [
    {
      title: "Komplette Beplankung",
      text: "Alle Wände sind beidseitig durchgehend beplankt — außen mit Fassadenpaneel, innen mit doppellagiger Brandschutzplatte (GKFI, Brandklasse A1). Keine offenen Gefache, kein einseitig verkleideter Rahmen.",
    },
    {
      title: "Flexible Innenwände",
      text: "Drei geprüfte Wandtypen (Standard, Schallschutz, verstärkt) im 600-mm-Raster — Grundrisse werden aus denselben Bauteilen kombiniert, nicht für jedes Projekt neu konstruiert.",
    },
    {
      title: "Planungsmatrix",
      text: "Raster und Wandtypen bilden ein System, mit dem sich Raumgrößen und Anordnungen früh und nachvollziehbar durchspielen lassen — vom Einzelbüro bis zum mehrteiligen Gebäude.",
    },
    {
      title: "Skalierbare Modulgröße",
      text: "Module sind nicht auf ein Format festgelegt: Je nach Projekt und Statik lassen sich Einheiten bis 13 × 4 m fertigen — mehr nutzbare Fläche pro Modul bei gleichem Konstruktionsprinzip.",
    },
    {
      title: "Fassadenvielfalt",
      text: "Die Tragkonstruktion ist von der Fassade unabhängig: Neben dem gezeigten Putzträgersystem sind hinterlüftete Vorhangfassaden sowie Metall-, Holz- oder Glasfassaden auf derselben Unterkonstruktion möglich.",
    },
    {
      title: "Mehrgeschossig stapelbar",
      text: "Ein durchkonstruiertes Boden+Dach-Detail verbindet gestapelte Module — Grundlage für zwei- und mehrgeschossige Gebäude aus dem gleichen Bausatz.",
    },
    {
      title: "Werksseitige Vorfertigung",
      text: "Wände, Böden und Dächer entstehen witterungsunabhängig in kontrollierter Fertigung. Das reduziert Bauzeit vor Ort und macht Termine planbarer als bei klassischer Baustellenfertigung.",
    },
    {
      title: "Durchgängiger Brandschutz",
      text: "Dämmung und Beplankung sind in Wand, Boden und Dach durchgehend in Brandklasse A1 (nicht brennbar, DIN EN 13162) ausgeführt — eine tragfähige Grundlage für die Erfüllung projektspezifischer Brandschutzanforderungen.",
    },
    {
      title: "Erprobt im Großmaßstab",
      text: "Das Konstruktionsprinzip wurde für mehrgeschossige Unterkunfts- und Verwaltungsgebäude mit weit über 100 Metern Gebäudelänge geplant — vom Einzelmodul bis zum komplexen Gebäude ohne Systemwechsel.",
    },
  ],
  buildups: [
    {
      heading: "Außenwand",
      totalThickness: "≈305 mm",
      layers: [
        "Fassadenpaneel TOPTERM ZP180 MW (Putzträgersystem)",
        "Tragendes Stahlständerwerk Knauf CW100",
        "Gefachdämmung Mineralwolle 80 mm, DIN EN 13162, Brandklasse A1",
        "Innenbeplankung 2× 12,5 mm GKFI, Brandklasse A1, nicht brennbar (Knauf)",
      ],
      note: "Als Alternative zum Putzträgersystem sind hinterlüftete oder andere Fassadenbekleidungen auf derselben Unterkonstruktion möglich.",
    },
    {
      heading: "Innenwand — Standard",
      totalThickness: "≈125 mm",
      layers: [
        "Beplankung 2× 12,5 mm GKFI, Brandklasse A1 (beidseitig, Knauf)",
        "Dämmung Mineralwolle 60 mm, DIN EN 13162",
        "Stahlständer Knauf CW75",
      ],
      note: "600-mm-Raster",
    },
    {
      heading: "Innenwand — Schallschutz",
      totalThickness: "≈155 mm",
      layers: [
        "Beplankung 2× 12,5 mm GKFI, Brandklasse A1 (beidseitig, Knauf)",
        "Getrennte Ständerreihen, je Mineralwolle 40 mm",
        "2× Stahlständer Knauf CW50, akustisch entkoppelt",
      ],
      note: "600-mm-Raster, für erhöhte Anforderungen an den Schallschutz",
    },
    {
      heading: "Innenwand — verstärkt",
      totalThickness: "≈150 mm",
      layers: [
        "Beplankung 2× 12,5 mm GKFI, Brandklasse A1 (Knauf)",
        "Stahlständer Knauf CW100 mit Mineralwolle 80 mm",
        "Zusätzliches Stahlprofil QR 100×5-S235JR",
      ],
      note: "An Lastpunkten, Türdurchgängen oder größeren Öffnungen",
    },
    {
      heading: "Boden",
      totalThickness: "≈261,5 mm",
      layers: [
        "PVC-Bodenbelag, 2 mm",
        "Zementestrich, 50 mm, Brandklasse A1",
        "Trittschalldämmung XPS, 30 mm, Klasse E",
        "Spanplatte P5, 28 mm, feuchtebeständig",
        "PE-Dampfsperrfolie",
        "Mineralwolle, 100 mm, DIN EN 13162, Brandklasse A1",
        "Tragende Stahlträger IPE120-S235JR auf UPE180-S235JR, Raster ≈600 mm",
        "Unterseitiger Abschluss: verzinktes Blindblech, 0,6 mm",
      ],
    },
    {
      heading: "Dach",
      totalThickness: "≈208,5 mm",
      layers: [
        "Verzinktes Blindblech, 0,6 mm (außenseitiger Abschluss)",
        "Spanplatte P5, 28 mm",
        "Mineralwolle, 150 mm, DIN EN 13162, Brandklasse A1",
        "Tragende Stahlträger IPE120-S235JR auf UPE180-S235JR, Raster ≈400 mm, Aufdopplung Holz/Stahl",
        "PE-Dampfsperrfolie",
        "Innendecke 2× 12,5 mm GKFI, Brandklasse A1 (Knauf)",
      ],
    },
  ],
  stackingNote:
    "Beim Stapeln mehrerer Geschosse werden Boden- und Dachpaket zu einem gemeinsamen Deckenaufbau von ≈470 mm kombiniert — geprüftes Detail für zwei- und mehrgeschossige ICON-Modul-Gebäude.",
  provenNote:
    "Im Rahmen einer Ausschreibung wurde das System für mehrere Unterkunfts- und Verwaltungsgebäude in Modulbauweise geplant — darunter ein viergeschossiger Baukörper von über 100 Metern Länge. Projektdetails unterliegen der Vertraulichkeit; die Planung zeigt die Skalierbarkeit des Systems auch für große, mehrgeschossige Gebäude.",
  sourceNote:
    "Technische Angaben aus eigenen ICON-Konstruktionsunterlagen ('G-CAP modul Entwurf', Stand 15.04.2026, und 'Gcap Grundrisse', Stand 2026). Werte gelten für das dargestellte Referenzmodul und können je nach Projekt, Statik und Ausbau abweichen.",
};
