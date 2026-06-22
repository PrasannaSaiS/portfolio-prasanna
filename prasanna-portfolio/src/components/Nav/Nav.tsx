import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { useMagnet } from '../../hooks/useMagnet';
import { staggerContainer, EXPO_OUT } from '../../lib/animations';
import styles from './Nav.module.css';

/* ── Nav links configuration ───────────────────── */
const NAV_LINKS = [
  { label: 'About',    href: '#about'       },
  { label: 'Projects', href: '#projects'    },
  { label: 'Skills',   href: '#skills'      },
  { label: 'Research', href: '#achievements' },
  { label: 'Contact',  href: '#contact'     },
] as const;

/* ── Overlay link variant ──────────────────────── */
const overlayLinkVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO_OUT } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3, ease: EXPO_OUT } },
};

export function Nav() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('');
  const [scrollHidden,   setScrollHidden]   = useState(false);
  const lastScrollY = useRef(0);

  /* Magnetic resume button */
  const { ref: resumeRef, transform: resumeTransform, onMouseMove: resumeMove, onMouseLeave: resumeLeave } = useMagnet(0.25);

  /* ── Scroll listener: scrolled + hide-on-scroll-down ── */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);

      /* Hide nav when scrolling down fast, show when scrolling up */
      if (y > lastScrollY.current + 8 && y > 200) {
        setScrollHidden(true);
      } else if (y < lastScrollY.current - 4) {
        setScrollHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Active section tracker (IntersectionObserver) ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── Lock body scroll when mobile overlay is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── Smooth scroll to section ──────────────────── */
  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo: (el: HTMLElement, opts: Record<string, unknown>) => void } | undefined;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Main Navigation ─────────────────────────── */}
      <motion.nav
        className={[
          styles.nav,
          scrolled    ? styles.scrolled : '',
          scrollHidden ? styles.hidden  : '',
        ].filter(Boolean).join(' ')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EXPO_OUT }}
        aria-label="Primary navigation"
      >
        <div className={styles.inner}>

          {/* Logo */}
          <a
            href="#"
            className={styles.logo}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Prasanna Sai S — back to top"
          >
            <span className={styles.logoAccent}>P</span>
            <span>S</span>
          </a>

          {/* Desktop links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.slice(1);
              return (
                <li key={href}>
                  <button
                    className={[
                      styles.link,
                      activeSection === sectionId ? styles.linkActive : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => scrollTo(href)}
                    type="button"
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA */}
          <motion.a
            ref={resumeRef as React.RefObject<HTMLAnchorElement>}
            href={CONTENT.hero.ctaSecondary.href}
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume (opens PDF)"
            animate={{ x: resumeTransform.x, y: resumeTransform.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onMouseMove={resumeMove}
            onMouseLeave={resumeLeave}
            data-cursor="hover"
          >
            Resume ↗
          </motion.a>

          {/* Hamburger (mobile) */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            type="button"
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Overlay ───────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{   opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EXPO_OUT }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <button
              className={styles.overlayClose}
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              type="button"
            >
              <X size={24} strokeWidth={1.75} />
            </button>

            {/* Staggered links */}
            <motion.ul
              className={styles.overlayLinks}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="list"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <motion.li key={href} variants={overlayLinkVariant}>
                  <button
                    className={styles.overlayLink}
                    onClick={() => scrollTo(href)}
                    type="button"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}

              {/* Resume in overlay */}
              <motion.li variants={overlayLinkVariant}>
                <a
                  href={CONTENT.hero.ctaSecondary.href}
                  className={styles.overlayResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume ↗
                </a>
              </motion.li>
            </motion.ul>

            {/* Footer contact line */}
            <p className={styles.overlayFooter}>{CONTENT.personal.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
