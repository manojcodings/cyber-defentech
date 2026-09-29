import React from 'react';
import { FaUsers } from 'react-icons/fa';
import '../../pages/Home.css';

function PlacementStories() {
  return (
    <section className="section placement-stories">
      <div className="container">
        <h2 className="section-title">Our Recent Placement Stories</h2>
        <div className="stories-grid">
          {[1, 2, 3].map((_, idx) => (
            <div className="story-card" key={idx}>
              <div className="story-header">
                <div className="student-avatar"><FaUsers /></div>
                <div>
                  <h4>John Doe</h4>
                  <span className="story-role">Security Analyst at TechCorp</span>
                </div>
              </div>
              <p className="story-text">
                "The practical labs at Cyber Defentech gave me the exact skills I needed to clear my interview and secure a role as a Security Analyst. Highly recommended!"
              </p>
              <span className="story-course">Course: Ethical Hacking</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacementStories;