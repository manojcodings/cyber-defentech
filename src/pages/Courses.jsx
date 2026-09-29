import { Link } from 'react-router-dom'
import { FaClock, FaLaptopCode, FaCertificate } from 'react-icons/fa'
import { coursesList } from '../data/courseData'
import heroBg from '../assets/courses/hero-bg.jpg'

import './Courses.css'

function Courses() {
  return (
    <div className="courses-page">

      {/* Hero */}
      <section
  className="courses-hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="container">
    {/* <h1>Our Courses</h1>
    <p>Industry-focused cybersecurity programs designed to build real, job-ready skills.</p> */}
  </div>
</section>

      {/* Courses Grid */}
      <section className="section courses-listing">
        <div className="container">
          <div className="courses-grid-full">
            {coursesList.map((course) => (
              <div className="course-card-full" key={course.slug}>
                <div className="course-img-container">
                  <img src={course.image} alt={course.title} className="course-img" />
                  <span className="course-level-badge">{course.level}</span>
                </div>
                <div className="course-card-body">
                  <h3>{course.title}</h3>
                  <p>
                    Master the fundamental and advanced skills required for {course.title.toLowerCase()}
                    in real-world enterprise environments.
                  </p>
                  <div className="course-meta">
                    <span><FaClock /> {course.duration}</span>
                    <span><FaLaptopCode /> {course.mode}</span>
                  </div>
                  <Link to={`/courses/${course.slug}`} className="btn-outline">Enroll Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section courses-cta">
        <div className="container">
          <FaCertificate className="cta-icon" />
          <h2>Not Sure Which Course to Choose?</h2>
          <p>Talk to our career counselors and find the right path for your cybersecurity career.</p>
          <Link to="/enquiry" className="cta-button">Get Free Guidance</Link>
        </div>
      </section>

    </div>
  )
}

export default Courses