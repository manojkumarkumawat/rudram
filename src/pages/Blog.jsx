import PageHero from '../components/PageHero.jsx'
import { posts } from '../data/posts.js'

export default function Blog() {
  return (
    <>
      <PageHero
        kicker="From the Blog"
        title="Market Insights & Living Guides"
        body="Notes on Charleston real estate, relocation logistics, and eco-luxury living."
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[16/10] mb-6 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-brass mb-3">{p.category} · {p.date}</p>
              <h2 className="font-display text-2xl leading-snug mb-3">{p.title}</h2>
              <p className="text-sm text-ink/70 leading-relaxed mb-4">{p.excerpt}</p>
              <a href="#" className="text-sm text-ink border-b border-ink/30 hover:border-brass hover:text-brass transition-colors">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
