import { useMemo, useState } from 'react'
import { type Project } from '../content/profile'
import { Pill } from './Pill'

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr))
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const tags = useMemo(() => {
    const all = projects.flatMap((p) => p.tags)
    return ['All', ...uniq(all).sort((a, b) => a.localeCompare(b))]
  }, [projects])

  const [active, setActive] = useState('All')
  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.tags.includes(active))
  }, [active, projects])

  return (
    <div>
      <div className="filters">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={t === active ? 'filter active' : 'filter'}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="projectGrid">
        {filtered.map((p) => (
          <article key={p.name} className="card project">
            <div className="cardTop">
              <div>
                <div className="cardTitle">{p.name}</div>
                <div className="muted">{p.when}</div>
              </div>
              <div className="rowWrap">
                {p.tags.slice(0, 3).map((t) => (
                  <Pill key={t} subtle>
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
            <p className="small" style={{ marginTop: 12 }}>
              {p.tagline}
            </p>
            <ul className="bullets" style={{ marginTop: 12 }}>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {p.links?.length ? (
              <>
                <div className="divider" />
                <div className="rowWrap">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      className="link"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

