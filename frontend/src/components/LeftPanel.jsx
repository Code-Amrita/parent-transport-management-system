import React from 'react';
import '../styles/LeftPanel.css';
import amrita_logo from '../assets/images/amrita-logo.webp';
import { LayoutDashboard } from 'lucide-react';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div>
        <img
          src={amrita_logo}
          width={200}px
          alt="Logo"
          className="logo"
        />
        <h1>
          Welcome to Parent Transport
          <br />Management System
        </h1>
        <p>
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

