import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../../data/content';
import type { Project } from '../../data/content';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { staggerContainer, wordReveal, fadeUp, EXPO_OUT } from '../../lib/animations';
import { splitWords } from '../../lib/utils';
import styles from './Projects.module.css';

const HEADING_TEXT  = "Systems I've Built and Shipped";
const SUBHEAD_TEXT  = 'From research frameworks to live cloud deployments — each project is a case study in taking AI from idea to production.';

export function Projects() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const gridRef      = useRef<HTMLDivElement>(null);

  const sectionInView = useInView(sectionRef,  { once: true, margin: '-8% 0px' });
  const headingInView = useInView(headingRef,  { once: true, margin: '-15% 0px' });
  const gridInView    = useInView(gridRef,     { once: true, margin: '-5% 0px'  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const words = splitWords(HEADING_TEXT);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={styles.section}
      aria-label="Featured projects"
    >
      <div className={styles.inner}>

        {/* ── Section label ─────────────────────── */}
        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={sectionInView ? 'visible' : 'hidden'}
        >
          Featured Projects
        </motion.p>

        {/* ── Heading — word split reveal ───────── */}
        <motion.h2
          ref={headingRef}
          className={styles.heading}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? 'visible' : 'hidden'}
          aria-label={HEADING_TEXT}
        >
          {words.map((word, i) => (
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

        {/* ── Sub-heading ───────────────────────── */}
        <motion.p
          className={styles.subhead}
          variants={fadeUp}
          initial="hidden"
          animate={headingInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3, duration: 0.7, ease: EXPO_OUT }}
        >
          {SUBHEAD_TEXT}
        </motion.p>

        {/* ══════════════════════════════════════════
            BENTO GRID
            12-column desktop layout:
              SkillOne  → col 1-7,  row 1-2  (large, 7 cols, spans 2 rows)
              Path2Poll → col 8-12, row 1-2  (large, 5 cols, spans 2 rows)
              ReSageAI  → col 1-5,  row 3    (medium, 5 cols)
              EaseEvents → col 6-12, row 3   (medium, 7 cols)
        ══════════════════════════════════════════ */}
        <motion.div
          ref={gridRef}
          className={styles.bentoGrid}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          // Custom stagger: 80ms between cards
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          role="list"
          aria-label="Project cards"
        >
          {CONTENT.projects.map((project) => (
            <div
              key={project.id}
              className={[
                styles.gridCell,
                styles[`cell-${project.id}`],
              ].join(' ')}
              role="listitem"
            >
              <ProjectCard
                project={project}
                onOpenModal={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Case study modal (portal-like, fixed) ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
