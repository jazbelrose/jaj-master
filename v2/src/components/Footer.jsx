export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      {/* The real logotype, not the house name set in Roboto. JAJ.svg is the white-filled
          master, which is what belongs on this dark field. */}
      <div className="footer-brand">
        <img src="/images/JAJ.svg" alt="Jensen &amp; Juhl" />
      </div>

      <div className="footer-grid">
        <div className="footer-grid__links">
          <h4>Our Companies</h4>
          <ul>
            <li><a href="https://draperysociety.com" target="_blank" rel="noopener noreferrer">Drapery Society</a></li>
            <li><a href="https://xctnproduction.com" target="_blank" rel="noopener noreferrer">XCTN Production</a></li>
            <li><a href="https://memry.studio" target="_blank" rel="noopener noreferrer">memry</a></li>
          </ul>
        </div>

        <div className="footer-grid__links">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@jensenandjuhl.com">info@jensenandjuhl.com</a></li>
            <li><a href="mailto:partnerships@jensenandjuhl.com">partnerships@jensenandjuhl.com</a></li>
          </ul>
        </div>

        <div className="footer-grid__links">
          <h4>Headquarters</h4>
          <ul>
            <li className="footer-grid__address">
              825 South Hill Street<br />
              Los Angeles, CA 90014
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-grid__bottom">
        <span>&copy; {new Date().getFullYear()} JAJ Group. All rights reserved.</span>
        <a
          href="#top"
          className="go-top__link"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span aria-hidden="true">&uarr;</span>
        </a>
      </div>
    </footer>
  )
}
