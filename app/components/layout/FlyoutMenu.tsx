'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { id: '01', title: 'About', href: '/about' },
  {
    id: '02',
    title: 'Marketing',
    href: '/marketing',
    subItems: [
      { title: 'Fractional CMO', href: '/marketing/fractional-cmo' },
      { title: 'Ampere Digital', href: '/marketing/ampere-digital' },
    ],
  },
  {
    id: '03',
    title: 'AI',
    href: '/ai',
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
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
}

export function FlyoutMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.25 }}
          />

          {/* Menu Container - Right-Aligned Three Cards */}
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-end p-4 md:p-6 lg:p-8 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Three-Card Stack */}
            <motion.div
              className="w-full max-w-sm flex flex-col gap-3 pointer-events-auto"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ type: 'spring', stiffness: 120, damping: 22, duration: 0.4 }}
            >
              {/* Card 1: Navigation */}
              <motion.div
                className="bg-white rounded-[10px] p-4"
                variants={itemVariants}
              >
                {/* Close Button - Top Right */}
                <div className="flex justify-between items-start mb-2">
                  <span />
                  <motion.button
                    onClick={onClose}
                    className="w-7 h-7 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <X size={16} className="text-black" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {menuItems.map((item) => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Link
                        href={item.href || '#'}
                        onClick={onClose}
                        className="flex items-baseline gap-2.5 group"
                      >
                        <span className="font-mono text-xs font-medium text-[#14B8A6] flex-shrink-0">{item.id}</span>
                        <span className="text-sm font-medium text-black group-hover:text-[#14B8A6] transition-colors">
                          {item.title}
                        </span>
                      </Link>

                      {/* Sub-items */}
                      {item.subItems && (
                        <motion.div className="ml-5 mt-2 space-y-1.5">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={onClose}
                              className="block text-xs text-[#A1A1AA] hover:text-black transition-colors"
                            >
                              → {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Card 2: Newsletter */}
              <motion.div
                className="bg-white rounded-[10px] p-4 space-y-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div>
                  <h3 className="text-sm font-medium text-black">Subscribe</h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">Thinking, ventures, AI ops.</p>
                </div>

                <motion.input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-[#F4F4F5] text-black placeholder-[#A1A1AA] focus:outline-none focus:ring-1 focus:ring-[#14B8A6] border border-transparent"
                  whileFocus={{ scale: 1.01 }}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-3 py-2 bg-black text-white text-xs font-medium rounded-lg hover:opacity-85 transition-opacity flex items-center justify-center gap-1.5"
                >
                  <span>Send</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Card 3: Secondary Action */}
              <motion.div
                className="bg-black rounded-[10px] p-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link
                  href="/connect"
                  onClick={onClose}
                  className="block text-white text-sm font-medium hover:opacity-75 transition-opacity"
                >
                  Let&apos;s build →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
