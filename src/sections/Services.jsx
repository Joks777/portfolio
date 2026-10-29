import { services } from '../data/services.js'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Services() {
  return (
    <Section id="services" title="Services offerts">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Reveal key={s.title}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/60">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-bold text-accent hover:underline">En savoir plus</a>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-accent to-accent2 p-8 md:p-12">
          <h3 className="text-2xl font-extrabold text-white md:text-3xl">Prêt pour votre projet ?</h3>
          <p className="mt-2 max-w-xl text-white/85">Discutons de votre idée et transformons-la en une solution digitale performante et sécurisée.</p>
          <a href="#contact" className="btn mt-6 bg-white text-slate-900 hover:bg-white/90">Me contacter</a>
        </div>
      </Reveal>
    </Section>
  )
}
