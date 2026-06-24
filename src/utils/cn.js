import { clsx } from 'clsx';
import { PureComponent } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Combines tailwind-merge and clsx to safely merge Tailwind classes
 * without styling conflicts.
 * 
 * @param {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
