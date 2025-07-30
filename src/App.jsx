import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CitizenDashboard from './components/CitizenDashboard';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS animations
    const initAOS = async () => {
      const AOS = await import('aos');
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    };
    
    initAOS();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
