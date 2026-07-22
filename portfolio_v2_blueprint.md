# PORTFOLIO TECHNICAL DESIGN SYSTEM — v2.0
## Prasanna Sai S | Awwwards-Grade Build Specification
### Stack: React 18 + Vite 5 + Framer Motion + Lenis

---

## WHY THIS STACK

The previous HTML/CSS/JS approach produces functional but visually flat output.
Awwwards-level quality requires:

| Requirement | Solution |
|-------------|----------|
| Cinematic scroll feel | Lenis (inertial smooth scroll) |
| Declarative spring animations | Framer Motion 11 |
| Reusable, composable UI | React 18 component model |
| Fast dev + optimized production build | Vite 5 |
| Type-safe, maintainable code | TypeScript |
| Pixel-level layout control | CSS Modules + CSS custom properties |
| Custom cursor | Framer Motion + React state |
| Text choreography | Framer Motion staggerChildren on split words |
| 3D card tilt | react-tilt or manual transform on mousemove |
| Scroll-linked progress | Framer Motion useScroll + useTransform |

---

## SECTION 1: PROJECT ARCHITECTURE:

### 1.1 Directory Structure

```
prasanna-portfolio/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
│
├── public/
│   ├── favicon.svg              ← "PS" monogram SVG
│   ├── og-preview.jpg           ← 1200×630 social preview
│   └── resume/
│       └── prasanna_sai_resume.pdf  ← [SLOT: replace with actual PDF]
│
└── src/
    ├── main.tsx                 ← Entry: Lenis init + React root
    ├── App.tsx                  ← Section assembly + cursor
    │
    ├── styles/
    │   ├── globals.css          ← :root tokens, reset, base
    │   ├── typography.css       ← Type scale utilities
    │   └── utils.css            ← Reusable layout helpers
    │
    ├── components/
    │   ├── Cursor/
    │   │   └── Cursor.tsx       ← Custom cursor dot + ring
    │   ├── Nav/
    │   │   └── Nav.tsx          ← Fixed nav + mobile overlay
    │   ├── Hero/
    │   │   └── Hero.tsx
    │   ├── Stats/
    │   │   └── Stats.tsx
    │   ├── About/
    │   │   └── About.tsx
    │   ├── Projects/
    │   │   ├── Projects.tsx     ← Bento grid container
    │   │   ├── ProjectCard.tsx  ← Individual card
    │   │   └── ProjectModal.tsx ← Case study modal
    │   ├── Experience/
    │   │   └── Experience.tsx
    │   ├── Skills/
    │   │   └── Skills.tsx
    │   ├── Achievements/
    │   │   └── Achievements.tsx
    │   ├── Education/
    │   │   └── Education.tsx
    │   ├── Contact/
    │   │   └── Contact.tsx
    │   └── Footer/
    │       └── Footer.tsx
    │
    ├── hooks/
    │   ├── useLenis.ts          ← Lenis instance ref
    │   ├── useInView.ts         ← Framer Motion inView wrapper
    │   └── useMagnet.ts         ← Magnetic button logic
    │
    ├── lib/
    │   ├── animations.ts        ← Shared Framer Motion variants
    │   └── utils.ts             ← cn(), splitWords(), etc.
    │
    ├── data/
    │   └── content.ts           ← ALL page content as typed objects
    │
    └── assets/
        └── images/
            ├── slot-a.jpg       ← [IMAGE SLOT A] Hero photo
            ├── slot-b.jpg       ← [IMAGE SLOT B] About photo
            ├── slot-c.jpg       ← [IMAGE SLOT C] SkillOne screenshot
            ├── slot-d.jpg       ← [IMAGE SLOT D] Path2Poll screenshot
            ├── slot-e.jpg       ← [IMAGE SLOT E] ReSageAI preview
            ├── slot-f.jpg       ← [IMAGE SLOT F] EaseEvents screenshot
            ├── slot-g.png       ← [IMAGE SLOT G] IEEE badge
            ├── slot-h.png       ← [IMAGE SLOT H] RIT logo
            ├── slot-i.png       ← [IMAGE SLOT I] DeepLearning.AI badge
            ├── slot-j.png       ← [IMAGE SLOT J] AMD badge
            ├── slot-k.png       ← [IMAGE SLOT K] Microsoft badge
            └── placeholder.svg  ← Shared placeholder SVG
```

---

## SECTION 2: PACKAGE MANIFEST

```json
{
  "name": "prasanna-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.3.0",
    "lenis": "^1.1.9",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.3",
    "vite": "^5.3.4"
  }
}
```

**Install command:**
```bash
npm create vite@latest prasanna-portfolio -- --template react-ts
cd prasanna-portfolio
npm install framer-motion lenis lucide-react clsx
```

---

## SECTION 3: DESIGN TOKENS (globals.css)

