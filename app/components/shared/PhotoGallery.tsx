'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PhotoGalleryProps {
  photos: {
    src: string
    alt: string
  }[]
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex cursor-grab gap-4"
        drag="x"
        dragConstraints={{ right: 0, left: - (photos.length - 1) * 300 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative h-80 w-64 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
