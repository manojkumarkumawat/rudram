import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 py-32 text-center">
      <p className="text-sm text-brass mb-3">404</p>
      <h1 className="font-display text-4xl mb-6">Page Not Found</h1>
      <p className="text-ink/70 mb-8">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Link
        to="/"
        className="inline-block bg-ink text-oyster px-7 py-3.5 text-[15px] hover:bg-brass hover:text-ink transition-colors"
      >
        Back to Home
      </Link>
    </section>
  )
}
