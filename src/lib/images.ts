import type { ImageMetadata } from "astro";

// Eager-loaded map of every real photo/render recovered from the prior
// WordPress theme, keyed by filename — lets data-driven pages (e.g.
// leistungen.ts) reference an image by name while Astro still optimizes
// the actual file at build time.
const files = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/*.{png,jpg,jpeg}", {
  eager: true,
});

export function getImage(filename: string): ImageMetadata {
  const entry = files[`/src/assets/images/${filename}`];
  if (!entry) {
    throw new Error(`Image not found: ${filename}`);
  }
  return entry.default;
}
