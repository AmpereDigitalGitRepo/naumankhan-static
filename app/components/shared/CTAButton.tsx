'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'dark' | 'light'
  className?: string
}

export function CTAButton({
  href,
  children,
  variant = 'dark',
  className = '',
}: CTAButtonProps) {
  const variants = {
    dark: 'bg-brand-button-dark text-brand-button-text hover:bg-opacity-90',
    light: 'bg-brand-light text-brand-dark-slate hover:bg-opacity-90',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className={`inline-block rounded-button px-8 py-4 font-display uppercase tracking-wider ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}
