import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt,
  FaNetworkWired,
  FaUserShield,
  FaBug,
  FaCloud,
  FaDatabase,
  FaMobile,
  FaCode,
} from 'react-icons/fa';
import '../../pages/Home.css';

import penetrationTestingImg from '../../assets/services/penetration-testing.jpg';
import networkSecurityImg from '../../assets/services/network-security.jpg';
import socThreatImg from '../../assets/services/soc-threat-analysis.jpg';
import malwareImg from '../../assets/services/malware-analysis.jpg';
import cloudSecurityImg from '../../assets/services/cloud-security.jpg';
import digitalForensicsImg from '../../assets/services/digital-forensics.jpg';
import mobilePentestImg from '../../assets/services/mobile-pentesting.jpg';
import webAppSecImg from '../../assets/services/web-app-security.jpg';

function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      image: penetrationTestingImg,
      title: 'Penetration Testing Training',
      desc: 'Master ethical hacking techniques used by real-world professionals to identify and exploit vulnerabilities in systems and networks.',
    },
    {
      icon: <FaNetworkWired />,
      image: networkSecurityImg,
      title: 'Network Security',
      desc: 'Learn to design, implement, and monitor secure network architectures to defend against intrusions and cyber attacks.',
    },
    {
      icon: <FaUserShield />,
      image: socThreatImg,
      title: 'SOC & Threat Analysis',
      desc: 'Train as a Security Operations Center analyst — monitor alerts, investigate threats, and respond to incidents in real time.',
    },
    {
      icon: <FaBug />,
      image: malwareImg,
      title: 'Malware Analysis',
      desc: 'Understand how malware behaves, reverse-engineer samples, and build defenses against sophisticated attack payloads.',
    },
    {
      icon: <FaCloud />,
      image: cloudSecurityImg,
      title: 'Cloud Security',
      desc: 'Secure AWS, Azure, and GCP environments. Learn misconfiguration auditing, IAM security, and cloud-native threat detection.',
    },
    {
      icon: <FaDatabase />,
      image: digitalForensicsImg,
      title: 'Digital Forensics',
      desc: 'Conduct post-incident investigations, analyze artifacts, recover evidence, and build forensic reports accepted in legal contexts.',
    },
    {
      icon: <FaMobile />,
      image: mobilePentestImg,
      title: 'Mobile & App Pentesting',
      desc: 'Test Android and iOS applications for OWASP Mobile Top 10 vulnerabilities, API flaws, and insecure data storage.',
    },
    {
      icon: <FaCode />,
      image: webAppSecImg,
      title: 'Web Application Security',
      desc: 'Identify and exploit OWASP Top 10 vulnerabilities — SQL injection, XSS, CSRF, SSRF — using industry-standard tools and techniques.',
    },
  ];

  return (
    <section className="section home-services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services – All in One Solutions</h2>
        <p className="section-subtitle">
          From foundational training to advanced red-team operations, we offer end-to-end
          cybersecurity education tailored for the modern threat landscape.
        </p>

        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.title}>
              <div className="service-img-container">
                <img src={svc.image} alt={svc.title} className="service-img" />
                <div className="service-icon-badge">{svc.icon}</div>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/courses" className="cta-button">
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
