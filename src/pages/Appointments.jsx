import { useState } from 'react'

function Appointments() {
  const [booked, setBooked] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setBooked(true)
  }

  if (booked) {
    return (
      <section>
        <h1>Appointments</h1>
        <p>Your appointment request has been received.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Preferred Date</label>
        <input id="date" name="date" type="date" required />

        <label htmlFor="reason">Reason for Visit</label>
        <input id="reason" name="reason" type="text" required />

        <button type="submit">Book</button>
      </form>
    </section>
  )
}

export default Appointments
