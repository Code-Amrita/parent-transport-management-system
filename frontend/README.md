# Parent Transport Management System (PTMS) Frontend

Welcome to the frontend repository of the Parent Transport Management System (PTMS). This project is designed to streamline and manage vehicle check-ins and check-outs for parents visiting the campus. The frontend is built using React.js and styled with Tailwind CSS to ensure a modern, responsive, and user-friendly interface.

## Table of Contents

- Features
- Folder Structure
- Installation
- Usage
- Tech Stack
- License

## Features

- **Role-Based Portals:** Separate interfaces for Students/Parents, Wardens, and Security personnel.
- **Dashboard Views:** Interactive dashboards tailored to user roles.
- **QR Code Generation:** Parents can generate QR codes for vehicle entry.
- **Navigation Panel:** Role-specific navigation with a clean and responsive design.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern UI:** Styled with Tailwind CSS for a sleek and intuitive interface.
- **Dynamic Routing:** Powered by React Router for seamless navigation.

## Folder Structure

```
frontend/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── amrita-logo.webp
│   │       └── logo.png
│   ├── components/
│   │   ├── login/
│   │   │   ├── Login.jsx
│   │   │   └── LoginSelection.jsx
│   │   ├── portals/
│   │   │   ├── security/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── student-parent/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── GenerateEntryID.jsx
│   │   │   │   └── VisitHistory.jsx
│   │   │   └── warden/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── Layout.jsx
│   │   │       ├── SecurityLayout.jsx
│   │   │       ├── StudentParentLayout.jsx
│   │   │       └── WardenLayout.jsx
│   │   ├── LeftPanel.jsx
│   │   ├── PTMS.jsx
│   │   └── Portal.jsx
│   ├── styles/
│   │   ├── LeftPanel.css
│   │   ├── Login.css
│   │   ├── LoginSelection.css
│   │   └── index.css
│   ├── App.jsx
│   └── index.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/ptms-frontend.git
   cd ptms-frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

The app will run on (http://localhost:3000).

## Usage

1. **Login Page:**
   Users select their role (Student/Parent, Warden, Security) and log in.

2. **Role-Specific Dashboards:**

   - **Students/Parents:** Access dashboards, generate QR codes, and view visit history.
   - **Wardens:** Manage active requests and view student visit history.
   - **Security Personnel:** Scan entry/exit QR codes and view visitor logs.

3. **Navigation:**
   Use the side panel to navigate through the different sections based on your role.

## Tech Stack

- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **QR Code Generation:** (https://www.npmjs.com/package/qrcode.react)


## License

This project is licensed under the [MIT License](LICENSE).
