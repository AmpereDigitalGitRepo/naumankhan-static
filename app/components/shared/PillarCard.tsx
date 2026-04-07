'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface PillarCardProps {
  label: string
  description: string
  href: string
  variant?: 'dark' | 'light'
}

export function PillarCard({ label, description, href, variant = 'dark' }: PillarCardProps) {
  const variants = {
    dark: 'bg-brand-dark-slate text-brand-text-light-2 border-brand-dark-2',
    light: 'bg-brand-light text-brand-text-dark-2 border-brand-border',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={`rounded-card border border-l-4 border-l-teal-500 p-6 ${variants[variant]}`}
    >
      <h4 className="font-mono text-sm uppercase tracking-wider text-brand-dim">{label}</h4>
      <p className="mt-2">{description}</p>
      <Link href={href} className="mt-4 inline-block text-teal-500 hover:underline">
        Learn More &rarr;
      </Link>
    </motion.div>
  )
}
