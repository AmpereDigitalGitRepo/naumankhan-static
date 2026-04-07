'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AiDepth() {
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
    <div ref={containerRef}>
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-lg bg-nk-gray-800 p-4 order-last md:order-first">
            {/* Placeholder for a visual element, e.g., a code snippet or diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-nk-gray-500">AI Automation Workflow</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-5xl font-bold text-nk-white">
              AI as a Force Multiplier
            </h2>
            <p className="mt-6 text-lg text-nk-gray-300">
              AI is not a magic bullet; it&apos;s a powerful tool that requires expert implementation. I specialize in building practical AI solutions that solve real business problems. This means creating custom agents, fine-tuning models for specific tasks, and integrating AI into existing workflows to create step-function improvements in efficiency and capability.
            </p>
            <ul className="mt-6 space-y-2 text-nk-gray-400">
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>Custom AI Agent & Tool Development</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>LLM Fine-tuning & RAG Pipelines</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon />
                <span>Process Automation with AI</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Generative AI for Content & Creative</span>
              </li>
            </ul>
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