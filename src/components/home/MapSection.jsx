import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function MapSection() {
  return (
    <section className="section home-map" id="location">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">
          Visit our training centre near Rohini East Metro Station, Delhi.
        </p>
        <div className="map-wrapper">
          <iframe
            title="Cyber Defentech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0849484791847!2d77.1160737!3d28.7082939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f9efef8f83%3A0x50e4f8cb6c9d4b0!2sRohini%20East%20Metro%20Station!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-address-bar">
            <FaMapMarkerAlt className="map-pin-icon" />
            <span>2nd Floor, Sector-08, Pillar No-392, D-12/77, Below Rohini East Metro Station, Rohini, Delhi – 110085</span>
            <a
              href="https://maps.app.goo.gl/Z1wWK2KPpERXsaA97"
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-btn"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
