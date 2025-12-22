import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/MenuSection'; // Component exported as ProductSection inside MenuSection.tsx
import MuseAI from './components/MuseAI';
import Gallery from './components/Gallery';
import Diagnosis from './components/Diagnosis';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <main>
        <Hero />
        <Diagnosis />
        <ProductSection />
        <MuseAI />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
