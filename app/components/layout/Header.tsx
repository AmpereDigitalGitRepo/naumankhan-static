'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { FlyoutMenu } from './FlyoutMenu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-brand-dark-slate/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between p-4">
          <Link href="/" className="text-lg font-bold text-brand-text-light">
            NK
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/connect"
              className="hidden rounded-full border border-brand-text-light px-4 py-2 text-sm text-brand-text-light transition-colors hover:bg-brand-text-light hover:text-brand-dark-slate md:block"
            >
              Connect
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full bg-brand-dark-2 p-2 text-brand-text-light"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <FlyoutMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
