import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../../styles/Login.css";

const roles = [
  { id: "parent", label: "Parent/Student", color: "linear-gradient(to right, #7c3aed, #4f46e5)" },
  { id: "warden", label: "Warden", color: "linear-gradient(to right, #2563eb, #06b6d4)" },
  { id: "admin", label: "Admin", color: "linear-gradient(to right, #ea580c, #dc2626)" },
  { id: "security", label: "Security", color: "linear-gradient(to right, #059669, #0d9488)" }
];

const loginFields = {
  parent: [
    { label: "Roll Number", type: "text", placeholder: "Enter roll number" },
    { label: "Password", type: "password", placeholder: "Enter password" }
  ],
  warden: [
    { label: "Hostel ID", type: "text", placeholder: "Enter hostel ID" },
    { label: "Password", type: "password", placeholder: "Enter password" }
  ],
  admin: [
    { label: "Username", type: "text", placeholder: "Enter username" },
    { label: "Password", type: "password", placeholder: "Enter password" }
  ],
  security: [
    { label: "Username", type: "text", placeholder: "Enter username" },
    { label: "Password", type: "password", placeholder: "Enter password" }
  ]
};

const Login = () => {
  const { role } = useParams();
  const selectedRole = roles.find((r) => r.id === role);

  if (!selectedRole) {
    return <h1>Invalid Role</h1>;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <Link to="/" className="back-button">
          <ArrowLeft style={{ marginRight: "8px", height: "16px", width: "16px" }} /> Back to Role Selection
        </Link>
        <h2
          className="login-title"
          style={{
            backgroundImage: selectedRole.color,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {selectedRole.label} Login
        </h2>
        <form className="login-form">
          {loginFields[role].map((field, index) => (
            <div key={index} className="form-group">
              <label htmlFor={`field-${index}`}>{field.label}</label>
              <input id={`field-${index}`} type={field.type} placeholder={field.placeholder} />
            </div>
          ))}
          <button
            className="login-button"
            style={{
              backgroundImage: selectedRole.color
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
