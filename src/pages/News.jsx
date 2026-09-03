const NEWS = [
  { title: 'New Wing Opens for Pediatric Care', date: '2026-08-20' },
  { title: 'Health-care Star Partners with Local Schools', date: '2026-07-05' },
]

function News() {
  return (
    <section>
      <h1>News</h1>
      <ul>
        {NEWS.map((item) => (
          <li key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default News
