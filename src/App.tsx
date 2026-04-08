import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { profile } from './content/profile'
import { CommandPalette, type CommandAction } from './components/CommandPalette'
import { Icon } from './components/Icon'
import { Pill } from './components/Pill'
import { Section } from './components/Section'
import { Timeline } from './components/Timeline'
import { ProjectGrid } from './components/ProjectGrid'
import { Toast } from './components/Toast'
import { UnlockInfo } from './components/UnlockInfo'
import { copyToClipboard } from './utils/clipboard'
import { downloadFile } from './utils/download'
import { useTheme } from './utils/useTheme'

function App() {
  const { theme, setTheme, toggleTheme } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const spotlightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes('mac')
      const mod = isMac ? e.metaKey : e.ctrlKey
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen(true)
      }
      if (e.key === 'Escape') setPaletteOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const node = spotlightRef.current
    if (!node) return
    const onMove = (e: PointerEvent) => {
      node.style.setProperty('--x', `${e.clientX}px`)
      node.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null
      const btn = el?.closest?.('.ghost, .primary, .filter') as HTMLElement | null
      if (!btn) return
      const r = btn.getBoundingClientRect()
      const mx = ((e.clientX - r.left) / Math.max(1, r.width)) * 100
      const my = ((e.clientY - r.top) / Math.max(1, r.height)) * 100
      btn.style.setProperty('--mx', `${mx}%`)
      btn.style.setProperty('--my', `${my}%`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const actions = useMemo<CommandAction[]>(() => {
    const go = (hash: string) => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.location.hash = hash
      }
      setPaletteOpen(false)
    }

    return [
      { id: 'go-about', label: 'Go to About', keywords: ['about'], run: () => go('#about') },
      { id: 'go-impact', label: 'Go to Impact', keywords: ['metrics'], run: () => go('#impact') },
      { id: 'go-experience', label: 'Go to Experience', keywords: ['work', 'flipkart'], run: () => go('#experience') },
      { id: 'go-projects', label: 'Go to Projects', keywords: ['projects'], run: () => go('#projects') },
      { id: 'go-skills', label: 'Go to Skills', keywords: ['tech'], run: () => go('#skills') },
      { id: 'go-achievements', label: 'Go to Achievements', keywords: ['awards'], run: () => go('#achievements') },
      { id: 'go-education', label: 'Go to Education', keywords: ['college'], run: () => go('#education') },
      { id: 'go-contact', label: 'Go to Contact', keywords: ['email'], run: () => go('#contact') },
      { id: 'toggle-theme', label: `Toggle theme (currently ${theme})`, keywords: ['dark', 'light'], run: toggleTheme },
      {
        id: 'theme-dark',
        label: 'Theme: Dark',
        keywords: ['theme'],
        run: () => setTheme('dark'),
      },
      {
        id: 'theme-light',
        label: 'Theme: Light',
        keywords: ['theme'],
        run: () => setTheme('light'),
      },
      {
        id: 'copy-email',
        label: 'Copy email',
        keywords: ['mail'],
        run: async () => {
          await copyToClipboard(profile.email)
          setToast('Copied email to clipboard')
          setPaletteOpen(false)
        },
      },
      {
        id: 'open-github',
        label: 'Open GitHub',
        keywords: ['code'],
        run: () => window.open(profile.githubUrl, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'open-linkedin',
        label: 'Open LinkedIn',
        keywords: ['network'],
        run: () => window.open(profile.linkedinUrl, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'resume',
        label: 'Download resume (PDF)',
        keywords: ['cv', 'download'],
        run: () => downloadFile(profile.resumeUrl, 'Rashi-Singh-Resume.pdf'),
      },
    ]
  }, [profile.email, profile.githubUrl, profile.linkedinUrl, profile.resumeUrl, setTheme, theme, toggleTheme])

  return (
    <div className="app">
      <div ref={spotlightRef} className="spotlight" aria-hidden="true" />
      <Toast message={toast} onDone={() => setToast(null)} />

      <header className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.name} home`}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          <span className="brandMark" aria-hidden="true">
            {profile.name.slice(0, 1)}
          </span>
          <span className="brandText">
            <span className="brandName">{profile.name}</span>
            <span className="brandRole">{profile.title}</span>
          </span>
        </a>

        <nav className="nav">
          {[
            ['About', '#about'],
            ['Experience', '#experience'],
            ['Projects', '#projects'],
            ['Skills', '#skills'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={href}
              className="navLink"
              href={href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="actions">
          <button className="ghost" type="button" onClick={() => setPaletteOpen(true)}>
            <Icon name="command" />
            <span>Command</span>
            <span className="kbd" aria-hidden="true">
              Ctrl K
            </span>
          </button>
          <button className="ghost" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
          </button>
          <a className="primary" href={profile.resumeUrl} download="Rashi-Singh-Resume.pdf">
            <Icon name="download" />
            Resume
          </a>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <div className="heroLeft">
            <div className="pretitle">
              <Pill>Full‑stack</Pill>
              <Pill>React</Pill>
              <Pill>AI tooling</Pill>
             
            </div>
            <h1 className="heroTitle">
              Building fast, reliable products and the systems that ship them.
            </h1>
            <p className="heroSubtitle">
              {profile.summary}
            </p>
            <div className="heroCtas">
              <a className="primary" href="#projects">
                View projects <span aria-hidden="true">→</span>
              </a>
              <button
                className="ghost"
                type="button"
                onClick={async () => {
                  await copyToClipboard(profile.email)
                  setToast('Copied email to clipboard')
                }}
              >
                <Icon name="copy" /> Copy email
              </button>
              <a className="ghost" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                <Icon name="mail" /> Call
              </a>
              <a className="ghost" href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub
              </a>
              <a className="ghost" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="heroRight" aria-label="Interactive showcase">
            <div className="card stack">
              <div className="cardTop">
                <span className="chip">Now</span>
                <span className="muted">{profile.location}</span>
              </div>
              <div className="big">
                Application Engineer @ <span className="accent">Flipkart</span>
              </div>
              <div className="grid2">
                {profile.highlights.map((h) => (
                  <div key={h.kpi} className="metric">
                    <div className="kpi">{h.kpi}</div>
                    <div className="muted">{h.label}</div>
                  </div>
                ))}
              </div>
              <div className="divider" />
              <div className="miniRow">
                <span className="muted">Play mode:</span>
                <span className="kbd">Unlock</span>
                <span className="muted">cards to reveal contact details</span>
              </div>
            </div>
            <div className="ambient" aria-hidden="true" />
          </div>
        </section>

        <section className="playRow">
          <div className="card playCard">
            <div className="cardTop">
              <div>
                <div className="cardTitle">Playful unlocks</div>
                <div className="muted">Tiny challenges → real info.</div>
              </div>
              <button className="ghost" type="button" onClick={() => setPaletteOpen(true)}>
                <Icon name="command" /> Ctrl K
              </button>
            </div>
            <div className="small">
              Unlock the cards below to reveal my contact + links.
            </div>
          </div>
        </section>

        <Section id="about" title="About" eyebrow="PROFILE SUMMARY">
          <div className="aboutStack">
            <div className="card">
              <p className="lead">
                Experienced in full‑stack development with a strong focus on frontend (React), CI/CD for AI tooling, Java, and Python.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                Strong interest in designing distributed systems for LLM inference and leveraging Machine Learning (GenAI) to enhance operational efficiency.
              </p>
            </div>

            <div className="card">
              <div className="unlockGrid">
                <UnlockInfo title="Email" hint="Unlock by typing the secret phrase." challenge="type">
                  <div className="listRow">
                    <span className="muted">Email</span>
                    <a className="link" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>
                </UnlockInfo>
                <UnlockInfo title="Phone" hint="Unlock by dragging the slider into the glow." challenge="slider">
                  <div className="listRow">
                    <span className="muted">Phone</span>
                    <a className="link" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                      {profile.phone}
                    </a>
                  </div>
                </UnlockInfo>
                <UnlockInfo title="Links" hint="Unlock by tapping the letters in order." challenge="tap">
                  <div className="list">
                    <div className="listRow">
                      <span className="muted">GitHub</span>
                      <a className="link" href={profile.githubUrl} target="_blank" rel="noreferrer">
                        {profile.githubHandle}
                      </a>
                    </div>
                    <div className="listRow">
                      <span className="muted">LinkedIn</span>
                      <a className="link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                        {profile.linkedinHandle}
                      </a>
                    </div>
                  </div>
                </UnlockInfo>
              </div>
              <div className="divider" />
              <div className="rowWrap">
                {profile.tags.map((t) => (
                  <Pill key={t} subtle>
                    {t}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="impact" title="Impact" eyebrow="MEASURABLE RESULTS">
          <div className="impactGrid">
            {profile.highlights.map((h) => (
              <div key={h.kpi} className="card impactCard">
                <div className="kpi huge">{h.kpi}</div>
                <div className="muted">{h.label}</div>
                <div className="small">{h.detail}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" eyebrow="WORK">
          <Timeline items={profile.experience} />
        </Section>

        <Section id="projects" title="Projects" eyebrow="PERSONAL PROJECTS">
          <ProjectGrid projects={profile.projects} />
        </Section>

        <Section id="skills" title="Skills" eyebrow="TECHNICAL SKILLS">
          <div className="skillsGrid">
            {profile.skillGroups.map((g) => (
              <div key={g.name} className="card">
                <div className="cardTop">
                  <div className="cardTitle">{g.name}</div>
                  <div className="muted">{g.note}</div>
                </div>
                <div className="rowWrap" style={{ marginTop: 12 }}>
                  {g.items.map((s) => (
                    <Pill key={s} subtle>
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements" eyebrow="HIGHLIGHTS">
          <div className="card">
            <ul className="bullets">
              {profile.achievements.map((a) => (
                <li key={a.title}>
                  <span className="bulletTitle">{a.title}</span>
                  <span className="muted"> — {a.when}</span>
                  <div className="small">{a.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="education" title="Education" eyebrow="ACADEMICS">
          <div className="eduGrid">
            {profile.education.map((e) => (
              <div key={e.school} className="card">
                <div className="cardTop">
                  <div className="cardTitle">{e.school}</div>
                  <div className="muted">{e.when}</div>
                </div>
                <div className="small">{e.detail}</div>
                {e.score ? (
                  <div className="row" style={{ marginTop: 12 }}>
                    <Pill subtle>{e.score}</Pill>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" eyebrow="LET’S BUILD">
          <div className="contactGrid">
            <div className="card">
              <div className="big">Want a crisp UI or a robust release pipeline?</div>
              <p className="muted" style={{ marginTop: 10 }}>
                I’m open to roles where I can ship delightful product experiences and scale the systems behind them.
              </p>
              <div className="heroCtas" style={{ marginTop: 16 }}>
                <a className="primary" href={`mailto:${profile.email}`}>
                  <Icon name="mail" /> Email me
                </a>
                <button
                  className="ghost"
                  type="button"
                  onClick={async () => {
                    await copyToClipboard(profile.email)
                    setToast('Copied email to clipboard')
                  }}
                >
                  <Icon name="copy" /> Copy email
                </button>
                <a className="ghost" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                  <Icon name="mail" /> Call
                </a>
                <a className="ghost" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" /> Connect
                </a>
              </div>
            </div>
            <div className="card">
              <UnlockInfo title="Quick contact" hint="Unlock by typing the secret phrase again." challenge="type">
                <div className="miniRow">
                  <span className="muted">Phone</span>
                  <a className="link mono" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                    {profile.phone}
                  </a>
                </div>
                <div className="miniRow" style={{ marginTop: 10 }}>
                  <span className="muted">Email</span>
                  <a className="link mono" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
                <div className="divider" />
                <div className="miniRow">
                  <a className="link" href={profile.resumeUrl} download="Rashi-Singh-Resume.pdf">
                    Download resume (PDF)
                  </a>
                  <span className="muted">·</span>
                  <button className="linkButton" type="button" onClick={() => setPaletteOpen(true)}>
                    Open command palette
                  </button>
                </div>
              </UnlockInfo>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <div className="muted">
            © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
          </div>
          <div className="muted">
            Tip: Press <span className="kbd">Ctrl</span> <span className="kbd">K</span>
          </div>
        </footer>
      </main>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} actions={actions} />
    </div>
  )
}

export default App
