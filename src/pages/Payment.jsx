import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const API_URL = 'https://crudcrud.com/api/0227c61d1dbf49cda32882a1e02a3ed4/status/6a3823caee62c203e8573135';

    const increment = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const currentCount = json.count || 0;
        await fetch(API_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: currentCount + 1 })
        });
      } catch (e) { console.error(e) }
    };

    const decrement = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const currentCount = json.count || 0;
        if (currentCount > 0) {
          await fetch(API_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: currentCount - 1 })
          });
        }
      } catch (e) { console.error(e) }
    };

    increment();

    return () => {
      decrement();
    };
  }, []);
  
  return (
    <div style={{
      width: '100%',
      minHeight: '100dvh',
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      position: 'relative'
    }}>
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          cursor: 'pointer',
          padding: '10px'
        }}
        onClick={() => navigate(-1)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </div>
      
      <h1 style={{ fontWeight: 600, fontSize: '1.5rem', letterSpacing: '1px' }}>
        Payment Gateway Simulator
      </h1>
      <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.9rem' }}>
        Awaiting payment integration...
      </p>
    </div>
  );
};

export default Payment;
