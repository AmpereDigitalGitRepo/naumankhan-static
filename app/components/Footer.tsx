'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0b14] w-full">
      {/* Scroll-triggered reveal wrapper */}
      <motion.div
        className="w-full min-h-[100dvh] flex items-end px-6 md:px-16 lg:px-24 py-40 md:py-56 lg:py-64"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Premium backdrop card — Doppelrand (Double-Bezel) architecture */}
          <motion.div
            className="relative rounded-[2rem] bg-black/5 border border-[#14B8A6]/10 p-3"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {/* Inner core */}
            <div className="relative rounded-[calc(2rem-0.375rem)] bg-[#0a0b14] border border-[#14B8A6]/5 shadow-[inset_0_1px_1px_rgba(20,184,166,0.1)] p-20 md:p-32 lg:p-40">
              {/* Main content grid — premium spacing */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-32 lg:gap-40 mb-20 md:mb-32">
                {/* Brand column */}
                <motion.div
                  className="flex flex-col gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <p className="text-[#E4E4E7] font-display font-bold text-4xl md:text-5xl leading-tight mb-4">
                      Nauman Khan
                    </p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-[45ch]">
                      Growth operator. AI enabler. Venture partner.
                    </p>
                  </div>
                </motion.div>

                {/* Thinking column */}
                <motion.div
                  className="flex flex-col gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  <div>
                    <p className="text-[#A1A1AA] text-xs uppercase tracking-[0.2em] font-medium mb-6">Thinking</p>
                    <div className="flex flex-col gap-4">
                      <a href="#" className="text-[#E4E4E7] text-base hover:text-[#14B8A6] transition-colors duration-300 font-light">
                        Articles
                      </a>
                      <a href="#" className="text-[#E4E4E7] text-base hover:text-[#14B8A6] transition-colors duration-300 font-light">
                        Ventures
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Growth column */}
                <motion.div
                  className="flex flex-col gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div>
                    <p className="text-[#A1A1AA] text-xs uppercase tracking-[0.2em] font-medium mb-6">Growth</p>
                    <div className="flex flex-col gap-4">
                      <a href="#" className="text-[#E4E4E7] text-base hover:text-[#14B8A6] transition-colors duration-300 font-light">
                        Marketing
                      </a>
                      <a href="#" className="text-[#E4E4E7] text-base hover:text-[#14B8A6] transition-colors duration-300 font-light">
                        Ampere
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Connect column */}
                <motion.div
                  className="flex flex-col gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                >
                  <div>
                    <p className="text-[#A1A1AA] text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</p>
                    <div className="flex flex-col gap-4">
                      <a href="#" className="text-[#E4E4E7] text-base hover:text-[#14B8A6] transition-colors duration-300 font-light">
                        Email
                      </a>
                      <a href="#" className="text-[#E4E4E7] text-base hover:text-[#14B8A6] transition-colors duration-300 font-light">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Divider — premium hairline */}
              <motion.div
                className="border-t border-[#14B8A6]/10 mb-16 md:mb-20 lg:mb-24"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

              {/* Bottom section — copyright + links */}
              <motion.div
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-[#A1A1AA] text-xs uppercase tracking-[0.1em]">
                  © 2026 Nauman Khan. All rights reserved.
                </p>
                <div className="flex gap-12 text-[#A1A1AA] text-xs uppercase tracking-[0.1em]">
                  <a href="#" className="hover:text-[#E4E4E7] transition-colors duration-300">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-[#E4E4E7] transition-colors duration-300">
                    Terms
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
