'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import { CTAButton } from '../components/shared/CTAButton'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Connect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <SectionContainer>
      <div ref={containerRef} className="text-center">
        <h2 className="font-display text-5xl font-bold text-nk-white">
          Let&apos;s Build Something
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-nk-gray-300">
          Have a project in mind or want to discuss how we can work together? I&apos;m always open to new opportunities and collaborations.
        </p>
        <div className="mt-8">
          <CTAButton href="mailto:nauman@amperedigital.com">
            Get in Touch
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  )
}