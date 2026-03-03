export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-grid__desc">
          <p>
            Jensen & Juhl is a vertically integrated holding company operating
            across drapery fabrication, scenic production, and experiential environments.
            Through XCTN, Drapery Society, and memry, we deliver design-driven execution
            from concept to completion.
          </p>
        </div>

        <div className="footer-grid__links">
          <h4>Our Companies</h4>
          <ul>
            <li><a href="https://xctnproduction.com" target="_blank" rel="noopener noreferrer">XCTN</a></li>
            <li><a href="https://draperysociety.com" target="_blank" rel="noopener noreferrer">Drapery Society</a></li>
            <li><a href="mailto:info@jensenandjuhl.com">memry</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-grid__bottom">
        <span>&copy; {new Date().getFullYear()} Jensen & Juhl Group. All rights reserved.</span>
        <a href="#top" className="go-top__link" onClick={scrollToTop} aria-label="Back to top">
          &#8593;
        </a>
      </div>
    </footer>
  )
}
