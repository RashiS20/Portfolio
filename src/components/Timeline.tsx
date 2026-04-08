import { type TimelineItem } from '../content/profile'
import { Pill } from './Pill'

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((it) => (
        <div key={`${it.company}-${it.when}`} className="timelineItem">
          <div className="timelineRail" aria-hidden="true">
            <span className="timelineDot" />
          </div>
          <div className="card">
            <div className="cardTop">
              <div>
                <div className="cardTitle">
                  {it.role}{' '}
                  <span className="muted">
                    @ {it.company}
                  </span>
                </div>
                <div className="muted">
                  {it.when}
                  {it.where ? ` · ${it.where}` : ''}
                </div>
              </div>
              <div className="rowWrap">
                {it.tags.slice(0, 4).map((t) => (
                  <Pill key={t} subtle>
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
            <ul className="bullets" style={{ marginTop: 12 }}>
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

