import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Music } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { ImageSlot } from '../ImageSlot/ImageSlot';
import { IMAGE_SLOTS } from '../../assets/images';
import {
  staggerContainer,
  fadeUp,
  slideLeft,
  slideRight,
  wordReveal,
  EXPO_OUT,
  scaleIn,
} from '../../lib/animations';
import { splitWords } from '../../lib/utils';
import styles from './About.module.css';

export function About() {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);

  const inView        = useInView(sectionRef,  { once: true, margin: '-10% 0px' });
  const leftInView    = useInView(leftRef,     { once: true, margin: '-10% 0px' });
  const rightInView   = useInView(rightRef,    { once: true, margin: '-10% 0px' });
  const headingInView = useInView(headingRef,  { once: true, margin: '-15% 0px' });

  const headingWords = splitWords('Who I Am');

  return (
    <section
      id="about"
      ref={sectionRef}
      className={styles.section}
      aria-label="About Prasanna Sai S"
    >
      <div className={styles.inner}>

        {/* ── Section label ─────────────────────── */}
        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          About Me
        </motion.p>

        {/* ── Heading ───────────────────────────── */}
        <motion.h2
          ref={headingRef}
          className={styles.heading}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? 'visible' : 'hidden'}
          aria-label="Who I Am"
        >
          {headingWords.map((word, i) => (
            <span
              key={i}
              style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.25em' }}
            >
              <motion.span
                style={{ display: 'inline-block' }}
                variants={wordReveal}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* ── Two-column grid ───────────────────── */}
        <div className={styles.grid}>

          {/* LEFT — Text content */}
          <motion.div
            ref={leftRef}
            className={styles.leftCol}
            variants={staggerContainer}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
          >
            {CONTENT.about.paragraphs.map((para, i) => (
              <div key={i} className={styles.paraBlock}>
                <motion.p
                  className={styles.para}
                  variants={fadeUp}
                >
                  {para}
                </motion.p>
                {i < CONTENT.about.paragraphs.length - 1 && (
                  <hr className={styles.rule} aria-hidden="true" />
                )}
              </div>
            ))}

            {/* Quick-fact pills */}
            <motion.div
              className={styles.pillsRow}
              variants={fadeUp}
            >
              {CONTENT.about.quickFacts.map((fact, i) => {
                const IconComponent = fact.icon === 'MapPin' ? MapPin : fact.icon === 'GraduationCap' ? GraduationCap : Music;
                return (
                  <motion.div key={i} className={`text-label ${styles.factPill}`} variants={scaleIn}>
                    <IconComponent size={14} className={styles.factIcon} />
                    {fact.text}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            ref={rightRef}
            className={styles.rightCol}
            variants={slideRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.2 }}
          >
            {/* Photo with rotation + hover correction */}
            <motion.div
              className={styles.photoWrapper}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              {/*
               * ═══════════════════════════════════════════════
               * IMAGE SLOT: slot-b
               * Label: About Section Photo
               * Replace src in: src/assets/images/index.ts
               * Change: export const slotB = placeholder;
               * To:     import slotBImg from './slot-b.jpg';
               *         export const slotB = slotBImg;
               * Recommended size: 360×360px (square)
               * ═══════════════════════════════════════════════
               */}
              <ImageSlot
                slotId="slot-b"
                label="About Section Photo"
                src={IMAGE_SLOTS['slot-b']}
                alt="Prasanna Sai S — profile photo"
                recommendedSize="360×360px"
              />
            </motion.div>

            {/* Floating status card (overlaps photo, bottom-left) */}
            <motion.div
              className={styles.statusCard}
              variants={slideLeft}
              initial="hidden"
              animate={rightInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: EXPO_OUT, delay: 0.5 }}
              aria-label="Availability status"
            >
              <span className={styles.greenDot} aria-hidden="true" />
              <div>
                <p className={styles.statusTitle}>Currently</p>
                <p className={styles.statusValue}>Open to Placement</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
