import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/content';
import { ImageSlot } from '../ImageSlot/ImageSlot';
import { IMAGE_SLOTS } from '../../assets/images';
import { scaleIn } from '../../lib/animations';
import styles from './ProjectCard.module.css';

const MAX_BADGES = 4;

interface ProjectCardProps {
  project:      Project;
  onOpenModal:  () => void;
}

/* ── Status chip helper ─────────────────────── */
function StatusChip({ status }: { status: Project['status'] }) {
  const isLive = status === 'live';
  return (
    <span
      className={[styles.chip, isLive ? styles.chipLive : styles.chipPublished].join(' ')}
      aria-label={isLive ? 'Live project' : 'Published research'}
    >
      ● {isLive ? 'Live' : 'Published'}
    </span>
  );
}

/* ── Link helper — amber warning for placeholder URLs ── */
function ProjectLink({
  href,
  icon,
  label,
}: {
  href:  string;
  icon:  React.ReactNode;
  label: string;
}) {
  const isFill = href.startsWith('[FILL');
  return (
    <a
      href={isFill ? '#' : href}
      target={isFill ? undefined : '_blank'}
      rel="noopener noreferrer"
      onClick={isFill ? (e) => e.preventDefault() : undefined}
      className={[styles.linkBtn, isFill ? styles.linkBtnMissing : ''].join(' ')}
      aria-label={isFill ? `${label} — URL not set yet` : label}
      data-cursor="hover"
      tabIndex={isFill ? -1 : 0}
    >
      {icon}
      {label}
    </a>
  );
}

/* ── Main card ──────────────────────────────── */
export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const isLarge    = project.size === 'large';
  const visibleBadges = project.stack.slice(0, MAX_BADGES);
  const extraCount    = project.stack.length - MAX_BADGES;

  const hasLive   = 'liveUrl'   in project && typeof project.liveUrl   === 'string';
  const hasGithub = 'githubUrl' in project && typeof project.githubUrl === 'string';
  const hasPaper  = 'paperUrl'  in project && typeof project.paperUrl  === 'string';

  return (
    <motion.article
      className={[
        styles.card,
        'project-card',
        isLarge ? styles.cardLarge : styles.cardMedium,
      ].join(' ')}
      variants={scaleIn}
      whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={onOpenModal}
      role="button"
      aria-label={`Open ${project.title} case study`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenModal(); }}
      data-cursor="hover"
    >
      {/* ── Image area ──────────────────────── */}
      <div className={styles.imageArea}>
        {/*
         * ═══════════════════════════════════════════════
         * IMAGE SLOT: {project.imageSlot}
         * Label: {project.title} screenshot
         * Replace src in: src/assets/images/index.ts
         * Recommended size: varies per slot — see registry
         * ═══════════════════════════════════════════════
         */}
        <ImageSlot
          slotId={project.imageSlot}
          label={`${project.title} screenshot`}
          src={IMAGE_SLOTS[project.imageSlot] ?? ''}
          alt={`${project.title} — ${project.headline}`}
          recommendedSize={isLarge ? '600×340px' : '480×280px'}
        />
        <StatusChip status={project.status} />
      </div>

      {/* ── Content area ────────────────────── */}
      <div className={styles.content}>

        {/* Category */}
        <p className={`text-label ${styles.category}`}>{project.category}</p>

        {/* Title */}
        <h3 className={styles.title}>{project.title}</h3>

        {/* Headline */}
        <p className={styles.headline}>{project.headline}</p>

        {/* Summary */}
        <p className={styles.summary}>{project.summary}</p>

        {/* Tech badges */}
        <div className={styles.badges} aria-label="Tech stack">
          {visibleBadges.map((tech) => (
            <span key={tech} className={styles.badge}>{tech}</span>
          ))}
          {extraCount > 0 && (
            <span className={[styles.badge, styles.badgeMore].join(' ')}>
              +{extraCount}
            </span>
          )}
        </div>

        {/* Footer row — metric + links */}
        <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
          {/* Metric chip */}
          <span className={styles.metric} aria-label={`Metric: ${project.metric}`}>
            {project.metric}
          </span>

          <div className={styles.links}>
            {/* Live URL */}
            {hasLive && (
              <ProjectLink
                href={(project as { liveUrl: string }).liveUrl}
                icon={<ExternalLink size={13} strokeWidth={2} aria-hidden="true" />}
                label="Live"
              />
            )}

            {/* GitHub */}
            {hasGithub && (
              <ProjectLink
                href={(project as { githubUrl: string }).githubUrl}
                icon={<GitBranch size={13} strokeWidth={2} aria-hidden="true" />}
                label="Code"
              />
            )}

            {/* Paper */}
            {hasPaper && (
              <ProjectLink
                href={(project as { paperUrl: string }).paperUrl}
                icon={<ExternalLink size={13} strokeWidth={2} aria-hidden="true" />}
                label="Paper"
              />
            )}

            {/* Case study arrow — re-opens modal */}
            <button
              className={styles.caseStudyBtn}
              onClick={(e) => { e.stopPropagation(); onOpenModal(); }}
              aria-label={`Open ${project.title} case study`}
              type="button"
              data-cursor="hover"
            >
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
