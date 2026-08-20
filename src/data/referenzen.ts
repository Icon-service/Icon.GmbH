// Real project photography, supplied directly by the client and grouped by
// project. Exact site, client and mission affiliation are kept out of the
// public captions — consistent with how the rest of the site handles
// security-relevant project material — regional/functional labels only.
// Countries are known to ICON and can be named directly on request.

export type ReferenzImage = {
  file: string;
  caption: { de: string; en: string };
};

export type ReferenzGroup = {
  id: string;
  title: { de: string; en: string };
  region: { de: string; en: string };
  text: { de: string; en: string };
  images: ReferenzImage[];
};

/** Builds a numbered image list from a filename prefix, e.g. "referenz-baltikum-halle-" + 20. */
function buildImages(prefix: string, count: number, label: { de: string; en: string }): ReferenzImage[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      file: `${prefix}-${n}.jpg`,
      caption: {
        de: `${label.de} — Aufnahme ${n}`,
        en: `${label.en} — photo ${n}`,
      },
    };
  });
}

export const REFERENZEN: ReferenzGroup[] = [
  {
    id: "westafrika-unterkunft",
    title: { de: "Gehärtete Unterkunftsgebäude", en: "Hardened Accommodation Buildings" },
    region: { de: "Westafrika", en: "West Africa" },
    text: {
      de: "Unterkunftsgebäude in gehärteter Bauweise auf Basis von Hesco-Elementen und Sand, von der Anlieferung per Kran bis zur fertigen Anlage — realisiert an einem Einsatzstandort mit erhöhtem Schutzbedarf.",
      en: "Hardened accommodation buildings based on Hesco elements and sand fill, from crane delivery to the finished facility — built at a deployment site with elevated protection requirements.",
    },
    images: buildImages("referenz-westafrika-unterkunft", 17, { de: "Gehärtetes Unterkunftsgebäude", en: "Hardened accommodation building" }),
  },
  {
    id: "westafrika-wirtschaft",
    title: { de: "Gehärtete Wirtschaftsgebäude", en: "Hardened Utility Buildings" },
    region: { de: "Westafrika", en: "West Africa" },
    text: {
      de: "Technik- und Wirtschaftsgebäude in gehärteter Bauweise, von der Stahlrahmenmontage bis zur fertigen Fassade.",
      en: "Technical and utility buildings in hardened construction, from steel frame erection to the finished façade.",
    },
    images: buildImages("referenz-westafrika-wirtschaft", 4, { de: "Gehärtetes Wirtschaftsgebäude", en: "Hardened utility building" }),
  },
  {
    id: "naher-osten-unterkunft",
    title: { de: "Gehärtete Unterkunftsanlage", en: "Hardened Accommodation Facility" },
    region: { de: "Naher Osten", en: "Middle East" },
    text: {
      de: "Fertiggestellte Unterkunftsgebäude mit Schutzwällen, Kommunikationstechnik und eigener Klimatisierung — ausgelegt für den dauerhaften Betrieb unter erschwerten Standortbedingungen.",
      en: "Completed accommodation buildings with protective barriers, communications equipment and dedicated climate control — designed for continuous operation under demanding site conditions.",
    },
    images: buildImages("referenz-naher-osten-unterkunft", 5, { de: "Gehärtete Unterkunftsanlage", en: "Hardened accommodation facility" }),
  },
  {
    id: "kueste-camp",
    title: { de: "Camp-Infrastruktur an der Küste", en: "Coastal Camp Infrastructure" },
    region: { de: "Naher Osten", en: "Middle East" },
    text: {
      de: "Komplette Camp-Infrastruktur inklusive Erschließung, Unterkunfts- und Funktionsgebäuden an einem küstennahen Standort.",
      en: "Complete camp infrastructure including access roads, accommodation and functional buildings at a coastal site.",
    },
    images: buildImages("referenz-kueste-camp", 22, { de: "Camp-Infrastruktur an der Küste", en: "Coastal camp infrastructure" }),
  },
  {
    id: "baltikum-hallenbau",
    title: { de: "Hallenbau", en: "Steel Hall Construction" },
    region: { de: "Baltikum", en: "Baltics" },
    text: {
      de: "Stahlhallenbau für ein größeres Standortprojekt — von der winterlichen Rohbaumontage bis zur fertigen Halle.",
      en: "Steel hall construction for a larger site project — from winter structural erection to the finished hall.",
    },
    images: buildImages("referenz-baltikum-halle", 20, { de: "Hallenbau im Baltikum", en: "Steel hall construction in the Baltics" }),
  },
  {
    id: "westafrika-mensa",
    title: { de: "Gemeinschaftsverpflegung / Mensa", en: "Communal Catering Facility" },
    region: { de: "Westafrika", en: "West Africa" },
    text: {
      de: "Großküche und Speisesaal für die zentrale Verpflegung an einem Camp-Standort.",
      en: "Industrial kitchen and dining hall for central catering at a camp site.",
    },
    images: buildImages("referenz-westafrika-mensa", 13, { de: "Mensa- und Küchengebäude", en: "Canteen and kitchen building" }),
  },
  {
    id: "westafrika-camp-erweiterung",
    title: { de: "Camp-Erweiterung", en: "Camp Expansion" },
    region: { de: "Westafrika", en: "West Africa" },
    text: {
      de: "Erweiterung eines bestehenden Camps um Unterkunfts-, Technik- und Aufenthaltsbereiche, einschließlich eigener Solarversorgung.",
      en: "Expansion of an existing camp with accommodation, technical and common areas, including its own solar power supply.",
    },
    images: buildImages("referenz-camp-erweiterung", 25, { de: "Camp-Erweiterung", en: "Camp expansion" }),
  },
];
