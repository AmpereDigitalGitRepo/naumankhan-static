'use client';

import { ReactNode } from 'react';

interface BaseLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
  noPadding?: boolean;
  className?: string;
}

/**
 * BaseLayout — Universal container wrapper for all sections
 * Provides:
 * - Max-width constraint (1400px)
 * - Responsive horizontal padding (6 md:12 lg:16)
 * - Responsive vertical spacing (py-24 md:py-32 lg:py-40)
 * - Mobile-first responsive scaling
 *
 * fullWidth={true} — removes max-width, keeps padding (for hero sections)
 * noPadding={true} — removes all padding (for edge-to-edge sections)
 */
export default function BaseLayout({
  children,
  fullWidth = false,
  noPadding = false,
  className = '',
}: BaseLayoutProps) {
  const paddingClasses = noPadding ? '' : 'px-6 md:px-12 lg:px-16';
  const maxWidthClasses = fullWidth ? '' : 'max-w-[1400px] mx-auto';

  return (
    <div className={`w-full ${maxWidthClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}
