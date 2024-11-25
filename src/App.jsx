import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutProduct from './components/AboutProduct';
import AboutInnovator from './components/AboutInnovator';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className=''>
    <NavBar/>
    <HeroSection />
    <AboutProduct/>
    <Products/>
    <AboutInnovator/>
    <Footer />
    </div>
  )
}

export default App
