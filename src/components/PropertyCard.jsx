export default function PropertyCard({ property }) {
  const { image, price, address, area, beds, baths, sqft, tag, blurb } = property
  return (
    <article className="group border border-line bg-card">
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={address}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <p className="text-brass text-lg mb-1">{price}</p>
        <h3 className="font-display text-xl leading-snug mb-1">{address}</h3>
        <p className="text-sm text-ink/60 mb-4">{area}</p>
        {blurb && <p className="text-sm text-ink/70 leading-relaxed mb-4">{blurb}</p>}
        <p className="text-sm text-ink/70 border-t border-line pt-4">
          {beds} Bed · {baths} Bath · {sqft} sqft · {tag}
        </p>
      </div>
    </article>
  )
}
