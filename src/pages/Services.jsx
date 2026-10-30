import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

const services = [
  {
    title: 'Buyer Representation',
    body: 'Expert guidance through every step of purchasing your Charleston home, from neighborhoods to closing.',
    points: [
      'Curated shortlists based on your budget, lifestyle, and school priorities',
      'Off-market and pre-market access through our agent network',
      'Negotiation strategy grounded in current comparable sales',
      'Coordination of inspections, appraisal, and closing timeline',
    ],
  },
  {
    title: 'Seller Services',
    body: "Strategic marketing and pricing to maximize your property's value in Charleston's competitive market.",
    points: [
      'Data-driven pricing strategy and pre-listing consultation',
      'Professional photography, staging guidance, and listing copy',
      'Targeted marketing to relocation buyers and referral agents nationwide',
      'Full offer management and negotiation on your behalf',
    ],
  },
  {
    title: 'Relocation Concierge',
    body: 'Full-service relocation support for out-of-state buyers making the move to the Lowcountry.',
    points: [
      'Remote and video-guided property tours before you fly in',
      'School district, commute, and neighborhood orientation',
      'Introductions to movers, contractors, and local service providers',
      'South Carolina residency and property tax guidance',
    ],
  },
  {
    title: 'Eco-Luxury Advisory',
    body: 'Specialized guidance on sustainable features, green certifications, and energy-efficient properties.',
    points: [
      'Evaluation of insulation, HVAC efficiency, and solar readiness',
      'Guidance on LEED, EarthCraft, and Energy Star certifications',
      'Connections to green-certified builders and retrofit contractors',
      'Long-term utility and maintenance cost modeling',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        kicker="What We Do"
        title="Comprehensive Real Estate Services"
        body="From your first search to your closing day — and every sustainability question in between."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-24 space-y-20">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-2 gap-12 items-start ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <p className="text-sm text-brass mb-3">0{i + 1}</p>
              <h2 className="font-display text-3xl leading-snug mb-4">{s.title}</h2>
              <p className="text-ink/75 leading-relaxed">{s.body}</p>
            </div>
            <ul className="space-y-4 border-t border-line pt-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-4 py-4 border-b border-line text-ink/75 text-sm leading-relaxed">
                  <span className="text-brass">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-white border-t border-line">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionIntro
            kicker="How We Work"
            title="A Guided Process From First Call to Closing"
            align="center"
            className="mx-auto"
          />
          <div className="grid sm:grid-cols-4 gap-8 mt-14">
            {[
              ['Discovery Call', 'We learn your timeline, budget, and priorities — remote or in person.'],
              ['Curated Search', 'You receive a shortlist matched to your criteria, updated as new listings appear.'],
              ['Tours & Offers', 'In-person or video tours, followed by data-backed offer strategy.'],
              ['Closing & Beyond', 'We coordinate every closing detail and stay in touch long after.'],
            ].map(([title, body], idx) => (
              <div key={title} className="text-center sm:text-left">
                <p className="text-brass text-sm mb-3">Step {idx + 1}</p>
                <h3 className="font-display text-lg mb-2">{title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage/15">
        <div className="max-w-content mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl leading-snug mb-6 max-w-xl mx-auto">
            Not Sure Where to Start? Let&rsquo;s Talk.
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-ink text-oyster px-7 py-3.5 text-[15px] hover:bg-brass hover:text-ink transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </>
  )
}
