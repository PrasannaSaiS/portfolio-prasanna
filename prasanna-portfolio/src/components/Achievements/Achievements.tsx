import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { ImageSlot } from '../ImageSlot/ImageSlot';
import { IMAGE_SLOTS } from '../../assets/images';
import { fadeUp, slideLeft, staggerContainer, scaleIn } from '../../lib/animations';
import styles from './Achievements.module.css';

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const ach = CONTENT.achievements;

  return (
    <section id="achievements" ref={ref} className={styles.section} aria-label="Achievements">
      <div className={styles.inner}>

        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Milestones & Recognition
        </motion.p>

        {/* ── 1. IEEE Research Card ────────────────── */}
        <motion.div
          className={styles.ieeeCard}
          variants={slideLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          data-cursor="hover"
          role="link"
          tabIndex={0}
          onClick={() => window.open(ach.research.url, '_blank')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open(ach.research.url, '_blank'); }}
          aria-label={`Read paper: ${ach.research.title}`}
        >
          <div className={styles.ieeeContent}>
            <span className={`text-label ${styles.ieeeLabel}`}>Published Research</span>
            <h3 className={styles.ieeeTitle}>{ach.research.title}</h3>
            <p className={styles.ieeeConf}>{ach.research.conference} — {ach.research.year}</p>
          </div>
          <div className={styles.ieeeLogo}>
            <ImageSlot
              slotId="slot-g"
              label="IEEE Logo"
              src={IMAGE_SLOTS['slot-g'] ?? ''}
              alt="IEEE Logo"
              recommendedSize="120×80px"
            />
          </div>
          <ExternalLink className={styles.ieeeIcon} size={20} strokeWidth={1.5} aria-hidden="true" />
        </motion.div>

        {/* ── 2. Recognition Row ─────────────────────── */}
        <motion.div
          className={styles.recognition}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <Award className={styles.recIcon} size={24} strokeWidth={1.5} aria-hidden="true" />
          <div className={styles.recText}>
            <h4 className={styles.recTitle}>{ach.recognition[0].title}</h4>
            <p className={styles.recOrg}>{ach.recognition[0].detail}</p>
          </div>
        </motion.div>

        {/* ── 3. Certifications Grid ─────────────────── */}
        <motion.div
          className={styles.certGrid}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {ach.certifications.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.verifyUrl.startsWith('[FILL') ? '#' : cert.verifyUrl}
              target={cert.verifyUrl.startsWith('[FILL') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.certCard}
              variants={scaleIn}
              data-cursor="hover"
            >
              <div className={styles.certLogo}>
                <ImageSlot
                  slotId={cert.slot}
                  label={cert.issuer}
                  src={IMAGE_SLOTS[cert.slot] ?? ''}
                  alt={`${cert.issuer} badge`}
                  recommendedSize="200×120px"
                />
              </div>
              <div className={styles.certContent}>
                <h4 className={styles.certTitle}>{cert.name}</h4>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
