import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const rotatingRef = useRef(null)

  useEffect(() => {
    if (rotatingRef.current) {
      gsap.to(rotatingRef.current, {
        rotation: 360,
        transformOrigin: '50% 50%',
        duration: 15,
        repeat: -1,
        ease: 'linear',
      })
    }
  }, [])

  const smoothScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="s-home"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>

      <div className="home-content">
        <div className="row home-content__main">
          <h3>Jensen & Juhl</h3>
          <h1>
            Design-Driven <br />
            Execution at Scale
          </h1>
          <p className="home-content__lead">
            We build and operate companies that transform how spaces perform.
          </p>

          <div className="home-content__buttons">
            <a href="#contact" className="btn btn--stroke" onClick={(e) => smoothScroll(e, '#contact')}>
              Get in Touch
            </a>
            <a href="#about" className="btn btn--stroke" onClick={(e) => smoothScroll(e, '#about')}>
              Learn More
            </a>
          </div>

          <div className="svg-banner">
            <svg width="100%" height="100%" viewBox="0 0 5000 834" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
              <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                {/* Rotating star element */}
                <g ref={rotatingRef} transform="matrix(1,0,0,1,1199.98,136.82)">
                  <path d="M0,18.7C-0.13,19.43 -0.76,19.94 -1.48,19.94C-1.57,19.94 -1.65,19.93 -1.74,19.91L-44.91,12.3L-6.95,34.22C-6.23,34.63 -5.98,35.55 -6.4,36.27C-6.67,36.75 -7.18,37.02 -7.7,37.02C-7.95,37.02 -8.21,36.95 -8.45,36.82L-46.4,14.9L-18.23,48.48C-17.7,49.11 -17.78,50.06 -18.42,50.59C-18.7,50.82 -19.04,50.94 -19.38,50.94C-19.81,50.94 -20.23,50.76 -20.53,50.4L-48.7,16.83L-33.71,58.01C-33.43,58.79 -33.83,59.65 -34.61,59.94C-34.78,60 -34.95,60.03 -35.12,60.03C-35.73,60.03 -36.31,59.65 -36.53,59.04L-51.52,17.86L-51.52,61.68C-51.52,62.51 -52.19,63.18 -53.02,63.18C-53.85,63.18 -54.52,62.51 -54.52,61.68L-54.52,17.86L-69.51,59.04C-69.73,59.65 -70.31,60.03 -70.92,60.03C-71.09,60.03 -71.26,60 -71.43,59.94C-72.21,59.65 -72.61,58.79 -72.33,58.01L-57.34,16.83L-85.51,50.4C-85.81,50.76 -86.23,50.94 -86.66,50.94C-87,50.94 -87.34,50.82 -87.62,50.59C-88.26,50.06 -88.34,49.11 -87.81,48.48L-59.64,14.9L-97.59,36.82C-97.83,36.95 -98.08,37.02 -98.34,37.02C-98.86,37.02 -99.36,36.75 -99.64,36.27C-100.05,35.55 -99.81,34.63 -99.09,34.22L-61.13,12.3L-104.3,19.91C-104.38,19.93 -104.47,19.94 -104.56,19.94C-105.27,19.94 -105.91,19.43 -106.03,18.7C-106.18,17.88 -105.63,17.1 -104.82,16.96L-61.65,9.35L-104.82,1.74C-105.63,1.6 -106.18,0.82 -106.03,0C-105.89,-0.81 -105.12,-1.36 -104.3,-1.21L-61.13,6.4L-99.09,-15.52C-99.81,-15.93 -100.05,-16.85 -99.64,-17.57C-99.23,-18.28 -98.31,-18.53 -97.59,-18.12L-59.64,3.8L-87.81,-29.78C-88.34,-30.41 -88.26,-31.36 -87.62,-31.89C-86.99,-32.42 -86.04,-32.34 -85.51,-31.7L-57.34,1.87L-72.33,-39.31C-72.61,-40.09 -72.21,-40.95 -71.43,-41.24C-70.66,-41.52 -69.79,-41.12 -69.51,-40.34L-54.52,0.84L-54.52,-42.98C-54.52,-43.81 -53.85,-44.48 -53.02,-44.48C-52.19,-44.48 -51.52,-43.81 -51.52,-42.98L-51.52,0.84L-36.53,-40.34C-36.25,-41.12 -35.38,-41.52 -34.61,-41.24C-33.83,-40.95 -33.43,-40.09 -33.71,-39.31L-48.7,1.87L-20.53,-31.7C-20,-32.34 -19.05,-32.42 -18.42,-31.89C-17.78,-31.36 -17.7,-30.41 -18.23,-29.78L-46.4,3.8L-8.45,-18.12C-7.73,-18.53 -6.81,-18.29 -6.4,-17.57C-5.98,-16.85 -6.23,-15.93 -6.95,-15.52L-44.91,6.4L-1.74,-1.21C-0.93,-1.36 -0.15,-0.81 0,0C0.14,0.82 -0.4,1.6 -1.22,1.74L-44.39,9.35L-1.22,16.96C-0.4,17.1 0.14,17.88 0,18.7" style={{fill:'white',fillRule:'nonzero'}}/>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="home-content__scroll">
          <a href="#about" onClick={(e) => smoothScroll(e, '#about')}>
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  )
}
