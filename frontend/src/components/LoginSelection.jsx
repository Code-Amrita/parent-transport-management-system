import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, UserCog, User } from 'lucide-react';

const roles = [
  { id: 'parent', label: 'Parent/Student', icon: Users, color: 'linear-gradient(to right, #7c3aed, #4f46e5)' },
  { id: 'warden', label: 'Warden', icon: Shield, color: 'linear-gradient(to right, #2563eb, #06b6d4)' },
  { id: 'admin', label: 'Admin', icon: UserCog, color: 'linear-gradient(to right, #ea580c, #dc2626)' },
  { id: 'security', label: 'Security', icon: User, color: 'linear-gradient(to right, #059669, #0d9488)' }
];

const LoginSelection = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div style={{
      width: '50%',
      backgroundColor: 'white',
      padding: '48px'
    }}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px'
        }}>
          {roles.map(({ id, label, icon: Icon, color }) => (
            <Link
              key={id}
              to={`/login/${id}`}
              style={{
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'left',
                transition: 'all 0.3s',
                textDecoration: 'none',
                color: isHovered === id ? 'white' : 'inherit',
                background: isHovered === id ? color : '#e1dede'
              }}
              onMouseEnter={() => setIsHovered(id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Icon style={{
                height: '32px',
                width: '32px',
                marginBottom: '12px',
                color: isHovered === id ? 'white' : 'transparent',
                backgroundImage: color,
                WebkitBackgroundClip: 'text'
              }} />
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '4px'
              }}>{label}</h3>
              <p style={{
                fontSize: '0.875rem',
                color: isHovered === id ? 'rgba(255, 255, 255, 0.8)' : '#64748b'
              }}>
                Access your {label.toLowerCase()} dashboard
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;