```css
/* ═══════════════════════════════════════════════
   ROOT DESIGN TOKENS — DO NOT HARDCODE VALUES
   All components reference these only.
   ═══════════════════════════════════════════════ */

:root {
  /* ── Colors ─────────────────────────────────── */
  --bg:            #080810;   /* True near-black, slight blue */
  --bg-surface:    #0F0F18;   /* Card backgrounds             */
  --bg-elevated:   #171724;   /* Hover / active states        */
  --bg-overlay:    rgba(8, 8, 16, 0.92);

  --border:        #1E1E2E;
  --border-hover:  #35354A;
  --border-accent: rgba(124, 111, 247, 0.30);

  --accent:        #7C6FF7;   /* Indigo-violet — PRIMARY      */
  --accent-dim:    rgba(124, 111, 247, 0.12);
  --accent-glow:   rgba(124, 111, 247, 0.20);
  --cyan:          #22D3EE;   /* Electric cyan — SECONDARY    */
  --cyan-dim:      rgba(34, 211, 238, 0.10);

  --text-1:        #EEEEF5;   /* Primary body text            */
  --text-2:        #8888A4;   /* Secondary / muted            */
  --text-3:        #444460;   /* Labels, placeholders         */

  --green:         #22C55E;
  --amber:         #F59E0B;

  /* ── Gradient ────────────────────────────────── */
  --gradient-accent: linear-gradient(135deg, #7C6FF7 0%, #22D3EE 100%);
  --gradient-subtle: linear-gradient(180deg, transparent 0%, var(--bg) 100%);
  --gradient-card:   linear-gradient(145deg, #0F0F18 0%, #12121E 100%);

  /* ── Typography ──────────────────────────────── */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* ── Type Scale ──────────────────────────────── */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  2rem;       /* 32px */
  --text-4xl:  2.5rem;     /* 40px */
  --text-5xl:  3.5rem;     /* 56px */
  --text-6xl:  5rem;       /* 80px */
  --text-hero: clamp(3.5rem, 8vw, 7rem); /* fluid hero size */

  /* ── Spacing (8pt grid) ──────────────────────── */
  --sp-1:   4px;   --sp-2:  8px;   --sp-3:  12px;
  --sp-4:  16px;   --sp-5: 24px;   --sp-6:  32px;
  --sp-7:  48px;   --sp-8: 64px;   --sp-9:  96px;
  --sp-10: 128px;

  /* ── Radius ──────────────────────────────────── */
  --radius-sm:   8px;
  --radius-md:  16px;
  --radius-lg:  24px;
  --radius-xl:  32px;
  --radius-pill: 9999px;

  /* ── Motion ──────────────────────────────────── */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-expo:  cubic-bezier(0.7, 0, 0.84, 0);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 200ms;
  --duration-mid:  400ms;
  --duration-slow: 800ms;

  /* ── Layout ──────────────────────────────────── */
  --max-width:    1240px;
  --gutter:       clamp(20px, 4vw, 40px);
  --section-gap:  clamp(80px, 10vw, 120px);
  --grid-gap:     16px;
}

/* ── Noise texture overlay ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.35;
}
```

---

## SECTION 4: SHARED ANIMATION VARIANTS (lib/animations.ts)

```typescript
// ═══════════════════════════════════════════════════
// MASTER ANIMATION VARIANTS — import from here only
// Never define variants inline in components
// ═══════════════════════════════════════════════════

import { Variants } from 'framer-motion';

/* Easing curves */
export const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
export const SPRING   = { type: 'spring', stiffness: 100, damping: 20 };

/* ── Fade up (standard section entry) ─────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EXPO_OUT },
  },
};

/* ── Stagger container ─────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ── Word reveal (hero + headings) ────────────── */
export const wordReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ── Fade in (simple, no movement) ────────────── */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

/* ── Scale in (cards, badges) ─────────────────── */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EXPO_OUT },
  },
};

/* ── Slide in from left ────────────────────────── */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ── Slide in from right ───────────────────────── */
export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ── Line draw (timeline, dividers) ───────────── */
export const drawLine: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: EXPO_OUT },
  },
};
```

---

## SECTION 5: LENIS SMOOTH SCROLL (main.tsx)

```typescript
// main.tsx — Entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import { App } from './App';
import './styles/globals.css';
import './styles/typography.css';

// ── Initialise Lenis smooth scroll ──────────────
const lenis = new Lenis({
  duration: 1.2,           // scroll duration multiplier
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 2,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Expose to window so any component can programmatically scroll
(window as any).__lenis = lenis;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## SECTION 6: CUSTOM CURSOR (components/Cursor/Cursor.tsx)

```typescript
// Awwwards-grade dual-ring cursor
// Dot: 8px, follows mouse exactly (no lag)
// Ring: 40px, follows with spring delay
// Expands to 64px on interactive element hover

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Cursor.module.css';

