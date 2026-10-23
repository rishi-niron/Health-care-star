const LOCATIONS = [
  { name: 'Downtown Clinic', address: '123 Main St' },
  { name: 'Northside Clinic', address: '456 Oak Ave' },
]

function Locations() {
  return (
    <section>
      <h1>Locations</h1>
      <ul>
        {LOCATIONS.map((loc) => (
          <li key={loc.name}>
            <h2>{loc.name}</h2>
            <p>{loc.address}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Locations
