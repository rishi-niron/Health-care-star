const FAQS = [
  { q: 'How do I book an appointment?', a: 'Use the Contact page or call our front desk.' },
  { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance providers.' },
  { q: 'What are your hours?', a: 'Monday to Saturday, 8am to 6pm.' },
]

function FAQ() {
  return (
    <section>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {FAQS.map((item) => (
          <li key={item.q}>
            <h2>{item.q}</h2>
            <p>{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQ
