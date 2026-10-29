import { useState } from 'react'
import { skills } from '../data/skills.js'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import useInView from '../hooks/useInView.js'

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))]
  const [active, setActive] = useState(categories[0])
  const [ref, seen] = useInView()
  return (
    <Section id="competences" title="Compétences techniques">
      <div ref={ref}>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
              className={'rounded-full border px-4 py-2 text-sm font-medium transition ' + (active === c ? 'border-accent bg-accent/15 text-fg' : 'border-line text-muted hover:text-fg')}>{c}</button>
          ))}
        </div>
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          {skills.filter((s) => s.category === active).map((s) => (
            <div key={s.name}>
              <div className="mb-2 flex justify-between text-sm font-medium"><span>{s.name}</span><span className="text-muted">{s.level}%</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-line">
                <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-1000" style={{ width: seen ? s.level + '%' : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Reveal className="mt-14">
        <h3 className="mb-4 font-bold">Top technologies</h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => <li key={s.name} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-muted">{s.name}</li>)}
        </ul>
      </Reveal>
    </Section>
  )
}
