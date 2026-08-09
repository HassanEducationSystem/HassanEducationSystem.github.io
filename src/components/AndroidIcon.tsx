type Props = {
  className?: string
}

/** Simple Android robot mark for download CTAs */
export function AndroidIcon({ className = 'h-5 w-5' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.6 9.48l1.84-3.18a.5.5 0 10-.87-.5l-1.86 3.22A7.87 7.87 0 0012 8c-1.7 0-3.27.53-4.71 1.52L5.43 5.8a.5.5 0 10-.87.5l1.84 3.18A7.95 7.95 0 004 16.5V18a1.5 1.5 0 001.5 1.5h.75V21a1 1 0 002 0v-1.5h7.5V21a1 1 0 002 0v-1.5h.75A1.5 1.5 0 0020 18v-1.5a7.95 7.95 0 00-2.4-6.02zM9 14.25a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  )
}
