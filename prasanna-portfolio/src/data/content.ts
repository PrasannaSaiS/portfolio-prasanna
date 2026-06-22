// ═══════════════════════════════════════════════════
// CONTENT DATA — single source of truth for all copy
// Updating the portfolio = editing this file only.
// ═══════════════════════════════════════════════════

/* ── Type Definitions ─────────────────────────── */

export type ProjectStatus = 'live' | 'published';
export type ProjectSize = 'large' | 'medium';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface CaseStudy {
  problem: string;
  whyMatters: string;
  architecture: string;
  metrics: string[];
}

export interface Project {
  id: string;
  title: string;
  headline: string;
  category: string;
  summary: string;
  stack: string[];
  metric: string;
  status: ProjectStatus;
  liveUrl?: string;
  backendUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  imageSlot: string;
  size: ProjectSize;
  caseStudy: CaseStudy;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  logoSlot: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  verifyUrl: string;
  slot: string;
}

export interface Recognition {
  title: string;
  detail: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

/* ── Master Content Object ────────────────────── */

export const CONTENT = {
  personal: {
    name: 'Prasanna Sai S',
    email: 'prasannas1104@gmail.com',
    linkedin: 'https://www.linkedin.com/in/prasanna-sai-s',
    github: 'https://github.com/PrasannaSaiS',
    location: 'Chennai, India',
    available: 'Open to work',
  },

  hero: {
    title: 'PRASANNA SAI S',
    roles: ['AI Engineer', 'Cloud-Native Systems', 'ML Products'],
    tagline: 'I build AI systems that run in production,\nnot just in notebooks.',
    ctaPrimary: { label: 'Explore My Work', href: '#projects' },
    ctaSecondary: { label: 'Download Resume', href: '/resume/prasanna_sai_resume.pdf' },
    statusPill: 'Open to work (Internship or Full-time) · Chennai, India',
  },

  stats: [
    { value: 4, suffix: '+', label: 'Deployed AI Systems' },
    { value: 99, suffix: '%', label: 'System Uptime' },
    { value: 94, suffix: '%', label: 'Highest Achieved Accuracy' },
    { value: 1, suffix: '', label: 'IEEE Publication' },
  ] satisfies Stat[],

  about: {
    paragraphs: [
      `I'm Prasanna Sai S — an AI & Data Science engineer from Chennai, India, finishing my B.Tech at Rajalakshmi Institute of Technology. I specialize in building AI systems that bridge the gap between model development and real-world deployment: from knowledge graph-powered SaaS platforms to multi-region cloud-native applications on GCP.`,
      `My work spans full-stack AI engineering, backend systems design, and cloud-native deployment. I've published research at an IEEE international conference, built systems achieving up to 94% accuracy in production, and maintained 99% uptime on live multi-region applications. I care as much about how a system runs as how it was built.`,
      `Outside engineering, I'm a keyboardist, a club badminton player, and a former school chess representative — disciplines that have shaped how I think about systems, performance, and execution under pressure.`,
    ],
    quickFacts: [
      { text: 'Chennai, India', icon: 'MapPin' },
      { text: 'B.Tech AI & DS', icon: 'GraduationCap' },
      { text: 'Musician & Athlete', icon: 'Music' }
    ],
  },

  projects: [
    {
      id: 'skillone',
      title: 'SkillOne',
      headline: 'Personalized AI Learning Path Generator',
      category: 'Full-Stack SaaS · Knowledge Graphs · Hugging Face',
      summary: 'Full-stack personalized learning platform that dynamically constructs prerequisite-aware educational roadmaps using knowledge graphs. 93% coherence accuracy.',
      stack: ['Python', 'Knowledge Graphs', 'React', 'Hugging Face', 'NLP'],
      metric: '93% coherence accuracy',
      status: 'live' as const,
      liveUrl: 'https://prasannasais.github.io/SkillOne-Model/',
      backendUrl: 'https://huggingface.co/spaces/PrasannaSaiS/skillone-api',
      githubUrl: 'https://github.com/PrasannaSaiS/SkillOne-Model',
      imageSlot: 'slot-c',
      size: 'large' as const,
      caseStudy: {
        problem: 'Generic online course platforms offer no intelligent sequencing — learners waste time on wrong-order content.',
        whyMatters: 'Personalized learning is a billion-dollar market problem; this is a production-grade attempt at a real SaaS solution.',
        architecture: 'Knowledge graph engine → Recommendation pipeline → React frontend → Hugging Face Spaces backend',
        metrics: ['93% accuracy in coherence logic', 'Full-stack deployment on Hugging Face Spaces'],
      },
    },
    {
      id: 'path2poll',
      title: 'Path2Poll',
      headline: 'Cloud-Native AI Election Assistant',
      category: 'Cloud Engineering · LLM Integration · GCP',
      summary: 'Live multi-region election intelligence app on GCP Cloud Run. Integrates ECI, NVSP, and Google Civic APIs with LLMs for real-time, location-aware election information.',
      stack: ['Python', 'FastAPI', 'GCP Cloud Run', 'LLM APIs', 'Civic API'],
      metric: '99% system uptime',
      status: 'live' as const,
      liveUrl: 'https://path2poll-720033712420.us-central1.run.app',
      githubUrl: 'https://github.com/PrasannaSaiS/Path2Poll',
      imageSlot: 'slot-d',
      size: 'large' as const,
      caseStudy: {
        problem: 'Citizens lack a unified, real-time source for election schedules and polling information at scale across regions.',
        whyMatters: 'Election participation infrastructure is a civic problem; solving it with AI demonstrates real-world product responsibility.',
        architecture: 'LLM prompt pipeline → API aggregation (ECI, NVSP, Civic API) → Cloud Run backend → Web frontend',
        metrics: ['99% uptime', 'Multi-region active deployment', 'Live production on GCP Cloud Run'],
      },
    },
    {
      id: 'resageai',
      title: 'ReSageAI',
      headline: 'AI-Enhanced Resume Screening Framework',
      category: 'NLP · Research · IEEE Published',
      summary: 'Intelligent resume screening system with content scoring and suggestive feedback. Published at IEEE ICRTEECT25. Combines NLP models with structured feedback for HR workflows.',
      stack: ['Python', 'NLP', 'Scikit-learn', 'PyTorch'],
      metric: 'IEEE Peer-Reviewed',
      status: 'published' as const,
      paperUrl: 'https://ieeexplore.ieee.org/document/11448669',
      githubUrl: 'https://github.com/PrasannaSaiS/ReSageAI',
      imageSlot: 'slot-e',
      size: 'medium' as const,
      caseStudy: {
        problem: 'Manual resume screening is slow, subjective, and inconsistent at scale — HR teams lose qualified candidates to bias and volume.',
        whyMatters: 'AI-augmented hiring is a core enterprise concern; this paper demonstrates original research contribution in a commercially relevant domain.',
        architecture: 'Resume parsing → Content scoring model → Feedback generation engine → API output',
        metrics: ['IEEE ICRTEECT25 published', 'Peer-reviewed research'],
      },
    },
    {
      id: 'easeevents',
      title: 'EaseEvents',
      headline: 'Real-Time Crowd Intelligence System',
      category: 'AI Operations · AppSheet · GCP Cloud Run',
      summary: 'Deployed crowd intelligence platform for large-scale sporting venues. Converts natural language commands into actionable crowd flow directives for real-time coordination.',
      stack: ['Python', 'GCP Cloud Run', 'AppSheet', 'LLM APIs'],
      metric: 'Live operational system',
      status: 'live' as const,
      liveUrl: 'https://www.appsheet.com/start/0d713229-0f8f-4dbd-8dc0-ccd749733a05',
      backendUrl: 'https://easeevents-256197745153.asia-south1.run.app/',
      githubUrl: 'https://github.com/PrasannaSaiS/EaseEvents',
      imageSlot: 'slot-f',
      size: 'medium' as const,
      caseStudy: {
        problem: 'Crowd management in large venues relies on manual coordination — slow, error-prone, unable to respond to real-time density changes.',
        whyMatters: 'Operational AI that runs in physical environments is a premium engineering signal — this is a live system, not a demo.',
        architecture: 'Natural language input → LLM command interpreter → Coordination logic → AppSheet frontend → GCP Cloud Run backend',
        metrics: ['Live AppSheet deployment', 'Active GCP Cloud Run backend'],
      },
    },
  ] satisfies Project[],

  experience: [
    {
      role: 'Machine Learning Intern',
      company: 'Flyrank AI',
      location: 'Chennai, India',
      period: 'June 2026 – Present',
      points: [
        'Engaged in specialized Machine Learning cohort sessions led by industry experts',
        'Gaining hands-on exposure to AI fluency and production-level ML infrastructure',
      ],
      logoSlot: 'slot-l',
    },
    {
      role: 'AI Engineering Intern',
      company: 'Centre for AI, Rajalakshmi Institute of Technology',
      location: 'Chennai, India',
      period: 'November 2025 – January 2026',
      points: [
        'Built intelligent AI backend systems achieving up to 94% accuracy',
        'Developed SkillOne platform using knowledge graphs, React frontend, and Hugging Face Spaces',
        'Contributed to AI-first product development in an academic R&D environment',
      ],
      logoSlot: 'slot-h',
    },
  ] satisfies ExperienceEntry[],

  skills: [
    { category: 'Languages', icon: 'Code', items: ['Python', 'SQL', 'HTML', 'CSS'] },
    { category: 'Frameworks', icon: 'Layers', items: ['Flask', 'FastAPI', 'PyTorch', 'Scikit-learn', 'Google JAX'] },
    { category: 'Data & ML', icon: 'Brain', items: ['NumPy', 'Pandas', 'Hugging Face', 'Jupyter', 'Kaggle'] },
    { category: 'Cloud/DevOps', icon: 'Cloud', items: ['GCP', 'Cloud Run', 'Docker', 'CI/CD', 'Supabase'] },
    { category: 'Tools', icon: 'Wrench', items: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'SQLAlchemy'] },
    { category: 'APIs & LLMs', icon: 'Zap', items: ['LLM APIs', 'ECI/NVSP API', 'Civic API', 'AppSheet'] },
  ] satisfies SkillCategory[],

