import React from 'react'
import Navbar from './components/Navbar'  // Fixed import name
import Banner from './components/Banner'
import SkillsComponent from './components/Skill'
import ProjectsPage from './components/Project'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skillpage from './pages/Skillpage'
import Home from './pages/Home'

const App = () => {
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
        <Route path="/skills" element={<Skillpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App