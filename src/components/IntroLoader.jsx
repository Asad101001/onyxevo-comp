import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, ChevronRight, Crosshair } from 'lucide-react';

const TELEMETRY_LOGS = [
  "INITIALIZING ONYX CORE ARCHITECTURE...",
  "OFFICIAL TITLE SPONSOR: VENTURE GAMES DETECTED",
  "UBIT DCS GRID VERIFIED // CAREER CONNECT '26",
  "LOADING TOURNAMENT ROSTER: FC 27 & TEKKEN 8",
  "CALIBRATING DUALSENSE ARENA STATIONS...",
  "COMBAT MATRIX ONLINE // STAGE IS SET",
];

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const canvasRef = useRef(null);

  // Background Sparks / Cyber Embers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const sparks = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -Math.random() * 2 - 0.5,
      alpha: Math.random() * 0.7 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.forEach((s) => {
        s.x += s.speedX;
        s.y += s.speedY;
        if (s.y < 0) s.y = canvas.height;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;

        ctx.fillStyle = `rgba(255, 0, 51, ${s.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ff0033';
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Progress Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setExiting(true);
          setTimeout(onComplete, 450);
          return 100;
        }
        return prev + 3;
      });
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Log rotation
  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < TELEMETRY_LOGS.length - 1 ? prev + 1 : prev));
    }, 240);
    return () => clearInterval(logInterval);
  }, []);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(onComplete, 120);
  };

  return (
    <div style={{
      ...styles.overlay,
      opacity: exiting ? 0 : 1,
      transform: exiting ? 'scale(1.08)' : 'scale(1)',
      filter: exiting ? 'blur(10px)' : 'none',
    }}>
      {/* Background Ember Canvas */}
      <canvas ref={canvasRef} style={styles.canvas} />

      {/* Cyber Grid Lines */}
      <div style={styles.gridLines} />

      {/* Top Sponsored Stencil */}
      <div style={styles.topBanner}>
        <div style={styles.sponsorPill}>
          <span style={styles.warningDot} />
          <span>OFFICIALLY SPONSORED BY VENTURE GAMES</span>
        </div>
        <div style={styles.hudCoord}>[LOC: UBIT_DCS_ARENA]</div>
      </div>

      {/* Center Core Graphical Stage */}
      <div style={styles.centerStage}>
        <div style={styles.emblemContainer}>
          {/* Rotating Laser Reticles */}
          <div style={styles.laserRingOuter} />
          <div style={styles.laserRingInner} />
          <div style={styles.cornerBracketTL} />
          <div style={styles.cornerBracketTR} />
          <div style={styles.cornerBracketBL} />
          <div style={styles.cornerBracketBR} />

          {/* Sweeping Laser Line */}
          <div style={styles.laserSweep} />

          {/* Emblem */}
          <img
            src="/logos/onyx-evo-emblem.jpg"
            alt="Onyx Evo Emblem"
            style={styles.emblemImg}
          />
        </div>

        {/* Title Identity */}
        <div style={styles.titleWrapper}>
          <div style={styles.moduleTag}>CAREER CONNECT '26 • UBIT HISTORY</div>
          <h1 style={styles.heroTitle}>
            ONYX EVO <span style={{ color: '#ff0033', textShadow: '0 0 25px #ff0033' }}>2026</span>
          </h1>
          <div style={styles.sponsorSub}>
            PRESENTED & SPONSORED BY <strong style={{ color: '#ffffff' }}>VENTURE GAMES</strong>
          </div>
        </div>

        {/* Tactical Charging HUD */}
        <div style={styles.progressBox}>
          <div style={styles.progressHeader}>
            <span style={styles.telemetryText}>&gt; {TELEMETRY_LOGS[logIndex]}</span>
            <span style={styles.progressVal}>{progress}%</span>
          </div>

          <div style={styles.progressBarTrack}>
            <div style={{ ...styles.progressBarFill, width: `${progress}%` }} />
          </div>

          <div style={styles.progressFooter}>
            <span>TITLES: FC 27 // TEKKEN 8</span>
            <span>LAUNCH: 22 OCT (10AM-4PM)</span>
          </div>
        </div>

        {/* Skip Action */}
        <button style={styles.skipButton} onClick={handleSkip}>
          <span>ENTER ARENA</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Bottom Tactical Warning */}
      <div style={styles.bottomBar}>
        <span>RESTRICTED ACCESS • DCS - UBIT CAMPUS ARENA</span>
        <span>REGISTRATION CLOSES 21 OCT</span>
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
    backgroundColor: '#000000',
    zIndex: 10000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 16px',
    overflow: 'hidden',
    transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s ease, filter 0.45s ease',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  gridLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(circle at center, rgba(255, 0, 51, 0.22) 0%, transparent 65%),
      linear-gradient(rgba(255, 0, 51, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 0, 51, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 36px 36px, 36px 36px',
    pointerEvents: 'none',
  },
  topBanner: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
    flexWrap: 'wrap',
    gap: '8px',
  },
  sponsorPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 0, 51, 0.12)',
    border: '1px solid rgba(255, 0, 51, 0.4)',
    color: '#ff0033',
    fontFamily: 'var(--font-display)',
    fontSize: '0.75rem',
    fontWeight: 800,
    letterSpacing: '0.1em',
    padding: '5px 12px',
    borderRadius: '4px',
  },
  warningDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#ff0033',
    boxShadow: '0 0 10px #ff0033',
  },
  hudCoord: {
    fontSize: '0.72rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.1em',
    color: '#71717a',
  },
  centerStage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 2,
    maxWidth: '560px',
    width: '100%',
  },
  emblemContainer: {
    position: 'relative',
    width: '160px',
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  laserRingOuter: {
    position: 'absolute',
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    border: '1.5px dashed rgba(255, 0, 51, 0.5)',
    animation: 'ringSpin 9s linear infinite',
  },
  laserRingInner: {
    position: 'absolute',
    width: '135px',
    height: '135px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 0, 51, 0.3)',
    borderTopColor: '#ff0033',
    borderBottomColor: '#ff0033',
    animation: 'ringSpinRev 6s linear infinite',
  },
  cornerBracketTL: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    width: '14px',
    height: '14px',
    borderTop: '2px solid #ff0033',
    borderLeft: '2px solid #ff0033',
  },
  cornerBracketTR: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: '14px',
    height: '14px',
    borderTop: '2px solid #ff0033',
    borderRight: '2px solid #ff0033',
  },
  cornerBracketBL: {
    position: 'absolute',
    bottom: '-4px',
    left: '-4px',
    width: '14px',
    height: '14px',
    borderBottom: '2px solid #ff0033',
    borderLeft: '2px solid #ff0033',
  },
  cornerBracketBR: {
    position: 'absolute',
    bottom: '-4px',
    right: '-4px',
    width: '14px',
    height: '14px',
    borderBottom: '2px solid #ff0033',
    borderRight: '2px solid #ff0033',
  },
  laserSweep: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #ff0033, transparent)',
    boxShadow: '0 0 15px #ff0033',
    animation: 'laserSweep 2s ease-in-out infinite',
    pointerEvents: 'none',
  },
  emblemImg: {
    width: '110px',
    height: '110px',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 0 40px rgba(255, 0, 51, 0.65)',
    position: 'relative',
    zIndex: 2,
  },
  titleWrapper: {
    marginBottom: '20px',
  },
  moduleTag: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.15em',
    color: '#ff0033',
    marginBottom: '4px',
  },
  heroTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.1rem, 5.5vw, 2.9rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: 1.1,
    marginBottom: '6px',
  },
  sponsorSub: {
    fontSize: '0.86rem',
    color: '#a1a1aa',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  progressBox: {
    width: '100%',
    background: 'rgba(10, 10, 14, 0.85)',
    border: '1px solid rgba(255, 0, 51, 0.3)',
    borderRadius: '6px',
    padding: '14px 16px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  telemetryText: {
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    color: '#d4d4d8',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '80%',
  },
  progressVal: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    fontWeight: 800,
    color: '#ff0033',
  },
  progressBarTrack: {
    width: '100%',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '2px',
    overflow: 'hidden',
    marginBottom: '8px',
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #b3001e, #ff0033)',
    boxShadow: '0 0 12px #ff0033',
    transition: 'width 0.05s linear',
  },
  progressFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.68rem',
    color: '#71717a',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.05em',
  },
  skipButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'linear-gradient(135deg, #ff0033 0%, #b3001e 100%)',
    border: 'none',
    color: '#ffffff',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '0.85rem',
    letterSpacing: '0.06em',
    padding: '10px 22px',
    borderRadius: '4px',
    cursor: 'pointer',
    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    boxShadow: '0 0 20px rgba(255, 0, 51, 0.5)',
  },
  bottomBar: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.68rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.12em',
    color: '#52525b',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '12px',
    zIndex: 2,
    flexWrap: 'wrap',
    gap: '6px',
  },
};
