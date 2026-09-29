import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import '../../pages/Home.css';

function ContactSection() {
  return (
    <section className="section home-contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions about a course, batch schedule, or certification? Our team is here to help.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-detail">
              <span className="contact-detail-icon"><FaMapMarkerAlt /></span>
              <div>
                <strong>Address</strong>
                <p>2nd Floor, Sector-08, Pillar No-392, D-12/77,<br />Below Rohini East Metro Station,<br />Rohini, Delhi – 110085</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><FaPhoneAlt /></span>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+918448046612">+91 8448046612</a></p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><FaEnvelope /></span>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:training@cyberdefentech.com">training@cyberdefentech.com</a></p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><FaClock /></span>
              <div>
                <strong>Hours</strong>
                <p>Mon – Sat: 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" type="text" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input id="contact-email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-course">Course of Interest</label>
              <select id="contact-course">
                <option value="">Select a course…</option>
                <option>Ethical Hacking</option>
                <option>SOC Analyst</option>
                <option>Network Security</option>
                <option>Penetration Testing</option>
                <option>Digital Forensics</option>
                <option>Cloud Security</option>
                <option>Web Application Security</option>
                <option>Mobile Pentesting</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows={4} placeholder="Tell us how we can help you…"></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;