// ═══════════════════════════════════════════════════
// ImageSlot.tsx — Universal image placeholder system
//
// HOW TO REPLACE A SLOT:
//   1. Drop the real image into src/assets/images/
//      e.g. slot-a.jpg for [IMAGE SLOT A]
//   2. Update the matching import in src/assets/images/index.ts
//      Change: export const slotA = placeholder;
//      To:     export const slotA = slotAImage; (your import)
//   3. The ImageSlot component auto-detects and renders the real image.
//
// ALL image slot usages are marked with HTML comments above them.
// ═══════════════════════════════════════════════════

import React from 'react';
import styles from './ImageSlot.module.css';

interface ImageSlotProps {
  /** e.g. "slot-a" — matches the key in IMAGE_SLOTS registry */
  slotId: string;
  /** Human-readable description, e.g. "Hero Profile Photo" */
  label: string;
  /** Pass the imported image src (from src/assets/images/index.ts) */
  src: string;
  /** Descriptive alt text for accessibility */
  alt: string;
  /** e.g. "280×380px" — shown in placeholder UI */
  recommendedSize: string;
  className?: string;
  style?: React.CSSProperties;
  /** Use loading="eager" for above-the-fold images (hero photo) */
  loading?: 'lazy' | 'eager';
}

export function ImageSlot({
  slotId,
  label,
  src,
  alt,
  recommendedSize,
  className,
  style,
  loading = 'lazy',
}: ImageSlotProps) {
  const isPlaceholder = src.includes('placeholder');

  return (
    <div
      className={[
        styles.imgSlot,
        isPlaceholder ? styles.imgSlotEmpty : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      data-slot={slotId}
      style={style}
    >
      {/*
       * ═══════════════════════════════════════════════
       * IMAGE SLOT: {slotId}
       * Label: {label}
       * Replace the src import in: src/assets/images/index.ts
       * Recommended size: {recommendedSize}
       * ═══════════════════════════════════════════════
       */}

      {/* Real image — rendered only when src is not placeholder */}
      {!isPlaceholder && (
        <img
          src={src}
          alt={alt}
          className={styles.imgSlotImg}
          loading={loading}
          decoding="async"
        />
      )}

      {/* Placeholder UI — shown while slot-*.jpg hasn't been added yet */}
      {isPlaceholder && (
        <div className={styles.imgSlotPlaceholder} aria-hidden="true">
          <div className={styles.imgSlotIcon}>📷</div>
          <div className={styles.imgSlotLabel}>{label}</div>
          <code className={styles.imgSlotPath}>
            src/assets/images/{slotId}.jpg
          </code>
          <div className={styles.imgSlotSize}>{recommendedSize}</div>
        </div>
      )}
    </div>
  );
}
