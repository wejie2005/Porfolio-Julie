import React from 'react';

const Credentials: React.FC = () => {
  return (
    <section id="certifications" className="credentials-section">
      <h2 className="section-title">Certifications & Advanced Training</h2>
      
      <div className="credentials-grid">
        {/* Certification Thumbnail Card */}
        <div className="credential-card certification">
          <div className="card-icon-wrapper">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="card-icon"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" 
              />
            </svg>
          </div>
          <h3 className="card-title">Verified Certifications</h3>
          <p className="card-desc">Official industry credentials validating foundations in Software Engineering and Data Analytics platforms.</p>
          <span className="badge-count">2 Active Badges</span>
        </div>

        {/* Training Thumbnail Card */}
        <div className="credential-card training">
          <div className="card-icon-wrapper">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="card-icon"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4.26 10.174L10.74 14.15a1.2 1.2 0 001.258 0l6.478-3.976m-14.976 0a1.2 1.2 0 01-.58-1.018v-3.111c0-.737.433-1.403 1.096-1.71l6.478-3.01a1.2 1.2 0 011.096 0l6.478 3.01a1.2 1.2 0 011.096 1.71v3.111c0 .408-.208.789-.58 1.018M4.26 10.174L12 14.914l7.74-4.74M6.118 13H4.03a1.2 1.2 0 00-1.2 1.2v3.6c0 .663.537 1.2 1.2 1.2h2.088c.663 0 1.2-.537 1.2-1.2v-3.6c0-.663-.537-1.2-1.2-1.2zm11.764 0h2.088c.663 0 1.2.537 1.2 1.2v3.6c0 .663-.537 1.2-1.2 1.2h-2.088a1.2 1.2 0 01-1.2-1.2v-3.6c0-.663.537-1.2 1.2-1.2z" 
              />
            </svg>
          </div>
          <h3 className="card-title">Advanced Training & Workshops</h3>
          <p className="card-desc">Completed specialized bootcamps and intensive technical courses focusing on Modern Frameworks and AI systems.</p>
          <span className="badge-count">Completed Courses</span>
        </div>
      </div>
    </section>
  );
};

export default Credentials;