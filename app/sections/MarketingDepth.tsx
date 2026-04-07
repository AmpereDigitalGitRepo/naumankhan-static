'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function MarketingDepth() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="bg-nk-gray-900">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl font-bold text-nk-white">
              Marketing Beyond the Surface
            </h2>
            <p className="mt-6 text-lg text-nk-gray-300">
              I don&apos;t just run ads or write blog posts. I architect full-funnel systems where every component works in concert. From the technical SEO that ensures you&apos;re found, to the content that builds authority, to the paid campaigns that capture demand—it&apos;s all part of a single, measurable engine designed for one purpose: sustainable growth.
            </p>
            <ul className="mt-6 space-y-2 text-nk-gray-400">
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>Technical SEO & Content Architecture</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>Multi-platform Paid Media (Google, Meta, LinkedIn)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>Conversion Rate Optimization (CRO)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>Advanced Analytics & Attribution Modeling</span>
              </li>
            </ul>
          </div>
          <div className="relative h-80 rounded-lg bg-nk-gray-800 p-4">
            {/* Placeholder for a visual element, e.g., a diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-nk-gray-500">Marketing Funnel Visualization</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-nk-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}