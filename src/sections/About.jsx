import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { skills } from '../data/skills.js'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'

const box = 'rounded-2xl border border-line bg-surface p-6'

export default function About() {
  const stats = [[projects.length, 'Projets réalisés'], [skills.length, 'Technologies maîtrisées']]
  return (
    <Section id="a-propos" title="À propos de moi">
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal className="space-y-4 leading-relaxed text-muted">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
          <h3 className="pt-2 text-lg font-bold text-fg">Mon objectif</h3>
          <p>{profile.goal}</p>
        </Reveal>
        <Reveal className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map(([n, label]) => (
              <div key={label} className={box}><p className="text-3xl font-extrabold text-accent">{n}</p><p className="mt-1 text-sm text-muted">{label}</p></div>
            ))}
          </div>
          <div className={box}>
            <h3 className="font-bold">Formation académique</h3>
            <p className="mt-2 text-sm font-medium">Licence Professionnelle en Systèmes Informatiques et Logiciels</p>
            <p className="text-sm text-muted">Institut Universitaire Les Cours Sonou, Parakou</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
