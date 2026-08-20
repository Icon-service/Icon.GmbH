// Container catalog for the client-side Grundrissplaner. Sizes are the same
// five standard lengths used across the whole Sortiment (see
// buildDimensions() in sortiment.ts) — width is standardized at 2.438 m for
// all of them, only the length changes. Kept as plain numbers (metres) here
// since the planner draws directly in metre units.

export type PlannerSize = {
  code: string;
  /** metres */
  width: number;
  /** metres */
  length: number;
};

export const PLANNER_SIZES: PlannerSize[] = [
  { code: "10'", width: 2.438, length: 2.991 },
  { code: "16'", width: 2.438, length: 4.886 },
  { code: "20'", width: 2.438, length: 6.058 },
  { code: "24'", width: 2.438, length: 7.335 },
  { code: "30'", width: 2.438, length: 9.125 },
];

export type PlannerProduct = {
  id: string;
  label: string;
  /** short label used inside the drawn block */
  shortLabel: string;
};

// Mirrors the six real Sortiment products (src/data/sortiment.ts).
export const PLANNER_PRODUCTS: PlannerProduct[] = [
  { id: "buerocontainer", label: "Bürocontainer", shortLabel: "Büro" },
  { id: "wohn-unterkunftscontainer", label: "Wohn-/Unterkunftscontainer", shortLabel: "Wohnen" },
  { id: "sanitaercontainer", label: "Sanitärcontainer", shortLabel: "Sanitär" },
  { id: "schulcontainer-bildungsgebaeude", label: "Schulcontainer", shortLabel: "Schule" },
  { id: "baustellencontainer", label: "Baustellencontainer", shortLabel: "Baustelle" },
  { id: "aufenthalts-sozialraeume", label: "Aufenthalts-/Sozialraum", shortLabel: "Sozialraum" },
];
