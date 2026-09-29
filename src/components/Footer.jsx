import { useId } from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';
import './Footer.css';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cyberdefentech?stkn=a29sYzF2aG4zaHZ0',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cyberhorizon-defentech/',
    icon: FaLinkedinIn,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@cyberdefentech?si=HIiSHdTMQagPCtbk',
    icon: FaYoutube,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1ByaxDVfni/',
    icon: FaFacebookF,
  },
  {
    label: 'Pinterest',
    href: 'https://in.pinterest.com/cyberdefentech/',
    icon: FaPinterestP,
  },
];

const footerColumns = [
  {
    title: 'Company',
    links: [
      ['/about', 'About Us'],
      ['/blog', 'Blog'],
      ['/career', 'Career'],
      ['/verify-certificate', 'Verify Certificate'],
      ['/contact', 'Contact Us'],
      ['/gallery', 'Gallery'],
      ['/success-stories', 'Success Stories'],
      ['/hire-trainer', 'Hire a Trainer'],
    ],
  },
  {
    title: 'Quick Links',
    links: [
      ['/reviews', 'Reviews'],
      ['/membership', 'Membership'],
      ['/training-calendar', 'Training Calendar'],
      ['/career-mentorship', 'Career Mentorship Program'],
      ['/free-practice-tests', 'Free Practice Tests'],
      ['/upcoming-events', 'Upcoming Events'],
      ['/courses', 'All Courses'],
      ['/self-paced-learning', 'Self-paced Learning'],
    ],
  },
  {
    title: 'Trending Courses',
    links: [
      ['/course/network-penetration-testing', 'Network Penetration Testing'],
      ['/course/python', 'Python Training'],
      ['/course/linux', 'Linux Training'],
      ['/course/ethical-hacker', 'Ethical Hacker Training'],
      ['/course/networking', 'Networking Training'],
      ['/course/web-application-pentesting', 'Web App Pentesting'],
      ['/course/android-pentesting', 'Android Pentesting'],
      ['/course/api-pentesting', 'API Pentesting'],
      ['/course/cloud-security', 'Cloud Security Training'],
      ['/course/digital-forensic', 'Digital Forensic Training'],
      ['/course/soc', 'SOC Training'],
      ['/course/incident-response', 'Incident Response'],
      ['/course/ceh-v13', 'CEH V13 Training'],
      ['/course/aws-architect-associate', 'AWS Certified Solutions Architect'],
    ],
  },
  {
    title: 'Trending Categories',
    links: [
      ['/category/basic-course', 'Basic Course'],
      ['/category/blue-team', 'Blue Team'],
      ['/category/blue-teaming-certification', 'Blue Teaming Certification'],
      ['/category/red-team', 'Red Team'],
      ['/category/red-teaming-certification', 'Red Teaming Certification'],
      ['/category/management-certification', 'Management Certification'],
      ['/category/networking-certification', 'Networking Certification'],
    ],
  },
];

const legalLinks = [
  ['/refund-policy', 'Refund Policy'],
  ['/retake-policy', 'Retake Policy'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/posh-policy', 'POSH Policy'],
];

function Footer() {
  const emailInputId = useId();

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    // Connect your newsletter API here when it is ready.
  };

  return (
    <footer className="footer" aria-label="Website footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="CyberDefentech home">
            CyberDefentech
          </Link>
          <p className="footer-tagline">
            Building the next generation of cybersecurity professionals through
            hands-on, industry-driven training.
          </p>

          <address className="footer-contact">
            <a href="https://www.google.com/maps/search/?api=1&query=Rohini%2C%20Delhi">
              <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
              <span>Rohini, Delhi</span>
            </a>
            <a href="tel:+918448046612">
              <FaPhoneAlt className="footer-icon" aria-hidden="true" />
              <span>+91 84480 46612</span>
            </a>
            <a href="mailto:training@cyberdefentech.com">
              <FaEnvelope className="footer-icon" aria-hidden="true" />
              <span>training@cyberdefentech.com</span>
            </a>
          </address>

          <nav className="footer-socials" aria-label="Social media links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow CyberDefentech on ${label}`}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-newsletter">
          <span className="footer-eyebrow">Stay connected</span>
          <h2>Stay Updated</h2>
          <p>
            Get the latest courses, offers and cybersecurity insights in your
            inbox.
          </p>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label className="sr-only" htmlFor={emailInputId}>
              Email address
            </label>
            <input
              id={emailInputId}
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-container">
        {footerColumns.map(({ title, links }) => (
          <nav className="footer-section" key={title} aria-labelledby={`footer-${title}`}>
            <h3 id={`footer-${title}`}>{title}</h3>
            <ul>
              {links.map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CyberDefentech. All rights reserved.</p>
        <nav className="footer-legal-links" aria-label="Legal links">
          {legalLinks.map(([to, label]) => (
            <Link to={to} key={to}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
