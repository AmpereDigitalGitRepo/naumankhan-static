import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeUp = (element: string | gsap.DOMTarget) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
  })
}

export const splitText = (element: string) => {
  const el = document.querySelector(element)
  if (el) {
    el.innerHTML = el.textContent
      .split('')
      .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')

    gsap.from(`${element} .char`, {
      opacity: 0,
      y: 20,
      stagger: 0.03,
      duration: 0.4,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    })
  }
}

export const staggerChildren = (container: string, children: string) => {
  gsap.from(`${container} ${children}`, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: 'power2.out',
    stagger: {
      amount: 0.4,
      from: 'start',
    },
    scrollTrigger: {
      trigger: container,
      start: 'top 75%',
      once: true,
    },
  })
}
