import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopupForm from './components/PopupForm'
import FloatingForm from './components/FloatingForm'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import PartnerDetail from './pages/PartnerDetail'
import CourseDetail from './pages/CourseDetail'
import Enquiry from './pages/Enquiry'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <PopupForm />
      <FloatingForm />
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/partners/:partnerSlug" element={<PartnerDetail />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App