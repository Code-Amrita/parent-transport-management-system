import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PTMS from './components/PTMS';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PTMS />} />
        <Route path="/login/:role" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

