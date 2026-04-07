interface SectionLabelProps {
  sectionNumber: string
  label: string
  className?: string
}

export function SectionLabel({ sectionNumber, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`font-mono text-sm uppercase tracking-widest text-brand-dim ${className}`}>
      <span>{label}</span>
      <span className="text-teal-500"> · </span>
      <span>{sectionNumber}</span>
    </div>
  )
}
