import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PTMS from './components/PTMS';
import Login from './components/login/Login';
import Portal from './components/Portal';

// Add Tailwind CSS directives
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PTMS />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/portal/*" element={<Portal />} />
      </Routes>
    </Router>
  );
};

export default App;

