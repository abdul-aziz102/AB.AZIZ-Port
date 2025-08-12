import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SkillsComponent from './components/Skill';
import ProjectsPage from './components/Project';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chatbot from './pages/Chatbot';
import { Skills } from './pages/Skills';
import ChatbotWidget from './components/ChatbotWidget'; // ✅ Import the floating widget

const App = () => {
  console.log("App component rendered");
  
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <SkillsComponent />
            <ProjectsPage />
            <AboutPage />
            <ContactPage />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>

      <ChatbotWidget /> {/* ✅ Always visible floating chatbot icon */}
      <Footer />
    </Router>
  );
};

export default App;
