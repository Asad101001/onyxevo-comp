import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesArena from './components/GamesArena';
import Schedule from './components/Schedule';
import Advisors from './components/Advisors';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#060608', color: '#f4f4f5' }}>
      {/* Intro sequence */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {/* Main Single Page Web App (Zero-input Information Showcase) */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />

        <main>
          <Hero />
          <GamesArena />
          <Schedule />
          <Advisors />
          <Collaboration />
        </main>

        <Footer />
      </div>
    </div>
  );
}
