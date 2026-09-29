import { Link } from 'react-router-dom'

import ecCouncilLogo from '../../assets/partners/ec-council.png'
import splunkLogo from '../../assets/partners/splunk.png'
import pmiLogo from '../../assets/partners/pmi.png'
import tuvLogo from '../../assets/partners/tuv.png'
import isc2Logo from '../../assets/partners/isc2.png'
import comptiaLogo from '../../assets/partners/comptia.png'
import awsLogo from '../../assets/partners/aws.png'
import vmwareLogo from '../../assets/partners/vmware.png'
import isacaLogo from '../../assets/partners/isaca.png'
import offsecLogo from '../../assets/partners/offsec.png'
import ciscoLogo from '../../assets/partners/cisco.png'
import microsoftLogo from '../../assets/partners/microsoft.png'
import oracleLogo from '../../assets/partners/oracle.png'

import '../../pages/Home.css'

const partners = [
  {
    name: 'EC-Council',
    logo: ecCouncilLogo,
    slug: 'ec-council',
    description: 'Cybersecurity education and professional certifications',
  },
  {
    name: 'Splunk',
    logo: splunkLogo,
    slug: 'splunk',
    description: 'Security analytics and observability solutions',
  },
  {
    name: 'PMI',
    logo: pmiLogo,
    slug: 'pmi',
    description: 'Project management standards and excellence',
  },
  {
    name: 'TÜV',
    logo: tuvLogo,
    slug: 'tuv',
    description: 'Testing, inspection, and certification standards',
  },
  {
    name: '(ISC)²',
    logo: isc2Logo,
    slug: 'isc2',
    description: 'Global cybersecurity education and community',
  },
  {
    name: 'CompTIA',
    logo: comptiaLogo,
    slug: 'comptia',
    description: 'Industry-recognized technology certifications',
  },
  {
    name: 'AWS',
    logo: awsLogo,
    slug: 'aws',
    description: 'Cloud computing and infrastructure expertise',
  },
  {
    name: 'VMware',
    logo: vmwareLogo,
    slug: 'vmware',
    description: 'Virtualization and enterprise cloud technology',
  },
  {
    name: 'ISACA',
    logo: isacaLogo,
    slug: 'isaca',
    description: 'IT governance, audit, risk, and cybersecurity',
  },
  {
    name: 'OffSec',
    logo: offsecLogo,
    slug: 'offsec',
    description: 'Practical offensive security training',
  },
  {
    name: 'Cisco',
    logo: ciscoLogo,
    slug: 'cisco',
    description: 'Networking, security, and digital infrastructure',
  },
  {
    name: 'Microsoft',
    logo: microsoftLogo,
    slug: 'microsoft',
    description: 'Cloud, productivity, and enterprise technology',
  },
  {
    name: 'Oracle',
    logo: oracleLogo,
    slug: 'oracle',
    description: 'Enterprise software, cloud, and database technology',
  },
]

function CollaborativeNetwork() {
  return (
    <section
      className="section collaborative-network"
      aria-labelledby="collaborative-network-title"
    >
      <div className="container collaborative-network-container">
        <header className="network-heading">
          <span className="network-eyebrow">Trusted Collaborations</span>
          <h2 id="collaborative-network-title" className="section-title">
            Our Collaborative Network
          </h2>
          <p className="network-intro">
            We collaborate with globally recognized organizations to connect
            learners with industry knowledge, practical expertise, and
            career-focused opportunities.
          </p>
        </header>

        <div className="network-logos" role="list" aria-label="Our partner organizations">
          {partners.map((partner) => (
            <Link
              key={partner.slug}
              to={`/partners/${partner.slug}`}
              className="logo-item"
              role="listitem"
              aria-label={`Learn more about ${partner.name}`}
            >
              <span className="partner-logo-wrapper">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="partner-logo"
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span className="partner-name">{partner.name}</span>
              <span className="partner-description">{partner.description}</span>

              <span className="partner-link-text" aria-hidden="true">
                View partnership <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaborativeNetwork
