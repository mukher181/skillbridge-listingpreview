import { Link } from 'react-router-dom';
import './ListingDetail.css';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>
        <h2>Page Not Found</h2>
        <p>
        The page or listing you are looking for does not exist on SkillBridge Lite.
        </p>
        <Link to="/" className="back-btn">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}