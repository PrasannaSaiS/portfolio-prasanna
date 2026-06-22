// ═══════════════════════════════════════════════════
// useMagnet.ts — Magnetic button interaction hook
//
// Tracks mouse position relative to the element's center.
// Translates the element toward the mouse by `strength` × distance.
// Inner text element can be translated by `strength * 0.5` for parallax depth.
// Snaps back to origin on mouse leave (handled by Framer Motion spring).
//
// Usage:
//   const { ref, transform, onMouseMove, onMouseLeave } = useMagnet();
//
//   <motion.button
//     ref={ref}
//     animate={{ x: transform.x, y: transform.y }}
//     transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//     onMouseMove={onMouseMove}
//     onMouseLeave={onMouseLeave}
//   >
//     {label}
//   </motion.button>
// ═══════════════════════════════════════════════════

import { useRef, useState } from 'react';

interface MagnetTransform {
  x: number;
  y: number;
}

interface UseMagnetReturn {
  ref: React.RefObject<HTMLElement | null>;
  transform: MagnetTransform;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

/**
 * @param strength - fraction of distance to translate toward cursor (default 0.3)
 */
export function useMagnet(strength = 0.3): UseMagnetReturn {
  const ref = useRef<HTMLElement | null>(null);
  const [transform, setTransform] = useState<MagnetTransform>({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    setTransform({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const onMouseLeave = () => setTransform({ x: 0, y: 0 });

  return { ref, transform, onMouseMove, onMouseLeave };
}
