/**
 * Public download host: https://github.com/AbdulRehmanGHub/HES-WEB
 * Stable APK URL: .../releases/latest/download/hes.apk
 */
export const GITHUB_OWNER = 'AbdulRehmanGHub'
export const GITHUB_REPO = 'HES-WEB'

export const APK_DOWNLOAD_URL =
  `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/hes.apk`

export const CONTACT = {
  whatsapp: '+923451027733',
  whatsappLink: 'https://wa.me/923451027733',
  email: 'hassandaoud606@gmail.com',
  phone: '+923451027733',
}

/** Respect Vite `base` so assets work on GitHub Pages (/HES-WEB/) */
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

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
