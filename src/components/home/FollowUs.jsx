import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaShieldAlt,
  FaYoutube,
} from 'react-icons/fa';
import '../../pages/Home.css';
// import './FollowUs.css';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1ByaxDVfni/',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cyberdefentech?stkn=a29sYzF2aG4zaHZ0',
    icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cyberhorizon-defentech/',
    icon: FaLinkedinIn,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@cyberdefentech',
    icon: FaYoutube,
  },
  {
    name: 'Pinterest',
    href: 'https://in.pinterest.com/cyberdefentech/',
    icon: FaPinterestP,
  },
];

function FollowUs() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const emailInputId = useId();

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setIsSubscribed(true);
    // Connect your newsletter API here when it is ready.
  };

  return (
    <section className="section follow-us" aria-labelledby="follow-us-title">
      <div className="container follow-container">
        <div className="follow-social">
          <span className="follow-eyebrow">Stay connected</span>
          <h2 id="follow-us-title">Grow with the security community.</h2>
          <p>
            Follow CyberDefentech for practical insights, learning resources,
            industry updates and opportunities to move your cybersecurity
            career forward.
          </p>

          <nav
            className="social-links-large"
            aria-label="CyberDefentech social media links"
          >
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                href={href}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow CyberDefentech on ${name}`}
              >
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </a>
            ))}
          </nav>

          <Link to="/enquiry" className="cta-button follow-primary-cta">
            Join the community
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="newsletter" aria-labelledby="newsletter-title">
          <div className="newsletter-icon" aria-hidden="true">
            <FaShieldAlt />
          </div>
          <span className="newsletter-eyebrow">Cybersecurity insights</span>
          <h2 id="newsletter-title">Stay one step ahead.</h2>
          <p>
            Get course updates, career guidance and cybersecurity insights
            delivered directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="newsletter-success" role="status" aria-live="polite">
              <FaCheckCircle aria-hidden="true" />
              <span>You are on the list. Thank you for subscribing.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <label className="sr-only" htmlFor={emailInputId}>
                Email address
              </label>
              <input
                id={emailInputId}
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
              <button type="submit" className="cta-button">
                Subscribe
                <FaArrowRight aria-hidden="true" />
              </button>
            </form>
          )}

          <small className="newsletter-note">
            No spam. Only useful cybersecurity content.
          </small>
        </div>
      </div>
    </section>
  );
}

export default FollowUs;
