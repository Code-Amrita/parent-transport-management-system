import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import { Home, Search, LogOut, Clipboard } from 'lucide-react';

const links = [
  { name: 'Dashboard', path: '/portal/security', icon: Home },
  { name: 'Scan Entry', path: '/portal/security/scan-entry', icon: Search },
  { name: 'Scan Exit', path: '/portal/security/scan-exit', icon: LogOut },
  { name: 'Visitor Log', path: '/portal/security/visitor-log', icon: Clipboard },
];

const SecurityLayout = () => {
  return (
    <Layout links={links}>
      <Outlet />
    </Layout>
  );
};

export default SecurityLayout;

