'use client'

import { motion } from 'framer-motion'

interface MotionWrapProps {
  children: React.ReactNode
  className?: string
  layoutId?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function MotionWrap({ children, className, layoutId }: MotionWrapProps) {
  return (
    <motion.div
      layoutId={layoutId}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}
