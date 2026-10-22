import { useState } from 'react';
import './Apply.css';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required.';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="apply-page-wrapper">
      <header className="page-hero-banner small-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge">Application Portal</span>
          <h1>Submit Your Internship Application</h1>
        </div>
      </header>

      <div className="main-container">
        {/* Left Side: Controlled Form */}
        <main className="form-main-section">
          <div className="form-card">
            <div className="form-header">
              <h2>Applicant Information</h2>
              <p>Fill out the required fields below to proceed with your application.</p>
            </div>

            {isSubmitted ? (
              <div className="success-box" role="alert">
                <h3>🎉 Application Submitted!</h3>
                <p>Thank you, <strong>{formData.name}</strong>. We have received your application.</p>
                <div className="simulation-badge">
                  *(Note: Simulated local state submission — no backend connected)*
                </div>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="reset-btn"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apply-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Alex Morgan"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Short Cover Note / Skills Summary</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background or motivation..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            )}
          </div>
        </main>

        {/* Right Side: Informational Widget */}
        <aside className="sidebar-section">
          <div className="sidebar-card highlight-box">
            <h3>You Can Get Internship</h3>
            <p className="highlight-tag">LIMITED SEATS — APPLY NOW!</p>
            <p>SkillBridge Lite connects student skills directly to active listings.</p>
            
            <div className="tracks-grid">
              <div className="track-badge">Frontend Web</div>
              <div className="track-badge">Backend APIs</div>
              <div className="track-badge">UI/UX Design</div>
              <div className="track-badge">Data Analytics</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}