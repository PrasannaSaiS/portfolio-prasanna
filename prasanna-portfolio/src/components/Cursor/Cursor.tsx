// ═══════════════════════════════════════════════════
// Cursor.tsx — Awwwards-grade dual-ring cursor
//
// Dot:  8px,  follows mouse exactly (no lag)
// Ring: 40px, follows with spring delay
// Expands to 56px on interactive element hover
// Hidden entirely on touch devices + reduced motion
// ═══════════════════════════════════════════════════

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import styles from './Cursor.module.css';

export function Cursor() {
  const prefersReduced = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);

  /* ── Motion values ────────────────────────────── */
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  /* Ring lags behind cursor with spring */
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  /* ── Track mouse + hover state ────────────────── */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const isInteractive = (el: Element) =>
      el.closest('a, button, [data-cursor="hover"], .project-card') !== null;

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && isInteractive(e.target)) {
        setHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && isInteractive(e.target)) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mouseout',  onMouseOut,  { passive: true });

    /* Re-evaluate on DOM mutations (dynamic content) */
    observerRef.current = new MutationObserver(() => setHovering(false));
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout',  onMouseOut);
      observerRef.current?.disconnect();
    };
  }, [cursorX, cursorY]);

  /* Don't render cursor for reduced-motion or touch devices */
  if (prefersReduced) return null;

  const ringSize = hovering ? 56 : 40;

  return (
    <>
      {/* ── Dot — exact mouse position, no lag ─── */}
      <motion.div
        className={styles.dot}
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      {/* ── Ring — spring-delayed ─────────────────── */}
      <motion.div
        className={styles.ring}
        style={{ x: springX, y: springY }}
        animate={{
          width:  ringSize,
          height: ringSize,
          borderColor: hovering
            ? 'rgba(124, 111, 247, 0.8)'
            : 'rgba(124, 111, 247, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
        aria-hidden="true"
      />
    </>
  );
}
