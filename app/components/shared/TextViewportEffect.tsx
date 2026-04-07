'use client'

import { motion, useScroll, useTransform, type Transition } from 'framer-motion'
import { useRef } from 'react'

interface TextViewportEffectProps {
  children: React.ReactNode
  className?: string
  blendMode?: 'screen' | 'multiply' | 'overlay' | 'darken' | 'lighten'
  animationType: 'parallax' | 'fill-behind' | 'pulse-glow'
}

export function TextViewportEffect({
  children,
  className,
  blendMode = 'multiply',
  animationType,
}: TextViewportEffectProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  const animationProps: Record<string, object> = {
    parallax: {
      style: { y },
    },
    'fill-behind': {
      whileInView: { backgroundSize: '100% 100%' },
      initial: { backgroundSize: '0% 100%' },
      transition: { duration: 0.6, ease: [0.65, 0.05, 0, 1] } as Transition,
      style: {
        backgroundImage: 'linear-gradient(to right, rgba(20, 184, 166, 0.08), rgba(20, 184, 166, 0.08))',
        backgroundRepeat: 'no-repeat',
      },
    },
    'pulse-glow': {
      animate: {
        boxShadow: [
          '0 0 0 0 rgba(20, 184, 166, 0.08)',
          '0 0 0 20px rgba(20, 184, 166, 0)',
          '0 0 0 0 rgba(20, 184, 166, 0.08)',
        ],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{ mixBlendMode: blendMode }}
        {...animationProps[animationType]}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
