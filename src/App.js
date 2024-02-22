import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import BlogSection from './components/BlogSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';
import Movie from './components/Movie';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="Header" />
        <Navbar className="Navbar" />
        <main className="MainContent">
          <Routes>
            <Route path='/Home' element={<Home></Home>}/>
            <Route path="/News" element={<News></News>} />
            <Route path="/Football" element={<Movie></Movie>} />
            <Route path="/blog" element={<BlogSection></BlogSection>} />
            <Route path="/portfolio" element={<PortfolioSection></PortfolioSection>} />
            <Route path="/skills" element={<SkillsSection></SkillsSection>} />
            <Route path="/contact" element={<Contact></Contact>} />
          </Routes>
        </main>
                <Footer className="Footer" />
      </div>
    </Router>
  );
}

export default App;
