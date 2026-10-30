import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

const values = [
  {
    title: 'Local, First-Hand Expertise',
    body: "Every agent on our team lives in the neighborhoods they represent — from South of Broad to Mount Pleasant — so you get street-level knowledge, not just listing sheets.",
  },
  {
    title: 'Sustainability as Standard',
    body: 'We evaluate insulation, energy systems, and certifications on every property we represent, and we help sellers document the green features that add resale value.',
  },
  {
    title: 'Relocation-Ready Guidance',
    body: 'From school districts to South Carolina tax residency rules, we anticipate the questions out-of-state buyers actually have — because we field them every day.',
  },
]

const team = [
  {
    name: 'Marcus Thorne',
    role: 'Founder & Principal Broker',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    name: 'Elena Ferris',
    role: 'Relocation Concierge Lead',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    name: 'Daniel Okafor',
    role: 'Eco-Luxury Advisor',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        kicker="About Ironwood Legacy"
        title="Where Legacy Meets the Lowcountry"
        body="Founded to guide relocating buyers through Charleston's most storied neighborhoods with honesty, sustainability, and deep local roots."
        image="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/5] order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
            alt="Marcus Thorne, founder of Ironwood Legacy Properties"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm text-brass mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug mb-6">
            Built for the Buyers Charleston Was Calling
          </h2>
          <p className="text-ink/75 leading-relaxed mb-5">
            Marcus Thorne started Ironwood Legacy Properties after watching close friends and
            family make the move South &mdash; and struggle to find an agent who understood both
            historic Charleston real estate and the practical questions of relocating from
            another state.
          </p>
          <p className="text-ink/75 leading-relaxed mb-5">
            Today, Ironwood Legacy represents buyers and sellers across the peninsula and
            surrounding Lowcountry, with a particular focus on eco-luxury properties: homes built
            or renovated to a higher environmental standard, without compromising on historic
            character or design.
          </p>
          <p className="text-ink/75 leading-relaxed">
            We believe the best real estate relationships outlast the closing table &mdash; which
            is why so much of our business comes from referrals from past clients.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-line">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionIntro kicker="What We Believe" title="Principles That Guide Every Transaction" />
          <div className="grid md:grid-cols-3 gap-px bg-line mt-12">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="font-display text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-24">
        <SectionIntro kicker="The Team" title="Local Expertise, Personally Delivered" />
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
          {team.map((t) => (
            <div key={t.name}>
              <div className="aspect-[4/5] mb-4">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg">{t.name}</h3>
              <p className="text-sm text-ink/60">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-oyster">
        <div className="max-w-content mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl leading-snug mb-6 max-w-xl mx-auto">
            Let&rsquo;s Talk About Your Move to Charleston
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-brass text-ink px-7 py-3.5 text-[15px] hover:bg-oyster transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </>
  )
}
