// main.tsx — Entry point
// Full Lenis + React bootstrap per blueprint Section 5

import React from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import App from './App';
import './styles/globals.css';
import './styles/typography.css';

// ── Initialise Lenis smooth scroll ──────────────
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
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

// Expose to window so components can programmatically scroll
(window as unknown as Record<string, unknown>).__lenis = lenis;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
