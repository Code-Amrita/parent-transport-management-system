import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import { Home, Clipboard, Clock, Settings } from 'lucide-react';

const links = [
  { name: 'Dashboard', path: '/portal/warden', icon: Home },
  { name: 'Active Requests', path: '/portal/warden/active-requests', icon: Clipboard },
  { name: 'Student Visit History', path: '/portal/warden/visit-history', icon: Clock },
  { name: 'Settings', path: '/portal/warden/settings', icon: Settings },
];

const WardenLayout = () => {
  return (
    <Layout links={links}>
      <Outlet />
    </Layout>
  );
};

export default WardenLayout;

