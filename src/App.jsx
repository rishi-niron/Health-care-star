import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Doctors from './pages/Doctors.jsx'
import Contact from './pages/Contact.jsx'
import Departments from './pages/Departments.jsx'
import Appointments from './pages/Appointments.jsx'
import PatientPortal from './pages/PatientPortal.jsx'
import LabResults from './pages/LabResults.jsx'
import Pharmacy from './pages/Pharmacy.jsx'
import Insurance from './pages/Insurance.jsx'
import Locations from './pages/Locations.jsx'
import Pricing from './pages/Pricing.jsx'
import Nutrition from './pages/Nutrition.jsx'
import MentalHealth from './pages/MentalHealth.jsx'
import Emergency from './pages/Emergency.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Blog from './pages/Blog.jsx'
import FAQ from './pages/FAQ.jsx'
import Events from './pages/Events.jsx'
import Careers from './pages/Careers.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Donate from './pages/Donate.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        <Route path="/lab-results" element={<LabResults />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
