import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        kicker="Get in Touch"
        title="Schedule Your Personal Consultation"
        body="Whether you're exploring Charleston for the first time or ready to make an offer, we're here to guide you home."
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1800&q=80"
      />

      <section className="max-w-content mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-2xl mb-6">Send Us a Message</h2>

          {submitted ? (
            <div className="border border-brass/40 bg-brass/10 px-6 py-5 text-ink">
              <p className="font-display text-lg mb-2">Message sent</p>
              <p className="text-sm text-ink/70">
                Thank you for reaching out. A member of the Ironwood Legacy team will contact you
                within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-ink/70 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-brass"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink/70 mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-brass"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-ink/70 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-brass"
                />
              </div>

              <div>
                <label className="block text-sm text-ink/70 mb-2" htmlFor="interest">
                  I&rsquo;m interested in
                </label>
                <select
                  id="interest"
                  className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-brass"
                >
                  <option>Buying a home</option>
                  <option>Selling a home</option>
                  <option>Relocation concierge</option>
                  <option>Eco-luxury advisory</option>
                  <option>General question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-ink/70 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-line px-4 py-3 text-sm bg-white focus:outline-none focus:border-brass"
                />
              </div>

              <button
                type="submit"
                className="bg-ink text-oyster px-7 py-3.5 text-[15px] hover:bg-brass hover:text-ink transition-colors"
              >
                Schedule a Tour
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="font-display text-2xl mb-6">Visit or Call</h2>
          <div className="space-y-6 text-sm text-ink/75 leading-relaxed">
            <div>
              <p className="text-brass mb-1">Office</p>
              <p>142 King Street, Suite 200<br />Charleston, SC 29401</p>
            </div>
            <div>
              <p className="text-brass mb-1">Phone</p>
              <a href="tel:+18435550192" className="hover:text-brass">(843) 555-0192</a>
            </div>
            <div>
              <p className="text-brass mb-1">Email</p>
              <a href="mailto:info@ironwoodlegacy.com" className="hover:text-brass">info@ironwoodlegacy.com</a>
            </div>
            <div>
              <p className="text-brass mb-1">Hours</p>
              <p>Mon–Fri 9am–6pm · Sat 10am–4pm</p>
            </div>
          </div>

          <div className="aspect-[4/3] mt-8">
            <img
              src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=900&q=80"
              alt="King Street, Charleston"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
