import { useState } from 'react'
import { FaTrophy, FaArrowRight } from 'react-icons/fa'
import faculty1 from '../../assets/faculty/faculty1.jpg'
import faculty2 from '../../assets/faculty/faculty2.jpg'
import faculty3 from '../../assets/faculty/faculty3.jpg'
import faculty4 from '../../assets/faculty/faculty4.jpg'
import './FacultyAchievement.css'

const facultyList = [
  {
    id: 'faculty-1',
    name: 'Vikram Kumar Jha',
    designation: 'Lead Penetration Tester',
    achievement: 'OSCP Certified, 10+ Years Experience',
    image: faculty1,
  },
  {
    id: 'faculty-2',
    name: 'Puja Sharma',
    designation: 'Manager',
    achievement: 'CISSP Certified, Ex-IBM Security',
    image: faculty2,
  },
  {
    id: 'faculty-3',
    name: 'Nitish Pathak',
    designation: 'Cloud Security Architect',
    achievement: 'AWS Security Specialty Certified',
    image: faculty3,
  },
  {
    id: 'faculty-4',
    name: 'Global Award',
    designation: 'Digital Forensics Expert',
    achievement: 'CHFI Certified, Government Cyber Cell Advisor',
    image: faculty4,
  },
]

function FacultyAchievement() {
  const [activeFaculty, setActiveFaculty] = useState(0)
  const faculty = facultyList[activeFaculty]

  const handleFacultyChange = (index) => {
    setActiveFaculty(index)
  }

  return (
    <section
      className="section faculty-achievement"
      aria-labelledby="faculty-achievement-title"
    >
      <div className="container faculty-achievement-container">
        <div className="fa-heading">
          <span className="fa-eyebrow">Meet Our Experts</span>
          <h2 id="faculty-achievement-title" className="section-title">
            Faculty Achievements
          </h2>
          <p className="fa-subtitle">
            Learn from certified industry experts with real-world experience in
            cybersecurity, cloud security, and digital investigations.
          </p>
        </div>

        <div className="fa-showcase">
          <div className="fa-gallery" aria-label="Faculty photo gallery">
            <div className="fa-main-image-wrapper">
              <img
                key={faculty.id}
                src={faculty.image}
                alt={`${faculty.name}, ${faculty.designation}`}
                className="fa-main-image"
              />
              <div className="fa-image-overlay" />
              <span className="fa-main-badge" aria-hidden="true">
                <FaTrophy />
              </span>
              <span className="fa-photo-count">
                {String(activeFaculty + 1).padStart(2, '0')} / {String(facultyList.length).padStart(2, '0')}
              </span>
            </div>

            <div className="fa-thumbnails" role="tablist" aria-label="Select faculty">
              {facultyList.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`fa-thumbnail ${activeFaculty === index ? 'is-active' : ''}`}
                  onClick={() => handleFacultyChange(index)}
                  role="tab"
                  aria-selected={activeFaculty === index}
                  aria-label={`Show ${item.name}`}
                >
                  <img src={item.image} alt="" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          <div className="fa-details">
            <span className="fa-detail-label">Industry Professional</span>
            <h3 className="fa-name">{faculty.name}</h3>
            <p className="fa-designation">{faculty.designation}</p>

            <div className="fa-achievement-box">
              <span className="fa-achievement-icon" aria-hidden="true">
                <FaTrophy />
              </span>
              <div>
                <span className="fa-achievement-label">Key Achievement</span>
                <p className="fa-achievement">{faculty.achievement}</p>
              </div>
            </div>

            <p className="fa-description">
              Gain practical knowledge from professionals who bring real-world
              expertise, current industry practices, and hands-on guidance into
              every learning experience.
            </p>

            <button
              type="button"
              className="fa-next-button"
              onClick={() => setActiveFaculty((activeFaculty + 1) % facultyList.length)}
            >
              View Next Expert <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacultyAchievement
