import React from 'react';
import experiencedTrainersImg from '../../assets/why-choose/experienced-trainers.jpg';
import handsOnLabsImg from '../../assets/why-choose/hands-on-labs.jpg';
import industryCertImg from '../../assets/why-choose/industry-certifications.jpg';
import careerSupportImg from '../../assets/why-choose/career-support.jpg';
import '../../pages/Home.css';

function WhyChoose() {
  return (
    <section className="section why-choose">
      <div className="container why-choose-content">
        <h2 className="section-title text-white">Why Choose Cyber Defentech</h2>
        <div className="features-grid">
          {[
            { title: "Experienced Trainers", desc: "Learn from industry veterans with years of active cybersecurity experience.", image: experiencedTrainersImg },
            { title: "Hands-On Labs", desc: "Practice in real-world simulated environments to build practical skills.", image: handsOnLabsImg },
            { title: "Industry Certifications", desc: "Curriculums aligned with top global cybersecurity certifications.", image: industryCertImg },
            { title: "Career Support", desc: "Dedicated placement assistance and career mentorship programs.", image: careerSupportImg },
          ].map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-img-container">
                <img src={feature.image} alt={feature.title} className="feature-img" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;