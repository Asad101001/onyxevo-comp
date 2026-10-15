import React, { useState, useEffect } from 'react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 28);
    return () => clearInterval(interval);
  }, [onComplete]);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onComplete, 500);
  };

  return (
    <div style={{
      ...styles.overlay,
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.5s ease',
    }}>
      {/* Subtle radial glow */}
      <div style={styles.glow} />

      {/* Center content */}
      <div style={styles.center}>
        {/* Logo */}
        <img
          src="/logos/onyx-evo-emblem.jpg"
          alt="Onyx Evo"
          style={styles.logo}
        />

        {/* Title */}
        <h1 style={styles.title}>
          ONYX EVO <span style={styles.accent}>2026</span>
        </h1>

        <p style={styles.sub}>UBIT ESPORTS ARENA • CAREER CONNECT '26</p>

        {/* Progress bar */}
        <div style={styles.track}>
          <div style={{ ...styles.fill, width: `${progress}%` }} />
        </div>

        {/* Enter button — appears once loaded */}
        <button
          style={{
            ...styles.enterBtn,
            opacity: progress >= 100 ? 1 : 0,
            pointerEvents: progress >= 100 ? 'auto' : 'none',
          }}
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>

      {/* Sponsor line */}
      <p style={styles.sponsor}>Sponsored by <strong style={{ color: '#ffffff' }}>Venture Games</strong></p>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: '#050507',
    zIndex: 10000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0',
  },
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -60%)',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,0,51,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px',
    zIndex: 2,
    width: '100%',
    maxWidth: '340px',
    padding: '0 20px',
  },
  logo: {
    width: '72px',
    height: '72px',
    borderRadius: '14px',
    objectFit: 'contain',
    boxShadow: '0 0 32px rgba(255, 0, 51, 0.5)',
    marginBottom: '4px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: 1.1,
    margin: 0,
  },
  accent: {
    color: '#ff0033',
    textShadow: '0 0 20px rgba(255,0,51,0.6)',
  },
  sub: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color: '#52525b',
    margin: 0,
  },
  track: {
    width: '100%',
    height: '2px',
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '2px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  fill: {
    height: '100%',
    background: 'linear-gradient(90deg, #b3001e, #ff0033)',
    boxShadow: '0 0 8px #ff0033',
    transition: 'width 0.03s linear',
    borderRadius: '2px',
  },
  enterBtn: {
    marginTop: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: 'transparent',
    border: '1px solid rgba(255, 0, 51, 0.5)',
    color: '#ffffff',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.82rem',
    letterSpacing: '0.12em',
    padding: '9px 28px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'opacity 0.4s ease, background 0.2s ease, border-color 0.2s ease',
  },
  sponsor: {
    position: 'absolute',
    bottom: '24px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.68rem',
    letterSpacing: '0.08em',
    color: '#3f3f46',
    zIndex: 2,
  },
};
