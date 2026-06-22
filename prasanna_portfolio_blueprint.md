# Portfolio Documentation Blueprint
## Prasanna Sai S — AI & Data Science Engineer
### Version 1.0 | For AI Coding Agent Implementation

---

## EXECUTIVE SUMMARY

This document is the complete design and content specification for a premium personal portfolio for **Prasanna Sai S**, a B.Tech AI & Data Science undergraduate targeting FAANG/MNC-level recruiter attention. The portfolio is positioned as a value-signaling professional asset — not a student project page — and must communicate production-grade, deployment-ready AI engineering capability.

**Design Aesthetic**: Inspired by a premium dark bento-grid layout (referencing the provided Wayne Harkwood design as a tone reference). The final design will be uniquely adapted for an AI/cloud engineering persona — architectural, precise, and technically expressive rather than purely creative.

**Key Differentiators from average student portfolios:**
- Case-study-depth project presentations with real metrics and live deployment links
- Deployed systems (not just GitHub repos) presented as proof of production thinking
- IEEE-published research surfaced as a trust anchor
- A visual identity system that feels like a professional product, not a template

---

## SECTION 1: POSITIONING & NARRATIVE

### 1.1 Professional Brand Statement

> **"Full-Stack AI Engineer who builds, deploys, and ships."**

Sub-positioning: *From research papers to cloud-native production systems — bridging the gap between academic depth and engineering execution.*

### 1.2 Homepage Hero Title & Subtitle

```
TITLE:     Prasanna Sai S
SUBTITLE:  AI Engineer · Cloud-Native Systems · ML Products
TAGLINE:   I build AI systems that run in production,
           not just notebooks.
```

### 1.3 Value Proposition (internal framing for all design decisions)

Prasanna is positioned in the rare middle ground between:
- The ML researcher (IEEE-published, accuracy metrics, knowledge graphs)
- The cloud engineer (GCP Cloud Run, CI/CD, 99% uptime)
- The product developer (full-stack SaaS, real users, live links)

Most student portfolios occupy only one of these. This portfolio must signal all three.

### 1.4 Differentiation Strategy

| Average Student Portfolio | Prasanna's Portfolio |
|--------------------------|---------------------|
| "Here are my GitHub repos" | Live deployed systems with metrics |
| "I know Python and ML" | IEEE paper + 94% accuracy on production system |
| "I'm learning cloud" | Multi-region GCP deployment with 99% uptime |
| Generic skills list | Architecture diagrams + tech stack context |
| No measurable outcomes | Quantified results in every project |

---

## SECTION 2: INFORMATION ARCHITECTURE

### 2.1 Page Structure Decision: **Single-Page with Anchor Navigation**

**Rationale**: Recruiters spend 30–90 seconds on first pass. A single-page structure ensures all content is accessible without navigation friction. Deep-scroll rewards explorers; anchor links serve skimmers.

### 2.2 Section Order (Optimized for Recruiter Flow)

```
[0] NAVIGATION BAR          — Fixed, minimal, sticky
[1] HERO                    — Name, title, tagline, CTA, status badge
[2] STATS STRIP             — 4 key numbers (trust anchor above the fold)
[3] ABOUT                   — Personal brand narrative + photo
[4] FEATURED PROJECTS       — 4 flagship case studies (main body)
[5] EXPERIENCE              — Internship details
[6] SKILLS & TECH STACK     — Visual matrix, not a list
[7] RESEARCH & ACHIEVEMENTS — IEEE paper, rankings, certifications
[8] EDUCATION               — Clean timeline
[9] CONTACT                 — Direct contact form + links
[10] FOOTER                 — Links, copyright, built-with note
```

**Why this order:**
- Stats Strip immediately after Hero anchors credibility before the reader can leave
- Projects come before Experience because deployed products are stronger proof than titles
- Skills come after Projects so context is already established
- Research and Achievements are mid-page trust boosters before the close

### 2.3 Sitemap

```
prasannasai.dev/  (or equivalent)
│
├── #hero
├── #about
├── #projects
│   ├── skillone (expandable)
│   ├── path2poll (expandable)
│   ├── resageai (expandable)
│   └── easeevents (expandable)
├── #experience
├── #skills
├── #achievements
├── #education
├── #contact
│
├── /resume  → Opens PDF (new tab)
└── [External links: GitHub, LinkedIn, IEEE paper, live apps]
```

---

## SECTION 3: CONTENT STRATEGY

### 3.1 Content Matrix

#### NAV BAR
- Logo: "PS" monogram (text-based, not image)
- Nav links: About · Projects · Skills · Research · Contact
- CTA button: "View Resume" (links to PDF)
- Status badge (optional): 🟢 Open to Opportunities

---

#### [1] HERO SECTION
- Full name in display type: PRASANNA SAI S
- Role line: AI Engineer · Cloud-Native Systems · ML Products
- 2-line tagline (see copy draft in Section 9)
- Two CTAs: "Explore My Work" (scrolls to projects) + "Download Resume"
- Social links: GitHub · LinkedIn · Email
- **[IMAGE SLOT A]** — Profile photo (see Section 11 for image customization spec)
- Animated status pill: "🟢 Available for Internship / Full-time Positions"

---

#### [2] STATS STRIP
Four high-impact numbers in a horizontal band:

| Stat | Value | Label |
|------|-------|-------|
| 1 | 4+ | Deployed AI Systems |
| 2 | 99% | System Uptime (Path2Poll) |
| 3 | 94% | Model Accuracy |
| 4 | 1 | IEEE Published Paper |

---

#### [3] ABOUT SECTION
**Content:**
- 3-paragraph narrative (see copy draft in Section 9)
- **[IMAGE SLOT B]** — Secondary profile photo or illustrated avatar
- 3 quick-fact pills: 📍 Chennai, India · 🎓 B.Tech AI & DS · 🎵 Musician & Athlete
- Link: "More about me →" (expands or scrolls)

**Keep concise:** About section is a bridge, not a biography. Aim for 80–100 words max in the visible state.

---

#### [4] FEATURED PROJECTS SECTION

