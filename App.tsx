import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Conferencing from './pages/Conferencing';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Route outside Layout */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Public Routes inside Layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/conferencing" element={<Conferencing />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;