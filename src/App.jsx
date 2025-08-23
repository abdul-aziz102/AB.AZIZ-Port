import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SkillsComponent from './components/Skill';
import ProjectsPage from './components/Project';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Skills } from './pages/Skills'; // ✅ Import the floating widget
import { Chat } from './components/Chat'
import ServicesPage from './pages/Services';
import VapiAgent from './components/VapiWidget';

const App = () => {
  console.log("App component rendered");
  
  return (
    <Router>
      <Navbar />
      <Chat />
      <VapiAgent />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <SkillsComponent />
            <ServicesPage />
            <ProjectsPage />
            <AboutPage />
            <ContactPage />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
 {/* ✅ Always visible floating chatbot icon */}
      <Footer />
    </Router>
  );
};

export default App;
