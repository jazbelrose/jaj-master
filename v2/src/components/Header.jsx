import { useState, useEffect, useCallback } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Brands', href: '#brands' },
  { label: 'Works', href: '#works' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [opaque, setOpaque] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpaque(window.scrollY > 150)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-is-open')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('menu-is-open')
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const smoothScroll = useCallback((e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }, [])

  return (
    <header className="s-header">
      <div className="header-logo">
        <a href="#home" onClick={(e) => smoothScroll(e, '#home')}>
          <img src="/images/logo.png" alt="Jensen & Juhl" />
        </a>
      </div>

      <nav className="header-nav">
        <button className="header-nav__close" onClick={() => setMenuOpen(false)}>
          <span></span>
        </button>

        <div className="header-nav__content">
          <h3>Navigation</h3>

          <ul className="header-nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => smoothScroll(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <p>
            At Jensen & Juhl, we turn your creative vision into reality.
            Let's build something extraordinary together.
          </p>

          <ul className="header-nav__social">
            <li>
              <a href="https://mylg.studio/" target="_blank" rel="noopener noreferrer">
                <img src="/images/mylg-icon.svg" alt="MYLG" />
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/jensenandjuhl.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/bluesky-icon.svg" alt="BlueSky" />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/jensenandjuhl" target="_blank" rel="noopener noreferrer">
                <img src="/images/dribble-bold.svg" alt="Dribbble" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <button
        className={`header-menu-toggle${opaque ? ' opaque' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="header-menu-content">
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon"></span>
        </span>
      </button>
    </header>
  )
}
