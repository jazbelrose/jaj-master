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
          <h3>Welcome to Jensen and Juhl</h3>
          <h1>
            Design & Production that Inspires <br />
            Exceptional Experiences
          </h1>

          <div className="home-content__buttons">
            <a href="#contact" className="btn btn--stroke" onClick={(e) => smoothScroll(e, '#contact')}>
              Work Together
            </a>
            <a href="#about" className="btn btn--stroke" onClick={(e) => smoothScroll(e, '#about')}>
              More About Us
            </a>
          </div>

          <div className="svg-banner">
            <svg width="100%" height="100%" viewBox="0 0 5000 834" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
              <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                <g transform="matrix(1,0,0,1,0,192.742)">
                  <rect x="0" y="0" width="7.258" height="7.258" style={{fill:'white'}}/>
                </g>
                <g transform="matrix(1,0,0,1,7.2573,94.392)">
                  <path d="M0,8.526C0.594,8.526 1.14,8.422 1.639,8.214C2.138,8.005 2.577,7.709 2.957,7.323C3.335,6.938 3.629,6.489 3.837,5.978C4.046,5.466 4.15,4.894 4.15,4.262C4.15,3.631 4.046,3.059 3.837,2.547C3.629,2.036 3.335,1.588 2.957,1.203C2.577,0.817 2.138,0.52 1.639,0.312C1.14,0.103 0.594,-0.001 0,-0.001C-0.594,-0.001 -1.144,0.103 -1.648,0.312C-2.154,0.52 -2.593,0.817 -2.965,1.203C-3.338,1.588 -3.629,2.036 -3.837,2.547C-4.045,3.059 -4.15,3.631 -4.15,4.262C-4.15,4.894 -4.045,5.466 -3.837,5.978C-3.629,6.489 -3.338,6.938 -2.965,7.323C-2.593,7.709 -2.154,8.005 -1.648,8.214C-1.144,8.422 -0.594,8.526 0,8.526M0.019,11.123C-1.03,11.123 -1.996,10.952 -2.88,10.611C-3.765,10.27 -4.535,9.79 -5.192,9.171C-5.849,8.552 -6.357,7.825 -6.717,6.992C-7.078,6.158 -7.257,5.248 -7.257,4.262C-7.257,3.265 -7.078,2.352 -6.717,1.525C-6.357,0.697 -5.849,-0.026 -5.192,-0.645C-4.535,-1.264 -3.768,-1.745 -2.89,-2.085C-2.012,-2.426 -1.048,-2.597 0,-2.597C1.049,-2.597 2.012,-2.429 2.89,-2.095C3.768,-1.76 4.535,-1.283 5.192,-0.664C5.849,-0.045 6.358,0.681 6.718,1.515C7.078,2.349 7.258,3.265 7.258,4.262C7.258,5.248 7.078,6.161 6.718,7.001C6.358,7.841 5.849,8.571 5.192,9.19C4.535,9.809 3.768,10.286 2.89,10.621C2.012,10.955 1.055,11.123 0.019,11.123" style={{fill:'white',fillRule:'nonzero'}}/>
                </g>
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

      <ul className="home-social">
        <li>
          <a href="https://mylg.studio/" target="_blank" rel="noopener noreferrer">
            <img src="/images/mylg-icon-white.svg" alt="MYLG" style={{width: 33, height: 33}} />
            <span>*MYLG!*</span>
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/jensenandjuhl.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/bluesky-icon-white.svg" alt="BlueSky" style={{width: 33, height: 33}} />
            <span>BlueSky</span>
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/jensenandjuhl" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
            <span>Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
