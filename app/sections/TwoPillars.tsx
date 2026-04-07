'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    title: 'Marketing Systems',
    description:
      'I build comprehensive marketing engines that integrate content, SEO, paid media, and analytics into a cohesive, automated system. The goal is to create a predictable pipeline for growth, not just run campaigns.',
  },
  {
    title: 'Intelligent Automation',
    description:
      'I leverage AI and modern development tools to build intelligent automation that goes beyond simple task management. This includes creating custom data pipelines, AI-powered content systems, and internal tools that amplify team efficiency.',
  },
]

export function TwoPillars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      gsap.fromTo(
        h2Ref.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: h2Ref.current,
            start: 'top 80%',
          },
        },
      )

      pillarsRef.current.forEach((pillar, index) => {
        gsap.fromTo(
          pillar,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillar,
              start: 'top 80%',
            },
            delay: index * 0.2,
          },
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <SectionContainer ref={containerRef}>
      <h2 ref={h2Ref} className="text-center font-display text-5xl font-bold text-nk-white">
        My Two Pillars
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            ref={(el) => { pillarsRef.current[index] = el }}
            className="rounded-lg border border-nk-gray-700 bg-nk-gray-800/50 p-8"
          >
            <h3 className="font-display text-3xl font-bold text-nk-white">{pillar.title}</h3>
            <p className="mt-4 text-lg text-nk-gray-300">{pillar.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}