import { useState } from 'react'

function Feedback() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section>
        <h1>Feedback</h1>
        <p>Thank you for your feedback.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comments">Comments</label>
        <textarea id="comments" name="comments" rows={4} required />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Feedback
