import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Database, Wrench, Layers, Server, Shield } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { fadeUp, scaleIn } from '../../lib/animations';
import styles from './Skills.module.css';

// Map icon names from content to lucide components
const ICONS: Record<string, React.ReactNode> = {
  Network:  <Network size={18} strokeWidth={2} />,
  Database: <Database size={18} strokeWidth={2} />,
  Wrench:   <Wrench size={18} strokeWidth={2} />,
  Layers:   <Layers size={18} strokeWidth={2} />,
  Server:   <Server size={18} strokeWidth={2} />,
  Shield:   <Shield size={18} strokeWidth={2} />,
};

function SkillGroup({ group }: { group: typeof CONTENT.skills[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className={styles.group}>
      <motion.div
        className={styles.groupHeader}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <span className={styles.iconWrap} aria-hidden="true">
          {ICONS[group.icon]}
        </span>
        <h3 className={styles.categoryName}>{group.category}</h3>
      </motion.div>

      <motion.div
        className={styles.tileGrid}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.03 }}
        role="list"
        aria-label={`${group.category} skills`}
      >
        {group.items.map((skill) => (
          <motion.div
            key={skill}
            className={styles.tile}
            variants={scaleIn}
            role="listitem"
            data-cursor="hover"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="skills" ref={ref} className={styles.section} aria-label="Technical Skills">
      <div className={styles.inner}>
        
        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Technical Arsenal
        </motion.p>

        <div className={styles.grid}>
          {CONTENT.skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>

      </div>
    </section>
  );
}
