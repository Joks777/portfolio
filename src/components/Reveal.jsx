import useInView from '../hooks/useInView.js'

// Apparition douce au scroll
export default function Reveal({ children, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} className={'transition-all duration-700 motion-reduce:transition-none ' + (seen ? 'translate-y-0 opacity-100 ' : 'translate-y-6 opacity-0 ') + className}>
      {children}
    </div>
  )
}
