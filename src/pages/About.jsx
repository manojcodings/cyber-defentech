import { Link } from 'react-router-dom'
import {
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa'
import './About.css'

import missionImg from '../assets/about/mission.jpg'
import visionImg from '../assets/about/vision.jpg'
import heroBg from '../assets/about/hero-bg.jpg'

const values = [
  {
    icon: FaShieldAlt,
    title: 'Integrity',
    text: 'We promote ethical thinking, responsible security practices, and professional conduct in every learning experience.',
  },
  {
    icon: FaUsers,
    title: 'Student-Centric',
    text: 'We understand each learner’s goals and create a supportive path that connects learning with career outcomes.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    text: 'We continuously evolve our curriculum to reflect new technologies, emerging threats, and modern security practices.',
  },
  {
    icon: FaHandshake,
    title: 'Support',
    text: 'From the first class to career preparation, our team supports learners with guidance, feedback, and mentorship.',
  },
]

const learningHighlights = [
  'Hands-on labs and practical security exercises',
  'Real-world scenarios and industry-focused workflows',
  'Mentorship from experienced cybersecurity professionals',
  'Career guidance, project support, and interview preparation',
]

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-labelledby="about-hero-title"
      >
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <span className="about-eyebrow">Learn. Practice. Protect.</span>
          <h1 id="about-hero-title">Building the Next Generation of Cybersecurity Professionals</h1>
          <p>
            Practical cybersecurity education designed to turn curiosity into
            capability and knowledge into real-world confidence.
          </p>
          <Link to="/courses" className="about-hero-button">
            Explore Our Courses <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story" aria-labelledby="our-story-title">
        <div className="container story-content">
          <div className="story-text">
            <span className="about-section-label">Who We Are</span>
            <h2 id="our-story-title" className="section-title">Our Story</h2>
            <p className="story-lead">
              CyberDefentech was founded with one clear purpose: to bridge the
              gap between academic cybersecurity education and the practical
              skills required in the real world.
            </p>
            <p>
              Cybersecurity is not mastered through theory alone. It requires
              hands-on experience, continuous practice, problem-solving, and
              the confidence to work through real security challenges. Our
              learning approach brings these essential elements together in a
              structured and supportive environment.
            </p>
            <p>
              Our programs combine strong cybersecurity fundamentals with
              practical labs, real-world scenarios, guided projects, and
              industry-relevant tools. Learners gain a deeper understanding of
              how modern threats work, how security teams respond to incidents,
              and how organizations protect networks, applications, systems,
              and sensitive data.
            </p>
            <p>
              From ethical hacking and penetration testing to network security,
              SOC operations, digital forensics, cloud security, and security
              awareness, we help students and professionals build skills that
              are relevant, measurable, and ready to apply.
            </p>
            <p>
              Our goal is simple: help every learner learn with purpose,
              practice with confidence, build meaningful capabilities, and grow
              into a responsible cybersecurity professional.
            </p>
          </div>

          <aside className="story-highlight" aria-label="Our learning approach">
            <span className="about-section-label">Our Approach</span>
            <h3>Learning that moves beyond the classroom</h3>
            <p>
              We focus on practical learning that prepares people for the way
              cybersecurity is actually practiced in modern organizations.
            </p>
            <ul>
              {learningHighlights.map((highlight) => (
                <li key={highlight}>
                  <FaCheckCircle aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section mission-vision" aria-labelledby="mission-vision-title">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-section-label">Our Direction</span>
            <h2 id="mission-vision-title" className="section-title">Mission &amp; Vision</h2>
            <p>
              We are committed to creating a stronger, more capable, and more
              responsible cybersecurity community.
            </p>
          </div>

          <div className="mv-grid">
            <article className="mv-card">
              <div className="mv-img-container">
                <img src={missionImg} alt="Cybersecurity training in practice" className="mv-img" loading="lazy" />
              </div>
              <div className="mv-text">
                <span className="mv-label">What drives us</span>
                <h3>Our Mission</h3>
                <p>
                  To deliver practical, industry-relevant cybersecurity
                  education that empowers individuals to protect digital
                  infrastructure, solve complex security problems, and advance
                  their careers with confidence.
                </p>
              </div>
            </article>

            <article className="mv-card reverse">
              <div className="mv-img-container">
                <img src={visionImg} alt="Professionals building a secure digital future" className="mv-img" loading="lazy" />
              </div>
              <div className="mv-text">
                <span className="mv-label">Where we are going</span>
                <h3>Our Vision</h3>
                <p>
                  To become a trusted name in cybersecurity training,
                  recognized for developing skilled, ethical, and job-ready
                  professionals who help make the digital world safer for
                  everyone.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values" aria-labelledby="core-values-title">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-section-label">What We Believe In</span>
            <h2 id="core-values-title" className="section-title">Our Core Values</h2>
            <p>
              These principles guide the way we teach, mentor, collaborate, and
              contribute to the cybersecurity community.
            </p>
          </div>

          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="value-card" key={title}>
                <span className="value-icon-wrapper">
                  <Icon className="value-icon" aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section about-stats" aria-label="Our impact">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Students Trained</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Successful Batches</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Course Completion</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Career Opportunities</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta" aria-labelledby="about-cta-title">
        <div className="container">
          <span className="about-section-label">Start Your Journey</span>
          <h2 id="about-cta-title">Ready to Build Your Cybersecurity Career?</h2>
          <p>
            Explore practical courses, develop job-ready skills, and take the
            next step toward a stronger future in cybersecurity.
          </p>
          <Link to="/enquiry" className="cta-button">
            Enquire Now <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default About
