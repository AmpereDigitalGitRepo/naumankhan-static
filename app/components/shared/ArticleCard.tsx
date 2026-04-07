'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ArticleCardProps {
  href: string
  pillar: string
  title: string
  excerpt: string
  readTime: string
}

export function ArticleCard({ href, pillar, title, excerpt, readTime }: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: '#14B8A6' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="rounded-card border border-brand-border bg-brand-light p-6"
    >
      <Link href={href}>
        <div className="flex items-center justify-between">
          <span className="rounded-pill bg-teal-500/10 px-3 py-1 font-mono text-xs text-teal-500">
            {pillar}
          </span>
          <span className="font-mono text-xs text-brand-muted">{readTime}</span>
        </div>
        <h3 className="mt-4 font-display text-xl text-brand-text-dark">{title}</h3>
        <p className="mt-2 text-brand-text-dark-2">{excerpt}</p>
      </Link>
    </motion.div>
  )
}
