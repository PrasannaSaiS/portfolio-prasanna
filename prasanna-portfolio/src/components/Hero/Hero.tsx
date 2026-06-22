import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { ImageSlot } from '../ImageSlot/ImageSlot';
import { IMAGE_SLOTS } from '../../assets/images';
import { useMagnet } from '../../hooks/useMagnet';
import {
  fadeUp,
  fadeIn,
  slideRight,
  staggerContainer,
  wordReveal,
  EXPO_OUT,
} from '../../lib/animations';
import { splitWords } from '../../lib/utils';
import styles from './Hero.module.css';

/* ── Floating metric pill animation ───────────── */
const floatVariant = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  /* Magnetic CTA hooks */
  const {
    ref: primaryRef,
    transform: primaryTransform,
    onMouseMove: primaryMove,
    onMouseLeave: primaryLeave,
  } = useMagnet(0.3);

  const {
    ref: secondaryRef,
    transform: secondaryTransform,
    onMouseMove: secondaryMove,
    onMouseLeave: secondaryLeave,
  } = useMagnet(0.2);

  /* Hide scroll indicator after 100px */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Smooth scroll via Lenis */
  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as unknown as Record<string, unknown>).__lenis as
      | { scrollTo: (el: HTMLElement, opts: Record<string, unknown>) => void }
      | undefined;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const words = splitWords(CONTENT.hero.title); // ['PRASANNA', 'SAI', 'S']
  const taglineLines = CONTENT.hero.tagline.split('\n');
  const rolesText = CONTENT.hero.roles.join(' · ');

  return (
    <section id="hero" className={styles.section} aria-label="Hero">

      {/* Dot-grid background */}
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={styles.grid}>

        {/* ── LEFT — Text Content ─────────────────────── */}
        <div className={styles.textCol}>

          {/* 1. Status pill */}
          <motion.div
            className={styles.statusPill}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
          >
            {CONTENT.hero.statusPill}
          </motion.div>

          {/* 2. Name with word-reveal animation */}
          <motion.h1
            className={styles.name}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => {
              const isGradient = word === 'SAI';
              return (
                <span
                  key={i}
                  style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.28em' }}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={prefersReduced ? fadeIn : wordReveal}
                    className={isGradient ? 'gradient-text' : undefined}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>

          {/* 3. Role line */}
          <motion.p
            className={styles.roles}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            {rolesText}
          </motion.p>

          {/* 4. Tagline */}
          <motion.p
            className={styles.tagline}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            {taglineLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </motion.p>

          {/* 5. CTA group */}
          <motion.div
            className={styles.ctaGroup}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            {/* Primary CTA */}
            <motion.a
              ref={primaryRef as React.RefObject<HTMLAnchorElement>}
              href={CONTENT.hero.ctaPrimary.href}
              className={styles.ctaPrimary}
              animate={{ x: primaryTransform.x, y: primaryTransform.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onMouseMove={primaryMove}
              onMouseLeave={primaryLeave}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(CONTENT.hero.ctaPrimary.href);
              }}
              data-cursor="hover"
              aria-label="Explore my work — scroll to projects"
            >
              {CONTENT.hero.ctaPrimary.label}
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              ref={secondaryRef as React.RefObject<HTMLAnchorElement>}
              href={CONTENT.hero.ctaSecondary.href}
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ x: secondaryTransform.x, y: secondaryTransform.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onMouseMove={secondaryMove}
              onMouseLeave={secondaryLeave}
              data-cursor="hover"
              aria-label="Download resume PDF"
            >
              {CONTENT.hero.ctaSecondary.label}
            </motion.a>
          </motion.div>
        </div>

        {/* ── RIGHT — Photo ───────────────────────────── */}
        <motion.div
          className={styles.photoCol}
          variants={slideRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8, ease: EXPO_OUT }}
        >
          {/* Accent orb (static, no animation) */}
          <div className={styles.accentOrb} aria-hidden="true" />

          {/* ═══════════════════════════════════════════════
              IMAGE SLOT: slot-a
              Label: Hero Profile Photo
              Replace src in: src/assets/images/index.ts
              Change: export const slotA = placeholder;
              To:     import slotAImg from './slot-a.jpg';
                      export const slotA = slotAImg;
              Recommended size: 280×380px (portrait)
              ═══════════════════════════════════════════════ */}
          <div className={styles.photoWrapper}>
            <ImageSlot
              slotId="slot-a"
              label="Hero Profile Photo"
              src={IMAGE_SLOTS['slot-a']}
              alt="Prasanna Sai S — AI Engineer"
              recommendedSize="280×380px"
              loading="eager"
            />
          </div>

          {/* Floating metric pill */}
          <motion.div
            className={styles.metricPill}
            variants={floatVariant}
            animate={prefersReduced ? undefined : 'animate'}
            aria-label="AI Engineer"
          >
            <span className={styles.metricNumber}>AI & ML</span>
            <span className={styles.metricLabel}>Engineer</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ───────────────────────── */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        <span className={styles.scrollText}>Scroll</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
