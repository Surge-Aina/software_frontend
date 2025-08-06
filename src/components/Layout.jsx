import React from 'react';

const sections = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
];

const Layout = ({ children, user, logout }) => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <nav className="top-nav">
        <ul className="nav-links">
          <div className="left-nav">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="https://www.linkedin.com/in/gayathri-nuthana-ganti-524274352" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-btn"
              >
                Contact
              </a>
            </li>
          </div>
          {user && (
            <div className="right-nav">
              <li className="user-greeting">
                <span>Hi, {user.role === 'admin' ? 'Admin' : 'Customer'}</span>
              </li>
              <li>
                <button onClick={logout} className="nav-logout-btn">
                  Logout
                </button>
              </li>
            </div>
          )}
        </ul>
      </nav>
      <div className="page-container">
        {children}
      </div>
    </>
  );
};

export default Layout; 