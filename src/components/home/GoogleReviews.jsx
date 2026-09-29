import { FaGoogle, FaStar, FaQuoteLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { reviewsData, googleRating } from '../../data/reviewsData'
import './GoogleReviews.css'

function StarRating({ count = 0, label = 'Rating' }) {
  const safeCount = Math.max(0, Math.min(5, Math.round(Number(count) || 0)))

  return (
    <div className="gr-stars" aria-label={`${label}: ${safeCount} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < safeCount ? 'gr-star-filled' : 'gr-star-empty'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function GoogleReviews() {
  const averageRating = Number(googleRating.average) || 0
  const totalReviews = Number(googleRating.totalReviews) || 0

  return (
    <section
      className="section google-reviews"
      aria-labelledby="google-reviews-title"
    >
      <div className="container google-reviews-container">
        <header className="gr-heading">
          <span className="gr-eyebrow">Learner Experiences</span>
          <h2 id="google-reviews-title" className="section-title">
            What Our Students Say
          </h2>
          <p className="gr-intro">
            Real feedback from learners who have developed practical skills and
            taken the next step in their cybersecurity journey.
          </p>

          <div className="gr-summary" aria-label="Google review summary">
            <span className="gr-google-mark" aria-hidden="true">
              <FaGoogle />
            </span>
            <span className="gr-rating-value">{averageRating.toFixed(1)}</span>
            <StarRating count={averageRating} label="Google rating" />
            <span className="gr-count">
              Based on {totalReviews.toLocaleString('en-IN')} Google Reviews
            </span>
          </div>
        </header>

        <div className="gr-grid" role="list" aria-label="Student reviews">
          {reviewsData.map((review, index) => {
            const reviewerName = review.name || 'Student'
            const reviewerInitial = reviewerName.trim().charAt(0).toUpperCase()

            return (
              <article className="gr-card" key={review.id || `${reviewerName}-${index}`} role="listitem">
                <div className="gr-card-topline">
                  <FaQuoteLeft className="gr-quote-icon" aria-hidden="true" />
                  <span className="gr-verified">
                    <FaGoogle aria-hidden="true" /> Verified review
                  </span>
                </div>

                <div className="gr-card-header">
                  <div className="gr-avatar" aria-hidden="true">
                    {reviewerInitial}
                  </div>
                  <div className="gr-reviewer-details">
                    <p className="gr-name">{reviewerName}</p>
                    <StarRating count={review.rating} label={`${reviewerName}'s rating`} />
                  </div>
                </div>

                <blockquote className="gr-text">“{review.text}”</blockquote>
                <time className="gr-date">{review.date}</time>
              </article>
            )
          })}
        </div>

        <div className="gr-cta">
          <a
            href={googleRating.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gr-btn"
          >
            <FaGoogle aria-hidden="true" />
            View All Reviews on Google
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews
