'use client'

import { SectionContainer } from '../components/shared/SectionContainer'
import { CTAButton } from '../components/shared/CTAButton'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const articles = [
  {
    title: 'The Future of SEO is Agentic',
    description: 'Exploring how AI agents are transforming search engine optimization from a manual process to an automated, intelligent system.',
    link: '#',
  },
  {
    title: 'Building a Second Brain for Your Business',
    description: 'A practical guide to creating a centralized knowledge management system that powers your marketing and operations.',
    link: '#',
  },
  {
    title: 'Beyond the Hype: Practical AI for Marketers',
    description: 'Cutting through the noise to identify and implement AI use cases that deliver real, measurable ROI for marketing teams.',
    link: '#',
  },
]

export function Thinking() {
  const containerRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const articlesRef = useRef<(HTMLDivElement | null)[]>([])

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

      articlesRef.current.forEach((article, index) => {
        gsap.fromTo(
          article,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: article,
              start: 'top 85%',
            },
            delay: index * 0.15,
          },
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <div className="bg-nk-gray-900">
      <SectionContainer ref={containerRef}>
        <h2 ref={h2Ref} className="text-center font-display text-5xl font-bold text-nk-white">
          My Thinking
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.title}
              ref={(el) => { articlesRef.current[index] = el }}
              className="flex flex-col justify-between rounded-lg border border-nk-gray-700 bg-nk-gray-800/50 p-8"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-nk-white">{article.title}</h3>
                <p className="mt-4 text-nk-gray-300">{article.description}</p>
              </div>
              <div className="mt-6">
                <CTAButton href={article.link} variant="light">
                  Read More
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}