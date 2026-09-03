const POSTS = [
  { title: '5 Tips for a Healthy Heart', date: '2026-08-01' },
  { title: 'Understanding Telehealth', date: '2026-07-15' },
  { title: 'Pediatric Vaccine Schedule', date: '2026-06-20' },
]

function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {POSTS.map((post) => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Blog
