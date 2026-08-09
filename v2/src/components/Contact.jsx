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
          <div className="cform__pair">
            <div className="cform__field">
              <label htmlFor="c-name">Name</label>
              <input
                id="c-name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} required minLength={2}
              />
            </div>
            <div className="cform__field">
              <label htmlFor="c-email">Email</label>
              <input
                id="c-email" name="email" type="email" placeholder="name@company.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="cform__field">
            <label htmlFor="c-subject">Subject</label>
            <input
              id="c-subject" name="subject" type="text" placeholder="What this is about"
              value={form.subject} onChange={handleChange}
            />
          </div>

          <div className="cform__field">
            <label htmlFor="c-message">Message</label>
            <textarea
              id="c-message" name="message" placeholder="What the work is, where it happens, and when."
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
