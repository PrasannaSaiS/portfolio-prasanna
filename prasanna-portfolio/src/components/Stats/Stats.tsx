import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../../data/content';
import { staggerContainer, scaleIn } from '../../lib/animations';
import styles from './Stats.module.css';

/* ── Animated counter hook ─────────────────────── */
function useCountUp(target: number, duration = 1400, enabled = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number | null = null;
    let animId: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, duration, enabled]);

  return count;
}

/* ── Individual stat card ─────────────────────── */
interface StatCardProps {
  value:  number;
  suffix: string;
  label:  string;
  index:  number;
  inView: boolean;
}

function StatCard({ value, suffix, label, index, inView }: StatCardProps) {
  const count = useCountUp(value, 1400, inView);
  const isLast = index === CONTENT.stats.length - 1;

  return (
    <>
      <motion.div
        className={styles.stat}
        variants={scaleIn}
        aria-label={`${value}${suffix} ${label}`}
      >
        <div className={styles.statNumber} aria-hidden="true">
          <span className={`gradient-text ${styles.statValue}`}>
            {inView ? count : 0}
          </span>
          {suffix && (
            <span className={styles.statSuffix}>{suffix}</span>
          )}
        </div>
        <p className={`text-label text-muted ${styles.statLabel}`}>{label}</p>
      </motion.div>

      {/* Vertical divider — hidden on mobile, hidden after last stat */}
      {!isLast && (
        <div className={styles.divider} aria-hidden="true" />
      )}
    </>
  );
}

/* ── Stats strip ──────────────────────────────── */
export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="stats"
      className={styles.section}
      aria-label="Key statistics"
    >
      <motion.div
        ref={ref}
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {CONTENT.stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            index={i}
            inView={inView}
          />
        ))}
      </motion.div>
    </section>
  );
}
