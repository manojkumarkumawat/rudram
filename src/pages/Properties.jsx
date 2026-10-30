import { useState, useMemo } from 'react'
import PageHero from '../components/PageHero.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { properties } from '../data/properties.js'

export default function Properties() {
  const [area, setArea] = useState('All')
  const areas = useMemo(() => ['All', ...new Set(properties.map((p) => p.area))], [])

  const filtered =
    area === 'All' ? properties : properties.filter((p) => p.area === area)

  return (
    <>
      <PageHero
        kicker="Featured Listings"
        title="Curated Properties"
        body="A selection of homes currently represented by Ironwood Legacy Properties."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-12 border-b border-line pb-8">
          {areas.map((a) => (
            <button
              key={a}
              onClick={() => setArea(a)}
              className={`px-4 py-2 text-sm border transition-colors ${
                area === a
                  ? 'bg-ink text-oyster border-ink'
                  : 'border-line text-ink/70 hover:border-ink'
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        <p className="text-sm text-ink/50 mb-8">
          {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </>
  )
}
