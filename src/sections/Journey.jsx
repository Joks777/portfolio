import { journey } from '../data/journey.js'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'

// Frise chronologique (la chronologie est une vraie séquence : l'ordre compte)
export default function Journey() {
  return (
    <Section id="parcours" title="Mon parcours">
      <ol className="ml-3 space-y-8 border-l border-line pl-8">
        {journey.map((j) => (
          <li key={j.title} className="relative">
            <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
            <Reveal>
              {j.year && <p className="text-sm font-bold text-accent">{j.year}</p>}
              <h3 className="text-lg font-bold">{j.title}</h3>
              <p className="text-sm text-muted">{j.place}</p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{j.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
