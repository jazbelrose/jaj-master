const brands = [
  {
    name: 'XCTN',
    tagline: 'Production & Scenic',
    description:
      'Execution authority for complex live environments — brand activations, broadcast, touring, immersive builds.',
    url: 'https://xctnproduction.com',
  },
  {
    name: 'Drapery Society',
    tagline: 'Fabrication & Soft Goods',
    description:
      'Architectural drapery and custom soft-goods fabrication for residential, hospitality, and commercial interiors.',
    url: 'https://draperysociety.com',
  },
  {
    name: 'memry',
    tagline: 'Software Brain',
    description:
      'The shared brain for production teams — projects, budgets, and collaboration in one place.',
    url: 'https://memry.studio',
  },
]

export default function Brands() {
  return (
    <section id="brands" className="s-brands">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h2 className="subhead">Our Companies</h2>
          <h1 className="display-2">
            Three operating companies. One integrated vision.
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="brands-list">
          {brands.map((brand) => (
            <a
              className="brand-card"
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <h3>{brand.name}</h3>
              <div className="brand-card__tagline">{brand.tagline}</div>
              <p>{brand.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
