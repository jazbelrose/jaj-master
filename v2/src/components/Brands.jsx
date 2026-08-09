// Order is deliberate: Drapery Society, XCTN, memry.
// The three marks are different species -- DS is a circle-over-name lockup, XCTN is a
// wordmark on its own, memry is an icon. They are aligned on a shared baseline rather
// than matched on height, which is what made the old row look uneven.
const brands = [
  {
    key: 'drapery-society',
    name: 'Drapery Society',
    logo: '/logos/drapery-society.png',
    tagline: 'Fabrication & Soft Goods',
    description:
      'Architectural drapery and custom soft‑goods fabrication for residential, hospitality, and commercial interiors.',
    url: 'https://draperysociety.com',
  },
  {
    key: 'xctn',
    name: 'XCTN',
    logo: '/logos/xctn.png',
    tagline: 'Production & Scenic',
    description:
      'Execution authority for complex live environments, brand activations, broadcast, touring, immersive builds.',
    url: 'https://xctnproduction.com',
  },
  {
    key: 'memry',
    name: 'memry',
    // memry ships as an icon with no wordmark, so the name is set beneath it in
    // memry's own Helvetica Display to match the shape of the DS lockup.
    logo: '/logos/memry-mark.svg',
    lockup: true,
    tagline: 'Software Brain',
    description:
      'The shared brain for production teams, projects, budgets, and collaboration in one place.',
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
              key={brand.key}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <div className="brand-card__band">
                {brand.lockup ? (
                  <span className="brand-lockup">
                    <img
                      className={`brand-card__logo brand-card__logo--${brand.key}`}
                      src={brand.logo}
                      alt=""
                    />
                    <span className="brand-lockup__word">{brand.name}</span>
                  </span>
                ) : (
                  <img
                    className={`brand-card__logo brand-card__logo--${brand.key}`}
                    src={brand.logo}
                    alt={brand.name}
                  />
                )}
              </div>
              <div className="brand-card__tagline">{brand.tagline}</div>
              <p>{brand.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
