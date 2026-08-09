import type { MouseEvent } from 'react'

/** Noticeable ease-in-out scroll to a hash target (accounts for sticky header via scroll-padding). */
export function smoothScrollTo(hash: string, durationMs = 700) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  const el = document.getElementById(id)
  if (!el) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    el.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  const startY = window.scrollY
  const headerOffset =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 72
  const targetY = el.getBoundingClientRect().top + startY - headerOffset
  const distance = targetY - startY
  if (Math.abs(distance) < 2) return

  const startTime = performance.now()

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / durationMs, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return
  event.preventDefault()
  smoothScrollTo(href)
  history.pushState(null, '', href)
}
