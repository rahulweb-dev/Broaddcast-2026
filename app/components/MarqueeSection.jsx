"use client"

const words = ["marketing.", "analysis.", "strategy.", "business."]

export default function MarqueeSection() {
  return (
    <section className="py-16 overflow-hidden border-y border-neutral-300 bg-white">
      <div className="relative w-full overflow-hidden">

        <div className="marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex items-center gap-16 mr-16">
              {words.map((word, i) => (
                <span
                  key={`${repeat}-${i}`}
                  className={`text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight ${
                    i % 2 === 0 ? "text-black" : "stroke-text"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}