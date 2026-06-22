// ═══════════════════════════════════════════════════
// utils.ts — Shared utility functions
// ═══════════════════════════════════════════════════

/**
 * splitWords — splits a string into an array of word strings.
 *
 * Used for masked word-reveal animations (Framer Motion wordReveal variant):
 *
 * ```tsx
 * <motion.h1 variants={staggerContainer} initial="hidden" animate="visible">
 *   {splitWords("PRASANNA SAI S").map((word, i) => (
 *     <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
 *       <motion.span
 *         style={{ display: 'inline-block' }}
 *         variants={wordReveal}
 *       >
 *         {word}&nbsp;
 *       </motion.span>
 *     </span>
 *   ))}
 * </motion.h1>
 * ```
 */
export function splitWords(text: string): string[] {
  return text.split(' ');
}

/**
 * cn — conditional classname merger.
 *
 * Filters out falsy values and joins truthy class strings with a space.
 * Lightweight alternative to clsx for simple cases.
 *
 * ```ts
 * cn(styles.base, isActive && styles.active, className)
 * // → "base active my-extra-class"
 * ```
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
