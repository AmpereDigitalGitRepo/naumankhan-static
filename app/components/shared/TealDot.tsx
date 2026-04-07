'use client'

import { motion } from 'framer-motion'

export function TealDot({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`h-3 w-3 rounded-full bg-teal-500 ${className}`}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}
