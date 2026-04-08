import { useEffect } from 'react'

export function Toast({
  message,
  onDone,
  ms = 1600,
}: {
  message: string | null
  onDone: () => void
  ms?: number
}) {
  useEffect(() => {
    if (!message) return
    const t = window.setTimeout(onDone, ms)
    return () => window.clearTimeout(t)
  }, [message, ms, onDone])

  if (!message) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toastInner">{message}</div>
    </div>
  )
}

