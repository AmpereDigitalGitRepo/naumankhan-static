'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

const menuItems = [
  { id: '01', title: 'About', href: '/about' },
  {
    id: '02',
    title: 'Marketing',
    subItems: [
      { title: 'Fractional CMO', href: '/marketing/fractional-cmo' },
      { title: 'Ampere Digital', href: '/marketing/ampere-digital' },
    ],
  },
  {
    id: '03',
    title: 'AI',
    subItems: [
      { title: 'aAi', href: '/ai/aai' },
      { title: 'amOS', href: '/ai/amos' },
      { title: 'avOS', href: '/ai/avos' },
    ],
  },
  { id: '04', title: 'Ventures', href: '/ventures' },
  { id: '05', title: 'Thinking', href: '/thinking' },
  { id: '06', title: 'Connect', href: '/connect' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut' as const,
      duration: 0.5,
    },
  },
}

export function FlyoutMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-brand-dark-slate/95 backdrop-blur-lg"
        >
          <div className="container mx-auto flex h-full flex-col items-center justify-center">
            <button onClick={onClose} className="absolute top-4 right-4 text-brand-text-light">
              <X size={32} />
            </button>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 text-center"
            >
              {menuItems.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-sm font-mono text-teal-500">{item.id}</span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-display text-5xl uppercase text-brand-text-light transition-colors hover:text-teal-500"
                        onClick={onClose}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="font-display text-5xl uppercase text-brand-text-light">
                        {item.title}
                      </span>
                    )}
                  </div>
                  {item.subItems && (
                    <ul className="mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className="text-xl text-brand-text-light-2 transition-colors hover:text-teal-500"
                            onClick={onClose}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
