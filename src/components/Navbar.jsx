import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-badge">SB</span> SkillBridge <span className="sub-title">Lite</span>
        </div>
        <div className="navbar-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Listings
          </NavLink>
          <NavLink 
            to="/apply" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}