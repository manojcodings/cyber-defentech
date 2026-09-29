import React from 'react';
import '../../pages/Home.css';

function Achievements() {
  return (
    <section className="section achievements">
      <div className="container">
        <h2 className="section-title">Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <span className="achievement-number">500+</span>
            <span className="achievement-label">Students Trained</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-number">100+</span>
            <span className="achievement-label">Successful Batches</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-number">95%</span>
            <span className="achievement-label">Course Completion</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-number">200+</span>
            <span className="achievement-label">Career Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;