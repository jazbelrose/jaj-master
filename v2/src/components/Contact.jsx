import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(
        'https://bfedz5f0ji.execute-api.us-west-1.amazonaws.com/default/JensenAndJuhlContact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        }
      )

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="s-contact">
      <div className="overlay"></div>

      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Contact</h3>
          <h1 className="display-2 display-2--light">
            For partnership inquiries, investment opportunities, or operational discussions
          </h1>
        </div>
      </div>

      <div className="contact-grid" data-aos="fade-up">
        <div className="contact-grid__form">
          <form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <div className="form-field">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>
              <div className="form-field">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="8"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-field">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="loading-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </span>
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : status === 'error' ? (
                    'Error! Try Again.'
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="contact-grid__info">
          <div className="cinfo">
            <h5>Where to Find Us</h5>
            <p>
              400 S Broadway<br />
              Los Angeles, CA<br />
              90013 US
            </p>
          </div>

          <div className="cinfo">
            <h5>Email Us At</h5>
            <p>
              <a href="mailto:info@jensenandjuhl.com">info@jensenandjuhl.com</a><br />
              <a href="mailto:partnerships@jensenandjuhl.com">partnerships@jensenandjuhl.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
