import { Link, useParams } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { getPartner } from '../data/partnersData'
import './PartnerDetail.css'

function PartnerDetail() {
  const { partnerSlug } = useParams()
  const partner = getPartner(partnerSlug)

  if (!partner) {
    return (
      <main className="pd-page">
        <div className="pd-container pd-notfound">
          <h1>Partner not found</h1>
          <Link to="/" className="pd-btn">Back to Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pd-page">
      <div className="pd-container">
        <Link to="/" className="pd-back">Back to Home</Link>

        <h1 className="pd-title">{partner.name} Certifications</h1>
        <p className="pd-subtitle">
          Explore the industry-recognized certifications we offer in partnership with {partner.name}.
        </p>

        <ul className="pd-cert-list">
          {partner.certifications.map((cert) => (
            <li key={cert} className="pd-cert-item">
              <FaCheckCircle className="pd-cert-icon" aria-hidden="true" />
              <span>{cert}</span>
            </li>
          ))}
        </ul>

        <div className="pd-cta">
          <Link to="/enquiry" state={{ course: partner.name }} className="pd-btn pd-btn-primary">
            Enquire Now
          </Link>
        </div>
      </div>
    </main>
  )
}

export default PartnerDetail