Four cards in a bento-grid arrangement. Each card links to an expanded case-study modal or an in-page expanded section. See Section 5 for full case-study outlines.

**Card content (visible):**
- Project name (display type)
- One-line descriptor
- 2–3 key tech badges
- 1 metric callout
- Status chip: "🟢 Live" / "📄 Published" / "🏗 Deployed"
- **[IMAGE SLOT C/D/E/F]** — Project screenshot or banner per card (see Section 11)
- Links: Live Demo · GitHub · Case Study

---

#### [5] EXPERIENCE SECTION
**AI Engineering Intern — Centre for AI, RIT Chennai**
- Duration: November 2025 - January 2026
- Key achievements:
  - Built intelligent AI backend systems achieving up to 94% accuracy
  - Developed SkillOne using knowledge graphs, React frontend, and Hugging Face Spaces
  - Contributed to AI-first product thinking in an academic R&D environment

---

#### [6] SKILLS & TECH STACK SECTION

Present as a categorized visual matrix, NOT a simple list. Use icon + label format.

| Category | Skills |
|----------|--------|
| **Languages** | Python · SQL · HTML/CSS |
| **Frameworks** | Flask · FastAPI · PyTorch · Scikit-learn · Google JAX |
| **Data & ML** | NumPy · Pandas · Hugging Face · Jupyter · Kaggle |
| **Cloud & DevOps** | GCP · Cloud Run · Docker · CI/CD · Supabase |
| **Tools** | Git · GitHub · VS Code · Google Colab · SQLAlchemy |
| **APIs & LLMs** | LLM API Integration · ECI/NVSP/Civic API · AppSheet |

**Note:** Do NOT include "Antigravity" in the public-facing skills matrix — it is an easter egg Python module and undermines professional tone.

---

#### [7] RESEARCH & ACHIEVEMENTS SECTION

Sub-sections:

