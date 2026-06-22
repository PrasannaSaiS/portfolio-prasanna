// ═══════════════════════════════════════════════════
// IMAGE SLOT REGISTRY — src/assets/images/index.ts
// Import all images here.
// Replace placeholder with real files as you add them.
// ═══════════════════════════════════════════════════

import placeholder from './placeholder.svg';
// Re-exported so components can identity unfilled slots via:
//   src === placeholder  →  slot has not been filled yet
export { placeholder };

import slot_a from './slot-a.jpg';
import slot_b from './slot-b.jpg';
import slot_c from './slot-c.jpg';
import slot_d from './slot-d.jpg';
import slot_e from './slot-e.jpg';
import slot_f from './slot-f.jpg';
import slot_g from './slot-g.jpg';
import slot_h from './slot-h.jpg';
import slot_i from './slot-i.jpg';
import slot_j from './slot-j.jpg';
import slot_k from './slot-k.jpg';

// ── Replace each import below with your actual image file ──────────────────

// [IMAGE SLOT A] Hero profile photo
// Recommended size: 280×380px (portrait)
export const slotA: string = slot_a;

// [IMAGE SLOT B] About section photo
// Recommended size: 360×360px (square)
export const slotB: string = slot_b;

// [IMAGE SLOT C] SkillOne project screenshot
// Recommended size: 600×340px (landscape)
export const slotC: string = slot_c;

// [IMAGE SLOT D] Path2Poll project screenshot
// Recommended size: 480×340px (landscape)
export const slotD: string = slot_d;

// [IMAGE SLOT E] ReSageAI / IEEE preview
// Recommended size: 480×280px (landscape)
export const slotE: string = slot_e;

// [IMAGE SLOT F] EaseEvents project screenshot
// Recommended size: 600×280px (landscape)
export const slotF: string = slot_f;

// [IMAGE SLOT G] IEEE logo / badge
// Recommended size: 120×80px
export const slotG: string = slot_g;

// [IMAGE SLOT H] RIT / Centre for AI logo
// Recommended size: 200×60px
export const slotH: string = slot_h;

// [IMAGE SLOT I] DeepLearning.AI certification badge
// Recommended size: 200×120px
export const slotI: string = slot_i;

// [IMAGE SLOT J] AMD AI Academy certification badge
// Recommended size: 200×120px
export const slotJ: string = slot_j;

// [IMAGE SLOT K] Microsoft Applied Skills badge
// Recommended size: 200×120px
export const slotK: string = slot_k;

// [IMAGE SLOT L] Flyrank AI Logo
// Recommended size: 200x60px
export const slotL: string = placeholder; // Will be replaced by flyrank.jpg later

// ── End of slot registry ──────────────────────────────────────────────────

// Convenience map for dynamic lookup by slot ID
export const IMAGE_SLOTS: Record<string, string> = {
  'slot-a': slotA,
  'slot-b': slotB,
  'slot-c': slotC,
  'slot-d': slotD,
  'slot-e': slotE,
  'slot-f': slotF,
  'slot-g': slotG,
  'slot-h': slotH,
  'slot-i': slotI,
  'slot-j': slotJ,
  'slot-k': slotK,
  'slot-l': slotL,
};
