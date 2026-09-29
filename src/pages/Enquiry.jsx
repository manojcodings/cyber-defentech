import { useState } from 'react'
import heroBg from '../assets/enquiry/hero-bg.jpg'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa'
import './Enquiry.css'

function Enquiry() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="enquiry-page">

      {/* Hero */}
      <section
  className="enquiry-hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="container">
    {/* <h1>Get In Touch</h1> */}
    {/* <p>Have questions about our courses? Fill the form below and our team will guide you.</p> */}
  </div>
</section>

      {/* Main Content */}
      <section className="section enquiry-main">
        <div className="container enquiry-grid">

          {/* Form Side */}
          <div className="enquiry-form-box">
            <h2>Course Enquiry Form</h2>

            <p className="form-subtitle">
              Fill in your details and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>
                  Your enquiry has been received. Our team will contact you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Course Interested In</label>

                    <select required defaultValue="">
                      <option value="" disabled>
                        Select a course
                      </option>

                      <option value="ethical-hacking">
                        Ethical Hacking
                      </option>

                      <option value="soc-analyst">
                        SOC Analyst
                      </option>

                      <option value="network-security">
                        Network Security
                      </option>

                      <option value="penetration-testing">
                        Penetration Testing
                      </option>

                      <option value="digital-forensics">
                        Digital Forensics
                      </option>

                      <option value="cloud-security">
                        Cloud Security
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message (Optional)</label>

                  <textarea
                    rows="4"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="cta-button">
                  Submit Enquiry
                </button>

              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="enquiry-info-box">
            <h3>Contact Information</h3>

            <p>
              Reach out to us directly through any of these channels.
            </p>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />

              <div>
                <h4>Location</h4>
                <p>Rohini, Delhi, India</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="info-icon" />

              <div>
                <h4>Phone</h4>
                <p>+91 8448046612</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />

              <div>
                <h4>Email</h4>
                <p>training@cyberdefentech.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="info-icon" />

              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Enquiry