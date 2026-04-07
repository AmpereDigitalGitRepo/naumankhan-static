'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlyoutMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FlyoutMenu({ isOpen, onClose }: FlyoutMenuProps) {
  const [email, setEmail] = useState('');

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'CONTACT', href: '/contact' },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.3 }}
          />

          {/* Menu Card Container */}
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-end p-6 md:p-10 lg:p-16 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* White Card */}
            <motion.div
              className="w-full max-w-md rounded-3xl bg-white p-8 md:p-12 pointer-events-auto shadow-2xl"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            >
              {/* Header: Close Button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border border-[#0a0b14]/20 flex items-center justify-center hover:bg-[#0a0b14]/5 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-[#0a0b14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Items */}
              <motion.div
                className="space-y-6 mb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="block text-2xl md:text-3xl font-medium text-[#0a0b14] hover:text-[#14B8A6] transition-colors"
                    variants={itemVariants}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div
                className="border-t border-[#0a0b14]/10 my-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />

              {/* Newsletter Signup */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-sm text-[#0a0b14]/70">Subscribe to our newsletter</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full bg-[#0a0b14]/5 text-[#0a0b14] placeholder-[#0a0b14]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 rounded-full bg-[#0a0b14] text-white hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>

              {/* Labs Link */}
              <motion.div
                className="mt-12 pt-8 border-t border-[#0a0b14]/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <a
                  href="/labs"
                  className="flex items-center gap-2 text-[#0a0b14] hover:text-[#14B8A6] transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  LABS
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
