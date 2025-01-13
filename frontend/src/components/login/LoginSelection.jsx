import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Users, UserCog, User } from "lucide-react";
import "../../styles/LoginSelection.css";

const roles = [
  { id: "parent", label: "Parent/Student", icon: Users, color: "linear-gradient(to right, #7c3aed, #4f46e5)" },
  { id: "warden", label: "Warden", icon: Shield, color: "linear-gradient(to right, #2563eb, #06b6d4)" },
  { id: "admin", label: "Admin", icon: UserCog, color: "linear-gradient(to right, #ea580c, #dc2626)" },
  { id: "security", label: "Security", icon: User, color: "linear-gradient(to right, #059669, #0d9488)" }
];

const LoginSelection = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="login-selection">
      <div className="login-selection-container">
        <div className="role-grid">
          {roles.map(({ id, label, icon: Icon, color }) => (
            <Link
              key={id}
              to={`/login/${id}`}
              className="role-button"
              style={{
                background: isHovered === id ? color : '#e1dede'
              }}
              onMouseEnter={() => setIsHovered(id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Icon
                className="role-icon"
                style={{
                  color: isHovered === id ? "white" : "transparent"
                }}
              />
              <h3
                className="role-title"
                style={{
                  color: isHovered === id ? "white" : "inherit"
                }}
              >
                {label}
              </h3>
              <p
                className="role-description"
                style={{
                  color: isHovered === id ? "rgba(255, 255, 255, 0.8)" : "#64748b"
                }}
              >
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
