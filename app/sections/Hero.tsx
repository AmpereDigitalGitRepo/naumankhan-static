'use client'

import { CTAButton } from '../components/shared/CTAButton'
import { GridPattern } from '../components/shared/GridPattern'
import { Starfield } from '../components/shared/Starfield'
import { cn } from '../lib/utils'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const content = {
  h1: 'Nauman Khan',
  h2: 'Digital Strategy & Systems',
  p: 'I design and build intelligent systems that connect marketing, AI, and automation to drive measurable growth for businesses.',
  cta: 'Explore My Work',
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.fromTo(
        h1Ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      )
        .fromTo(
          h2Ref.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6',
        )
        .fromTo(
          pRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6',
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6',
        )
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="relative flex h-[calc(100vh-var(--header-height))] w-full items-center justify-center overflow-hidden"
    >
      <Starfield />
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]',
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--background-end-rgb),0.8)_0%,rgba(var(--background-end-rgb),0)_60%)]" />

      <div className="z-10 flex flex-col items-center text-center">
        <motion.h1
          ref={h1Ref}
          className="font-display text-7xl font-bold tracking-tighter text-nk-white md:text-9xl"
          style={{ opacity: 0 }}
        >
          {content.h1}
        </motion.h1>
        <motion.h2
          ref={h2Ref}
          className="mt-2 font-sans text-lg font-light tracking-tight text-nk-gray-400 md:text-2xl"
          style={{ opacity: 0 }}
        >
          {content.h2}
        </motion.h2>
        <motion.p
          ref={pRef}
          className="mt-6 max-w-xl text-balance font-sans text-base text-nk-gray-300 md:text-lg"
          style={{ opacity: 0 }}
        >
          {content.p}
        </motion.p>
        <motion.div ref={ctaRef} className="mt-8" style={{ opacity: 0 }}>
          <CTAButton href="#work">{content.cta}</CTAButton>
        </motion.div>
      </div>
    </div>
  )
}