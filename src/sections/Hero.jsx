import { profile } from '../data/profile.js'
import Reveal from '../components/Reveal.jsx'

export default function Hero() {
  return (
    <section id="accueil" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-24 pb-16 md:grid-cols-2">
      <Reveal>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Disponible pour de nouveaux projets
        </p>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">Salut, je suis {profile.name}</h1>
        <h2 className="mt-3 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">{profile.role}</h2>
        <p className="mt-5 max-w-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projets" className="btn btn-primary">Voir mes projets</a>
          {profile.cv && <a href={profile.cv} className="btn btn-ghost" download>Lire mon CV</a>}
        </div>
        <div className="mt-8 flex items-center gap-3">
          <span className="text-sm text-muted">Suivez-moi sur</span>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"><s.icon /></a>
          ))}
        </div>
      </Reveal>
      <Reveal className="justify-self-center">
        <div className="rounded-full bg-gradient-to-br from-accent to-accent2 p-1 shadow-[0_0_80px_-10px_var(--color-accent)]">
          {profile.photo
            ? <img src={profile.photo} alt={'Portrait de ' + profile.name} className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80" />
            : <div className="grid h-64 w-64 place-items-center rounded-full bg-surface text-7xl font-extrabold sm:h-80 sm:w-80">{profile.name[0]}</div>}
        </div>
      </Reveal>
    </section>
  )
}
