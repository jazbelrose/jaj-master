const projects = [
  // XCTN
  {
    title: 'Private Estate Gala — Bel Air',
    category: 'Scenic Design',
    company: 'XCTN',
    image: 'https://d2qb21tb4meex0.cloudfront.net/XCTN/projects/private-estate-gala-bel-air/hero.jpg',
    link: 'https://xctnproduction.com/work/private-estate-gala-bel-air',
  },
  {
    title: 'Runway Environment — Fashion Week',
    category: 'Scenic Design',
    company: 'XCTN',
    image: 'https://d2qb21tb4meex0.cloudfront.net/XCTN/projects/runway-environment-nyfw/hero.jpg',
    link: 'https://xctnproduction.com/work/runway-environment-nyfw',
  },
  {
    title: 'Brand Pavilion — Art Basel Miami',
    category: 'Spatial Environments',
    company: 'XCTN',
    image: 'https://d2qb21tb4meex0.cloudfront.net/XCTN/projects/brand-pavilion-art-basel/hero.jpg',
    link: 'https://xctnproduction.com/work/brand-pavilion-art-basel',
  },
  {
    title: 'Award Ceremony — Stage Scenic',
    category: 'Scenic Design',
    company: 'XCTN',
    image: 'https://d2qb21tb4meex0.cloudfront.net/XCTN/projects/award-ceremony-stage-scenic/hero.jpg',
    link: 'https://xctnproduction.com/work/award-ceremony-stage-scenic',
  },
  // Drapery Society
  {
    title: 'Beverly Hills Hotel Renovation',
    category: 'Hospitality',
    company: 'Drapery Society',
    image: 'https://d2qb21tb4meex0.cloudfront.net/DS/images/beverly-hills-hotel/hero.jpeg',
    link: 'https://draperysociety.com/projects/beverly-hills-hotel-renovation',
  },
  {
    title: 'Pacific Palisades Residence',
    category: 'Residential',
    company: 'Drapery Society',
    image: 'https://d2qb21tb4meex0.cloudfront.net/DS/images/pacific-palisades/hero.jpeg',
    link: 'https://draperysociety.com/projects/pacific-palisades-residence',
  },
  {
    title: 'LACMA Gala — Grand Ballroom',
    category: 'Event',
    company: 'Drapery Society',
    image: 'https://d2qb21tb4meex0.cloudfront.net/DS/images/lacma-gala/hero.jpeg',
    link: 'https://draperysociety.com/projects/lacma-gala',
  },
  {
    title: 'Academy Museum Installation',
    category: 'Commercial',
    company: 'Drapery Society',
    image: 'https://d2qb21tb4meex0.cloudfront.net/DS/images/academy-museum/hero.jpeg',
    link: 'https://draperysociety.com/projects/academy-museum-installation',
  },
]

export default function Works() {
  return (
    <section id="works" className="s-works">
      <div className="intro-wrap">
        <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Portfolio</h3>
            <h1 className="display-2 display-2--light">
              Selected projects from across our companies
            </h1>
          </div>
        </div>
      </div>

      <div className="row works-content">
        <div className="col-full">
          <div className="masonry">
            {projects.map((project) => (
              <div className="masonry__brick" key={project.title} data-aos="fade-up">
                <a
                  href={project.link}
                  className="item-folio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="item-folio__thumb">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">{project.title}</h3>
                    <p className="item-folio__cat">{project.category} &middot; {project.company}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
