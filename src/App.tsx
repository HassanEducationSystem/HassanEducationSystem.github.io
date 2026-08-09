import { useEffect, useState } from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { CONTACT, MEDIA } from './config'
import { copy, type Lang } from './i18n'
import { DownloadButton } from './components/DownloadButton'
import { Header } from './components/Header'
import { MediaImage } from './components/MediaImage'
import { MediaVideo } from './components/MediaVideo'
import { handleNavClick } from './utils/smoothScroll'

type VersionInfo = {
  version: string
  updatedAt?: string
}

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [version, setVersion] = useState('1.3.0')
  const t = copy[lang]
  const year = new Date().getFullYear()
  const isUrdu = lang === 'ur'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isUrdu ? 'rtl' : 'ltr'
  }, [lang, isUrdu])

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}version.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: VersionInfo | null) => {
        if (data?.version) setVersion(data.version)
      })
      .catch(() => {
        /* keep default */
      })
  }, [])

  return (
    <div
      className={`min-h-screen bg-hes-bg text-hes-ink ${isUrdu ? 'font-urdu' : ''}`}
    >
      <Header lang={lang} onToggleLang={() => setLang(isUrdu ? 'en' : 'ur')} />

      <main>
        {/* Hero */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#0b1f4a] via-[#144a9e] to-[#1a5dc8] text-white"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(61,184,232,0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,168,67,0.35), transparent 35%)',
            }}
          />
          <div className="relative mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-16">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="mt-2 text-base font-medium text-hes-gold-light sm:text-lg">
                {t.heroSubtitle}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                {t.heroTagline}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <DownloadButton label={t.downloadNow} size="lg" />
                <span
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20"
                  dir="ltr"
                >
                  {t.versionLabel} {version}
                </span>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                type="button"
                className="hero-logo-touch overflow-hidden rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5"
                aria-label="HES logo"
              >
                <img
                  src="/images/logo_with_bg.jpg"
                  alt="Hassan Education System"
                  className="h-44 w-44 object-contain sm:h-52 sm:w-52"
                />
              </button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-hes-muted sm:text-[0.95rem]">
              {t.aboutBody}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.aboutPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-lg bg-white px-4 py-3 text-sm text-hes-ink ring-1 ring-black/5"
                >
                  <span className="me-2 inline-block h-1.5 w-1.5 rounded-full bg-hes-gold align-middle" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How to use */}
        <section
          id="how-to-use"
          className="scroll-mt-24 border-y border-black/5 bg-white py-12 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.howTitle}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {t.howSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl bg-hes-bg px-4 py-4 ring-1 ring-black/5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-hes-primary text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-semibold sm:text-[0.95rem]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-hes-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Maktab Gallery */}
        <section
          id="gallery"
          className="scroll-mt-24 py-12 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.adminTitle}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-center">
              <div className="flex flex-col items-center rounded-2xl bg-hes-bg p-5 text-center ring-1 ring-black/5 sm:p-6">
                <MediaImage
                  src={MEDIA.adminPhoto}
                  alt={t.adminPhotoAlt}
                  placeholder={t.adminPhotoPlaceholder}
                  className="aspect-[4/5] w-full max-w-xs rounded-xl"
                  loading="lazy"
                />
                <p
                  className="mt-4 font-display text-lg font-semibold text-hes-ink"
                  dir="rtl"
                >
                  {t.adminName}
                </p>
                <p className="mt-1 text-sm text-hes-muted" dir="rtl">
                  {t.adminRole}
                </p>
                {!isUrdu && (
                  <p className="mt-2 text-xs text-hes-muted">{t.adminNote}</p>
                )}
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-hes-bg p-5 ring-1 ring-black/5 sm:p-6">
                <MediaImage
                  src={MEDIA.adminOnStage}
                  alt={t.galleryExtraAlt}
                  placeholder="admin-on-stage.webp"
                  fit="contain"
                  className="min-h-[220px] w-full rounded-xl bg-hes-bg md:min-h-[320px]"
                  imgClassName="object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-hes-bg p-4 ring-1 ring-black/5 sm:p-5">
                <MediaImage
                  src={MEDIA.hafizCeremony}
                  alt={t.galleryExtraAlt}
                  placeholder="hafiz-ceremony.webp"
                  fit="contain"
                  className="min-h-[200px] w-full rounded-xl bg-hes-bg md:min-h-[280px]"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl bg-hes-bg p-4 ring-1 ring-black/5 sm:p-5">
                <MediaImage
                  src={MEDIA.adminGroupPhoto}
                  alt={t.adminGroupAlt}
                  placeholder={t.adminGroupPlaceholder}
                  fit="contain"
                  className="min-h-[200px] w-full rounded-xl bg-hes-bg md:min-h-[280px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section
          id="videos"
          className="scroll-mt-24 border-y border-black/5 bg-white py-12 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.videosTitle}
            </h2>
            <p className="mt-2 text-sm text-hes-muted">{t.videosBody}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <MediaVideo
                src={MEDIA.videoGuide}
                title={t.videoGuide}
                placeholder={t.videoPlaceholder}
              />
              <MediaVideo
                src={MEDIA.videoFeatures}
                title={t.videoFeatures}
                placeholder={t.videoPlaceholder}
              />
            </div>
          </div>
        </section>

        {/* Maktab Guide */}
        <section id="guide" className="scroll-mt-24 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.screensTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {MEDIA.guideImages.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl bg-white p-2 ring-1 ring-black/5"
                >
                  <MediaImage
                    src={src}
                    alt={`${t.guideImageAlt} ${index + 1}`}
                    placeholder={src}
                    fit="contain"
                    className="aspect-[9/16] w-full rounded-lg bg-hes-bg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section
          id="download"
          className="scroll-mt-24 border-y border-black/5 bg-gradient-to-b from-white to-hes-bg py-12 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.downloadTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-hes-muted">
              {t.downloadBody}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <DownloadButton label={t.downloadNow} size="lg" />
              <span className="text-xs font-medium text-hes-muted" dir="ltr">
                {t.versionLabel} {version} · Android APK
              </span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              {t.contactTitle}
            </h2>
            <p className="mt-2 text-sm text-hes-muted">{t.contactBody}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm ring-1 ring-black/5 transition hover:ring-hes-primary/30"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-hes-primary" />
                <div className="min-w-0">
                  <div className="text-xs text-hes-muted">{t.whatsapp}</div>
                  <div className="font-medium" dir="ltr">
                    {CONTACT.whatsapp}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm ring-1 ring-black/5 transition hover:ring-hes-primary/30"
              >
                <Mail className="h-4 w-4 shrink-0 text-hes-primary" />
                <div className="min-w-0">
                  <div className="text-xs text-hes-muted">{t.email}</div>
                  <div className="truncate font-medium" dir="ltr">
                    {CONTACT.email}
                  </div>
                </div>
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm ring-1 ring-black/5 transition hover:ring-hes-primary/30"
              >
                <Phone className="h-4 w-4 shrink-0 text-hes-primary" />
                <div className="min-w-0">
                  <div className="text-xs text-hes-muted">{t.phone}</div>
                  <div className="font-medium" dir="ltr">
                    {CONTACT.phone}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6 sm:text-start">
          <p className="text-xs text-hes-muted">
            <span dir="ltr">© {year}</span>
            <span className="mx-2 inline-block">·</span>
            <span>{t.footerRights}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-hes-muted">
            <a
              href="#about"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              {t.navAbout}
            </a>
            <a
              href="#how-to-use"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#how-to-use')}
            >
              {t.navHowTo}
            </a>
            <a
              href="#gallery"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#gallery')}
            >
              {t.navAdmin}
            </a>
            <a
              href="#videos"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#videos')}
            >
              {t.navVideos}
            </a>
            <a
              href="#guide"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#guide')}
            >
              {t.navGuide}
            </a>
            <a
              href="#download"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#download')}
            >
              {t.navDownload}
            </a>
            <a
              href="#contact"
              className="hover:text-hes-primary"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              {t.navContact}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
