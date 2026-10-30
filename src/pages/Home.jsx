import { Link } from 'react-router-dom'
import SectionIntro from '../components/SectionIntro.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { properties } from '../data/properties.js'
import { neighborhoods } from '../data/neighborhoods.js'
import { posts } from '../data/posts.js'

const stats = [
  { value: '250+', label: 'Properties Sold' },
  { value: '$180M', label: 'Sales Volume' },
  { value: '15+', label: 'Years Experience' },
  { value: '#1', label: 'Relocation Specialist' },
]

const services = [
  {
    title: 'Buyer Representation',
    body: 'Expert guidance through every step of purchasing your Charleston home, from neighborhoods to closing.',
  },
  {
    title: 'Seller Services',
    body: "Strategic marketing and pricing to maximize your property's value in Charleston's competitive market.",
  },
  {
    title: 'Relocation Concierge',
    body: 'Full-service relocation support for out-of-state buyers making the move to the Lowcountry.',
  },
  {
    title: 'Eco-Luxury Advisory',
    body: 'Specialized guidance on sustainable features, green certifications, and energy-efficient properties.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="Historic Charleston, South Carolina street"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />

          <div className="relative h-full max-w-content mx-auto px-6 flex flex-col justify-end pb-20">
            <p className="text-oyster/80 text-sm mb-4">Charleston, South Carolina</p>
            <h1 className="font-display text-oyster text-5xl md:text-7xl leading-[1.05] max-w-3xl">
              Modern Heritage.
              <br />
              Defined Living.
            </h1>
            <p className="text-oyster/80 max-w-xl mt-6 text-lg leading-relaxed">
              Eco-luxury real estate for those relocating to Charleston&rsquo;s most coveted
              neighborhoods. Lower taxes. Higher quality of life. Expertly guided.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/properties"
                className="bg-brass text-ink px-7 py-3.5 text-[15px] hover:bg-oyster transition-colors"
              >
                Explore Properties
              </Link>
              <Link
                to="/relocation-guide"
                className="border border-oyster/60 text-oyster px-7 py-3.5 text-[15px] hover:bg-oyster/10 transition-colors"
              >
                Relocation Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-ink text-oyster">
          <div className="max-w-content mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-oyster/10">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-4 text-center">
                <p className="font-display text-2xl md:text-3xl text-brass">{s.value}</p>
                <p className="text-xs md:text-sm text-oyster/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm text-brass mb-3">About the Firm</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug mb-6">
            Where Legacy Meets the Lowcountry
          </h2>
          <p className="text-ink/75 leading-relaxed mb-5">
            Ironwood Legacy Properties is Charleston&rsquo;s premier eco-luxury brokerage, founded
            by Marcus Thorne to serve discerning buyers relocating from the Northeast and Midwest
            &mdash; the growing &ldquo;half-back&rdquo; movement of those seeking lower taxes,
            milder winters, and a higher quality of life.
          </p>
          <p className="text-ink/75 leading-relaxed mb-8">
            We combine deep local expertise with a commitment to sustainable, future-forward
            living &mdash; ensuring every property we represent meets the highest standards of
            design, efficiency, and lasting value.
          </p>
          <Link to="/about" className="text-ink border-b border-brass pb-1 hover:text-brass transition-colors">
            Learn More About Us →
          </Link>
        </div>
        <div className="aspect-[4/5]">
          <img
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80"
            alt="Charleston single house with piazza"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white border-y border-line">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionIntro kicker="What We Do" title="Comprehensive Real Estate Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line mt-12">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8">
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="max-w-content mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionIntro kicker="Featured Listings" title="Curated Properties" />
          <Link to="/properties" className="text-ink border-b border-brass pb-1 hover:text-brass transition-colors">
            View All Properties →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      {/* Half-back CTA band */}
      <section className="bg-ink text-oyster">
        <div className="max-w-content mx-auto px-6 py-24 text-center">
          <p className="text-sm text-brass mb-3">The Half-Back Movement</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-2xl mx-auto leading-snug mb-6">
            Ready to Make Charleston Home?
          </h2>
          <p className="text-oyster/70 max-w-xl mx-auto leading-relaxed mb-8">
            Join the thousands of professionals and retirees who&rsquo;ve discovered that
            Charleston offers the perfect blend of culture, climate, and value. Our relocation
            guide walks you through everything you need to know.
          </p>
          <Link
            to="/relocation-guide"
            className="inline-block bg-brass text-ink px-7 py-3.5 text-[15px] hover:bg-oyster transition-colors"
          >
            Download Relocation Guide
          </Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="max-w-content mx-auto px-6 py-24">
        <SectionIntro kicker="Explore Charleston" title="Premier Neighborhoods" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {neighborhoods.slice(0, 3).map((n) => (
            <div key={n.name}>
              <div className="aspect-[4/3] mb-5">
                <img src={n.image} alt={n.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl mb-2">{n.name}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{n.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/neighborhoods" className="text-ink border-b border-brass pb-1 hover:text-brass transition-colors">
            Explore All Neighborhoods →
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white border-y border-line">
        <div className="max-w-content mx-auto px-6 py-24 max-w-3xl">
          <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
            &ldquo;Marcus and his team made our relocation from Connecticut seamless. They
            understood exactly what we were looking for and found us a home that exceeded every
            expectation. The local knowledge and personal attention were unmatched.&rdquo;
          </p>
          <p className="mt-6 text-sm text-ink/60">
            David &amp; Sarah Mitchell &middot; Relocated from Greenwich, CT
          </p>
        </div>
      </section>

      {/* Blog preview */}
      <section className="max-w-content mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionIntro kicker="From the Blog" title="Market Insights & Living Guides" />
          <Link to="/blog" className="text-ink border-b border-brass pb-1 hover:text-brass transition-colors">
            View All Posts →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((p) => (
            <article key={p.id}>
              <div className="aspect-[4/3] mb-5">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-brass mb-2">{p.category} · {p.date}</p>
              <h3 className="font-display text-lg leading-snug mb-3">{p.title}</h3>
              <Link to="/blog" className="text-sm text-ink border-b border-ink/30 hover:border-brass hover:text-brass transition-colors">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-sage/15">
        <div className="max-w-content mx-auto px-6 py-24 text-center">
          <p className="text-sm text-brass mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug mb-6">
            Schedule Your Personal Consultation
          </h2>
          <p className="text-ink/70 max-w-xl mx-auto leading-relaxed mb-8">
            Whether you&rsquo;re exploring Charleston for the first time or ready to make an
            offer, Marcus Thorne and the Ironwood Legacy team are here to guide you home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-ink text-oyster px-7 py-3.5 text-[15px] hover:bg-brass hover:text-ink transition-colors"
            >
              Schedule a Tour
            </Link>
            <a
              href="tel:+18435551234"
              className="border border-ink text-ink px-7 py-3.5 text-[15px] hover:bg-ink hover:text-oyster transition-colors"
            >
              (843) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
