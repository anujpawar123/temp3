import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bottom-nav-container">
      <div className="nav-items">
        {/* Home */}
        <Link to="/home" className={`nav-item ${path === '/home' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor"></path>
          </svg>
          <span>Home</span>
        </Link>

        {/* History */}
        {/* History */}
        <Link to="/history" className={`nav-item ${path === '/history' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>History</span>
        </Link>

        {/* Center FAB Spacer */}
        <div className="nav-item fab-spacer"></div>

        {/* Wallet */}
        <Link to="/wallet" className={`nav-item ${path === '/wallet' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
            <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
          </svg>
          <span>Wallet</span>
        </Link>

        {/* Account */}
        <Link to="/account" className={`nav-item ${path === '/account' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Account</span>
        </Link>
      </div>

      {/* Floating Action Button (Play) */}
      <div className="fab-container">
        <button className="fab-button">
          <svg className="fab-icon" viewBox="0 0 24 24" fill="white">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"></path>
          </svg>
          <span className="fab-text">Play</span>
        </button>
        <div className="fab-glow"></div>
      </div>
    </div>
  );
};

export default BottomNav;
