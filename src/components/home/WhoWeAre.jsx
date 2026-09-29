import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import whoWeAreBg from '../../assets/who-we-are-bg.jpg';
import '../../pages/Home.css';

const highlights = [
  'Hands-on learning',
  'Industry-ready skills',
  'Career-focused guidance',
];

function WhoWeAre() {
  return (
    <section
      className="section home-about"
      style={{ backgroundImage: `url(${whoWeAreBg})` }}
      aria-labelledby="who-we-are-title"
    >
      <div className="home-about-overlay" aria-hidden="true" />

      <div className="container home-about-container">
        <div className="about-content">
          <div className="about-copy">
            <span className="about-eyebrow">
              <FaShieldAlt aria-hidden="true" />
              Who we are
            </span>

            <h2 id="who-we-are-title" className="about-title">
              Build skills. Defend the future.
            </h2>

            <p className="about-lead">
              CyberDefentech helps students and professionals build practical
              cybersecurity skills for the real world.
            </p>

            <ul className="about-highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <FaCheckCircle aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="about-actions">
              <Link to="/courses" className="about-primary-button">
                Explore courses
                <FaArrowRight aria-hidden="true" />
              </Link>
              <Link to="/about" className="about-secondary-button">
                About us
              </Link>
            </div>
          </div>

          <div className="about-spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
