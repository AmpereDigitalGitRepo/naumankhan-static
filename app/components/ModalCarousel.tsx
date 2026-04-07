'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  backgroundText: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    backgroundText: 'MARKETING',
    title: 'Strategy',
    description: 'Marketing is not advertising. It\'s strategy, execution, systems thinking.',
  },
  {
    id: 2,
    backgroundText: 'GROWTH',
    title: 'Execution',
    description: 'Most agencies sell projects. Real partners build leverage through systems.',
  },
  {
    id: 3,
    backgroundText: 'LEVERAGE',
    title: 'Systems',
    description: 'Real execution across growth, conversion, retention, and paid systems.',
  },
];

interface ModalCarouselProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCarousel({ isOpen, onClose }: ModalCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled || !isOpen) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplayEnabled, isOpen]);

  // Prevent body scroll when modal is open + handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplayEnabled(false);
    setTimeout(() => setAutoplayEnabled(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplayEnabled(false);
    setTimeout(() => setAutoplayEnabled(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplayEnabled(false);
    setTimeout(() => setAutoplayEnabled(true), 8000);
  };

  const springTransition = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Carousel Container */}
            <motion.div
              className="relative w-full h-[100dvh] max-w-7xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ...springTransition, duration: 0.6 }}
            >
              {/* Slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/10 to-[#0F172A]/20">
                    <div className="w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%221000%22 height=%221000%22><defs><pattern id=%22dots%22 x=%2250%22 y=%2250%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22><circle cx=%2250%22 cy=%2250%22 r=%223%22 fill=%22%2314B8A6%22 opacity=%220.08%22/></pattern></defs><rect width=%221000%22 height=%221000%22 fill=%22%230a0b14%22/><rect width=%221000%22 height=%221000%22 fill=%22url(%23dots)%22/></svg>')] opacity-40" />
                  </div>

                  {/* Animated Background Text Layer */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.08, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="text-9xl md:text-[14rem] font-bold text-[#14B8A6] tracking-tight font-display whitespace-nowrap">
                      {slides[currentSlide].backgroundText}
                    </p>
                  </motion.div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ ...springTransition, duration: 0.9, delay: 0.2 }}
                    >
                      {/* Slide Counter */}
                      <motion.p
                        className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#14B8A6] font-medium mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                      </motion.p>

                      {/* Title */}
                      <motion.h2
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.25 }}
                      >
                        {slides[currentSlide].title}
                      </motion.h2>

                      {/* Description */}
                      <motion.p
                        className="text-base md:text-lg text-[#E4E4E7] max-w-[55ch] mx-auto leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.35 }}
                      >
                        {slides[currentSlide].description}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Close Button (Top Right) */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 md:top-10 right-6 md:right-10 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="Close carousel"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] hover:border-[#14B8A6] hover:bg-[#14B8A6]/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Bottom Navigation Dots */}
              <motion.div
                className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides.map((slide, index) => (
                  <motion.button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-[#14B8A6]' : 'w-2 bg-[#14B8A6]/30 hover:bg-[#14B8A6]/60'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Go to slide ${index + 1}`}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                ))}
              </motion.div>

              {/* Slide Indicator Bar (top) */}
              <motion.div
                className="absolute top-0 left-0 h-1 bg-[#14B8A6] z-20"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
