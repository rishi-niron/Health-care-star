const DOCTORS = [
  { name: 'Dr. Ayesha Khan', specialty: 'Cardiology' },
  { name: 'Dr. Marcus Lee', specialty: 'Pediatrics' },
  { name: 'Dr. Priya Nair', specialty: 'General Medicine' },
]

function Doctors() {
  return (
    <section>
      <h1>Our Doctors</h1>
      <ul>
        {DOCTORS.map((doctor) => (
          <li key={doctor.name}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialty}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Doctors
