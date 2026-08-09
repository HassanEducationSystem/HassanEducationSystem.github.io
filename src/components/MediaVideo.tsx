import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'

type Props = {
  src: string
  title: string
  placeholder: string
}

/**
 * Video stays unloaded until the user presses play
 * (page load is not slowed by large MP4 files).
 */
export function MediaVideo({ src, title, placeholder }: Props) {
  const [ok, setOk] = useState<boolean | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(src, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) setOk(res.ok)
      })
      .catch(() => {
        if (!cancelled) setOk(false)
      })
    return () => {
      cancelled = true
    }
  }, [src])

  return (
    <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
      <div className="border-b border-black/5 px-4 py-2.5">
        <h3 className="text-sm font-semibold text-hes-ink">{title}</h3>
      </div>

      {ok === false && (
        <div className="flex aspect-video flex-col items-center justify-center gap-1 bg-hes-bg px-4 text-center text-xs text-hes-muted ring-1 ring-dashed ring-black/10">
          <span>{placeholder}</span>
          <span className="opacity-70">{src}</span>
        </div>
      )}

      {ok === null && (
        <div className="flex aspect-video items-center justify-center bg-hes-bg text-xs text-hes-muted">
          …
        </div>
      )}

      {ok && !started && (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="group relative flex aspect-video w-full items-center justify-center bg-gradient-to-br from-[#0b1f4a] to-[#1a5dc8] text-white"
          aria-label={`Play ${title}`}
        >
          <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-hes-ink shadow-md transition group-hover:scale-[1.03] group-active:scale-[0.98]">
            <Play className="h-4 w-4 fill-hes-primary text-hes-primary" />
            Click to play
          </span>
        </button>
      )}

      {ok && started && (
        <video
          className="aspect-video w-full bg-black"
          controls
          playsInline
          autoPlay
          preload="none"
          src={src}
        >
          <track kind="captions" />
        </video>
      )}
    </div>
  )
}