  achievements: {
    research: {
      title: 'ReSage AI: An AI-Enhanced Resume Screening Framework with Intelligent Content Scoring and Suggestive Feedback Mechanism',
      conference: 'IEEE ICRTEECT25',
      year: 2025,
      url: 'https://ieeexplore.ieee.org/document/11448669',
      logoSlot: 'slot-g',
    },
    recognition: [
      {
        title: 'Top 400 — Google PromptWars: Virtual',
        detail: "Consecutive ranking in Google's competitive prompt engineering challenge",
      },
    ] satisfies Recognition[],
    certifications: [
      { name: 'Generative AI for Software Development Professional Certificate', issuer: 'DeepLearning.AI', verifyUrl: 'https://learn.deeplearning.ai/certificates/e09e78d8-f080-416f-a582-05814bac28e3', slot: 'slot-i' },
      { name: 'Building AI Agents with MCP and Open-Source Inference', issuer: 'AMD AI Academy', verifyUrl: 'https://academy.amd.com/certs/31042/24E7120219A1420DAECC10DC880BCD10166281.pdf', slot: 'slot-j' },
      { name: 'Identity and Access Management with Microsoft Entra', issuer: 'Microsoft Applied Skills', verifyUrl: 'https://learn.microsoft.com/en-us/users/prasannasai-6203/credentials/3e967941e28911bf', slot: 'slot-k' },
    ] satisfies Certification[],
  },

  education: [
    { degree: 'B.Tech — Artificial Intelligence & Data Science', institution: 'Rajalakshmi Institute of Technology (Anna University, Autonomous)', year: 'Expected 2027', grade: 'GPA 8.07 / 10' },
    { degree: 'Class XII — CBSE', institution: '', year: '', grade: '83%' },
    { degree: 'Class X — CBSE', institution: '', year: '', grade: '70.40%' },
  ] satisfies EducationEntry[],

  contact: {
    heading: "Let's Build Something",
    subheading: "Whether you're evaluating for placement, an internship, or want to talk AI systems — I'm available and listening.",
    formEndpoint: 'https://formspree.io/f/xyzkqovb',
  },
} as const;
