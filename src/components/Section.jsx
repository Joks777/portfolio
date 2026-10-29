import Reveal from './Reveal.jsx'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20 md:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  )
}
