import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import './TopHeader.css';

const contactItems = [
  {
    label: 'Rohini, Delhi',
    href: 'https://www.google.com/maps/search/?api=1&query=Rohini%2C%20Delhi',
    icon: FaMapMarkerAlt,
    external: true,
  },
  {
    label: '+91 84480 46612',
    href: 'tel:+918448046612',
    icon: FaPhoneAlt,
  },
  {
    label: 'training@cyberdefentech.com',
    href: 'mailto:training@cyberdefentech.com',
    icon: FaEnvelope,
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cyberdefentech?stkn=a29sYzF2aG4zaHZ0',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cyberhorizon-defentech/',
    icon: FaLinkedin,
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
    icon: FaPinterest,
  },
];

function TopHeader() {
  return (
    <header className="top-header" aria-label="Contact information and social links">
      <div className="top-header-inner">
        <div className="top-header-left">
          {contactItems.map(({ label, href, icon: Icon, external }) => (
            <a
              className="top-item"
              href={href}
              key={label}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Icon className="top-icon" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <nav className="top-header-right" aria-label="Social media links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow CyberDefentech on ${label}`}
            >
              <Icon className="social-icon" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default TopHeader;
