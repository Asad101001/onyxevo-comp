import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const STATUS_MESSAGES = [
  'INITIALIZING ONYX ENGINE...',
  'CALIBRATING ROSTER: FC 27 & TEKKEN 8...',
  'SYNCING UBIT CAMPUS GRID...',
  'ARENA ARMED & READY'
];

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setExiting(true);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setStatusIdx((prev) => (prev < STATUS_MESSAGES.length - 1 ? prev + 1 : prev));
    }, 320);
    return () => clearInterval(msgTimer);
  }, []);

  return (
    <div style={{
      ...styles.overlay,
      opacity: exiting ? 0 : 1,
      transform: exiting ? 'scale(1.04)' : 'scale(1)',
      pointerEvents: exiting ? 'none' : 'auto',
    }}>
      {/* Background radial energy flare */}
      <div style={styles.ambientGlow} />

      <div style={styles.content}>
        {/* Emblem with dual orbital rings */}
        <div style={styles.emblemContainer}>
          <div style={styles.ringOuter} />
          <div style={styles.ringInner} />
          <div style={styles.haloGlow} />
          <img
            src="/logos/onyx-evo-emblem.jpg"
            alt="Onyx Evo 2026"
            style={styles.emblem}
          />
        </div>

        {/* Brand Headline */}
        <div style={styles.titleBlock}>
          <div style={styles.moduleTag}>
            <Zap size={13} color="#ff1e42" />
            <span>CAREER CONNECT '26 • UBIT</span>
          </div>
          <h1 style={styles.mainTitle}>ONYX EVO <span style={{ color: '#ff1e42' }}>2026</span></h1>
          <p style={styles.subtitle}>First Ever Professional Esports Arena at UBIT</p>
        </div>

        {/* Progress Bar & Telemetry */}
        <div style={styles.progressWrapper}>
          <div style={styles.telemetryRow}>
            <span style={styles.statusText}>{STATUS_MESSAGES[statusIdx]}</span>
            <span style={styles.percentText}>{progress}%</span>
          </div>
          <div style={styles.track}>
            <div style={{ ...styles.fill, width: `${progress}%` }} />
          </div>
        </div>

        {/* Skip action */}
        <button
          style={styles.skipBtn}
          onClick={() => {
            setExiting(true);
            setTimeout(onComplete, 150);
          }}
          aria-label="Skip loading animation"
        >
          <span>Enter Arena</span>
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
    backgroundColor: '#060608',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  },
  ambientGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(255, 30, 66, 0.22) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '460px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  emblemContainer: {
    position: 'relative',
    width: '150px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  ringOuter: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '1.5px dashed rgba(255, 30, 66, 0.4)',
    animation: 'spinRing 10s linear infinite',
  },
  ringInner: {
    position: 'absolute',
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderTopColor: '#ff1e42',
    borderBottomColor: '#ff1e42',
    animation: 'spinRingRev 7s linear infinite',
  },
  haloGlow: {
    position: 'absolute',
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 30, 66, 0.35) 0%, transparent 70%)',
    animation: 'pulseGlow 2s infinite ease-in-out',
  },
  emblem: {
    width: '95px',
    height: '95px',
    objectFit: 'contain',
    borderRadius: '16px',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 0 35px rgba(255, 30, 66, 0.45)',
  },
  titleBlock: {
    marginBottom: '26px',
  },
  moduleTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: '#ff1e42',
    marginBottom: '8px',
  },
  mainTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5.5vw, 2.6rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: 1.15,
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#a1a1aa',
  },
  progressWrapper: {
    width: '100%',
    maxWidth: '360px',
    marginBottom: '22px',
  },
  telemetryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.74rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    color: '#71717a',
    marginBottom: '8px',
  },
  statusText: {
    color: '#a1a1aa',
  },
  percentText: {
    color: '#ff1e42',
    fontWeight: 700,
  },
  track: {
    width: '100%',
    height: '3px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    background: 'linear-gradient(90deg, #ff1e42, #ff476b)',
    transition: 'width 0.05s linear',
    boxShadow: '0 0 10px #ff1e42',
  },
  skipBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '999px',
    padding: '7px 16px',
    color: '#a1a1aa',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
};
