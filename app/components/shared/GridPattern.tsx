'use client'

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  className?: string
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  className,
}: GridPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-none stroke-white/[0.05] ${className ?? ''}`}
    >
      <defs>
        <pattern
          id="grid"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid)" />
    </svg>
  )
}
