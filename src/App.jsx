import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesArena from './components/GamesArena';
import Schedule from './components/Schedule';
import Advisors from './components/Advisors';
import Collaboration from './components/Collaboration';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';
import ToastContainer from './components/Toast';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [preselectedGame, setPreselectedGame] = useState('fc27');

  const handleOpenRegister = (game = 'fc27') => {
    setPreselectedGame(game);
    setIsRegisterOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#08090d', color: '#e2e8f0' }}>
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Intro sequence */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {/* Main Single Page Web App */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar onOpenRegister={() => handleOpenRegister('fc27')} />

        <main>
          <Hero onOpenRegister={() => handleOpenRegister('fc27')} />
          <GamesArena onRegisterGame={(gameId) => handleOpenRegister(gameId)} />
          <Schedule />
          <Advisors />
          <Collaboration />
        </main>

        <Footer onOpenRegister={() => handleOpenRegister('fc27')} />

        <RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          preselectedGame={preselectedGame}
        />
      </div>
    </div>
  );
}
