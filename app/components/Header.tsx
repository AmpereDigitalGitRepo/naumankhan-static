'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent w-full">
      {/* Full-width container with generous padding */}
      <div className="w-full px-6 md:px-16 lg:px-24 py-10 md:py-14 lg:py-16">
        {/* Inner centered container */}
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo/Brand — Premium statement piece */}
          <motion.div
            className="text-white font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            NK
          </motion.div>

          {/* Right: Audio Toggle + Let's Talk CTA */}
          <motion.div
            className="flex items-center gap-12 md:gap-16 lg:gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Audio Toggle Button */}
            <motion.button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="text-[#A1A1AA] hover:text-[#14B8A6] transition-colors duration-300 text-xs md:text-sm font-medium uppercase tracking-[0.15em]"
              aria-label={audioEnabled ? 'Mute audio' : 'Unmute audio'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ♪ {audioEnabled ? 'Audio On' : 'Audio Off'}
            </motion.button>

            {/* Let's Talk CTA */}
            <motion.a
              href="#connect"
              className="inline-flex items-center gap-2 text-[#14B8A6] font-medium text-xs md:text-sm transition-all duration-300 hover:underline"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Let's talk →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
