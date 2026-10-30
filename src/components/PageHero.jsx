export default function PageHero({ kicker, title, body, image }) {
  return (
    <section className="relative h-[46vh] min-h-[340px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative h-full max-w-content mx-auto px-6 flex flex-col justify-end pb-14">
        {kicker && <p className="text-oyster/70 text-sm mb-3">{kicker}</p>}
        <h1 className="font-display text-oyster text-4xl md:text-5xl leading-tight max-w-2xl">
          {title}
        </h1>
        {body && <p className="text-oyster/80 max-w-xl mt-4 leading-relaxed">{body}</p>}
      </div>
    </section>
  )
}
