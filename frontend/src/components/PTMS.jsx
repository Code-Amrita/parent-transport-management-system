import React from 'react';
import LeftPanel from './LeftPanel';
import LoginSelection from './LoginSelection';

const PTMS = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      <LeftPanel />
      <LoginSelection />
    </div>
  );
};

export default PTMS;

