import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { Lang } from '../i18n'
import { copy } from '../i18n'
import { handleNavClick } from '../utils/smoothScroll'
import { DownloadButton } from './DownloadButton'

type Props = {
  lang: Lang
  onToggleLang: () => void
}

const links = [
  { href: '#about', key: 'navAbout' as const },
  { href: '#how-to-use', key: 'navHowTo' as const },
  { href: '#gallery', key: 'navAdmin' as const },
  { href: '#videos', key: 'navVideos' as const },
  { href: '#guide', key: 'navGuide' as const },
  { href: '#download', key: 'navDownload' as const },
  { href: '#contact', key: 'navContact' as const },
]

export function Header({ lang, onToggleLang }: Props) {
  const t = copy[lang]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <img
            src="/images/hes_logo.png"
            alt="HES"
            className="h-9 w-9 rounded-md object-cover sm:h-10 sm:w-10"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-hes-ink sm:text-xl">
            HES
          </span>
        </a>

        <nav
          className="hidden items-center gap-4 lg:flex lg:gap-5"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-hes-muted transition hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {t[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-md border border-black/10 px-2.5 py-1 text-xs font-semibold text-hes-ink transition hover:border-hes-primary/40 hover:text-hes-primary"
          >
            {t.langToggle}
          </button>
          <DownloadButton
            label={t.downloadHeader}
            size="sm"
            className="hidden sm:inline-flex"
          />
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-hes-ink lg:hidden"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav
            className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-hes-ink hover:bg-hes-bg"
                onClick={(e) => {
                  handleNavClick(e, link.href)
                  setOpen(false)
                }}
              >
                {t[link.key]}
              </a>
            ))}
            <div className="px-3 pt-2">
              <DownloadButton
                label={t.downloadNow}
                size="lg"
                className="w-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
