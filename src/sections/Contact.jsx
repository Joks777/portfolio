import { useState } from 'react'
import { profile } from '../data/profile.js'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'

const field = 'mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none transition-colors focus:border-accent'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // Pas de serveur : le formulaire ouvre ton application mail avec le message pré-rempli
  const submit = (e) => {
    e.preventDefault()
    const body = f.message + '\n\n' + f.name + ' (' + f.email + ')'
    window.location.href = 'mailto:' + profile.email + '?subject=' + encodeURIComponent(f.subject) + '&body=' + encodeURIComponent(body)
  }
  return (
    <Section id="contact" title="Parlons de votre projet" subtitle="Vous avez une idée ? Contactez-moi pour en discuter et créer ensemble votre future solution digitale.">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="space-y-6 md:col-span-2">
          <div><h3 className="font-bold">Email</h3><a href={'mailto:' + profile.email} className="break-all text-sm text-muted hover:text-accent">{profile.email}</a></div>
          <div><h3 className="font-bold">Téléphone</h3><p className="text-sm text-muted">{profile.phone}</p></div>
          <div><h3 className="font-bold">Localisation</h3><p className="text-sm text-muted">{profile.location}</p></div>
          <ul className="flex gap-3">
            {profile.socials.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"><s.icon /></a></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="md:col-span-3">
          <form onSubmit={submit} className="space-y-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">Nom complet<input required value={f.name} onChange={set('name')} className={field} /></label>
              <label className="block text-sm font-medium">Email<input required type="email" value={f.email} onChange={set('email')} className={field} /></label>
            </div>
            <label className="block text-sm font-medium">Sujet<input required value={f.subject} onChange={set('subject')} className={field} /></label>
            <label className="block text-sm font-medium">Message<textarea required rows={5} value={f.message} onChange={set('message')} className={field} /></label>
            <button type="submit" className="btn btn-primary">Envoyer le message</button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
