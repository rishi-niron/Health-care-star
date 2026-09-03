const EVENTS = [
  { name: 'Free Flu Shot Clinic', date: '2026-10-05' },
  { name: 'Heart Health Seminar', date: '2026-11-12' },
]

function Events() {
  return (
    <section>
      <h1>Events</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.name}>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Events
