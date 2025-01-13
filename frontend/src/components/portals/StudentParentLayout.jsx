import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import { Home, FileText, Clock, MessageSquare } from 'lucide-react';

const links = [
  { name: 'Dashboard', path: '/portal/student-parent', icon: Home },
  { name: 'Generate Entry ID', path: '/portal/student-parent/generate-entry', icon: FileText },
  { name: 'Visit History', path: '/portal/student-parent/visit-history', icon: Clock },
  { name: 'Contact Support', path: '/portal/student-parent/contact-support', icon: MessageSquare },
];

const StudentParentLayout = () => {
  return (
    <Layout links={links}>
      <Outlet />
    </Layout>
  );
};

export default StudentParentLayout;

