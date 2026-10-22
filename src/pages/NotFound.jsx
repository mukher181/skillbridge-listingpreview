import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '6rem', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#ef4444', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', maxWidth: '450px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
        The page or listing you are looking for does not exist on SkillBridge Lite.
      </p>
      <Link 
        to="/" 
        style={{ background: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', display: 'inline-block', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}
      >
        Return to Dashboard
      </Link>
    </div>
  );
}