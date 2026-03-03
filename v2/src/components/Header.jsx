import { useState, useEffect, useCallback } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Companies', href: '#brands' },
  { label: 'Portfolio', href: '#works' },
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
            Jensen & Juhl is a vertically integrated holding company
            operating across design, fabrication, and experiential environments.
          </p>
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
