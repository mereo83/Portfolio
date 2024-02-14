import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import BlogSection from './components/BlogSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main className="container mt-4">
        <BlogSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