export function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Ring lags behind cursor with spring
  const springX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const addHover = () => isHovering.current = true;
    const removeHover = () => isHovering.current = false;

    // Add hover class tracking
    const interactives = document.querySelectorAll(
      'a, button, [data-cursor="hover"], .project-card'
    );
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      {/* Dot — exact mouse position, no lag */}
      <motion.div
        className={styles.dot}
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Ring — spring-delayed */}
      <motion.div
        className={styles.ring}
        style={{ x: springX, y: springY }}
      />
    </>
  );
}

// CSS Module spec for Cursor:
// .dot:  position fixed, 8×8px, border-radius 50%, bg var(--accent),
//        pointer-events none, z-index 9998, transform translate(-50%,-50%)
// .ring: position fixed, 40×40px, border-radius 50%,
//        border 1.5px solid rgba(124,111,247,0.5),
//        pointer-events none, z-index 9997, transform translate(-50%,-50%)
//        transition width/height 0.3s ease when hovering (grow to 64px)
```

---

## SECTION 7: COMPONENT SPECIFICATIONS

### 7.1 NAV COMPONENT

```typescript
// Behavior:
// - Fixed top, full width
// - Initial: transparent background
// - After scrolling 80px: adds .scrolled → blur backdrop + subtle border
// - Mobile: hamburger → full-screen dark overlay with staggered link reveal
// - Active section: underline indicator on nav link
// - Logo: "PS" in Space Grotesk 800, accent-colored "P"

// Animation:
// - Nav entrance: slide down from y: -20, opacity 0 → 1, 0.6s delay 0.2s
// - Mobile overlay: scale(0.98) + opacity 0 → scale(1) + opacity 1
// - Mobile links: stagger fadeUp with 60ms between each

// Height: 64px desktop, 56px mobile
// Background scrolled: rgba(8, 8, 16, 0.85) backdrop-blur(20px)
// Border scrolled: border-bottom 1px solid var(--border)
```

### 7.2 HERO COMPONENT

```typescript
// Layout: Two-column CSS Grid
// Left (7fr): Text content
// Right (5fr): Profile photo + floating accent elements

// Elements:
// 1. Status pill — top, slides in first
//    "🟢 Available for Placement · Chennai, India"
//    Style: pill, border var(--green) 30% opacity, text var(--green)

// 2. Name — PRASANNA SAI S
//    Split into WORDS, each word wrapped in overflow:hidden span
//    Each word animates: y: "100%" → "0%", stagger 60ms
//    Font: Space Grotesk 800, var(--text-hero)
//    Optional: gradient fill on "SAI" via background-clip:text

// 3. Role line
//    "AI Engineer · Cloud-Native Systems · ML Products"
//    Font: Inter 500, var(--text-2xl), color var(--text-2)
//    Animation: fadeUp after name, delay 0.4s

// 4. Tagline
//    "I build AI systems that run in production,
//     not just in notebooks."
//    Font: Inter 400, var(--text-lg), color var(--text-2), line-height 1.7
//    Animation: fadeUp, delay 0.6s

// 5. CTA Group — Magnetic buttons
//    Primary: "Explore Work →" (accent filled)
//    Secondary: "Download Resume ↗" (outlined)
//    Both: useMagnet hook (translate toward mouse on hover)
//    Animation: fadeUp, delay 0.8s

// 6. [IMAGE SLOT A] — Profile photo
//    280×380px, border-radius var(--radius-lg)
//    Border: 1px solid var(--border-accent)
//    On hover: subtle scale(1.02) transform, 600ms spring
//    Background: floating accent orb behind it (position:absolute,
//                blur:120px, width:200px, color:var(--accent-dim))

// 7. Background: CSS dot-grid pattern
//    radial-gradient(circle, rgba(124,111,247,0.06) 1px, transparent 1px)
//    background-size: 28px 28px
//    Fades to --bg at bottom via gradient mask

// 8. Scroll indicator — bottom center
//    Animated bouncing arrow or "scroll" text
//    Fades out after first scroll
```

### 7.3 STATS STRIP

```typescript
// Full-width band, 4 stats
// Background: var(--bg-surface)
// Border: top + bottom 1px solid var(--border)
// Padding: 40px 0

// Each stat:
//   - Number: Space Grotesk 800, clamp(2.5rem, 5vw, 3.5rem)
//   - Gradient text: background: var(--gradient-accent), -webkit-background-clip: text
//   - Suffix (+, %) rendered in var(--accent) separately
//   - Label: Inter 500 uppercase, var(--text-sm), letter-spacing 0.1em, var(--text-2)
//   - Animation: count from 0 to value over 1400ms ease-out
//             triggered by Framer Motion whileInView once

// Stats:
//   4+    Deployed AI Systems
//   99%   System Uptime
//   94%   Model Accuracy
//   1     IEEE Publication

