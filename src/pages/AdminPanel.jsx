import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [paymentActive, setPaymentActive] = useState(false);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const checkStatus = async () => {
    setIsRefreshing(true);
    try {
      const API_URL = 'https://crudcrud.com/api/0227c61d1dbf49cda32882a1e02a3ed4/status/6a3823caee62c203e8573135';
      const res = await fetch(API_URL);
      const json = await res.json();
      const count = json.count || 0;
      setPaymentActive(count > 0);
    } catch (e) {
      console.error('Failed to fetch payment status', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    checkStatus(); // Check immediately on mount
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* Content */}
      <div className="admin-content">
        <div className="admin-card">
          <div className="admin-card-header">
            <h2 className="admin-card-title">Live Payment Gateway Monitor</h2>
            <button 
              className={`refresh-btn ${isRefreshing ? 'refreshing' : ''}`}
              onClick={checkStatus}
              disabled={isRefreshing}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              Refresh
            </button>
          </div>
          
          <div className="monitor-status-box">
            {paymentActive ? (
              <div className="status-active">
                <div className="pulse-dot red-dot"></div>
                <span className="status-text active-text">Someone is on the payment page!</span>
              </div>
            ) : (
              <div className="status-inactive">
                <div className="pulse-dot grey-dot"></div>
                <span className="status-text inactive-text">No one is on the payment page.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
