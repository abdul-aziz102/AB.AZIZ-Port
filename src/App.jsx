import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SkillsComponent from "./components/Skill";
import ProjectsPage from "./components/Project";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Skills } from "./pages/Skills";
import ServicesPage from "./pages/Services";
import OrbitingSkills from "./components/ui/orbiting-skills";
import { ParticleTextEffect } from "./components/ui/particle-text-effect";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // 5 second baad intro screen band ho jaye
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 12000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    // Sirf intro screen show karega
    return <ParticleTextEffect words={["WELCOME", "MY PORTFOLIO", "BY AZIZ"]} />;
  }

  // Baad me normal website load karegi
  return (
    <div className="w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <SkillsComponent />
                <OrbitingSkills />
                <ServicesPage />
                <ProjectsPage />
                <AboutPage />
                <ContactPage />
              </>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
