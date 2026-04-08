import { useMemo, useState } from 'react'
import { Pill } from './Pill'

type Challenge = 'slider' | 'type' | 'tap'

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim()
}

export function UnlockInfo({
  title,
  hint,
  challenge,
  children,
}: {
  title: string
  hint: string
  challenge: Challenge
  children: React.ReactNode
}) {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className={unlocked ? 'unlock unlocked' : 'unlock'}>
      <div className="unlockTop">
        <div className="unlockTitle">{title}</div>
        {unlocked ? <Pill subtle>Unlocked</Pill> : <Pill subtle>Locked</Pill>}
      </div>
      <div className="unlockHint">{hint}</div>

      {!unlocked ? (
        <div className="unlockChallenge">
          {challenge === 'slider' ? <SliderChallenge onDone={() => setUnlocked(true)} /> : null}
          {challenge === 'type' ? <TypeChallenge onDone={() => setUnlocked(true)} /> : null}
          {challenge === 'tap' ? <TapChallenge onDone={() => setUnlocked(true)} /> : null}
        </div>
      ) : null}

      <div className="unlockReveal" aria-live="polite">
        <div className="unlockRevealInner">{children}</div>
      </div>
    </div>
  )
}

function SliderChallenge({ onDone }: { onDone: () => void }) {
  const [v, setV] = useState(0)
  const done = v >= 97
  return (
    <div className="challengeBox">
      <div className="challengeLabel">
        Drag the slider to the <span className="accent">glowing zone</span>
      </div>
      <div className="sliderRow">
        <input
          className="slider"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => {
            const next = clamp(Number(e.target.value), 0, 100)
            setV(next)
          }}
          aria-label="Unlock slider"
        />
        <span className="mono muted">{v}%</span>
      </div>
      <button className={done ? 'primary' : 'ghost'} type="button" disabled={!done} onClick={onDone}>
        Unlock
      </button>
    </div>
  )
}

function TypeChallenge({ onDone }: { onDone: () => void }) {
  const secret = useMemo(() => 'ship it', [])
  const [value, setValue] = useState('')
  const ok = normalize(value) === secret
  return (
    <div className="challengeBox">
      <div className="challengeLabel">
        Type <span className="kbd">ship it</span> to unlock
      </div>
      <div className="typeRow">
        <input
          className="typeInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type here…"
          aria-label="Type secret phrase"
        />
        <button className={ok ? 'primary' : 'ghost'} type="button" disabled={!ok} onClick={onDone}>
          Unlock
        </button>
      </div>
      <div className="muted small">Hint: spaces matter.</div>
    </div>
  )
}

function TapChallenge({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0)
  const seq = useMemo(() => ['R', 'A', 'S', 'H', 'I'], [])
  const done = idx >= seq.length
  return (
    <div className="challengeBox">
      <div className="challengeLabel">
        Tap the letters in order:
        <span className="mono"> {seq.join(' ')}</span>
      </div>
      <div className="tapRow">
        {seq.map((ch, i) => {
          const state = i < idx ? 'done' : i === idx ? 'next' : 'idle'
          return (
            <button
              key={ch}
              type="button"
              className={state === 'next' ? 'tapKey next' : state === 'done' ? 'tapKey done' : 'tapKey'}
              onClick={() => {
                if (i !== idx) {
                  setIdx(0)
                  return
                }
                setIdx((x) => x + 1)
              }}
              aria-label={`Tap ${ch}`}
            >
              {ch}
            </button>
          )
        })}
      </div>
      <button className={done ? 'primary' : 'ghost'} type="button" disabled={!done} onClick={onDone}>
        Unlock
      </button>
    </div>
  )
}

