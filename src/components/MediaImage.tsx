import { useState } from 'react'

type Props = {
  src: string
  alt: string
  placeholder: string
  className?: string
  imgClassName?: string
  /** cover crops to fill; contain shows the full image */
  fit?: 'cover' | 'contain'
  loading?: 'eager' | 'lazy'
}

/** Shows image when file exists; otherwise a dashed placeholder. */
export function MediaImage({
  src,
  alt,
  placeholder,
  className = '',
  imgClassName = '',
  fit = 'cover',
  loading = 'lazy',
}: Props) {
  const [ok, setOk] = useState(true)

  if (!ok) {
    return (
      <div
        className={`flex items-center justify-center bg-hes-bg text-center text-xs text-hes-muted ring-1 ring-dashed ring-black/15 ${className}`}
      >
        {placeholder}
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-white ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${imgClassName}`}
        onError={() => setOk(false)}
      />
    </div>
  )
}
