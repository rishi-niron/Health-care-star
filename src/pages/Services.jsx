const SERVICES = [
  { name: 'General Checkups', description: 'Routine health screenings and preventive care.' },
  { name: 'Cardiology', description: 'Heart health diagnostics and treatment.' },
  { name: 'Pediatrics', description: 'Care for infants, children, and teens.' },
  { name: 'Telehealth', description: 'Virtual consultations from home.' },
]

function Services() {
  return (
    <section>
      <h1>Services</h1>
      <ul>
        {SERVICES.map((service) => (
          <li key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
