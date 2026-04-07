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
          {/* Logo/Brand — SVG wordmark */}
          <motion.a
            href="/"
            className="w-[90px] md:w-[100px] flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 1258.91 497.79"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Nauman Khan"
            >
              <path
                fill="#E4E4E7"
                d="M1.34,0c81.01,1.36,164.73.5,245.91.63,38.07,35.98,76.64,75.89,113.76,113.12l154.08,152.82.14-266.26,208.33.14-.18,493.49-1.56,1.68c-12.64,2.16-59.61.9-74.4,1.06-56.88.58-114.62-.94-171.47.62-88.99-81.71-176.1-180.13-265.54-263.1l.33,262.36c-70.09-.21-140.18,0-210.27.64l.22-323.18C.66,119.1-1.22,53.78,1.34,0Z"
              />
              <path
                fill="#E4E4E7"
                d="M992.48.41l266.43.19-247.64,248.44c60.19,65.38,177.62,174.61,244.65,244.95.04,1.26.09,2.53.12,3.81-33.34-1.95-71.24-1.19-104.93-1.19l-159.98.04c-29.59-30.69-63.36-62.78-93.87-92.97l-155.34-153.53c52.85-53.8,106.05-107.27,159.59-160.39,26.81-26.74,63.02-65.04,90.97-89.33Z"
              />
            </svg>
          </motion.a>

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
