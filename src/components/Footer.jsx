import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Global Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Launch Your Career with SkillBridge Lite?</h2>
          <p>
            Explore real-world internship opportunities, gain industry mentorship, and level up your tech skills today.
          </p>
          <div className="cta-actions">
            <Link to="/" className="cta-btn primary">Browse All Opportunities</Link>
            <Link to="/apply" className="cta-btn secondary">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* Main Footer Links & Information */}
      <div className="footer-content">
        <div className="footer-col brand-col">
          <h3>⚡ SkillBridge <span className="highlight">Lite</span></h3>
          <p>
            Connecting students with industry-ready internships and practical skill tracks.
          </p>
          <div className="social-links">
            <span>🌐 Web</span>
            <span>💼 LinkedIn</span>
            <span>📱 Community</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Active Programs</h4>
          <ul>
            <li>Frontend Engineering</li>
            <li>Backend Systems</li>
            <li>UI/UX Design</li>
            <li>Data Science & AI</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li><Link to="/">Home / Listings</Link></li>
            <li><Link to="/apply">Application Form</Link></li>
            <li><a href="#about">About Platform</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SkillBridge Lite. Built for Internship & Career Growth.</p>
      </div>
    </footer>
  );
}