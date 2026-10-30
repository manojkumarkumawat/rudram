import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

const comparisons = [
  ['State Income Tax', 'Up to 10.9% (NY, NJ, CT)', '0% – 6.2%, phasing toward 6% flat'],
  ['Avg. Property Tax Rate', '1.5% – 2.2% of value', '~0.5% of value (with legal residence exemption)'],
  ['Winter Average Low', '20°F – 28°F', '38°F – 45°F'],
  ['Median Home Price (comparable metro)', '$650K – $950K', '$480K – $650K'],
]

const steps = [
  {
    title: 'Establish Your Timeline & Budget',
    body: 'We start with a discovery call to understand your must-haves, deal-breakers, and target closing window.',
  },
  {
    title: 'Remote & In-Person Tours',
    body: 'View shortlisted homes via guided video tour, then plan a focused in-person visit for your top choices.',
  },
  {
    title: 'File for South Carolina Residency',
    body: 'We connect you with a local attorney to file your legal residence exemption, which can cut your property tax bill significantly.',
  },
  {
    title: 'Close & Settle In',
    body: 'From movers to contractors to your first sweet tea, our concierge team helps you settle in fast.',
  },
]

export default function RelocationGuide() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        kicker="The Half-Back Movement"
        title="Your Guide to Relocating to Charleston"
        body="Everything Northeast and Midwest buyers need to know before making the move to the Lowcountry."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-sm text-brass mb-3">Why Now</p>
          <h2 className="font-display text-3xl leading-snug mb-6">
            What&rsquo;s Driving the Half-Back Movement
          </h2>
          <p className="text-ink/75 leading-relaxed mb-5">
            A growing number of retirees and remote professionals who once moved to Florida are
            now moving &ldquo;half back&rdquo; up the coast to Charleston &mdash; trading extreme
            heat and dense development for a milder climate, historic architecture, and a slower
            pace, without giving up the tax advantages of the Southeast.
          </p>
          <p className="text-ink/75 leading-relaxed">
            South Carolina&rsquo;s legal residence exemption, mild winters, and growing healthcare
            and cultural infrastructure make Charleston one of the fastest-growing relocation
            destinations in the country.
          </p>
        </div>

        <div className="border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-oyster text-left">
                <th className="p-4 font-normal">Factor</th>
                <th className="p-4 font-normal">Northeast</th>
                <th className="p-4 font-normal">Charleston, SC</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map(([factor, ne, sc], i) => (
                <tr key={factor} className={i % 2 === 1 ? 'bg-white' : 'bg-oyster'}>
                  <td className="p-4 text-ink/80">{factor}</td>
                  <td className="p-4 text-ink/60">{ne}</td>
                  <td className="p-4 text-brass">{sc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-ink/40 p-4 border-t border-line">
            Figures are illustrative comparisons for planning purposes — consult a tax
            professional for your specific situation.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-line">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionIntro kicker="How It Works" title="Your Relocation, Step by Step" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line mt-12">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white p-8">
                <p className="text-brass text-sm mb-3">Step {i + 1}</p>
                <h3 className="font-display text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-brass mb-3">Get the Full Guide</p>
          <h2 className="font-display text-3xl leading-snug mb-4">
            Download the Complete Relocation Guide
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            A detailed PDF covering taxes, neighborhoods, school districts, and a full moving
            timeline &mdash; sent straight to your inbox.
          </p>

          {submitted ? (
            <p className="text-brass border border-brass/40 bg-brass/10 px-6 py-4">
              Thanks! Check your inbox for the guide shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-brass"
              />
              <button
                type="submit"
                className="bg-ink text-oyster px-7 py-3 text-[15px] hover:bg-brass hover:text-ink transition-colors"
              >
                Send Me the Guide
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
