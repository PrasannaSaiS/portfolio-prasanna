import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../../data/content';
import { ImageSlot } from '../ImageSlot/ImageSlot';
import { IMAGE_SLOTS } from '../../assets/images';
import { fadeUp, staggerContainer, drawLine } from '../../lib/animations';
import styles from './Experience.module.css';

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const exp = CONTENT.experience[0]; // Currently only one entry

  return (
    <section id="experience" ref={ref} className={styles.section} aria-label="Experience">
      <div className={styles.inner}>
        
        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Experience
        </motion.p>

        <div className={styles.timelineContainer}>
          {/* Vertical line with draw-in animation */}
          <motion.div
            className={styles.timelineLine}
            variants={drawLine}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            aria-hidden="true"
          />
          {/* Top dot */}
          <motion.div
            className={styles.timelineDot}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
            aria-hidden="true"
          />

          <motion.div
            className={styles.contentCol}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={styles.headerRow}>
              <div>
                <motion.h3 className={styles.role} variants={fadeUp}>
                  {exp.role}
                </motion.h3>
                <motion.div className={styles.companyRow} variants={fadeUp}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.separator} aria-hidden="true">·</span>
                  <span className={styles.period}>{exp.period}</span>
                </motion.div>
              </div>

              {/* Company Logo */}
              <motion.div className={styles.logoWrap} variants={fadeUp}>
                <ImageSlot
                  slotId="slot-h"
                  label="Company Logo"
                  src={IMAGE_SLOTS['slot-h'] ?? ''}
                  alt={`${exp.company} logo`}
                  recommendedSize="200×60px"
                />
              </motion.div>
            </div>

            <ul className={styles.bulletsList}>
              {exp.points.map((bullet: string, i: number) => (
                <motion.li key={i} className={styles.bulletItem} variants={fadeUp}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  <span className={styles.bulletText}>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
