import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../../data/content';
import { fadeUp, staggerContainer } from '../../lib/animations';
import styles from './Education.module.css';

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="education" ref={ref} className={styles.section} aria-label="Education">
      <div className={styles.inner}>

        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Education
        </motion.p>

        <motion.div
          className={styles.timeline}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {CONTENT.education.map((edu, i) => (
            <motion.div key={i} className={styles.entry} variants={fadeUp}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.content}>
                <div className={styles.headerRow}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  {edu.grade && (
                    <span className={styles.gradePill}>{edu.grade}</span>
                  )}
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.institution}>{edu.institution}</span>
                  <span className={styles.separator} aria-hidden="true">·</span>
                  <span className={styles.period}>{edu.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