// Dividers between stats: 1px solid var(--border), height 60%
// Mobile: 2×2 grid, no dividers
```

### 7.4 PROJECT CARDS (Bento Grid)

```typescript
// GRID LAYOUT:
// display: grid
// grid-template-columns: repeat(12, 1fr)
// grid-template-rows: auto
// gap: var(--grid-gap) → 16px
//
// Desktop card spans:
//   SkillOne:    col 1-7,  row 1-2 (LARGE — FEATURED FLAGSHIP)
//   Path2Poll:   col 8-12, row 1-2 (LARGE)
//   ReSageAI:    col 1-5,  row 3   (MEDIUM)
//   EaseEvents:  col 6-12, row 3   (MEDIUM)
//
// Tablet (768-1023px): 6-col grid, spans 3 each (2×2)
// Mobile (<768px): 1-col, full width, natural height

// CARD STRUCTURE (each card):
// ┌─────────────────────────────────────────┐
// │ [IMAGE SLOT] — top 55% of card height  │
// │ Hover: scale(1.04) on image only        │
// │ Status chip — top-right absolute        │
// ├─────────────────────────────────────────┤
// │ Category label — text-xs uppercase      │
// │ Project title — Space Grotesk 700       │
// │ Summary — Inter 400, 2 lines            │
// │ Tech badges row                          │
// │ Metric callout — accent color           │
// │ Link row: [Live ↗] [GitHub ↗] [→]       │
// └─────────────────────────────────────────┘

// CARD INTERACTIONS:
// - Hover: border-color → var(--border-hover), translateY(-4px), 300ms spring
// - Image: overflow hidden, inner img scale(1.05) on card hover, transition 600ms
// - "→" button: reveals full case study modal
// - All animations via Framer Motion whileHover

// STATUS CHIPS:
// 🟢 Live:       bg rgba(34,197,94,0.12), text var(--green), border 1px solid rgba(34,197,94,0.3)
// 📄 Published:  bg rgba(245,158,11,0.12), text var(--amber), border 1px solid rgba(245,158,11,0.3)
// Both: position absolute top-right, border-radius var(--radius-pill), padding 4px 12px

// PROJECT MODAL (full case study):
// - Full-screen overlay: rgba(8,8,16,0.95) backdrop-blur(8px)
// - Modal panel: slides up from bottom, max-width 800px, max-height 90vh, scrollable
// - Close: Escape key + ✕ button + backdrop click
// - Focus trap while open
// - Body scroll locked
// - Content: full case study from blueprint Section 4
// - [IMAGE SLOT — architecture diagram or secondary screenshot]
```

### 7.5 MAGNETIC BUTTON (hooks/useMagnet.ts)

```typescript
// Tracks mouse position relative to button center
// Translates button toward mouse by 30% of distance
// Inner text element translates by 15% (creates parallax depth)
// Snaps back on mouse leave with spring

import { useRef, useState } from 'react';

