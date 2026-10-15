import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Flame, Lock } from 'lucide-react';
import Countdown from './Countdown';

// Registration unlocks: 17 Oct 2026, 12:00 PM PKT (UTC+5)
const UNLOCK_TIME = new Date('2026-10-17T07:00:00Z').getTime();

function useRegistrationLock() {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, UNLOCK_TIME - Date.now()));

  useEffect(() => {
    if (timeLeft === 0) return;
    const id = setInterval(() => {
      const remaining = Math.max(0, UNLOCK_TIME - Date.now());
      setTimeLeft(remaining);
      if (remaining === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const locked = timeLeft > 0;
  const hrs  = String(Math.floor(timeLeft / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');

  return { locked, display: `${hrs}:${mins}:${secs}` };
}

const InstagramIcon = ({ size = 16, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Hero() {
  const { locked, display } = useRegistrationLock();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        {/* Most Important Top Headline: SPONSORED BY VENTURE GAMES */}
        <div style={styles.topSponsorHeadline}>
          <div style={styles.sponsorBadge}>
            <Flame size={15} color="#ff0033" />
            <span>OFFICIALLY SPONSORED BY</span>
            <img
              src="/logos/venture-games-logo.png"
              alt="Venture Games"
              style={styles.vgLogo}
            />
          </div>
        </div>

        {/* Center Emblem Visual */}
        <div style={styles.emblemContainer}>
          <div style={styles.emblemBackGlow} />
          <img
            src="/logos/onyx-evo-emblem.jpg"
            alt="Onyx Evo 2026 Official Logo"
            style={styles.emblemImg}
          />
        </div>

        {/* Main Title */}
        <h1 style={styles.mainTitle}>
          ONYX EVO <span style={{ color: '#ff0033', textShadow: '0 0 30px #ff0033' }}>2026</span>
        </h1>

        {/* High-Impact Tagline */}
        <p style={styles.tagline}>
          First Ever Professional Esports Competition in UBIT History. 
          Module for <strong>Career Connect '26</strong> under student advisors 
          <span style={{ color: '#ffffff', fontWeight: 700 }}> Dr. Syed Mohammad Khalid Jamal</span> & 
          <span style={{ color: '#ffffff', fontWeight: 700 }}> Dr. Humera Azam</span>.
        </p>

        {/* Event Quick Badges */}
        <div style={styles.eventBadges}>
          <div style={styles.badgeItem}>
            <Calendar size={14} color="#ff0033" />
            <span>Date: <strong>22 Oct 2026</strong> (10 AM – 4 PM)</span>
          </div>
          <div style={styles.badgeItem}>
            <MapPin size={14} color="#ff0033" />
            <span>Venue: <strong>UBIT Department, KU</strong></span>
          </div>
        </div>

        {/* High-Priority Countdown to Oct 21 */}
        <div style={styles.countdownWrapper}>
          <Countdown />
        </div>

        {/* Action + Deadline column */}
        <div style={styles.ctaColumn}>
          {/* Lock / Register button */}
          <div style={styles.btnRow}>
            {locked ? (
              <div style={styles.lockBtn}>
                <Lock size={14} color="#ff0033" style={{ flexShrink: 0 }} />
                <div style={styles.lockInner}>
                  <span style={styles.lockLabel}>LOCKED TILL 17 OCT 12PM</span>
                  <span style={styles.lockTimer}>{display}</span>
                </div>
              </div>
            ) : (
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXWDb1yfxX_NwxSQ-W2snTo_0gMsmzEozjxme5luSoR4OGwA/viewform?usp=preview"
                target="_blank"
                rel="noreferrer"
                className="cyber-btn cyber-btn-red"
                style={styles.heroBtn}
              >
                <span>Register</span>
                <ArrowRight size={15} />
              </a>
            )}
          </div>

          {/* Registration Deadline Notice */}
          <div style={styles.deadlineNotice}>
            <Calendar size={13} color="#ff0033" />
            <span>Registration Deadline: <strong style={{ color: '#ff0033' }}>21 Oct 2026</strong> — DM proof to <strong>@onyxevo2026</strong></span>
          </div>

          {/* Explore Games */}
          <button
            className="cyber-btn cyber-btn-dark"
            style={styles.heroBtn}
            onClick={() => scrollTo('games')}
          >
            <span>Explore The Games</span>
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: '110px',
    paddingBottom: '60px',
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  topSponsorHeadline: {
    marginBottom: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  sponsorBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#ff0033',
    background: 'rgba(255, 0, 51, 0.12)',
    border: '1px solid rgba(255, 0, 51, 0.45)',
    padding: '8px 18px',
    borderRadius: '4px',
    boxShadow: '0 0 20px rgba(255, 0, 51, 0.25)',
  },
  sponsorName: {
    color: '#ffffff',
    letterSpacing: '0.06em',
  },
  emblemContainer: {
    position: 'relative',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emblemBackGlow: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 0, 51, 0.45) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  emblemImg: {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 0 40px rgba(255, 0, 51, 0.6)',
    position: 'relative',
    zIndex: 2,
  },
  mainTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.4rem, 6.5vw, 4.4rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: 1.08,
    marginBottom: '12px',
  },
  tagline: {
    fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
    color: '#a1a1aa',
    maxWidth: '620px',
    lineHeight: 1.55,
    marginBottom: '18px',
  },
  eventBadges: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '24px',
  },
  badgeItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.82rem',
    color: '#d4d4d8',
    background: '#0a0a0f',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '6px 14px',
    borderRadius: '4px',
  },
  countdownWrapper: {
    display: 'none',
    width: '100%',
    marginBottom: '22px',
  },
  vgLogo: {
    height: '22px',
    objectFit: 'contain',
    filter: 'brightness(0) invert(1)',
    opacity: 0.9,
    marginLeft: '2px',
  },
  deadlineNotice: {
    display: 'none',
    alignItems: 'center',
    gap: '7px',
    fontSize: '0.82rem',
    color: '#a1a1aa',
    background: 'rgba(255, 0, 51, 0.07)',
    border: '1px solid rgba(255, 0, 51, 0.25)',
    borderRadius: '4px',
    padding: '7px 14px',
  },
  ctaColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
  },
  btnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  heroBtn: {
    padding: '12px 24px',
    fontSize: '0.88rem',
  },
  lockBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '11px 22px',
    background: 'rgba(255, 0, 51, 0.06)',
    border: '1px solid rgba(255, 0, 51, 0.45)',
    borderRadius: '4px',
    cursor: 'not-allowed',
    animation: 'lockPulse 2s ease-in-out infinite',
    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
  },
  lockInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1px',
  },
  lockLabel: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.62rem',
    fontWeight: 800,
    letterSpacing: '0.1em',
    color: '#ff0033',
  },
  lockTimer: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 900,
    letterSpacing: '0.06em',
    color: '#ffffff',
    lineHeight: 1,
  },
};
