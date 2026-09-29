import React from 'react';
import { Link } from 'react-router-dom';
import ethicalHackingImg from '../../assets/courses/ethical-hacking.jpg';
import socAnalystImg from '../../assets/courses/soc-analyst.jpg';
import networkSecurityImg from '../../assets/courses/network-security.jpg';
import penetrationTestingImg from '../../assets/courses/penetration-testing.jpg';
import digitalForensicsImg from '../../assets/courses/digital-forensics.jpg';
import cloudSecurityImg from '../../assets/courses/cloud-security.jpg';
import '../../pages/Home.css';

function PopularCourses() {
  return (
    <section className="section courses-preview">
      <div className="container">
        <h2 className="section-title">Our Popular Courses</h2>
        <div className="courses-grid">
          {[
            { title: "Ethical Hacking", duration: "40 Hours", mode: "Online / Offline", image: ethicalHackingImg },
            { title: "SOC Analyst", duration: "60 Hours", mode: "Online / Offline", image: socAnalystImg },
            { title: "Network Security", duration: "45 Hours", mode: "Online / Offline", image: networkSecurityImg },
            { title: "Penetration Testing", duration: "50 Hours", mode: "Online", image: penetrationTestingImg },
            { title: "Digital Forensics", duration: "55 Hours", mode: "Online / Offline", image: digitalForensicsImg },
            { title: "Cloud Security", duration: "60 Hours", mode: "Online", image: cloudSecurityImg },
          ].map((course, idx) => (
            <div className="course-card" key={idx}>
              <img src={course.image} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p>Master the fundamental skills required for {course.title.toLowerCase()} in enterprise environments.</p>
              <ul className="course-details">
                <li><strong>Duration:</strong> {course.duration}</li>
                <li><strong>Mode:</strong> {course.mode}</li>
              </ul>
              <Link to="/courses" className="btn-outline">View Course</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;