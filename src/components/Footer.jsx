import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
        <a href="#accueil" className="hover:text-fg">Retour en haut</a>
      </div>
    </footer>
  )
}
