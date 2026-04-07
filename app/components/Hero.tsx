'use client';

import { useEffect, useRef, useState } from 'react';
import ModalCarousel from './ModalCarousel';

interface Slide {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  photoUrl: string;
  cta?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    label: '01 / 04',
    title: 'Founder',
    subtitle: 'Founder. Operator. Venture Partner.',
    photoUrl: '/photos-optimized/nauman-khan-1.webp',
    cta: true,
  },
  {
    id: 2,
    label: '02 / 04',
    title: '16 Years',
    subtitle: 'Digital growth across agencies, operators, and founders.',
    photoUrl: '/photos-optimized/nauman-khan-2.webp',
  },
  {
    id: 3,
    label: '03 / 04',
    title: 'AI Engineer',
    subtitle: 'Two years building proprietary agentic systems.',
    photoUrl: '/photos-optimized/nauman-khan-3.webp',
  },
  {
    id: 4,
    label: '04 / 04',
    title: 'Builder',
    subtitle: 'Operator. Investor. Building what\'s possible.',
    photoUrl: '/photos-optimized/nauman-khan-4.webp',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Track scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.offsetWidth;
      const newSlide = Math.round(container.scrollLeft / slideWidth);
      setCurrentSlide(Math.min(newSlide, slides.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const diff = startX - e.clientX;
    containerRef.current.scrollLeft += diff;
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const goToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
  };

  const nextSlide = () => {
    goToSlide(Math.min(currentSlide + 1, slides.length - 1));
  };

  const prevSlide = () => {
    goToSlide(Math.max(currentSlide - 1, 0));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen overflow-x-auto overflow-y-hidden bg-[#0a0b14]"
      style={{
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Hide scrollbar */}
      <style>{`
        section::-webkit-scrollbar {
          display: none;
        }
        section {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Decorative Plus Signs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-6 md:left-12 top-1/4 text-[#14B8A6]/30 text-4xl md:text-6xl font-light">+</div>
        <div className="absolute left-1/4 bottom-1/3 text-[#14B8A6]/20 text-3xl md:text-5xl font-light">+</div>
        <div className="absolute right-1/3 top-1/3 text-[#14B8A6]/25 text-4xl md:text-6xl font-light">+</div>
      </div>

      {/* Slides */}
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center"
        >
          {/* Background Photo */}
          <img
            src={slide.photoUrl}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Glass Pane Text Overlay - Centered */}
          <div className="relative z-10 backdrop-blur-md bg-black/20 rounded-2xl p-8 md:p-12 lg:p-16 border border-white/10 max-w-2xl mx-auto text-center">
            {/* Label */}
            <p className="text-xs md:text-sm font-mono text-[#14B8A6] uppercase tracking-[0.2em] mb-6">
              {slide.label}
            </p>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#E4E4E7] mb-8 max-w-[50ch] mx-auto leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA Button */}
            {slide.cta && (
              <button
                onClick={() => setIsCarouselOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#000000] text-white font-medium text-sm rounded-full hover:opacity-80 transition-all active:scale-95"
              >
                Enter Experience →
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Carousel Modal */}
      <ModalCarousel isOpen={isCarouselOpen} onClose={() => setIsCarouselOpen(false)} />

      {/* Bottom Text — Changes based on slide position */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 z-10 pointer-events-none flex items-end justify-between">
        <div className="text-[#14B8A6] font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tight min-h-10">
          {currentSlide === 0 && 'Nauman'}
          {currentSlide === 1 && 'Khan'}
        </div>
        <div className="text-[#A1A1AA] text-xs md:text-sm font-mono uppercase tracking-[0.2em]">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
