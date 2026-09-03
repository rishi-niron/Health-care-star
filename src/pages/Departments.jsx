const DEPARTMENTS = [
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Dermatology',
  'Radiology',
]

function Departments() {
  return (
    <section>
      <h1>Departments</h1>
      <ul>
        {DEPARTMENTS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Departments
