import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section>
        <h1>Contact</h1>
        <p>Thanks for reaching out. We'll get back to you soon.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required />

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact
