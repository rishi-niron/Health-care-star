const TESTIMONIALS = [
  { name: 'Sarah M.', quote: 'The staff made me feel so comfortable during my visit.' },
  { name: 'James T.', quote: 'Fast, friendly, and professional care every time.' },
]

function Testimonials() {
  return (
    <section>
      <h1>Testimonials</h1>
      <ul>
        {TESTIMONIALS.map((item) => (
          <li key={item.name}>
            <p>"{item.quote}"</p>
            <p>— {item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Testimonials
