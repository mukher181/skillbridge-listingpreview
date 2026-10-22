import { Link } from 'react-router-dom';
import { listings } from '../data/listings';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page-wrapper">
      {/* Top Banner with Background Overlay */}
      <header className="page-hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge">Student Opportunity Platform</span>
          <h1>SkillBridge Lite Listings</h1>
          <p>Connecting ambition with market-ready internship positions.</p>
        </div>
      </header>

      {/* Main 2-Column Content Layout */}
      <div className="main-container">
        {/* Left Side: Primary Listings Grid */}
        <main className="listings-section">
          <div className="section-header">
            <h2>Available Internship Listings</h2>
            <p>Select any position to view full details and requirements.</p>
          </div>

          <div className="listings-grid">
            {listings.map((item) => (
              <div key={item.id} className="listing-card">
                <span className="location-pill">📍 {item.location}</span>
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
                <p className="desc">{item.description}</p>
                <Link to={`/listings/${item.id}`} className="view-btn">
                  View Position &rarr;
                </Link>
              </div>
            ))}
          </div>
        </main>

        {/* Right Side: Informational Sidebar Cards */}
        <aside className="sidebar-section">
          <div className="sidebar-card highlight-box">
            <h3>Why SkillBridge Lite?</h3>
            <p>We bridge the skill gap between student learning and industry requirements.</p>
            <ul className="perks-list">
              <li>✅ Curated Tech Opportunities</li>
              <li>✅ Direct Application Flow</li>
              <li>✅ Industry-Aligned Tracks</li>
            </ul>
          </div>

          <div className="sidebar-card info-box">
            <h3>Need Guidance?</h3>
            <p>Explore positions carefully before submitting your application in the apply portal.</p>
            <Link to="/apply" className="sidebar-apply-link">Go to Application Form</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}