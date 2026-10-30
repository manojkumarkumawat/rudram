import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-oyster/90">
      <div className="max-w-content mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 md:pr-8">
          <p className="font-display text-2xl mb-4">
            Ironwood <span className="text-brass">Legacy</span> Properties
          </p>
          <p className="text-sm text-oyster/70 leading-relaxed max-w-sm">
            Modern heritage. Defined living. Specializing in eco-luxury homes and half-back
            relocation in Charleston, South Carolina.
          </p>
          <div className="flex gap-5 mt-6 text-sm text-oyster/70">
            <a href="#" className="hover:text-brass">LinkedIn</a>
            <a href="#" className="hover:text-brass">Instagram</a>
            <a href="#" className="hover:text-brass">Facebook</a>
          </div>
        </div>

        <div>
          <p className="text-sm text-brass mb-4">Quick Links</p>
          <ul className="space-y-3 text-sm text-oyster/70">
            <li><Link to="/services" className="hover:text-oyster">Our Services</Link></li>
            <li><Link to="/neighborhoods" className="hover:text-oyster">Neighborhoods</Link></li>
            <li><Link to="/relocation-guide" className="hover:text-oyster">Relocation Guide</Link></li>
            <li><Link to="/properties" className="hover:text-oyster">Properties</Link></li>
            <li><Link to="/blog" className="hover:text-oyster">Blog</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-brass mb-4">Get in Touch</p>
          <address className="not-italic text-sm text-oyster/70 space-y-3 leading-relaxed">
            <p>142 King Street, Suite 200<br />Charleston, SC 29401</p>
            <p><a href="tel:+18435550192" className="hover:text-oyster">(843) 555-0192</a></p>
            <p><a href="mailto:info@ironwoodlegacy.com" className="hover:text-oyster">info@ironwoodlegacy.com</a></p>
            <p>Mon–Fri 9am–6pm · Sat 10am–4pm</p>
          </address>
        </div>
      </div>

      <div className="border-t border-oyster/10">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 justify-between text-xs text-oyster/50">
          <p>© 2026 Ironwood Legacy Properties. All rights reserved. · Charleston, SC</p>
          <div className="flex gap-5">
            <Link to="/about" className="hover:text-oyster/80">About</Link>
            <Link to="/properties" className="hover:text-oyster/80">Properties</Link>
            <Link to="/contact" className="hover:text-oyster/80">Contact</Link>
            <a href="#" className="hover:text-oyster/80">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
