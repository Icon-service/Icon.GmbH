import type { PlannerType } from "../data/plannerCatalog";

// Renders a small schematic floorplan sketch per Sortiment-Typ, in the visual
// style of a technical datasheet: double-line wall with a light fill band
// (proper plan-view wall thickness, not a single bold outline), thin
// hairline dimension lines with the width/length figures and TYP code, and
// a simplified interior (partition, corridor, stair or WC schematic)
// inferred from the type's category and name. Not a reproduction of ICON's
// or FAGSI's actual fixture-accurate drawings — a consistent, restrained
// line drawing in the same presentation language, tuned to sit quietly next
// to the surrounding page content rather than dominate it.

const SCALE = 15; // px per metre — compact, subdued footprint in the card grid
const WT = 2.6; // wall band thickness, px
const PAD_L = 26;
const PAD_R = 5;
const PAD_T = 6;
const PAD_B = 26;

const INK = "#3f4650"; // charcoal, not pure black — softer line weight
const WALL_FILL = "#e7e9ec";
const DIM_LINE = "#c2c7ce";
const DIM_TEXT = "#8b93a0";

function fmt(n: number): string {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}

/** Erases a door-width notch in the wall band on a horizontal wall centred on `wallY`. */
function wallOpening(gapCenterX: number, wallY: number, doorW: number): string {
  return `<rect x="${gapCenterX - doorW / 2}" y="${wallY - WT / 2 - 0.4}" width="${doorW}" height="${WT + 0.8}" fill="#ffffff"/>`;
}

/** Door swing symbol: thin leaf + quarter-circle arc, hinge at the opening's edge. */
function doorSwing(gapCenterX: number, wallY: number, doorW: number, swingUp: boolean): string {
  const hx = gapCenterX - doorW / 2;
  const leafY = swingUp ? wallY - doorW : wallY + doorW;
  const sweepFlag = swingUp ? 1 : 0;
  return `<line x1="${hx}" y1="${wallY}" x2="${hx}" y2="${leafY}" stroke="${INK}" stroke-width="0.6"/>
    <path d="M ${hx} ${leafY} A ${doorW} ${doorW} 0 0 ${sweepFlag} ${hx + doorW} ${wallY}" fill="none" stroke="${INK}" stroke-width="0.6"/>`;
}

/**
 * Outer wall door: cuts the wall band and draws the swing into the room.
 * `inward` is the direction from the outer edge toward the interior
 * (+1 = downward, for a wall along the top edge; -1 = upward, for a wall
 * along the bottom edge) so the same helper works on either long side.
 */
function outerDoorAt(gapCenterX: number, outerEdgeY: number, doorW: number, inward: 1 | -1): string {
  const bandCenterY = outerEdgeY + (inward * WT) / 2;
  const hingeY = outerEdgeY + inward * WT;
  return wallOpening(gapCenterX, bandCenterY, doorW) + doorSwing(gapCenterX, hingeY, doorW, inward === -1);
}

/** Thin single-line interior partition with a door gap. */
function partitionWithDoor(innerX: number, innerW: number, y: number, doorW: number, swingUp: boolean, offsetFrac = 0.5): string {
  const gapCenterX = innerX + innerW * offsetFrac;
  const gapHalf = doorW / 2;
  return `<line x1="${innerX}" y1="${y}" x2="${gapCenterX - gapHalf}" y2="${y}" stroke="${INK}" stroke-width="1"/>
    <line x1="${gapCenterX + gapHalf}" y1="${y}" x2="${innerX + innerW}" y2="${y}" stroke="${INK}" stroke-width="1"/>
    ${doorSwing(gapCenterX, y, doorW, swingUp)}`;
}

function stairHatch(x: number, y: number, w: number, h: number, steps = 8): string {
  let lines = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${INK}" stroke-width="0.8"/>`;
  for (let i = 1; i < steps; i++) {
    const ly = y + (h * i) / steps;
    lines += `<line x1="${x}" y1="${ly}" x2="${x + w}" y2="${ly}" stroke="${INK}" stroke-width="0.45"/>`;
  }
  lines += `<line x1="${x}" y1="${y + h}" x2="${x + w}" y2="${y}" stroke="${INK}" stroke-width="0.7"/>`;
  return lines;
}

/** Plan-view WC symbol: cistern rectangle + bowl ellipse. */
function wcIcon(cx: number, cy: number): string {
  const w = 6.5;
  return `<rect x="${cx - w / 2}" y="${cy - 5.5}" width="${w}" height="2.4" fill="none" stroke="${INK}" stroke-width="0.6"/>
    <ellipse cx="${cx}" cy="${cy + 0.5}" rx="2.8" ry="3.6" fill="none" stroke="${INK}" stroke-width="0.6"/>`;
}

function showerIcon(x: number, y: number, size: number): string {
  return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="none" stroke="${INK}" stroke-width="0.6"/>
    <line x1="${x}" y1="${y}" x2="${x + size}" y2="${y + size}" stroke="${INK}" stroke-width="0.45"/>
    <line x1="${x + size}" y1="${y}" x2="${x}" y2="${y + size}" stroke="${INK}" stroke-width="0.45"/>`;
}

function dimLeft(rectX: number, rectY: number, rectH: number, lengthM: number): string {
  const dimX = rectX - 10;
  const midY = rectY + rectH / 2;
  return `<line x1="${dimX}" y1="${rectY}" x2="${dimX}" y2="${rectY + rectH}" stroke="${DIM_LINE}" stroke-width="0.6" stroke-dasharray="2.5 2"/>
    <line x1="${dimX - 2.5}" y1="${rectY}" x2="${dimX + 2.5}" y2="${rectY}" stroke="${DIM_LINE}" stroke-width="0.6"/>
    <line x1="${dimX - 2.5}" y1="${rectY + rectH}" x2="${dimX + 2.5}" y2="${rectY + rectH}" stroke="${DIM_LINE}" stroke-width="0.6"/>
    <text x="${dimX - 3}" y="${midY}" fill="${DIM_TEXT}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="6.5" text-anchor="middle" transform="rotate(-90 ${dimX - 3} ${midY})">${fmt(lengthM)} m</text>`;
}

