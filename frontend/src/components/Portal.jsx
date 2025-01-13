import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import StudentParentLayout from './portals/StudentParentLayout';
import WardenLayout from './portals/WardenLayout';
import SecurityLayout from './portals/SecurityLayout';
import StudentParentDashboard from './portals/student-parent/Dashboard';
import GenerateEntryID from './portals/student-parent/GenerateEntryID';
import VisitHistory from './portals/student-parent/VisitHistory';
import WardenDashboard from './portals/warden/Dashboard';
import SecurityDashboard from './portals/security/Dashboard';

const Portal = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portal/student-parent" replace />} />
      
      <Route path="/student-parent" element={<StudentParentLayout />}>
        <Route index element={<StudentParentDashboard />} />
        <Route path="generate-entry" element={<GenerateEntryID />} />
        <Route path="visit-history" element={<VisitHistory />} />
        <Route path="contact-support" element={<div>Contact Support</div>} />
      </Route>
      
      <Route path="/warden" element={<WardenLayout />}>
        <Route index element={<WardenDashboard />} />
        <Route path="active-requests" element={<div>Active Requests</div>} />
        <Route path="visit-history" element={<div>Student Visit History</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
      
      <Route path="/security" element={<SecurityLayout />}>
        <Route index element={<SecurityDashboard />} />
        <Route path="scan-entry" element={<div>Scan Entry</div>} />
        <Route path="scan-exit" element={<div>Scan Exit</div>} />
        <Route path="visitor-log" element={<div>Visitor Log</div>} />
      </Route>

      <Route path="*" element={<div>404: Not Found</div>} />
    </Routes>
  );
};

export default Portal;

