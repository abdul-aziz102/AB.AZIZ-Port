import React from "react";
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

const App = () => {
  return (
    <div className="w-full  bg-black text-white">
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