export function useMagnet(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTransform({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const onMouseLeave = () => setTransform({ x: 0, y: 0 });

  return { ref, transform, onMouseMove, onMouseLeave };
}

// Usage in component:
// const { ref, transform, onMouseMove, onMouseLeave } = useMagnet();
// <motion.button
//   ref={ref}
//   animate={{ x: transform.x, y: transform.y }}
//   transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//   onMouseMove={onMouseMove}
//   onMouseLeave={onMouseLeave}
// >
```

### 7.6 TEXT SPLITTING UTILITY (lib/utils.ts)

```typescript
// splitWords: wraps each word in overflow:hidden span pair
// for masked word-reveal animations

export function splitWords(text: string): string[] {
  return text.split(' ');
}

// Usage in component:
// <motion.h1 variants={staggerContainer} initial="hidden" animate="visible">
//   {splitWords("PRASANNA SAI S").map((word, i) => (
//     <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
//       <motion.span
//         style={{ display: 'inline-block' }}
//         variants={wordReveal}
//       >
//         {word}&nbsp;
//       </motion.span>
//     </span>
//   ))}
// </motion.h1>
```

### 7.7 SKILLS SECTION

```typescript
// Layout: 6 category groups in a responsive grid
// Each group: category label + tile grid of skills

// Tile style:
//   bg: var(--bg-surface)
//   border: 1px solid var(--border)
//   border-radius: var(--radius-sm)
//   padding: 10px 16px
//   font: JetBrains Mono 400, var(--text-sm)
//   color: var(--text-2)
//   Hover: border-color var(--accent) 40%, color var(--text-1), bg var(--bg-elevated)
//   Transition: all 200ms var(--ease-out-expo)

// Animation: stagger scaleIn, 30ms between each tile
// Entrance: triggered by whileInView, once:true

// Category icons: use Lucide React icons (Code, Cloud, Database, etc.)
```

### 7.8 ACHIEVEMENTS SECTION

```typescript
// Three sub-blocks:

// 1. IEEE RESEARCH CARD — full-width, featured
//    - Amber left border (4px solid var(--amber))
//    - [IMAGE SLOT G] — IEEE logo, 60×40px
//    - Paper title in Space Grotesk 600
//    - Conference + year in mono
//    - "Read Paper →" link with external icon
//    - Background: subtle amber gradient bottom
//    - Framer Motion: slideLeft entrance

// 2. RECOGNITION ROW
//    - Google PromptWars: icon + rank + description
//    - Single row card, small

// 3. CERTIFICATIONS GRID (3 cards, equal width)
//    Each card:
//    - [IMAGE SLOT I/J/K] — issuer logo
//    - Certificate name (truncated)
//    - Issuer name in mono
//    - "Verify ↗" link
//    - Stagger scaleIn animations
```

### 7.9 CONTACT SECTION

```typescript
// Heading: "Let's Build Something"
// Sub: one-line (see copy)

// Layout: 2-col grid desktop, single-col mobile

// Left: direct links (email, LinkedIn, GitHub)
//   Each as a large hoverable row:
//   [icon] [label text] [→ arrow that slides in on hover]
//   Border-bottom between each
//   Full-row hover: bg var(--bg-elevated), translateX(4px)

// Right: contact form
//   Fields: Name · Email · Message
//   Input style:
//     bg: transparent
//     border-bottom: 1px solid var(--border)
//     border-radius: 0 (underline style, not box style)
//     padding: 12px 0
//     font: Inter 400, var(--text-base)
//     color: var(--text-1)
//     :focus: border-bottom-color var(--accent)
//   Submit button: magnetic, accent filled, full width on mobile
//   Form action: Formspree endpoint [MISSING — owner fills in]

// Section background: subtle accent glow orb (position absolute,
//   blurred ellipse, var(--accent-dim), behind content)
```

---

## SECTION 8: IMAGE SLOT SYSTEM

### 8.1 ImageSlot Component

```typescript
// components/ImageSlot/ImageSlot.tsx

interface ImageSlotProps {
  slotId: string;           // e.g. "slot-a"
  label: string;            // e.g. "Hero Profile Photo"
  src: string;              // e.g. import slotA from '../../assets/images/slot-a.jpg'
  alt: string;              // descriptive alt text
  recommendedSize: string;  // e.g. "280×380px"
  className?: string;
  style?: React.CSSProperties;
}

export function ImageSlot({ slotId, label, src, alt, recommendedSize, className, style }: ImageSlotProps) {
  const isPlaceholder = src.includes('placeholder');

  return (
    <div
      className={`img-slot ${isPlaceholder ? 'img-slot--empty' : ''} ${className ?? ''}`}
      data-slot={slotId}
      style={style}
    >
      {/* ═══════════════════════════════════════════════
          IMAGE SLOT: {slotId}
          Label: {label}
          Replace src import in: src/assets/images/{slotId}.jpg
          Recommended size: {recommendedSize}
          ═══════════════════════════════════════════════ */}

      {!isPlaceholder && (
        <img src={src} alt={alt} className="img-slot__img" loading="lazy" />
      )}

      {isPlaceholder && (
        <div className="img-slot__placeholder" aria-hidden="true">
          <div className="img-slot__icon">📷</div>
          <div className="img-slot__label">{label}</div>
          <code className="img-slot__path">
            src/assets/images/{slotId}.jpg
          </code>
          <div className="img-slot__size">{recommendedSize}</div>
        </div>
      )}
    </div>
  );
}
```

### 8.2 ImageSlot CSS

```css
.img-slot {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  background: var(--bg-elevated);
}

.img-slot__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 600ms var(--ease-out-expo);
}

/* Scale image on card hover (parent triggers this) */
.project-card:hover .img-slot__img {
  transform: scale(1.05);
}

/* Placeholder state */
.img-slot--empty {
  border: 2px dashed var(--border-hover);
}

.img-slot__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 140px;
  gap: var(--sp-2);
  padding: var(--sp-5);
  text-align: center;
}

.img-slot__icon  { font-size: 1.5rem; opacity: 0.3; }
.img-slot__label { font: 500 var(--text-sm)/1 var(--font-body); color: var(--text-2); }
.img-slot__path  { font: 400 var(--text-xs)/1 var(--font-mono); color: var(--accent); opacity: 0.7; }
.img-slot__size  { font: 400 var(--text-xs)/1 var(--font-mono); color: var(--text-3); }
```

### 8.3 Complete Slot Registry

```typescript
// src/assets/images/index.ts
// Import all images here. Replace placeholder.svg with real files as you add them.

import placeholder from './placeholder.svg';

