import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GitBranch } from 'lucide-react';
import type { Project } from '../../data/content';
import { ImageSlot } from '../ImageSlot/ImageSlot';
import { IMAGE_SLOTS } from '../../assets/images';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project:  Project | null;
  onClose:  () => void;
}

/* ── Focus trap helper ──────────────────────── */
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea',
  'input',
  'select',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/* ── Link helper ────────────────────────────── */
function ModalLink({
  href,
  icon,
  label,
}: {
  href:  string;
  icon:  React.ReactNode;
  label: string;
}) {
  const isFill = href.startsWith('[FILL');
  if (isFill) return null;  // hide completely in modal view
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      data-cursor="hover"
    >
      {icon}
      {label}
    </a>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef   = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef  = useRef<HTMLElement | null>(null);

  /* ── Remember focused element before open ── */
  useEffect(() => {
    if (project) {
      triggerRef.current = document.activeElement as HTMLElement;
      // Focus the close button on open
      requestAnimationFrame(() => closeBtnRef.current?.focus());
    } else {
      // Restore focus on close
      triggerRef.current?.focus();
    }
  }, [project]);

  /* ── Focus trap ─────────────────────────── */
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first?.focus(); }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  /* ── Body scroll lock and Lenis ─────────── */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (!!project) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      // @ts-ignore - lenis attached to window in main.tsx
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = '';
      // @ts-ignore
      window.__lenis?.start();
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
      // @ts-ignore
      window.__lenis?.start();
    };
  }, [project, onClose]);

  const isLive      = project?.status === 'live';
  const hasLive     = project && 'liveUrl'   in project && typeof (project as { liveUrl?: string }).liveUrl === 'string';
  const hasGithub   = project && 'githubUrl' in project && typeof (project as { githubUrl?: string }).githubUrl === 'string';
  const hasPaper    = project && 'paperUrl'  in project && typeof (project as { paperUrl?: string }).paperUrl  === 'string';
  const hasBackend  = project && 'backendUrl' in project && typeof (project as { backendUrl?: string }).backendUrl === 'string';

  return (
    <AnimatePresence>
      {project && (
        /* ── Backdrop ───────────────────────── */
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{    opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          aria-hidden="true"
        >
          {/* ── Panel ───────────────────────── */}
          <motion.div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0,  opacity: 1 }}
            exit={{    y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close case study"
              type="button"
              data-cursor="hover"
            >
              <X size={20} strokeWidth={1.75} />
            </button>

            {/* ── Header ──────────────────── */}
            <div className={styles.header}>
              <div className={styles.headerMeta}>
                <span
                  className={[
                    styles.statusChip,
                    isLive ? styles.chipLive : styles.chipPublished,
                  ].join(' ')}
                >
                  ● {isLive ? 'Live' : 'Published'}
                </span>
                <span className={`text-label ${styles.category}`}>
                  {project.category}
                </span>
              </div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.headline}>{project.headline}</p>
            </div>

            {/* ── Project image ────────────── */}
            <div className={styles.imageWrap}>
              {/*
               * ═══════════════════════════════════════════════
               * IMAGE SLOT: {project.imageSlot}
               * Same image as the project card
               * ═══════════════════════════════════════════════
               */}
              <ImageSlot
                slotId={project.imageSlot}
                label={`${project.title} preview`}
                src={IMAGE_SLOTS[project.imageSlot] ?? ''}
                alt={`${project.title} — full preview`}
                recommendedSize="760×280px"
              />
            </div>

            {/* ── Case study body ──────────── */}
            <div className={styles.body}>

              {/* Problem */}
              <section className={styles.caseSection} aria-label="The problem">
                <h3 className={styles.caseLabel}>The Problem</h3>
                <p className={styles.caseText}>{project.caseStudy.problem}</p>
              </section>

              {/* Why it matters */}
              <section className={styles.caseSection} aria-label="Why it matters">
                <h3 className={styles.caseLabel}>Why It Matters</h3>
                <p className={styles.caseText}>{project.caseStudy.whyMatters}</p>
              </section>

              {/* Architecture */}
              <section className={styles.caseSection} aria-label="Architecture">
                <h3 className={styles.caseLabel}>Architecture</h3>
                <code className={styles.caseArch}>
                  {project.caseStudy.architecture}
                </code>
              </section>

              {/* Results */}
              <section className={styles.caseSection} aria-label="Results">
                <h3 className={styles.caseLabel}>Results</h3>
                <ul className={styles.resultsList}>
                  {project.caseStudy.metrics.map((m) => (
                    <li key={m} className={styles.resultsItem}>
                      <span className={styles.bullet} aria-hidden="true" />
                      {m}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech stack — full list */}
              <section className={styles.caseSection} aria-label="Tech stack">
                <h3 className={styles.caseLabel}>Tech Stack</h3>
                <div className={styles.stackBadges}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.badge}>{tech}</span>
                  ))}
                </div>
              </section>

              {/* Links */}
              <div className={styles.linksRow}>
                {hasLive && (
                  <ModalLink
                    href={(project as { liveUrl: string }).liveUrl}
                    icon={<ExternalLink size={14} strokeWidth={2} aria-hidden="true" />}
                    label="Live Demo"
                  />
                )}
                {hasBackend && (
                  <ModalLink
                    href={(project as { backendUrl: string }).backendUrl}
                    icon={<ExternalLink size={14} strokeWidth={2} aria-hidden="true" />}
                    label="Backend"
                  />
                )}
                {hasGithub && (
                  <ModalLink
                    href={(project as { githubUrl: string }).githubUrl}
                    icon={<GitBranch size={14} strokeWidth={2} aria-hidden="true" />}
                    label="GitHub"
                  />
                )}
                {hasPaper && (
                  <ModalLink
                    href={(project as { paperUrl: string }).paperUrl}
                    icon={<ExternalLink size={14} strokeWidth={2} aria-hidden="true" />}
                    label="IEEE Paper"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
