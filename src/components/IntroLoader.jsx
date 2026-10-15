import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div style={styles.overlay}>
      {/* Background glow */}
      <div style={styles.glowBackdrop} />

      <div style={styles.content}>
        {/* Emblem */}
        <div style={styles.emblemWrapper}>
          <div style={styles.pulseRing} />
          <img
            src="/logos/onyx-evo-emblem.jpg"
            alt="Onyx Evo 2026"
            style={styles.emblem}
          />
        </div>

        {/* Title & Tagline */}
        <div style={styles.textBlock}>
          <span style={styles.moduleTag}>CAREER CONNECT '26 • DCS - UBIT</span>
          <h1 style={styles.title}>ONYX EVO 2026</h1>
          <p style={styles.subtitle}>First Ever Professional E-Sports Competition at UBIT</p>
        </div>

        {/* Minimal Progress Bar */}
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>

        <div style={styles.metaRow}>
          <span>LAUNCHING OCTOBER 22ND</span>
          <span>{progress}%</span>
        </div>

        <button style={styles.skipBtn} onClick={onComplete}>
          <span>Enter Directly</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#08090d',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    transition: 'opacity 0.4s ease',
  },
  glowBackdrop: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(255, 42, 81, 0.18) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    maxWidth: '480px',
    width: '100%',
  },
  emblemWrapper: {
    position: 'relative',
    width: '130px',
    height: '130px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  pulseRing: {
    position: 'absolute',
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 42, 81, 0.4)',
    animation: 'pulseRing 2s infinite ease-out',
  },
  emblem: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 0 35px rgba(255, 42, 81, 0.45)',
  },
  textBlock: {
    marginBottom: '28px',
  },
  moduleTag: {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color: '#06b6d4',
    marginBottom: '8px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5vw, 2.6rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: 1.15,
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    fontWeight: 400,
  },
  progressTrack: {
    width: '100%',
    height: '3px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '10px',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #ff2a51, #06b6d4)',
    transition: 'width 0.05s linear',
  },
  metaRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#64748b',
    fontWeight: 600,
    letterSpacing: '0.06em',
    marginBottom: '24px',
  },
  skipBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '0.85rem',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'color 0.2s',
  },
};
