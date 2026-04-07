import React from 'react'
import { SectionLabel } from './SectionLabel'

interface SectionContainerProps {
  children: React.ReactNode
  bgColor?: string
  sectionId?: string
  sectionNumber?: string
  label?: string
  className?: string
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  (
    {
      children,
      bgColor = 'bg-brand-dark',
      sectionId,
      sectionNumber,
      label,
      className = '',
    },
    ref,
  ) => {
    return (
      <section id={sectionId} ref={ref} className={`${bgColor} py-section ${className}`}>
        <div className="container mx-auto max-w-content px-4">
          {sectionNumber && label && (
            <SectionLabel sectionNumber={sectionNumber} label={label} />
          )}
          <div className="mt-element">{children}</div>
        </div>
      </section>
    )
  },
)
SectionContainer.displayName = 'SectionContainer'

export { SectionContainer }
