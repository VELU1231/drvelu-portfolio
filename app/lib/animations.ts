/**
 * Shared Framer Motion animation variants used across the portfolio.
 * Keep all timing values here so the site feels visually consistent.
 */

import type { Variants } from 'framer-motion';

// ─── Easing presets ────────────────────────────────────────────────────────
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.45, 0, 0.55, 1] as const;

// ─── Entry animations ──────────────────────────────────────────────────────

/** Fade + slide-up used for most section headings and cards */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/** Stagger container — wraps lists/grids of items */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

/** Tighter stagger for badges / small chips */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

// ─── Hover / interaction ───────────────────────────────────────────────────

/** Standard card lift */
export const cardHover: Variants = {
  rest: { y: 0, transition: { duration: 0.25, ease: EASE_OUT } },
  hover: { y: -6, transition: { duration: 0.25, ease: EASE_OUT } },
};

/** Subtle lift for smaller cards */
export const cardHoverSm: Variants = {
  rest: { y: 0, transition: { duration: 0.22, ease: EASE_OUT } },
  hover: { y: -4, transition: { duration: 0.22, ease: EASE_OUT } },
};

/** Scale-up + tap for buttons */
export const buttonTap: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
  tap: { scale: 0.97, transition: { duration: 0.1 } },
};

/** Icon rotate + scale on hover */
export const iconHover: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 8,
    scale: 1.15,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
};

/** Micro-slide right for link/arrow icons */
export const arrowRight: Variants = {
  rest: { x: 0 },
  hover: { x: 3, transition: { duration: 0.18 } },
};

/** Animated underline expand from left */
export const underlineExpand: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, originX: 0, transition: { duration: 0.22, ease: EASE_OUT } },
};

/** Micro-rotate left + scale — for source/code icons like GitHub */
export const iconHoverLeft: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: -8,
    scale: 1.1,
    transition: { duration: 0.18 },
  },
};
