'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  '/photos-webp/photo-1.webp',
  '/photos-webp/photo-2.webp',
  '/photos-webp/photo-3.webp',
  '/photos-webp/photo-4.webp',
  '/photos-webp/photo-5.webp',
  '/photos-webp/photo-6.webp',
]

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      })

      tl.fromTo(
        [h2Ref.current, pRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        },
      )

      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <SectionContainer ref={containerRef}>
      <div className="text-center">
        <h2 ref={h2Ref} className="font-display text-5xl font-bold text-nk-white">
          A Visual Journey
        </h2>
        <p ref={pRef} className="mt-4 max-w-2xl mx-auto text-lg text-nk-gray-300">
          Curated moments from my professional life, speaking engagements, and travels.
        </p>
      </div>
      <div ref={gridRef} className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-nk-gray-800">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}