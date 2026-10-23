const PLANS = [
  { name: 'Basic Checkup', price: '$50' },
  { name: 'Full Diagnostic', price: '$150' },
  { name: 'Annual Plan', price: '$500/year' },
]

function Pricing() {
  return (
    <section>
      <h1>Pricing</h1>
      <ul>
        {PLANS.map((plan) => (
          <li key={plan.name}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Pricing
