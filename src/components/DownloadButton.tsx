import { AndroidIcon } from './AndroidIcon'
import { APK_DOWNLOAD_URL } from '../config'

type Props = {
  label: string
  size?: 'sm' | 'lg'
  className?: string
}

export function DownloadButton({ label, size = 'lg', className = '' }: Props) {
  const sizeClasses =
    size === 'lg'
      ? 'gap-2.5 px-6 py-3.5 text-base font-semibold shadow-md shadow-hes-primary/25'
      : 'gap-1.5 px-3 py-1.5 text-xs font-semibold shadow-sm'

  const iconClass = size === 'lg' ? 'h-5 w-5' : 'h-3.5 w-3.5'

  return (
    <a
      href={APK_DOWNLOAD_URL}
      download="hes.apk"
      className={`inline-flex items-center justify-center rounded-lg bg-hes-primary text-white transition hover:bg-hes-primary-dark active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hes-primary ${sizeClasses} ${className}`}
    >
      <AndroidIcon className={iconClass} />
      <span>{label}</span>
    </a>
  )
}
