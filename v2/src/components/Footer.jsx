import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://formspree.io/f/movqzled', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubStatus('success')
        setEmail('')
        setTimeout(() => setSubStatus(''), 5000)
      } else {
        throw new Error()
      }
    } catch {
      setSubStatus('error')
      setTimeout(() => setSubStatus(''), 5000)
    }
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="row footer-main">
        <div className="footer-desc">
          <p>
            At Jensen & Juhl, we're committed to transforming ideas into impactful realities.
            Through XCTN, Drapery Society, and Memry, our integrated approach creates
            memorable experiences that connect brands with their audiences.
            Let's build the future together.
          </p>
        </div>

        <div className="footer-subscribe">
          <h4>Stay Updated</h4>
          <p>
            Subscribe to our newsletter to receive the latest insights, project highlights,
            and updates from the Jensen & Juhl Group.
          </p>

          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="submit" value="Subscribe" />
          </form>

          {subStatus === 'success' && (
            <p style={{ color: '#4CAF50', marginTop: '1rem', fontSize: '1.4rem' }}>
              Thank you for subscribing!
            </p>
          )}
          {subStatus === 'error' && (
            <p style={{ color: '#e65153', marginTop: '1rem', fontSize: '1.4rem' }}>
              Subscription failed. Please try again.
            </p>
          )}
        </div>
      </div>

      <div className="row footer-bottom">
        <div className="copyright">
          <span>&copy; {new Date().getFullYear()} Jensen & Juhl Group. All rights reserved.</span>
        </div>
        <div className="go-top">
          <a href="#top" onClick={scrollToTop} aria-label="Back to top">
            &#8593;
          </a>
        </div>
      </div>
    </footer>
  )
}
