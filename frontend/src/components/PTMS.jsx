import React from 'react';
import LeftPanel from './LeftPanel';
import LoginSelection from './login/LoginSelection';

const PTMS = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <LeftPanel />
        <LoginSelection />
      </div>
    </div>
  );
};

export default PTMS;
