/**
 * Update these when your GitHub repo + Releases are ready.
 * Download URL stays stable: always .../releases/latest/download/hes.apk
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

/** Drop your files into these public paths */
export const MEDIA = {
  adminPhoto: '/images/admin.webp',
  adminGroupPhoto: '/images/adminwithteachers.webp',
  hafizCeremony: '/images/hafiz-ceremony.webp',
  adminOnStage: '/images/admin-on-stage.webp',
  guideImages: [
    '/images/img01.webp',
    '/images/img02.webp',
    '/images/img03.webp',
  ] as const,
  videoGuide: '/videos/guide.mp4',
  videoFeatures: '/videos/complaints-guide.mp4',
}
