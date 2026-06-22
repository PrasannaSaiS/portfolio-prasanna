// ═══════════════════════════════════════════════════
// MASTER ANIMATION VARIANTS — import from here only
// Never define variants inline in components
// ═══════════════════════════════════════════════════

import type { Variants } from 'framer-motion';

/* Easing curves */
export const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
export const SPRING   = { type: 'spring', stiffness: 100, damping: 20 } as const;

/* ── Fade up (standard section entry) ─────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EXPO_OUT },
  },
};

/* ── Stagger container ─────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ── Word reveal (hero + headings) ────────────── */
export const wordReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ── Fade in (simple, no movement) ────────────── */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

/* ── Scale in (cards, badges) ─────────────────── */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EXPO_OUT },
  },
};

/* ── Slide in from left ────────────────────────── */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ── Slide in from right ───────────────────────── */
export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ── Line draw (timeline, dividers) ───────────── */
export const drawLine: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: EXPO_OUT },
  },
};