// ── Replace each import below with your actual image file ──────────────────
export const slotA = placeholder;  // Hero profile photo        (280×380, portrait)
export const slotB = placeholder;  // About section photo        (360×360, square)
export const slotC = placeholder;  // SkillOne screenshot        (600×340, landscape)
export const slotD = placeholder;  // Path2Poll screenshot       (480×340, landscape)
export const slotE = placeholder;  // ReSageAI / IEEE preview    (480×280, landscape)
export const slotF = placeholder;  // EaseEvents screenshot      (600×280, landscape)
export const slotG = placeholder;  // IEEE logo / badge          (120×80)
export const slotH = placeholder;  // RIT / Centre for AI logo   (200×60)
export const slotI = placeholder;  // DeepLearning.AI badge      (200×120)
export const slotJ = placeholder;  // AMD AI Academy badge       (200×120)
export const slotK = placeholder;  // Microsoft Applied Skills   (200×120)
// ── End of slot registry ──────────────────────────────────────────────────
```

---

## SECTION 9: CONTENT DATA FILE (src/data/content.ts)

```typescript
// All page content lives here as a single typed object.
// Updating the portfolio = editing this file only. No HTML hunting.

export const CONTENT = {
  personal: {
    name:      'Prasanna Sai S',
    email:     'prasannas1104@gmail.com',
    linkedin:  '[FILL IN: full LinkedIn URL]',
    github:    '[FILL IN: full GitHub profile URL]',
    location:  'Chennai, India',
    available: 'Available for Placement',
  },

  hero: {
    title:    'PRASANNA SAI S',
    roles:    ['AI Engineer', 'Cloud-Native Systems', 'ML Products'],
    tagline:  'I build AI systems that run in production,\nnot just in notebooks.',
    ctaPrimary:   { label: 'Explore My Work', href: '#projects' },
    ctaSecondary: { label: 'Download Resume', href: '/resume/prasanna_sai_resume.pdf' },
    statusPill:   '🟢 Available for Placement · Chennai, India',
  },

  stats: [
    { value: 4,  suffix: '+',  label: 'Deployed AI Systems' },
    { value: 99, suffix: '%',  label: 'System Uptime'        },
    { value: 94, suffix: '%',  label: 'Model Accuracy'       },
    { value: 1,  suffix: '',   label: 'IEEE Publication'     },
  ],

  about: {
    paragraphs: [
      `I'm Prasanna Sai S — an AI & Data Science engineer from Chennai, India, finishing my B.Tech at Rajalakshmi Institute of Technology. I specialize in building AI systems that bridge the gap between model development and real-world deployment: from knowledge graph-powered SaaS platforms to multi-region cloud-native applications on GCP.`,
      `My work spans full-stack AI engineering, backend systems design, and cloud-native deployment. I've published research at an IEEE international conference, built systems achieving up to 94% accuracy in production, and maintained 99% uptime on live multi-region applications. I care as much about how a system runs as how it was built.`,
      `Outside engineering, I'm a keyboardist, a club badminton player, and a former school chess representative — disciplines that have shaped how I think about systems, performance, and execution under pressure.`,
    ],
    quickFacts: ['📍 Chennai, India', '🎓 B.Tech AI & DS', '🎵 Musician & Athlete'],
  },

  projects: [
    {
      id:       'skillone',
      title:    'SkillOne',
      headline: 'Personalized AI Learning Path Generator',
      category: 'Full-Stack SaaS · Knowledge Graphs · Hugging Face',
      summary:  'Full-stack personalized learning platform that dynamically constructs prerequisite-aware educational roadmaps using knowledge graphs. 93% coherence accuracy.',
      stack:    ['Python', 'Knowledge Graphs', 'React', 'Hugging Face', 'NLP'],
      metric:   '93% coherence accuracy',
      status:   'live' as const,
      liveUrl:  '[FILL IN: Hugging Face Space URL]',
      githubUrl:'[FILL IN: GitHub URL]',
      imageSlot:'slot-c',
      size:     'large' as const,
      caseStudy: {
        problem: 'Generic online course platforms offer no intelligent sequencing — learners waste time on wrong-order content.',
        whyMatters: 'Personalized learning is a billion-dollar market problem; this is a production-grade attempt at a real SaaS solution.',
        architecture: 'Knowledge graph engine → Recommendation pipeline → React frontend → Hugging Face Spaces backend',
        metrics: ['93% accuracy in coherence logic', 'Full-stack deployment on Hugging Face Spaces'],
      },
    },
    {
      id:       'path2poll',
      title:    'Path2Poll',
      headline: 'Cloud-Native AI Election Assistant',
      category: 'Cloud Engineering · LLM Integration · GCP',
      summary:  'Live multi-region election intelligence app on GCP Cloud Run. Integrates ECI, NVSP, and Google Civic APIs with LLMs for real-time, location-aware election information.',
      stack:    ['Python', 'FastAPI', 'GCP Cloud Run', 'LLM APIs', 'Civic API'],
      metric:   '99% system uptime',
      status:   'live' as const,
      liveUrl:  '[FILL IN: Live URL]',
      githubUrl:'[FILL IN: GitHub URL]',
      imageSlot:'slot-d',
      size:     'large' as const,
      caseStudy: {
        problem: 'Citizens lack a unified, real-time source for election schedules and polling information at scale across regions.',
        whyMatters: 'Election participation infrastructure is a civic problem; solving it with AI demonstrates real-world product responsibility.',
        architecture: 'LLM prompt pipeline → API aggregation (ECI, NVSP, Civic API) → Cloud Run backend → Web frontend',
        metrics: ['99% uptime', 'Multi-region active deployment', 'Live production on GCP Cloud Run'],
      },
    },
    {
      id:       'resageai',
      title:    'ReSageAI',
      headline: 'AI-Enhanced Resume Screening Framework',
      category: 'NLP · Research · IEEE Published',
      summary:  'Intelligent resume screening system with content scoring and suggestive feedback. Published at IEEE ICRTEECT25. Combines NLP models with structured feedback for HR workflows.',
      stack:    ['Python', 'NLP', 'Scikit-learn', 'PyTorch'],
      metric:   'IEEE Peer-Reviewed',
      status:   'published' as const,
      paperUrl: '[FILL IN: IEEE Xplore URL]',
      githubUrl:'[FILL IN: GitHub URL]',
      imageSlot:'slot-e',
      size:     'medium' as const,
      caseStudy: {
        problem: 'Manual resume screening is slow, subjective, and inconsistent at scale — HR teams lose qualified candidates to bias and volume.',
        whyMatters: 'AI-augmented hiring is a core enterprise concern; this paper demonstrates original research contribution in a commercially relevant domain.',
        architecture: 'Resume parsing → Content scoring model → Feedback generation engine → API output',
        metrics: ['IEEE ICRTEECT25 published', 'Peer-reviewed research'],
      },
    },
    {
      id:       'easeevents',
      title:    'EaseEvents',
      headline: 'Real-Time Crowd Intelligence System',
      category: 'AI Operations · AppSheet · GCP Cloud Run',
      summary:  'Deployed crowd intelligence platform for large-scale sporting venues. Converts natural language commands into actionable crowd flow directives for real-time coordination.',
      stack:    ['Python', 'GCP Cloud Run', 'AppSheet', 'LLM APIs'],
      metric:   'Live operational system',
      status:   'live' as const,
      liveUrl:  'https://www.appsheet.com/start/0d713229-0f8f-4dbd-8dc0-ccd749733a05',
      backendUrl:'https://easeevents-256197745153.asia-south1.run.app/',
      githubUrl: '[FILL IN: GitHub URL]',
      imageSlot: 'slot-f',
      size:     'medium' as const,
      caseStudy: {
        problem: 'Crowd management in large venues relies on manual coordination — slow, error-prone, unable to respond to real-time density changes.',
        whyMatters: 'Operational AI that runs in physical environments is a premium engineering signal — this is a live system, not a demo.',
        architecture: 'Natural language input → LLM command interpreter → Coordination logic → AppSheet frontend → GCP Cloud Run backend',
        metrics: ['Live AppSheet deployment', 'Active GCP Cloud Run backend'],
      },
    },
  ],

  experience: [{
    role:    'AI Engineering Intern',
    company: 'Centre for AI, Rajalakshmi Institute of Technology',
    location:'Chennai, India',
    period:  '[FILL IN: Month Year – Month Year]',
    points: [
      'Built intelligent AI backend systems achieving up to 94% accuracy',
      'Developed SkillOne platform using knowledge graphs, React frontend, and Hugging Face Spaces',
      'Contributed to AI-first product development in an academic R&D environment',
    ],
    logoSlot: 'slot-h',
  }],

  skills: [
    { category: 'Languages',    icon: 'Code',     items: ['Python', 'SQL', 'HTML', 'CSS'] },
    { category: 'Frameworks',   icon: 'Layers',   items: ['Flask', 'FastAPI', 'PyTorch', 'Scikit-learn', 'Google JAX'] },
    { category: 'Data & ML',    icon: 'Brain',    items: ['NumPy', 'Pandas', 'Hugging Face', 'Jupyter', 'Kaggle'] },
    { category: 'Cloud/DevOps', icon: 'Cloud',    items: ['GCP', 'Cloud Run', 'Docker', 'CI/CD', 'Supabase'] },
    { category: 'Tools',        icon: 'Wrench',   items: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'SQLAlchemy'] },
    { category: 'APIs & LLMs',  icon: 'Zap',      items: ['LLM APIs', 'ECI/NVSP API', 'Civic API', 'AppSheet'] },
  ],

  achievements: {
    research: {
      title:      'ReSage AI: An AI-Enhanced Resume Screening Framework with Intelligent Content Scoring and Suggestive Feedback Mechanism',
      conference: 'IEEE ICRTEECT25',
      year:       2025,
      url:        '[FILL IN: IEEE Xplore URL]',
      logoSlot:   'slot-g',
    },
    recognition: [{
      title:  'Top 400 — Google PromptWars: Virtual',
      detail: 'Consecutive ranking in Google\'s competitive prompt engineering challenge',
    }],
    certifications: [
      { name: 'Generative AI for Software Development Professional Certificate', issuer: 'DeepLearning.AI', verifyUrl: '[FILL IN]', slot: 'slot-i' },
      { name: 'Building AI Agents with MCP and Open-Source Inference',           issuer: 'AMD AI Academy',    verifyUrl: '[FILL IN]', slot: 'slot-j' },
      { name: 'Identity and Access Management with Microsoft Entra',             issuer: 'Microsoft Applied Skills', verifyUrl: '[FILL IN]', slot: 'slot-k' },
    ],
  },

  education: [
    { degree: 'B.Tech — Artificial Intelligence & Data Science', institution: 'Rajalakshmi Institute of Technology (Anna University, Autonomous)', year: 'Expected 2027', grade: 'GPA 8.07 / 10' },
    { degree: 'Class XII — CBSE',  institution: '', year: '', grade: '83%' },
    { degree: 'Class X — CBSE',    institution: '', year: '', grade: '70.40%' },
  ],

  contact: {
    heading:    'Let\'s Build Something',
    subheading: 'Whether you\'re evaluating for placement, an internship, or want to talk AI systems — I\'m available and listening.',
    formEndpoint: '[FILL IN: https://formspree.io/f/XXXXXXXX]',
  },
} as const;
```

---

## SECTION 10: SEO + META (index.html)

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary SEO -->
  <title>Prasanna Sai S | AI Engineer · Cloud-Native Systems · Chennai</title>
  <meta name="description" content="Portfolio of Prasanna Sai S — AI & Data Science engineer specializing in cloud-native ML systems, LLM integration, and full-stack AI product development. IEEE published. GCP deployed.">

  <!-- Canonical -->
  <link rel="canonical" href="https://[YOUR_DOMAIN]/" />

  <!-- Open Graph -->
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://[YOUR_DOMAIN]/" />
  <meta property="og:title"       content="Prasanna Sai S | AI Engineer" />
  <meta property="og:description" content="Full-stack AI engineer. IEEE published. Cloud-native. Available for placement." />
  <meta property="og:image"       content="https://[YOUR_DOMAIN]/og-preview.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="Prasanna Sai S | AI Engineer" />
  <meta name="twitter:description" content="Full-stack AI engineer. IEEE published. GCP deployed. Open to placement." />
  <meta name="twitter:image"       content="https://[YOUR_DOMAIN]/og-preview.jpg" />

  <!-- Fonts — preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

---

## SECTION 11: QUALITY CHECKLIST FOR AGENT

```
BEFORE MARKING COMPLETE:

