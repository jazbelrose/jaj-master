import { useState, useEffect, useCallback } from 'react'

const clients = [
  { name: 'e.l.f. Cosmetics', logo: '/images/clients/elf.png' },
  { name: 'NOCCO', logo: '/images/clients/nocco.png' },
  { name: 'Logitech', logo: '/images/clients/logitech.png' },
  { name: 'Troia', logo: '/images/clients/troia.png' },
  { name: 'Apple', logo: '/images/clients/apple.png' },
  { name: 'Ulta Beauty', logo: '/images/clients/ulta.png' },
  { name: 'MZ Skin', logo: '/images/clients/mz.png' },
  { name: 'Barebells', logo: '/images/clients/barebells.png' },
]

const testimonials = [
  {
    quote: 'Working with Jensen & Juhl was a transformative experience for our brand. Their attention to detail and commitment to creative excellence is unmatched.',
    name: 'Sophie Mitchell',
    position: 'Founder & Creative Director, Aura Agency',
    avatar: '/images/avatars/user-01.jpg',
  },
  {
    quote: 'Jensen & Juhl brought a level of innovation and expertise to our project that elevated our brand to new heights.',
    name: 'Daniel Wu',
    position: 'COO, Horizon Event Solutions',
    avatar: '/images/avatars/user-05.jpg',
  },
  {
    quote: 'The team at Jensen & Juhl delivered beyond our expectations. Their design and production capabilities are top-notch.',
    name: 'Leila Harper',
    position: 'Marketing Director, BrightWave Productions',
    avatar: '/images/avatars/user-02.jpg',
  },
  {
    quote: 'Jensen & Juhl demonstrated professionalism, creativity, and an ability to deliver on their promises. They truly make brands stand out.',
    name: 'Mark Jensen',
    position: 'CEO, Vivid Concepts',
    avatar: '/images/avatars/user-03.jpg',
  },
  {
    quote: 'Their 3D rendering and production services were outstanding. Jensen & Juhl captured our ideas perfectly and brought them to life with creativity and precision.',
    name: 'Maria Costa',
    position: 'Head of Production, Zen Events',
    avatar: '/images/avatars/user-04.jpg',
  },
]

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const t = testimonials[activeTestimonial]

  return (
    <section id="clients" className="s-clients">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Our Clients</h3>
          <h1 className="display-2">Proudly Collaborating with Leading Brands Worldwide</h1>
        </div>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="clients-logos">
          {clients.map((client) => (
            <a key={client.name} href="#0" aria-label={client.name}>
              <img src={client.logo} alt={`${client.name} Logo`} />
            </a>
          ))}
        </div>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="testimonials-wrap">
          <div className="testimonial">
            <p>&ldquo;{t.quote}&rdquo;</p>
            <img src={t.avatar} alt={t.name} className="testimonial__avatar" />
            <span className="testimonial__name">{t.name}</span>
            <span className="testimonial__pos">{t.position}</span>
          </div>

          <div className="testimonial-nav">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={i === activeTestimonial ? 'active' : ''}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
