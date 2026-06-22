import { GitBranch, ExternalLink, Mail } from 'lucide-react';
import { CONTENT } from '../../data/content';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        
        {/* ── Row 1: Logo & Socials ──────────────── */}
        <div className={styles.topRow}>
          {/* Logo Monogram */}
          <div className={styles.logo} aria-label="Prasanna Sai S">
            <span className={styles.logoAccent}>P</span>S
          </div>

          {/* Social Icons */}
          <div className={styles.socials}>
            <a
              href={CONTENT.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub Profile"
              data-cursor="hover"
            >
              <GitBranch size={20} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href={CONTENT.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="LinkedIn Profile"
              data-cursor="hover"
            >
              <ExternalLink size={20} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${CONTENT.personal.email}`}
              className={styles.iconLink}
              aria-label="Email Me"
              data-cursor="hover"
            >
              <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Row 2: Copyright & Credits ─────────── */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {currentYear} Prasanna Sai S. All rights reserved.
          </p>
          <p className={styles.credits}>
            Designed & Built by Prasanna Sai S
          </p>
        </div>

      </div>
    </footer>
  );
}
