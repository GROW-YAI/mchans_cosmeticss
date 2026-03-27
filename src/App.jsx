import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutProduct from './components/AboutProduct';
import AboutInnovator from './components/AboutInnovator';
import Products from './components/Products';
import Footer from './components/Footer';
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';

function App() {
  
  return (
    <div className='min-h-screen bg-white'>
      <BoafoWidgetInitializer />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavBar/>
      <main id="main-content">
        <HeroSection />
        <AboutProduct/>
        <Products/>
        <AboutInnovator/>
      </main>
      <Footer />
    </div>
  )
}

export default App
