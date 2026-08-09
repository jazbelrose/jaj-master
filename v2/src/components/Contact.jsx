import { useState } from 'react'

export default function Contact() {
  // `website` is a honeypot -- hidden from humans, bots fill it
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [startedAt] = useState(() => Date.now())

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(
        'https://qmyknhvflk.execute-api.us-west-2.amazonaws.com/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            site: 'jensenandjuhl.com',
            name: form.name,
            email: form.email,
            message: form.message,
            website: form.website,
            elapsedMs: Date.now() - startedAt,
            fields: { Subject: form.subject },
          }),
        }
      )

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '', website: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const buttonLabel =
    status === 'sending' ? 'Sending' :
    status === 'success' ? 'Message sent' :
    status === 'error' ? 'Try again' : 'Send'

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

      {/* Labelled fields, name and email paired on one row so the form is three rows
          rather than five. Every height is set in CSS -- the textarea `rows` attribute
          does nothing here because .s-contact fixes the height. */}
      <div className="row" data-aos="fade-up">
        <form className="cform" onSubmit={handleSubmit} noValidate>
          {/* Honeypot -- offscreen, humans never see or tab into it */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            <label htmlFor="c-website">Website</label>
            <input
              id="c-website" name="website" type="text"
              tabIndex={-1} autoComplete="off"
              value={form.website} onChange={handleChange}
            />
          </div>
          <div className="cform__pair">
            <div className="cform__field">
              <label htmlFor="c-name">Name</label>
              <input
                id="c-name" name="name" type="text"
                value={form.name} onChange={handleChange} required minLength={2}
              />
            </div>
            <div className="cform__field">
              <label htmlFor="c-email">Email</label>
              <input
                id="c-email" name="email" type="email"
                value={form.email} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="cform__field">
            <label htmlFor="c-subject">Subject</label>
            <input
              id="c-subject" name="subject" type="text"
              value={form.subject} onChange={handleChange}
            />
          </div>

          <div className="cform__field">
            <label htmlFor="c-message">Message</label>
            <textarea
              id="c-message" name="message"
              value={form.message} onChange={handleChange} required
            ></textarea>
          </div>

          <div className="cform__end">
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
