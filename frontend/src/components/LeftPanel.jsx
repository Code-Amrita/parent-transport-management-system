import React from 'react';
import amrita_logo from '../../public/images/amrita-logo.webp';
import { LayoutDashboard } from 'lucide-react';

const LeftPanel = () => {
  return (
    <div style={{
      width: '50%',
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <img
          src={amrita_logo}
          alt="Logo"
          style={{ marginBottom: '32px', width: '200px' }}
        />
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '16px' }}>
          Welcome to Parent Transport 
          <br />Management System
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>
          Select your role to access the system
        </p>
      </div>
      
      <div style={{ marginTop: '32px' }}>
        <LayoutDashboard size={40} color="#ffffff" />
      </div>
    </div>
  );
};

export default LeftPanel;

