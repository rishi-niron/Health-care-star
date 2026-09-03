import { Link } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/departments', label: 'Departments' },
  { to: '/appointments', label: 'Appointments' },
  { to: '/patient-portal', label: 'Patient Portal' },
  { to: '/lab-results', label: 'Lab Results' },
  { to: '/pharmacy', label: 'Pharmacy' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/locations', label: 'Locations' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/nutrition', label: 'Nutrition' },
  { to: '/mental-health', label: 'Mental Health' },
  { to: '/emergency', label: 'Emergency' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/events', label: 'Events' },
  { to: '/careers', label: 'Careers' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/donate', label: 'Donate' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/contact', label: 'Contact' },
]

function Nav() {
  return (
    <nav>
      {LINKS.map((link, index) => (
        <span key={link.to}>
          <Link to={link.to}>{link.label}</Link>
          {index < LINKS.length - 1 ? ' | ' : null}
        </span>
      ))}
    </nav>
  )
}

export default Nav