**Research Publication:**
- IEEE Paper: "ReSage AI: An AI-Enhanced Resume Screening Framework with Intelligent Content Scoring and Suggestive Feedback Mechanism"
- Conference: ICRTEECT25
- [DOI link or IEEE Xplore URL: https://ieeexplore.ieee.org/document/11448669 ]
- **[IMAGE SLOT G]** — IEEE badge or paper cover thumbnail

**Recognition:**
- Top 400 — Google PromptWars: Virtual (consecutive)

**Certifications (3 featured):**
- Generative AI for Software Development Professional Certificate — DeepLearning.AI . Verification link: https://learn.deeplearning.ai/certificates/e09e78d8-f080-416f-a582-05814bac28e3
- Building AI Agents with MCP and Open-Source Inference — AMD AI Academy . Verification link: https://academy.amd.com/certs/31042/24E7120219A1420DAECC10DC880BCD10166281.pdf
- Identity and Access Management with Microsoft Entra — Microsoft Applied Skills . Verification link: https://learn.microsoft.com/en-us/users/prasannasai-6203/credentials/3e967941e28911bf

Each certification: Name · Issuer · [Badge image or issuer logo] ·

---

#### [8] EDUCATION SECTION

Timeline format:

```
B.Tech — Artificial Intelligence & Data Science
Rajalakshmi Institute of Technology (Anna University, Autonomous)
Expected: 2027 | GPA: 8.07/10

Class XII — CBSE                    83%
Class X  — CBSE                     70.40%
```

**Keep minimal.** GPA is credible. Class X/XII only if layout permits — de-emphasize.

---

#### [9] CONTACT SECTION
- Heading: "Let's Build Something"
- Sub: One-line CTA (see Section 9)
- Form fields: Name · Email · Message · Send
- Side links: 📧 prasannas1104@gmail.com · LinkedIn: https://www.linkedin.com/in/prasanna-sai-s · GitHub: https://github.com/PrasannaSaiS
- Location note: Chennai, India · Open to Relocation

---

#### [10] FOOTER
- Copyright line
- Social icons: GitHub · LinkedIn · Email
- Built-with note (optional): "Built with [tech stack] · Designed by Prasanna Sai S"

---

## SECTION 4: PROJECT STORYTELLING FRAMEWORK

### Priority Order (by recruiter impact):
1. **Path2Poll** — Cloud deployment proof (hardest to fake, most impressive operationally)
2. **SkillOne** — Full-stack product (most complex, SaaS-grade)
3. **ReSageAI** — Research credibility (IEEE paper = differentiated trust signal)
4. **EaseEvents** — Live operational system (real-world deployment + live links)

---

### 4.1 PROJECT CARD: PATH2POLL

**Headline:** Path2Poll — Cloud-Native AI Election Assistant
**Category tag:** Cloud Engineering · LLM Integration · GCP

**Summary Card (visible on grid):**
> A live, multi-region election intelligence app on GCP Cloud Run. Integrates ECI, NVSP, and Google Civic APIs with LLMs to give voters real-time, location-aware election information. 99% uptime. Zero downtime in live usage.

**Case Study Outline (expanded view):**

| Section | Content |
|---------|---------|
| Problem | Citizens lack a unified, real-time source for election schedules and polling information — especially at scale across regions |
| Why It Matters | Election participation infrastructure is a civic problem; solving it with AI demonstrates real-world product responsibility |
| Architecture | LLM prompt pipeline → API aggregation layer (ECI, NVSP, Civic API) → Cloud Run backend → Web frontend |
| Tech Stack | Python · FastAPI · GCP Cloud Run · LLM APIs · ECI/NVSP/Google Civic APIs |
| Implementation Highlights | Multi-region deployment, location-aware LLM context injection, API orchestration with fallback handling |
| Metrics | 99% uptime · Multi-region active · Live production deployment |
| Status | 🟢 LIVE |
| Links | [Live App — https://path2poll-720033712420.us-central1.run.app] · [GitHub — https://github.com/PrasannaSaiS/Path2Poll] |
| **[IMAGE SLOT D]** | Architecture diagram or app screenshot |

---

### 4.2 PROJECT CARD: SKILLONE

**Headline:** SkillOne — Personalized AI Learning Path Generator
**Category tag:** Full-Stack SaaS · Knowledge Graphs · Hugging Face

**Summary Card:**
> A full-stack personalized learning platform that dynamically constructs prerequisite-aware educational roadmaps using knowledge graphs. Achieved 93% coherence accuracy in course recommendation logic.

**Case Study Outline:**

| Section | Content |
|---------|---------|
| Problem | Generic online course platforms offer no intelligent sequencing — learners waste time on wrong-order content |
| Why It Matters | Personalized learning is a billion-dollar market problem; this is a production-grade attempt at a real SaaS solution |
| Architecture | Knowledge graph engine → Recommendation pipeline → React frontend → Hugging Face Spaces backend |
| Tech Stack | Python · Knowledge Graphs · React · Hugging Face Spaces · NLP models |
| Implementation Highlights | Prerequisite graph construction, dynamic course sequencing, coherence scoring algorithm |
| Metrics | 93% accuracy in coherence logic · Full-stack deployment on Hugging Face Spaces |
| Status | 🟢 Deployed on Hugging Face Spaces |
| Links | [Hugging Face Space — https://huggingface.co/spaces/PrasannaSaiS/skillone-api] · [GitHub — https://github.com/PrasannaSaiS/SkillOne-Model] |
| **[IMAGE SLOT C]** | App screenshot or learning path visualization |

---

### 4.3 PROJECT CARD: RESAGEAI

**Headline:** ReSageAI — AI-Enhanced Resume Screening Framework
**Category tag:** NLP · Research · IEEE Published

**Summary Card:**
> An intelligent resume screening system with content scoring and suggestive feedback. Published at IEEE ICRTEECT25. Combines NLP scoring models with structured feedback mechanisms to assist HR workflows at scale.

**Case Study Outline:**

| Section | Content |
|---------|---------|
| Problem | Manual resume screening is slow, subjective, and inconsistent at scale — HR teams lose qualified candidates to bias and volume |
| Why It Matters | AI-augmented hiring is now a core enterprise concern; this paper demonstrates original research contribution in a commercially relevant domain |
| Architecture | Resume parsing layer → Content scoring model → Feedback generation engine → API output |
| Tech Stack | Python · NLP · Scikit-learn · PyTorch · 

1. Core System Architecture & Backend
Web Framework: Flask
Styling: Custom CSS (responsive grid layout)

2. Resume Text Extraction Module
Formats: .pdf, .doc, .docx
Libraries: pdfplumber, PyMuPDF, python-docx, textract
Sections Parsed: Summary, Skills, Education, Projects, Contact Info
3. Profile Photo Detection Module
Computer Vision: OpenCV
Algorithm: Haar Cascade (facial feature tagging)

4. AI Analysis, Scoring, & Matching Module
AI Engine: Google Gemini API (google.generativeai library)
Grammar Evaluation: Context-aware grammar and spelling corrections
Scoring Metrics: "Sage Score" (out of 100) + up to 5 actionable feedback points

Career Matching: Predictive matching to industry job titles (e.g., AI Engineer, Data Analyst) and domain sectors |
| Implementation Highlights | Custom scoring rubric, suggestive feedback NLP pipeline, evaluation methodology |
| Metrics · IEEE Peer-Reviewed |
| Status | 📄 Published — ICRTEECT25 |
| Links | [IEEE Xplore URL — https://ieeexplore.ieee.org/document/11448669] · [GitHub — https://github.com/PrasannaSaiS/ReSageAI] |
| **[IMAGE SLOT E]** | Paper abstract image or IEEE logo badge |

---

### 4.4 PROJECT CARD: EASEEVENTS

**Headline:** EaseEvents — Real-Time Crowd Intelligence System
**Category tag:** AI Operations · AppSheet · Cloud Backend · GCP

**Summary Card:**
> A deployed crowd intelligence platform for large-scale sporting venues. Converts natural language commands into actionable crowd flow directives, reducing wait times and enabling real-time coordination.

**Case Study Outline:**

| Section | Content |
|---------|---------|
| Problem | Crowd management in large venues relies on manual coordination — slow, error-prone, and unable to respond to real-time density changes |
| Why It Matters | Operational AI that runs in physical environments is a premium engineering signal — this is not a demo, it is a live system |
| Architecture | Natural language input → LLM command interpreter → Coordination logic → AppSheet frontend → GCP Cloud Run backend |
| Tech Stack | Python · GCP Cloud Run · AppSheet · LLM APIs · REST APIs |
| Implementation Highlights | NLP-to-action translation, real-time backend coordination, multi-stakeholder frontend via AppSheet |
| Metrics | Key Project Metrics: 
EaseEvents Performance & Efficiency
60% reduction in venue crowd wait times via a real-time heuristic routing engine.
70% reduction in API response payload size using Gzip compression middleware.
40% reduction in container size by deploying an optimized Alpine Docker image.
30-second maximum request timeout enforced to prevent hanging connections.

Security & Reliability
97%+ line coverage on the core decision-making layer (engine.js).
49 automated tests executed across 2 distinct suites (16 API tests and 33 unit tests).
0.70 to 0.95 confidence scores delivered alongside every explainable AI routing decision.
100 requests per 15 minutes per IP rate limit implemented to mitigate DoS attacks.
500-character cap on natural language input commands to ensure strict validation boundaries. |

| Status | 🟢 LIVE |
| Links | AppSheet: https://www.appsheet.com/start/0d713229-0f8f-4dbd-8dc0-ccd749733a05 · Backend: https://easeevents-256197745153.asia-south1.run.app/ |
| **[IMAGE SLOT F]** | AppSheet interface screenshot or system flow diagram |

---

### 4.5 ADDITIONAL PROJECT: Binance Algorithmic Trading Bot

**Decision: INCLUDE — with controlled positioning.**

**Rationale:** Python-based financial systems engineering (TWAP, grid trading, order management) demonstrates backend systems depth and algorithmic thinking. Position it as a "Technical Experiment" under a secondary section, not a flagship card.

**Brief entry:**
> Python-based futures trading system implementing TWAP and grid trading strategies with market, limit, and stop-order management via Binance API. Built for systems reasoning, not financial advice.

- Status: Personal project
- Links: [GitHub — https://github.com/PrasannaSaiS/binance_trading_bot]

---

## SECTION 5: VISUAL IDENTITY & DESIGN SYSTEM

### 5.1 Design Direction Decision

**Theme: "Architectural Dark"** — NOT generic "neon dark" or "hacker aesthetic."

The visual identity references the *precision of engineering documentation*, the *depth of AI model architecture*, and the *restraint of high-end SaaS products* like Linear, Vercel, or Clerk.dev.

This is distinct from the Wayne Harkwood reference (which is a design/creative portfolio). Prasanna's palette is cooler, more structured, and more technical — as befits an AI systems engineer.

**Signature design element:** A subtle grid background (like engineering graph paper or neural network layers) that appears only in the hero section — a one-moment visual that references both data and architecture without being clichéd.

---

### 5.2 Color Palette

```css
/* EXACT HEX VALUES FOR AGENT IMPLEMENTATION */

--color-bg-primary:     #0D0D11;  /* Near-black with cool blue undertone */
--color-bg-surface:     #14141A;  /* Card backgrounds */
--color-bg-elevated:    #1C1C26;  /* Hover states, active cards */
--color-border:         #252530;  /* Subtle card borders */
--color-border-active:  #3D3D52;  /* Hover borders */

--color-accent-primary: #7C6FF7;  /* Indigo-violet — AI/research connotation */
--color-accent-secondary: #22D3EE;/* Electric cyan — cloud/deployment signal */
--color-accent-glow:    rgba(124, 111, 247, 0.12); /* Subtle glow for hero only */

--color-text-primary:   #F0F0F5;  /* Near-white body text */
--color-text-secondary: #8A8A9A;  /* Muted secondary text */
--color-text-muted:     #4A4A5A;  /* Labels, metadata */

--color-status-live:    #22C55E;  /* Green — live/deployed projects */
--color-status-research:#F59E0B;  /* Amber — published papers */
--color-status-wip:     #6B7280;  /* Gray — in progress */

--color-gradient-hero: linear-gradient(135deg, #7C6FF7 0%, #22D3EE 100%);
```

**Why Indigo-Violet:** It avoids the clichéd blue of generic tech portfolios and the overused green of "hacker" portfolios. Indigo sits between research depth (purple) and digital systems (blue) — precisely where Prasanna's work lives.

---

### 5.3 Typography

```
DISPLAY FACE:  Space Grotesk (weights: 700, 800)
               — Geometric, technical, modern. Used for names, project titles, stats.
               — NOT Inter or Roboto (too generic)

BODY FACE:     Inter (weights: 400, 500, 600)
               — Highest legibility; standard for technical SaaS products

MONO FACE:     JetBrains Mono (weight: 400)
               — For tech stack badges, code snippets, terminal-style elements

IMPORT via Google Fonts:
"Space+Grotesk:wght@400;500;600;700;800"
"Inter:wght@400;500;600"
"JetBrains+Mono:wght@400;500"
```

**Type Scale:**
```
Hero Name:        5rem / 80px / Space Grotesk 800
Section Headings: 2.5rem / 40px / Space Grotesk 700
Card Titles:      1.375rem / 22px / Space Grotesk 600
Body Text:        1rem / 16px / Inter 400, line-height 1.7
Small/Labels:     0.8125rem / 13px / Inter 500 / letter-spacing: 0.08em UPPERCASE
Code/Tech:        0.875rem / 14px / JetBrains Mono 400
Stat Numbers:     3.5rem / 56px / Space Grotesk 800
```

---

### 5.4 Spacing System

```css
/* 8-point grid system */
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   96px
--space-10:  128px

/* Section vertical padding: 96px top, 96px bottom */
/* Card internal padding: 28px */
/* Grid gap: 16px */
```

---

### 5.5 Grid & Layout

```
MAX CONTENT WIDTH:   1200px
CONTAINER PADDING:   24px (mobile) / 40px (tablet) / 0 (desktop, centered)

BENTO GRID (Projects Section):
  Desktop:  12-column CSS grid, auto-rows: minmax(220px, auto)
  Tablet:   6-column
  Mobile:   1-column full width

HERO BENTO LAYOUT (desktop):
  Left cell (6 col):  Name + tagline + CTAs
  Right cell (3 col): Profile photo
  Far right (3 col):  Stats strip (vertical)
```

---

### 5.6 Card Style

```css
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 28px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  border-color: var(--color-border-active);
  transform: translateY(-2px);
}

/* Featured/flagship project cards: */
.card--featured {
  border-color: rgba(124, 111, 247, 0.25);
  background: linear-gradient(145deg, #14141A, #16161F);
}
```

---

### 5.7 Motion Principles

- **Scroll reveal:** Fade-in + slight upward translate (20px → 0), 0.4s ease-out, staggered 60ms between siblings
- **Hover interactions:** Translate Y -2px on cards (subtle lift), border color fade, 200ms
- **Hero entrance:** Name fades in first, then subtitle, then CTA buttons (100ms stagger each)
- **Stat counter animation:** Count-up on scroll-into-view (numbers incrementing to final value)
- **NO:** Parallax scrolling, continuous auto-animations, rotating elements, glitch effects
- **Respect:** `prefers-reduced-motion` media query — all animations disabled if set

---

### 5.8 Additional Visual Elements

```
TECH BADGES:       Pill shape, dark surface, mono font, thin border
                   Example: [Python] [GCP] [FastAPI]

STATUS CHIPS:      Small pill with color dot + text
                   🟢 Live · 📄 Published · 🏗 Deployed

SECTION LABELS:    All-caps, 0.8125rem, 0.08em letter-spacing, --color-text-muted
                   Example:  FEATURED PROJECTS

DIVIDERS:          1px solid --color-border, used sparingly

GRID DOT PATTERN:  Hero background only — CSS radial-gradient pattern
                   rgba(124,111,247,0.06) dots, 24px × 24px grid

GLOW ACCENTS:      Subtle box-shadow on featured cards only
                   box-shadow: 0 0 40px rgba(124,111,247,0.08)
```

---

## SECTION 6: COMPONENT & SECTION SPECIFICATION

### 6.1 NAVIGATION COMPONENT

```
Type: Fixed sticky top bar
Height: 64px
Background: rgba(13,13,17,0.85) + backdrop-blur(12px)
Contents:
  Left:  "PS" monogram in Space Grotesk 700 + accent color initial "P"
  Center: Nav links (About · Projects · Skills · Research · Contact)
  Right:  "Resume ↗" button (outlined, accent border)

Mobile: Hamburger menu → slide-down panel
Active link: accent underline
```

---

### 6.2 HERO COMPONENT

```
Layout: Bento-inspired 3-zone grid

Zone 1 (main):
  - SECTION LABEL: "AI ENGINEER"
  - DISPLAY NAME:  PRASANNA SAI S (Space Grotesk 800, 5rem)
  - ROLE LINE:     "AI Engineer · Cloud-Native Systems · ML Products"
  - TAGLINE:       2 lines (see Section 9 copy)
  - CTA GROUP:     [Explore My Work →] [Download Resume ↗]
  - STATUS PILL:   🟢 Available for Placement · Chennai, India

Zone 2 (photo):
  [IMAGE SLOT A] — Profile photo
  Container: 280px × 340px, border-radius: 12px
  Border: 1px solid --color-border
  Overlay gradient: subtle bottom fade for text below
  PLACEHOLDER TEXT for agent: "PROFILE_PHOTO_HERE — add img src here"

Zone 3 (quick stats sidebar, desktop only):
  4 vertical mini-stats
  Each: large number + small label
```

---

### 6.3 STATS STRIP COMPONENT

```
Type: Full-width horizontal band
Background: --color-bg-elevated
Border: 1px solid --color-border top and bottom

4 Stats:
  [4+] Deployed AI Systems
  [99%] System Uptime
  [94%] Model Accuracy
  [1] IEEE Publication

Each stat: Number in Space Grotesk 800 (3.5rem) + label in Inter 500 small-caps
Animation: count-up on intersection observer trigger
Mobile: 2×2 grid
```

---

### 6.4 PROJECT CARDS COMPONENT (Bento Grid)

```
Container: CSS Grid, 12 columns, gap: 16px

Card layouts (desktop):
  - SkillOne:     span 7 cols, 2 rows (LARGE — flagship)
  - Path2Poll:    span 5 cols, 2 rows (LARGE — flagship)
  - ReSageAI:     span 5 cols, 1 row (MEDIUM)
  - EaseEvents:   span 7 cols, 1 row (MEDIUM)

Each card contains:
  - Status chip (top right): Live / Published / Deployed
  - [IMAGE SLOT] — project screenshot area (see Section 11)
  - Section label (e.g., "FULL-STACK SAAS")
  - Project title (Space Grotesk 700)
  - One-line summary
  - Tech badges row (3–4 badges max)
  - Metric callout ("93% accuracy")
  - Links row: [Live ↗] [GitHub ↗] [Case Study]

Expanded State (click → modal OR expand in-page):
  Full case study content as outlined in Section 4
  [IMAGE SLOT — architecture diagram OR additional screenshot]
```

---

### 6.5 EXPERIENCE TIMELINE COMPONENT

```
Type: Vertical timeline (single entry for now)
Left: Vertical accent line (--color-accent-primary, 2px)
Each entry:
  - Role title (Space Grotesk 600)
  - Company + location (Inter 500)
  - Date range
  - 3 bullet achievement points (Inter 400)
  - Company logo space: [IMAGE SLOT H] — RIT / Centre for AI logo
```

---

### 6.6 SKILLS MATRIX COMPONENT

```
Type: Category-grouped grid with icon + label tiles

Layout: 6 categories × variable items
Each tile: Icon (SVG/emoji fallback) + label in JetBrains Mono
Tile style: Small card (--color-bg-elevated, border, border-radius: 8px)

On hover: tile border becomes accent color
Category label: All-caps section label above each group
```

---

### 6.7 ACHIEVEMENTS COMPONENT

```
Sub-sections (3):

1. RESEARCH CARD (large, featured)
   - IEEE logo [IMAGE SLOT G]
   - Paper title (truncated, expandable)
   - Conference name
   - "📄 View Paper →" link
   - Border: amber accent (--color-status-research)

2. RECOGNITION ROW
   - Google PromptWars badge + "Top 400 · Consecutive" detail

3. CERTIFICATIONS GRID (3 cards)
   Each card:
   - Issuer logo [IMAGE SLOT I/J/K] — DeepLearning.AI / AMD / Microsoft
   - Certificate name
   - Issuer name
   - "Verify " link
```

---

### 6.8 CONTACT COMPONENT

```
Layout: 2-column grid

Left column:
  - Heading: "Let's Build Something"
  - Tagline (see Section 9 copy)
  - Direct link tiles:
      Email: prasannas1104@gmail.com
      LinkedIn: [full URL]
      GitHub: [full URL]

Right column:
  - Contact form
  - Fields: Name (text) · Email (email) · Message (textarea)
  - Submit button: "Send Message →" (accent filled)
  - Form action: Use Formspree.io endpoint or similar static form handler
    [https://formspree.io/f/mojzoebp]
```

---

### 6.9 FOOTER COMPONENT

```
Layout: 2-row
Row 1:
  Left:  "PS" monogram + name
  Right: Social icons: GitHub · LinkedIn · Email (SVG icons, 20px)

Row 2:
  Left:  "© 2025 Prasanna Sai S · Chennai, India"
  Right: "Built with FastAPI + [Frontend framework] · Deployed on GCP"
         (optional: edit to reflect actual build stack)

Background: --color-bg-primary (no separate background from page)
Border: 1px solid --color-border (top only)
```

---

## SECTION 7: TRUST SIGNALS & CREDIBILITY

### 7.1 Hierarchy of Trust Signals

Order these from most to least impactful:

1. **Live Deployed Applications** (Path2Poll 99% uptime, EaseEvents live links) — Hardest to fake
2. **IEEE Conference Publication** — Academic credibility + external verification
3. **Quantified Metrics** — 94% accuracy, 93% coherence, 99% uptime
4. **Internship at Centre for AI** — Institutional affiliation
5. **Professional Certifications** — DeepLearning.AI, AMD, Microsoft
6. **Google PromptWars Top 400** — Competitive ranking, external validation

### 7.2 Surface Strategy

- **Above the fold:** Stats strip shows 4 numbers immediately (metrics + IEEE)
- **Stats strip:** Must appear before ANY project details so credibility is pre-established
- **Project cards:** Each card shows status chip (🟢 Live) before the user reads the description
- **Research section:** IEEE logo must be visually prominent; it signals peer-review gatekeeping
- **Certifications:** Use issuer logos (DeepLearning.AI, Microsoft) — brand association matters

### 7.3 Live Deployment Presentation

For **Path2Poll** and **EaseEvents**:
- Include a browser-frame mockup showing the live app ([IMAGE SLOT D/F])
- Show live URL in the card as a clickable badge, not just a link text
- Add an uptime/status badge (can be static or use UptimeRobot widget)

For **SkillOne** on Hugging Face Spaces:
- Link should be presented as "🤗 Live on Hugging Face" — the Hugging Face branding adds context

### 7.4 IEEE Paper Integration

- Create a standalone achievement card that spans the full width of its section
- Include: paper title, conference, year, abstract snippet (1 sentence)
- Visual: IEEE red logo on dark card background = instant credibility signal
- CTA: "Read the Paper →" linking to IEEE Xplore [https://ieeexplore.ieee.org/document/11448669]

---

## SECTION 8: HUMAN SIGNAL INTEGRATION

### Extracurriculars Strategy

**Include tastefully in About section only:**

> "Beyond engineering, I play keyboard and produce music — which has taught me that the best systems, like the best compositions, are the ones where every component serves the whole. I also play club badminton and represented my school in chess — disciplines that sharpen the pattern recognition I now apply to ML problems."

**Do NOT:**
- Create a separate Hobbies section
- List them in bullet points
- Use them as filler content
- Over-explain them

**DO:**
- Weave into the About narrative naturally
- Use them to signal discipline, creativity, and competitive mindset

---

## SECTION 9: PORTFOLIO COPY DRAFT

### 9.1 Hero Tagline

```
PRIMARY TAGLINE:
"I build AI systems that run in production,
not just in notebooks."

ALTERNATIVE (more product-focused):
"From knowledge graphs to cloud-native APIs —
I ship AI that works in the real world."
```

**Recommended: Use PRIMARY TAGLINE** — more memorable, cleaner, differentiating.

### 9.2 About Section Copy

```
PARAGRAPH 1 (what I do):
I'm Prasanna Sai S — an AI & Data Science engineer from Chennai, India,
currently finishing my B.Tech at Rajalakshmi Institute of Technology.
I specialize in building AI systems that bridge the gap between model
development and real-world deployment: from knowledge graph-powered
SaaS platforms to multi-region cloud-native applications on GCP.

PARAGRAPH 2 (proof of depth):
My work spans full-stack AI engineering, backend systems design, and
cloud-native deployment. I've published research at an IEEE international
conference, built systems achieving up to 94% accuracy in production, and
maintained 99% uptime on live multi-region applications. I care as much
about how a system runs as how it was built.

PARAGRAPH 3 (human signal):
Outside of engineering, I'm a keyboardist, a club badminton player, and a
former school chess representative — disciplines that have shaped how I
think about systems, performance, and execution under pressure.
```

### 9.3 Project Section Intro

```
SECTION LABEL: FEATURED PROJECTS
HEADING: Systems I've Built and Shipped
SUBHEADING: From research frameworks to live cloud deployments —
            each project is a case study in taking AI from idea to production.
```

### 9.4 Research Section Intro

```
SECTION LABEL: RESEARCH & RECOGNITION
HEADING: Academic Depth, Real Applications
SUBHEADING: Peer-reviewed work at the intersection of NLP and enterprise AI.
```

### 9.5 Contact CTA Copy

```
HEADING: Let's Build Something
SUBHEADING: Whether you're evaluating for placement, an internship, or just
            want to talk AI systems — I'm available and listening.

EMAIL CTA: Open to Opportunities · prasannas1104@gmail.com
FORM SUBMIT: "Send Message →"
```

### 9.6 Resume Download CTA

```
NAV:    "Resume ↗"
HERO:   "Download Resume"
FOOTER: "View CV →"
```

---

## SECTION 10: RESPONSIVENESS, ACCESSIBILITY & SEO

### 10.1 Responsive Breakpoints

```css
/* Mobile-first base styles apply below 640px */
@media (min-width: 640px)  { /* Tablet portrait */ }
@media (min-width: 768px)  { /* Tablet landscape */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide desktop */ }
```

**Mobile adaptations:**
- Bento grid collapses to single column
- Hero stacks: text top, photo below, stats horizontal 2×2 grid
- Navigation: hamburger → full-screen slide panel
- Project cards: full-width, no modal — expand inline
- Stats strip: 2×2 grid
- Contact: single column (form below links)

### 10.2 Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images: `alt` attributes (descriptive, not "image of...")
- Color contrast: All text must meet WCAG AA (4.5:1 minimum for body text)
  - --color-text-primary (#F0F0F5) on --color-bg-surface (#14141A): ✓ passes
  - --color-text-secondary (#8A8A9A) on --color-bg-surface: verify with contrast checker
- Focus states: Visible `:focus-visible` ring on all interactive elements
- Keyboard navigation: Tab order follows visual order
- `aria-label` on icon-only buttons (social links, close modals)
- `prefers-reduced-motion`: Wrap all animations in this media query
- Skip-to-content link: Hidden link at page top for screen readers

### 10.3 SEO & Metadata

```html
<!-- Page Title -->
<title>Prasanna Sai S | AI Engineer · Full-Stack ML Systems · Chennai</title>

<!-- Meta Description -->
<meta name="description" content="Portfolio of Prasanna Sai S — AI & Data Science engineer specializing in cloud-native ML systems, LLM integration, and full-stack AI product development. B.Tech RIT Chennai, expected 2027.">

<!-- Keywords (supplementary) -->
<meta name="keywords" content="AI Engineer, Machine Learning, GCP, Python, FastAPI, LLM, Cloud Run, IEEE, Chennai, Fresher, FAANG">

<!-- Canonical -->
<link rel="canonical" href="https://[DOMAIN]/"> <!-- MISSING: actual domain -->

<!-- Open Graph (social preview) -->
<meta property="og:title" content="Prasanna Sai S | AI Engineer">
<meta property="og:description" content="Full-stack AI engineer building cloud-native ML systems. IEEE published. GCP deployed. Available for full-time positions.">
<meta property="og:image" content="[OG_IMAGE_PATH]"> <!-- See image slots below -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://[DOMAIN]/">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Prasanna Sai S | AI Engineer">
<meta name="twitter:description" content="Full-stack AI engineer. IEEE published. Cloud-native. Available for placement.">
<meta name="twitter:image" content="[OG_IMAGE_PATH]">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prasanna Sai S",
  "jobTitle": "AI Engineer",
  "email": "prasannas1104@gmail.com",
  "alumniOf": "Rajalakshmi Institute of Technology",
  "address": {"@type": "PostalAddress", "addressLocality": "Chennai", "addressCountry": "IN"},
  "url": "https://[DOMAIN]/"
}
</script>
```

---

## SECTION 11: IMAGE CUSTOMIZATION SYSTEM (CRITICAL FOR AGENT)

> **⚠️ AGENT INSTRUCTION:** Every image placeholder in this portfolio must be implemented as a clearly marked, easily swappable slot. Use the following standard pattern for every image element:

### 11.1 Universal Image Slot Pattern

```html
<!-- PATTERN: Every image slot must follow this structure -->
<div class="img-slot" data-slot-id="SLOT_ID" data-slot-label="HUMAN READABLE LABEL">
  <img
    src="./assets/images/SLOT_ID.jpg"
    alt="ALT_TEXT_DESCRIPTION"
    class="img-slot__image"
    loading="lazy"
  />
  <!-- Fallback shown when image is missing: -->
  <div class="img-slot__fallback" aria-hidden="true">
    <span class="img-slot__icon">📷</span>
    <span class="img-slot__label">HUMAN READABLE LABEL</span>
    <span class="img-slot__hint">Replace: ./assets/images/SLOT_ID.jpg</span>
  </div>
</div>
```

```css
/* Image slot styling */
.img-slot {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  background: var(--color-bg-elevated);
}

.img-slot__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Fallback: shown via CSS when image fails to load OR src is placeholder */
.img-slot__image[src="./assets/images/placeholder.jpg"],
.img-slot__image:not([src]) {
  display: none;
}

.img-slot__fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  border: 2px dashed var(--color-border-active);
  border-radius: inherit;
  gap: 8px;
  text-align: center;
}

.img-slot__icon { font-size: 2rem; opacity: 0.4; }
.img-slot__label { font: 600 14px/1 var(--font-body); color: var(--color-text-secondary); }
.img-slot__hint { font: 400 11px/1 var(--font-mono); color: var(--color-text-muted); }
```

---

### 11.2 Complete Image Slot Registry

The agent must create the following folder structure and implement each slot:

```
/assets/
  /images/
    slot-a-profile-hero.jpg        ← [SLOT A] Hero profile photo
    slot-b-profile-about.jpg       ← [SLOT B] About section photo
    slot-c-skillone-screenshot.jpg ← [SLOT C] SkillOne app screenshot
    slot-d-path2poll-screenshot.jpg← [SLOT D] Path2Poll app screenshot
    slot-e-resageai-preview.jpg    ← [SLOT E] ReSageAI / IEEE paper preview
    slot-f-easeevents-screenshot.jpg← [SLOT F] EaseEvents AppSheet screenshot
    slot-g-ieee-badge.jpg          ← [SLOT G] IEEE logo or paper thumbnail
    slot-h-rit-logo.png            ← [SLOT H] RIT / Centre for AI logo
    slot-i-deeplearning-cert.jpg   ← [SLOT I] DeepLearning.AI cert badge
    slot-j-amd-cert.jpg            ← [SLOT J] AMD AI Academy cert badge
    slot-k-microsoft-cert.jpg      ← [SLOT K] Microsoft Applied Skills badge
    og-preview.jpg                 ← Open Graph preview image (1200×630px)
    placeholder.jpg                ← Generic placeholder (gray, 1×1 pixel)
```

**Agent must:**
1. Create all folder structure above
2. Place a `placeholder.jpg` (1×1 gray pixel or simple SVG) at each slot path initially
3. Add `data-slot-id` and `data-slot-label` attributes to every image container
4. Render the fallback UI when the image is missing/placeholder
5. Include a comment block above each slot in the HTML: `<!-- SLOT A: Replace src with your profile photo path -->`

---

### 11.3 Slot-Specific Specifications

| Slot | Location | Recommended Dimensions | Content Notes |
|------|----------|------------------------|---------------|
| A | Hero section | 280×340px (portrait) | Professional headshot, plain/gradient background preferred |
| B | About section | 320×320px (square) | Can be same as A or a different angle |
| C | SkillOne card | 480×260px (landscape) | App interface screenshot, UI screenshot |
| D | Path2Poll card | 360×260px (landscape) | App screenshot or architecture diagram |
| E | ReSageAI card | 360×200px (landscape) | IEEE paper abstract page, or a model diagram |
| F | EaseEvents card | 480×200px (landscape) | AppSheet UI screenshot |
| G | IEEE badge | 120×80px | IEEE logo (available publicly) or paper cover |
| H | RIT logo | 160×48px | Institution logo |
| I-K | Cert badges | 200×120px each | Certificate preview or issuer logo |
| OG | Meta/social | 1200×630px | Banner-style: name + role + accent color |

---

### 11.4 Architecture Diagram Slots (Optional Upgrade)

For each project card's expanded/modal view, include an additional slot:

```
slot-c-arch-skillone.svg     ← SkillOne system architecture diagram
slot-d-arch-path2poll.svg    ← Path2Poll architecture diagram
slot-f-arch-easeevents.svg   ← EaseEvents architecture diagram
```

If no architecture diagram is available yet, use a styled placeholder card that says:
> "System Architecture — [Coming Soon / Add your diagram here]"

---

## SECTION 12: IMPLEMENTATION HANDOFF NOTES

### 12.1 Technology Stack Recommendation for Agent

```
FRONTEND:    Pure HTML5 + CSS3 + Vanilla JavaScript (no framework required)
             OR: Next.js 14 (App Router) if SSR/SEO is priority
FONTS:       Google Fonts CDN (Space Grotesk, Inter, JetBrains Mono)
ICONS:       Lucide Icons (SVG sprite) OR Heroicons
ANIMATIONS:  Intersection Observer API (vanilla JS) — no GSAP required
FORMS:       Formspree.io (static form handling, no backend needed)
HOSTING:     Vercel / Netlify / GitHub Pages (all free tier sufficient)
```

**Recommended: Plain HTML/CSS/JS** — Zero build tooling complexity, instant deployment, maximum recruiter accessibility. The agent should not use React unless explicitly instructed, as it adds unnecessary build complexity for a portfolio.

---

### 12.2 File Structure for Agent

```
/
├── index.html                    ← Single page
├── assets/
│   ├── css/
│   │   ├── reset.css             ← CSS reset / normalize
│   │   ├── variables.css         ← All CSS custom properties (colors, fonts, spacing)
│   │   ├── layout.css            ← Grid, bento layout, container
│   │   ├── components.css        ← Reusable component styles
│   │   ├── sections.css          ← Per-section styles
│   │   └── animations.css        ← Motion / transitions
│   ├── js/
│   │   ├── main.js               ← Init, nav, scroll
│   │   ├── animations.js         ← Intersection Observer scroll reveals
│   │   ├── counter.js            ← Stats count-up animation
│   │   └── modal.js              ← Project case study modal
│   └── images/
│       └── [all slots as listed in 11.2]
├── resume/
│   └── prasanna_sai_resume.pdf   ← [MISSING — candidate must supply]
└── favicon.svg                   ← "PS" monogram SVG
```

---

### 12.3 Missing Information Checklist

Items the candidate must supply before final deployment:

```
❌ REQUIRED:
  [ ] Resume PDF — /resume/prasanna_sai_resume.pdf
  [ ] All image files (see Slot Registry in Section 11.2)
  [ ] LinkedIn profile URL (full URL, not just username)
  [ ] GitHub profile URL (full URL)
  [ ] Internship date range (start–end month/year)
  [ ] Formspree endpoint URL (sign up at formspree.io)
  [ ] Custom domain name (for canonical URL and OG meta)
---

### 12.4 Assumptions Made

The following assumptions were made in absence of explicit information:

1. **Domain:** Assumed `prasannasai.dev` or similar — update all canonical/OG URLs
2. **Internship dates:** Marked as [MISSING] — assumed active/recent; verify actual dates
3. **Form backend:** Formspree assumed — if candidate prefers another handler, update Section 6.8
4. **Binance Bot inclusion:** Decided to include as secondary project — can be omitted if portfolio feels long
5. **No testimonials section:** Insufficient data; not included to avoid fabrication
6. **GPA display:** 8.07/10 shown — confirm this is current and final
7. **Class X/XII:** Included in Education but de-emphasized — candidate may choose to hide entirely once more project/experience content is added
8. **Open Graph image:** Will be generated programmatically from name + role + brand colors; update with actual image

---

### 12.5 Quality Standards for Agent

Before marking implementation complete, verify:

```
TECHNICAL:
  ✓ Lighthouse Performance score ≥ 90
  ✓ Lighthouse Accessibility score ≥ 95
  ✓ All external links open in new tab (target="_blank" rel="noopener noreferrer")
  ✓ Resume PDF link works
  ✓ All live project links tested
  ✓ Contact form submits successfully (test with dummy email)
  ✓ Mobile layout tested at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad)
  ✓ All images have alt attributes
  ✓ No console errors in browser
  ✓ prefers-reduced-motion respected

DESIGN:
  ✓ Color contrast meets WCAG AA for all text
  ✓ Typography scale renders correctly at all breakpoints
  ✓ Bento grid cells do not overflow on tablet/mobile
  ✓ Image slots display fallback correctly when images are missing
  ✓ Hover states work on all interactive cards
  ✓ Status chips (🟢 Live, 📄 Published) are visible on all project cards
  ✓ Stats count-up animation triggers on scroll
  ✓ No layout shift (CLS) from font loading — use font-display: swap

CONTENT:
  ✓ All [MISSING] placeholders are either filled or visually marked for the owner
  ✓ No fabricated metrics or links
  ✓ All project GitHub/live links point to correct destinations
  ✓ Resume download points to actual PDF
```

---

## APPENDIX: DESIGN QUICK-REFERENCE CARD

For the AI agent's rapid implementation reference:

```
COLORS:
  BG:          #0D0D11  |  Surface: #14141A  |  Elevated: #1C1C26
  Border:      #252530  |  Border-active: #3D3D52
  Accent-1:    #7C6FF7  |  Accent-2: #22D3EE
  Text-1:      #F0F0F5  |  Text-2: #8A8A9A  |  Text-3: #4A4A5A
  Live:        #22C55E  |  Research: #F59E0B

FONTS:
  Display:     Space Grotesk 700/800
  Body:        Inter 400/500/600
  Mono:        JetBrains Mono 400

RADIUS:        16px (cards)  |  8px (badges, chips)  |  999px (pills)
SHADOW:        0 0 40px rgba(124,111,247,0.08) — featured cards only
GAP:           16px (grid)  |  28px (card padding)

SECTIONS:      0 to 10 as listed in Section 2.2
IMAGE SLOTS:   A through K + OG (see Section 11.2)
MISSING LINKS: 14 items listed in Section 12.3
```

---

*Documentation prepared for AI coding agent implementation. Version 1.0.*
*All [MISSING] items must be supplied by candidate Prasanna Sai S before deployment.*
*Do not fabricate any metric, link, or credential not listed above.*
