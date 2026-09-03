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
import Radiology from './pages/Radiology.jsx'
import Surgery from './pages/Surgery.jsx'
import Dermatology from './pages/Dermatology.jsx'
import Orthopedics from './pages/Orthopedics.jsx'
import Neurology from './pages/Neurology.jsx'
import Oncology from './pages/Oncology.jsx'
import Gynecology from './pages/Gynecology.jsx'
import Urology from './pages/Urology.jsx'
import ENT from './pages/ENT.jsx'
import Ophthalmology from './pages/Ophthalmology.jsx'
import Dentistry from './pages/Dentistry.jsx'
import PhysicalTherapy from './pages/PhysicalTherapy.jsx'
import Immunization from './pages/Immunization.jsx'
import HealthRecords from './pages/HealthRecords.jsx'
import Billing from './pages/Billing.jsx'
import InsuranceClaims from './pages/InsuranceClaims.jsx'
import PatientRights from './pages/PatientRights.jsx'
import Accessibility from './pages/Accessibility.jsx'
import Sitemap from './pages/Sitemap.jsx'
import News from './pages/News.jsx'
import PressReleases from './pages/PressReleases.jsx'
import ResearchTrials from './pages/ResearchTrials.jsx'
import Partnerships from './pages/Partnerships.jsx'
import CommunityOutreach from './pages/CommunityOutreach.jsx'
import ContactSupport from './pages/ContactSupport.jsx'
import Feedback from './pages/Feedback.jsx'
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
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/dermatology" element={<Dermatology />} />
        <Route path="/orthopedics" element={<Orthopedics />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/oncology" element={<Oncology />} />
        <Route path="/gynecology" element={<Gynecology />} />
        <Route path="/urology" element={<Urology />} />
        <Route path="/ent" element={<ENT />} />
        <Route path="/ophthalmology" element={<Ophthalmology />} />
        <Route path="/dentistry" element={<Dentistry />} />
        <Route path="/physical-therapy" element={<PhysicalTherapy />} />
        <Route path="/immunization" element={<Immunization />} />
        <Route path="/health-records" element={<HealthRecords />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/insurance-claims" element={<InsuranceClaims />} />
        <Route path="/patient-rights" element={<PatientRights />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/news" element={<News />} />
        <Route path="/press-releases" element={<PressReleases />} />
        <Route path="/research-trials" element={<ResearchTrials />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/community-outreach" element={<CommunityOutreach />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
