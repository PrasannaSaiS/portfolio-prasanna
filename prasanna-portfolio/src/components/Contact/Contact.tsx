import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { CONTENT } from '../../data/content';
import { useMagnet } from '../../hooks/useMagnet';
import { fadeUp, staggerContainer, EXPO_OUT } from '../../lib/animations';
import styles from './Contact.module.css';

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Magnetic button for submit
  const { ref: btnRef, transform, onMouseMove, onMouseLeave } = useMagnet(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission delay
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  return (
    <section id="contact" ref={ref} className={styles.section} aria-label="Contact">
      {/* Background orb */}
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.inner}>

        <motion.p
          className={`text-label text-muted ${styles.sectionLabel}`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Get In Touch
        </motion.p>

        <div className={styles.grid}>

          {/* ── Left Column: Links ────────────────────── */}
          <motion.div
            className={styles.leftCol}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h2 className={styles.heading}>Let's build something<br/>exceptional.</h2>
            
            <div className={styles.links}>
              <motion.a
                href={`mailto:${CONTENT.personal.email}`}
                className={styles.linkRow}
                variants={fadeUp}
                data-cursor="hover"
              >
                <div className={styles.linkLeft}>
                  <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span>Email</span>
                </div>
                <span className={styles.linkRight}>{CONTENT.personal.email}</span>
              </motion.a>

              <motion.a
                href={CONTENT.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkRow}
                variants={fadeUp}
                data-cursor="hover"
              >
                <div className={styles.linkLeft}>
                  <ExternalLink size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span>LinkedIn</span>
                </div>
                <span className={styles.linkRight}>Connect ↗</span>
              </motion.a>

              <motion.a
                href={CONTENT.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkRow}
                variants={fadeUp}
                data-cursor="hover"
              >
                <div className={styles.linkLeft}>
                  <GitBranch size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span>GitHub</span>
                </div>
                <span className={styles.linkRight}>Follow ↗</span>
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right Column: Form ────────────────────── */}
          <motion.div
            className={styles.rightCol}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3, duration: 0.8, ease: EXPO_OUT }}
          >
            {formState === 'success' ? (
              <div className={styles.successMessage}>
                <h3>Message sent</h3>
                <p>Thanks for reaching out! I'll get back to you shortly.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className={styles.resetBtn}
                  data-cursor="hover"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={styles.input}
                    disabled={formState === 'submitting'}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className={styles.input}
                    disabled={formState === 'submitting'}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Project details or just say hi..."
                    required
                    rows={4}
                    className={styles.textarea}
                    disabled={formState === 'submitting'}
                  />
                </div>

                <div className={styles.submitWrap}>
                  <motion.button
                    ref={btnRef as React.RefObject<HTMLButtonElement>}
                    type="submit"
                    className={styles.submitBtn}
                    disabled={formState === 'submitting'}
                    animate={{ x: transform.x, y: transform.y }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    data-cursor="hover"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
