import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import BlogSection from './components/BlogSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="Header" />
        <Navbar className="Navbar" />
        <main className="MainContent">
          <Routes>
            <Route path="/News" element={<News />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer className="Footer" />
      </div>
    </Router>
  );
}

export default App;
