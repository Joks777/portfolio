import { useState } from 'react'
import { projects } from '../data/projects.js'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'

// Aperçu stylisé : remplace-le par une capture d'écran du projet quand tu en as une
function Preview({ colors }) {
  return (
    <div className="h-40 p-5" style={{ background: `linear-gradient(135deg, ${colors[0]}66, ${colors[1]}33)` }}>
      <div className="rounded-lg border border-line bg-bg/70 p-3 transition-transform duration-500 group-hover:scale-105">
        <div className="mb-3 flex gap-1.5">{[0, 1, 2].map((d) => <span key={d} className="h-2 w-2 rounded-full bg-muted/50" />)}</div>
        <div className="space-y-2"><div className="h-2 w-3/4 rounded bg-muted/40" /><div className="h-2 w-1/2 rounded bg-muted/30" /></div>
      </div>
    </div>
  )
}

export default function Projects() {
  const filters = ['Tous', ...new Set(projects.flatMap((p) => p.categories))]
  const [active, setActive] = useState('Tous')
  const shown = projects.filter((p) => active === 'Tous' || p.categories.includes(active))
  return (
    <Section id="projets" title="Mes projets">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} onClick={() => setActive(f)} aria-pressed={active === f}
            className={'rounded-full border px-4 py-2 text-sm font-medium transition ' + (active === f ? 'border-accent bg-accent/15 text-fg' : 'border-line text-muted hover:text-fg')}>{f}</button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <Reveal key={p.title}>
            <article className="group h-full overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/60">
              <Preview colors={p.colors} />
              <div className="p-6">
                <p className="text-xs text-muted">{p.categories.join(' / ')}{p.status && ' · ' + p.status}</p>
                <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</li>)}</ul>
                {(p.demo || p.code) && (
                  <div className="mt-5 flex gap-5 text-sm font-bold text-accent">
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="hover:underline">Voir le projet</a>}
                    {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="hover:underline">Code</a>}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
