import { useParams, Link } from 'react-router-dom';
import { listings } from '../data/listings';
import './ListingDetail.css';

export default function ListingDetail() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return (
      <div className="not-found-wrapper">
        <div className="not-found-card">
          <h2>Listing Not Found</h2>
          <p>The position ID specified in the URL does not exist or has been removed.</p>
          <Link to="/" className="back-btn">Return to Listings</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page-wrapper">
      <header className="page-hero-banner small-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge">Opportunity Details</span>
          <h1>{listing.title}</h1>
        </div>
      </header>

      <div className="main-container">
        {/* Left Side: Role Information */}
        <main className="detail-main-content">
          <Link to="/" className="back-link">&larr; Back to Listings</Link>
          
          <div className="detail-card">
            <div className="meta-row">
              <span className="location-pill">📍 {listing.location}</span>
              <span className="status-pill">🟢 Open for Applications</span>
            </div>
            
            <p className="company-heading">Company: <strong>{listing.company}</strong></p>
            <hr className="divider" />

            <h3>Role Overview & Requirements</h3>
            <p className="description-text">{listing.description}</p>

            <div className="perks-box">
              <h4>What You Will Learn & Experience:</h4>
              <ul>
                <li>Direct exposure to real projects and industry mentorship.</li>
                <li>Collaborative workflows using modern development practices.</li>
                <li>Certification and performance evaluation upon completion.</li>
              </ul>
            </div>

            <Link to="/apply" className="apply-trigger-btn">Apply For This Internship</Link>
          </div>
        </main>

        {/* Right Side: Quick Company Summary */}
        <aside className="sidebar-section">
          <div className="sidebar-card">
            <h3>About {listing.company}</h3>
            <p>A trusted partner organization hosting student interns through SkillBridge Lite.</p>
            <div className="info-item">
              <strong>Location:</strong> {listing.location}
            </div>
            <div className="info-item">
              <strong>Type:</strong> Internship Program
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}