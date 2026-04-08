import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from './Icon'

export type CommandAction = {
  id: string
  label: string
  keywords?: string[]
  run: () => void | Promise<void>
}

function normalize(s: string) {
  return s.toLowerCase().trim()
}

export function CommandPalette({
  open,
  onClose,
  actions,
}: {
  open: boolean
  onClose: () => void
  actions: CommandAction[]
}) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActive(0)
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActive((a) => a + 1)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive((a) => Math.max(0, a - 1))
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        void filtered[Math.min(active, filtered.length - 1)]?.run()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, active])

  const filtered = useMemo(() => {
    const q = normalize(query)
    if (!q) return actions
    return actions
      .map((a) => {
        const hay = normalize([a.label, ...(a.keywords ?? [])].join(' '))
        const score = hay.includes(q) ? (hay.startsWith(q) ? 2 : 1) : 0
        return { a, score }
      })
      .filter((x) => x.score > 0)
      .sort((x, y) => y.score - x.score)
      .map((x) => x.a)
  }, [actions, query])

  useEffect(() => {
    setActive(0)
  }, [query])

  if (!open) return null

  return (
    <div className="paletteOverlay" role="dialog" aria-modal="true" aria-label="Command palette">
      <button className="paletteBackdrop" type="button" onClick={onClose} aria-label="Close command palette" />
      <div className="palette">
        <div className="paletteTop">
          <Icon name="search" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command…"
            aria-label="Search commands"
          />
          <button className="paletteClose" type="button" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
        </div>

        <div className="paletteList" role="listbox" aria-label="Commands">
          {filtered.length ? (
            filtered.slice(0, 12).map((a, idx) => (
              <button
                key={a.id}
                type="button"
                className={idx === Math.min(active, filtered.length - 1) ? 'paletteItem active' : 'paletteItem'}
                onMouseEnter={() => setActive(idx)}
                onClick={() => void a.run()}
                role="option"
                aria-selected={idx === Math.min(active, filtered.length - 1)}
              >
                <span className="paletteLabel">{a.label}</span>
                <span className="paletteHint" aria-hidden="true">
                  <Icon name="enter" />
                </span>
              </button>
            ))
          ) : (
            <div className="paletteEmpty">
              No matches. Try “projects”, “theme”, or “contact”.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

