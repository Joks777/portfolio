import { useState } from 'react'
import { profile, navLinks } from '../data/profile.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = 'text-sm text-muted transition-colors hover:text-fg'
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#accueil" className="text-lg font-extrabold">{profile.name}<span className="text-accent">Dev</span></a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([id, label]) => <li key={id}><a href={'#' + id} className={link}>{label}</a></li>)}
        </ul>
        <a href="#contact" className="btn btn-primary hidden lg:inline-flex">Me contacter</a>
        <button className="text-sm font-medium lg:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'}</button>
      </nav>
      {open && (
        <ul className="space-y-4 border-t border-line px-6 py-5 lg:hidden">
          {[...navLinks, ['contact', 'Contact']].map(([id, label]) => (
            <li key={id}><a href={'#' + id} onClick={() => setOpen(false)} className={link}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
