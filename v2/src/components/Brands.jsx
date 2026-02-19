const brands = [
  {
    name: 'XCTN',
    tagline: 'Execution Arm',
    description:
      'Large-scale production, scenic fabrication, lighting design, kinetic installations, and experiential environments. When the scope demands precision at scale, XCTN delivers — from million-dollar builds to intimate, design-forward moments.',
  },
  {
    name: 'Drapery Society',
    tagline: 'Material Craft Layer',
    description:
      'Where fabric becomes architecture. Textile installations, event drapery, custom apparel, and material design that transforms spaces. A dedicated brand for the culture of craft — without the limitations of being "just production."',
  },
  {
    name: 'Memry',
    tagline: 'Software Brain',
    description:
      'The intelligence layer. Digital tools, visualization systems, and software that powers how we plan, design, and deliver. Memry turns institutional knowledge into a competitive advantage.',
  },
]

export default function Brands() {
  return (
    <section id="brands" className="s-brands">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h2 className="subhead">Our Brands</h2>
          <h1 className="display-2">
            Three focused brands. One integrated vision.
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="brands-list">
          {brands.map((brand) => (
            <div className="brand-card" key={brand.name} data-aos="fade-up">
              <h3>{brand.name}</h3>
              <div className="brand-card__tagline">{brand.tagline}</div>
              <p>{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
