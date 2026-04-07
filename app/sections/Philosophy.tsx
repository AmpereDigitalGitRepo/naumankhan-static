'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const philosophies = [
  "Think in systems, not silos.",
  "Data informs, but principles guide.",
  "Complexity is a tax on execution.",
  "Build for the long term, optimize for the short term.",
]

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

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

      gsap.fromTo(
        listRef.current?.children || [],
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <SectionContainer ref={containerRef}>
      <h2 ref={h2Ref} className="text-center font-display text-5xl font-bold text-nk-white">
        Core Philosophy
      </h2>
      <ul ref={listRef} className="mt-12 space-y-6">
        {philosophies.map((p, i) => (
          <li
            key={i}
            className="border-l-4 border-nk-primary pl-6 py-2"
          >
            <p className="font-sans text-2xl text-nk-gray-200">{p}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}