REACT + TYPESCRIPT:
  ✓ Zero TypeScript errors (tsc --noEmit passes clean)
  ✓ No any types used without justification
  ✓ All components have explicit prop interfaces
  ✓ No inline styles except motion.style values
  ✓ All content comes from src/data/content.ts — no hardcoded strings

ANIMATIONS:
  ✓ All Framer Motion variants defined in lib/animations.ts, not inline
  ✓ whileInView has viewport={{ once: true }} on all section entries
  ✓ prefers-reduced-motion: wrap all motion with useReducedMotion() hook
  ✓ Lenis is initialised once in main.tsx, not per-component
  ✓ No animation blocks scroll or input interaction
  ✓ Custom cursor hidden on touch devices (pointer: coarse)

ACCESSIBILITY:
  ✓ All images have descriptive alt attributes
  ✓ Headings follow logical H1→H2→H3 order (no skips)
  ✓ aria-label only on elements with a role or on <a>/<button>
  ✓ Modal: focus trapped, Escape closes, focus restored on close
  ✓ Color contrast WCAG AA for all text
  ✓ Skip-to-main-content link as first DOM element

PERFORMANCE:
  ✓ All images lazy-loaded except hero (slot-a: loading="eager")
  ✓ Fonts load with display=swap
  ✓ Vite build runs clean (npm run build succeeds)
  ✓ No console errors or warnings in production build

IMAGE SLOTS:
  ✓ All 11 slots (A–K) implemented as ImageSlot component
  ✓ Placeholder state shows dashed border + label + file path
  ✓ Comments above every slot explaining replacement steps
  ✓ src/assets/images/index.ts exports all slots from one place

MISSING CONTENT:
  ✓ All [FILL IN] values rendered as visually marked placeholders
  ✓ No [FILL IN] text appears as visible page content (styled distinctly)
  ✓ Formspree endpoint shows "YOUR_FORMSPREE_ENDPOINT" placeholder
```

---

*Technical Design System v2.0 — Stack: React 18 + Vite 5 + Framer Motion 11 + Lenis*
*Paired with: antigravity_master_prompt.md*
