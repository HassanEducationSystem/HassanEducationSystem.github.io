/**
 * Website: https://hassaneducationsystem.github.io/
 * APK: https://hassaneducationsystem.github.io/hes.apk
 * (file lives in public/hes.apk — replace it when releasing a new version)
 */
export const SITE_URL = 'https://hassaneducationsystem.github.io'

/** Respect Vite `base` so assets work on GitHub Pages */
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const APK_DOWNLOAD_URL = asset('hes.apk')

export const CONTACT = {
  whatsapp: '+923451027733',
  whatsappLink: 'https://wa.me/923451027733',
  email: 'hassandaoud606@gmail.com',
  phone: '+923451027733',
}

export const MEDIA = {
  adminPhoto: asset('images/admin.webp'),
  adminGroupPhoto: asset('images/adminwithteachers.webp'),
  hafizCeremony: asset('images/hafiz-ceremony.webp'),
  adminOnStage: asset('images/admin-on-stage.webp'),
  guideImages: [
    asset('images/img01.webp'),
    asset('images/img02.webp'),
    asset('images/img03.webp'),
  ] as const,
  videoGuide: asset('videos/guide.mp4'),
  videoFeatures: asset('videos/complaints-guide.mp4'),
  headerLogo: asset('images/hes_logo.png'),
  heroLogo: asset('images/logo_with_bg.jpg'),
}
