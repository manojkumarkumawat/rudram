import PageHero from '../components/PageHero.jsx'
import { neighborhoods } from '../data/neighborhoods.js'

export default function Neighborhoods() {
  return (
    <>
      <PageHero
        kicker="Explore Charleston"
        title="Premier Neighborhoods"
        body="Every area of the Lowcountry has its own character. Here's our on-the-ground guide."
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-24 space-y-24">
        {neighborhoods.map((n, i) => (
          <div
            key={n.name}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="aspect-[4/3]">
              <img src={n.image} alt={n.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm text-brass mb-3">{n.priceRange}</p>
              <h2 className="font-display text-3xl leading-snug mb-4">{n.name}</h2>
              <p className="text-ink/75 leading-relaxed mb-4">{n.blurb}</p>
              <p className="text-ink/70 leading-relaxed text-sm">{n.detail}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
