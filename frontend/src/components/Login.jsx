import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const roles = [
  { id: 'parent', label: 'Parent/Student', color: 'linear-gradient(to right, #7c3aed, #4f46e5)' },
  { id: 'warden', label: 'Warden', color: 'linear-gradient(to right, #2563eb, #06b6d4)' },
  { id: 'admin', label: 'Admin', color: 'linear-gradient(to right, #ea580c, #dc2626)' },
  { id: 'security', label: 'Security', color: 'linear-gradient(to right, #059669, #0d9488)' }
];

const loginFields = {
  parent: [
    { label: 'Roll Number', type: 'text', placeholder: 'Enter roll number' },
    { label: 'Password', type: 'password', placeholder: 'Enter password' }
  ],
  warden: [
    { label: 'Hostel ID', type: 'text', placeholder: 'Enter hostel ID' },
    { label: 'Password', type: 'password', placeholder: 'Enter password' }
  ],
  admin: [
    { label: 'Username', type: 'text', placeholder: 'Enter username' },
    { label: 'Password', type: 'password', placeholder: 'Enter password' }
  ],
  security: [
    { label: 'Username', type: 'text', placeholder: 'Enter username' },
    { label: 'Password', type: 'password', placeholder: 'Enter password' }
  ]
};

const Login = () => {
  const { role } = useParams();
  const selectedRole = roles.find(r => r.id === role);

  return (
    <div style={{
      width: '50%',
      backgroundColor: 'white',
      padding: '48px'
    }}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Link to="/" style={{
          alignSelf: 'flex-start',
          marginBottom: '32px',
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          alignItems: 'center'
        }}>
          <ArrowLeft style={{ marginRight: '8px', height: '16px', width: '16px' }} /> Back
        </Link>
        
        <div style={{ maxWidth: '400px' }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '32px',
            backgroundImage: selectedRole.color,
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            {selectedRole.label} Login
          </h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {loginFields[role].map((field, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#334155' }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%',
                    padding: '8px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px'
                  }}
                />
              </div>
            ))}
            <button 
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                fontWeight: '600',
                backgroundImage: selectedRole.color,
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