function dimBottom(rectX: number, wallY: number, rectW: number, widthM: number, code: string): string {
  const dimY = wallY + 8;
  const cx = rectX + rectW / 2;
  return `<line x1="${rectX}" y1="${dimY}" x2="${rectX + rectW}" y2="${dimY}" stroke="${DIM_LINE}" stroke-width="0.6" stroke-dasharray="2.5 2"/>
    <line x1="${rectX}" y1="${dimY - 2.5}" x2="${rectX}" y2="${dimY + 2.5}" stroke="${DIM_LINE}" stroke-width="0.6"/>
    <line x1="${rectX + rectW}" y1="${dimY - 2.5}" x2="${rectX + rectW}" y2="${dimY + 2.5}" stroke="${DIM_LINE}" stroke-width="0.6"/>
    <text x="${cx}" y="${dimY + 10}" fill="${DIM_TEXT}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="7" text-anchor="middle">${fmt(widthM)} m</text>
    <text x="${cx}" y="${dimY + 19}" fill="#5b6470" font-family="ui-sans-serif, system-ui, sans-serif" font-size="7.5" font-weight="700" text-anchor="middle">${code}</text>`;
}

export function floorplanSvg(t: PlannerType, categoryKey: string): string {
  const rectW = t.width * SCALE;
  const rectH = t.length * SCALE;
  const rectX = PAD_L;
  const rectY = PAD_T;
  const vbW = PAD_L + rectW + PAD_R;
  const vbH = PAD_T + rectH + PAD_B;
  const doorW = Math.min(0.85 * SCALE, rectW * 0.5);
  const name = t.name;

  const innerX = rectX + WT;
  const innerY = rectY + WT;
  const innerW = rectW - 2 * WT;
  const innerH = rectH - 2 * WT;

  const isTreppe = categoryKey.startsWith("treppen");
  const isSanitaer = categoryKey.startsWith("sanitaer") || categoryKey === "funktionsmodule";
  const outerDoorGapX = rectX + rectW / 2;
  const doorErase = outerDoorAt(outerDoorGapX, rectY + rectH, doorW, -1);

  let interior = "";

  if (isTreppe) {
    const isZG = /ZG/i.test(name);
    const isOG = /OG/i.test(name);
    const isGegenstueck = /gegenstück/i.test(name);
    const stairX = innerX + innerW * 0.12;
    const stairW = innerW * 0.76;
    if (isGegenstueck) {
      interior = doorErase + outerDoorAt(outerDoorGapX, rectY, doorW, 1);
    } else if (isOG) {
      interior = `<rect x="${stairX}" y="${innerY + 3}" width="${stairW * 0.5}" height="${innerH * 0.22}" fill="none" stroke="${INK}" stroke-width="0.7"/>` + doorErase;
    } else {
      interior = stairHatch(stairX, innerY + 3, stairW, innerH * 0.58) + doorErase;
      if (isZG) interior += outerDoorAt(outerDoorGapX, rectY, doorW, 1);
    }
  } else if (isSanitaer) {
    const hasDusche = /dusche/i.test(name);
    const hasFlur = /flur/i.test(name);
    const stallsBottom = hasFlur ? innerY + innerH * 0.76 : innerY + innerH * 0.58;
    if (hasFlur) interior += partitionWithDoor(innerX, innerW, innerY + innerH * 0.76, doorW * 0.8, false, 0.5);
    const n = hasDusche ? 2 : 3;
    for (let i = 0; i < n; i++) {
      const cx = innerX + (innerW * (i + 0.5)) / n;
      const cy = innerY + (stallsBottom - innerY) * 0.48;
      interior += hasDusche && i === 0 ? showerIcon(cx - 5.5, cy - 5.5, 11) : wcIcon(cx, cy);
    }
    interior += doorErase;
  } else {
    const hasTrennwand = /trennwand/i.test(name);
    const hasFlur = /flur/i.test(name);
    if (hasFlur) {
      interior = partitionWithDoor(innerX, innerW, innerY + innerH * 0.76, doorW, true, 0.5) + doorErase;
    } else if (hasTrennwand) {
      interior = partitionWithDoor(innerX, innerW, innerY + innerH * 0.66, doorW, false, 0.5) + doorErase;
    } else {
      interior = doorErase;
    }
  }

  return `<svg viewBox="0 0 ${vbW} ${vbH}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name}, ${t.code}, ${fmt(t.width)} × ${fmt(t.length)} m">
    <rect x="${rectX}" y="${rectY}" width="${rectW}" height="${rectH}" fill="${WALL_FILL}"/>
    <rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" fill="#ffffff"/>
    ${interior}
    <rect x="${rectX}" y="${rectY}" width="${rectW}" height="${rectH}" fill="none" stroke="${INK}" stroke-width="0.8"/>
    <rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" fill="none" stroke="${INK}" stroke-width="0.8"/>
    ${dimLeft(rectX, rectY, rectH, t.length)}
    ${dimBottom(rectX, rectY + rectH, rectW, t.width, t.code)}
  </svg>`;
}
