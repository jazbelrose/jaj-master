const projects = [
  {
    title: 'Bloom & Bliss',
    category: 'Brand Identity, Product Visualization',
    image: '/images/portfolio/bloom-and-bliss.png',
    link: 'https://mylg.studio/works/Bloom-and-Bliss',
    caption: 'Brand Identity, 3D Rendering. Discover the essence of Los Angeles Radiance.',
  },
  {
    title: 'Strike Fit',
    category: 'Brand Identity, Photography, Product Visualization',
    image: '/images/portfolio/Strike-fit.png',
    link: 'https://mylg.studio/works/strikefit',
    caption: "Brand Identity, Photography, 3D rendering. Experience the pinnacle of performance with Strike Fit Paris' premier athletic hand dust.",
  },
  {
    title: 'Royal Allure',
    category: 'Brand Identity, Photography',
    image: '/images/portfolio/gold-princess.png',
    link: 'https://mylg.studio/works/The-gold-princess',
    caption: 'Photography, Brand Identity. Experience the epitome of elegance with Royal Allure Fragrance.',
  },
  {
    title: 'Elf Art Basel',
    category: '3D Rendering, Event Design',
    image: '/images/portfolio/elf-miami.png',
    link: 'https://mylg.studio/works/elf-Makeup',
    caption: "Nylon House's Art Week featured e.l.f cosmetic's exclusive make-up lounge on Strawberry Moon's rooftop.",
  },
  {
    title: 'Pipe Dream Event',
    category: 'Brand Identity, Web Development',
    image: '/images/portfolio/pd.png',
    link: 'https://mylg.studio/works/Pipe-Dream-Events',
    caption: 'Brand Identity, Web Development. Creating immersive experiences for unforgettable events.',
  },
  {
    title: 'Academy of Pop',
    category: '3D Rendering, Immersive Digital',
    image: '/images/portfolio/AOP.png',
    link: 'https://mylg.studio/works/Academy-of-Pop',
    caption: 'Branding, 3D rendering. Empowering the next generation of musicians and artists.',
  },
]

export default function Works() {
  return (
    <section id="works" className="s-works">
      <div className="intro-wrap">
        <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Recent Works</h3>
            <h1 className="display-2 display-2--light">
              We love what we do, check out some of our latest collaborations
            </h1>
          </div>
        </div>
      </div>

      <div className="row works-content">
        <div className="col-full">
          <div className="masonry">
            {projects.map((project) => (
              <div className="masonry__brick" key={project.title} data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">{project.title}</h3>
                    <p className="item-folio__cat">{project.category}</p>
                  </div>
                  <a
                    href={project.link}
                    className="item-folio__project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
