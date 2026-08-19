import { ui, defaultLang, type Lang, type UiKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** DE/EN path segments per section, used to build the language switcher. */
export const routes = {
  home: { de: "", en: "" },
  services: { de: "leistungen", en: "services" },
  sortiment: { de: "sortiment", en: "products" },
  references: { de: "referenzen", en: "references" },
  about: { de: "ueber-uns", en: "about" },
  contact: { de: "kontakt", en: "contact" },
  legal: { de: "impressum", en: "legal-notice" },
  privacy: { de: "datenschutz", en: "privacy" },
} as const;

export function localizedPath(section: keyof typeof routes, lang: Lang, ...rest: string[]) {
  const segment = routes[section][lang];
  const prefix = lang === "en" ? "en" : "";
  const parts = [prefix, segment, ...rest].filter(Boolean);
  return "/" + parts.join("/");
}
