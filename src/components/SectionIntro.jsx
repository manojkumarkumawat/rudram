export default function SectionIntro({ kicker, title, align = 'left', className = '' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {kicker && <p className="text-sm text-brass mb-3">{kicker}</p>}
      <h2 className="font-display text-3xl md:text-4xl leading-snug text-ink">{title}</h2>
    </div>
  )
}
