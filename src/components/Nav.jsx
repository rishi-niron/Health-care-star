import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/services">Services</Link>
      {' | '}
      <Link to="/doctors">Doctors</Link>
      {' | '}
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav
