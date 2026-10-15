import React from 'react';
import { Trophy, ArrowRight, ShieldCheck, MapPin, Calendar, Gamepad2 } from 'lucide-react';
import Countdown from './Countdown';

export default function Hero({ onOpenRegister }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        {/* Top Badges */}
        <div style={styles.badgeRow}>
          <div style={styles.primaryPill}>
            <span style={styles.pillDot} />
            <span>HISTORIC FIRST AT UBIT • CAREER CONNECT '26</span>
          </div>
          <div style={styles.collabPill}>
            <span>IN COLLABORATION WITH</span>
            <strong style={{ color: '#ffffff' }}>VENTURE GAMES</strong>
          </div>
        </div>

        {/* Emblem */}
        <div style={styles.emblemContainer}>
          <img
            src="/logos/onyx-evo-emblem.jpg"
            alt="Onyx Evo 2026 Official Emblem"
            style={styles.emblem}
          />
        </div>

        {/* Main Title & Subtitle */}
        <h1 style={styles.title}>
          ONYX EVO <span style={{ color: '#ff2a51' }}>2026</span>
        </h1>

        <p style={styles.subtitle}>
          The first-ever professional esports competition happening in the history of <strong>UBIT</strong>. 
          A premier module for <strong>Career Connect '26</strong>, organized under the esteemed guidance of our student advisors 
          <span style={{ color: '#ffffff', fontWeight: 600 }}> Dr. Syed Mohammad Khalid Jamal</span> and 
          <span style={{ color: '#ffffff', fontWeight: 600 }}> Dr. Humera Azam</span>.
        </p>

        {/* Key Event Badges: Venue & Date */}
        <div style={styles.eventHighlights}>
          <div style={styles.metaBadge}>
            <Calendar size={16} color="#ff2a51" />
            <span>Tournament Date: <strong>22nd October 2026</strong></span>
          </div>
          <div style={styles.metaBadge}>
            <MapPin size={16} color="#06b6d4" />
            <span>Venue: <strong>UBIT Department, Karachi University</strong></span>
          </div>
        </div>

        {/* Prominent High-Priority Countdown */}
        <div style={styles.countdownSection}>
          <Countdown />
        </div>

        {/* Action Buttons */}
        <div style={styles.btnRow}>
          <button
            className="btn btn-primary"
            style={styles.heroMainBtn}
            onClick={onOpenRegister}
          >
            <Trophy size={18} />
            <span>Register for Competition</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="btn btn-secondary"
            style={styles.heroSecBtn}
            onClick={() => scrollTo('games')}
          >
            <Gamepad2 size={18} color="#ff2a51" />
            <span>View FC 27 & TEKKEN 8</span>
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: '124px',
    paddingBottom: '70px',
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '24px',
  },
  primaryPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff2a51',
    background: 'rgba(255, 42, 81, 0.1)',
    border: '1px solid rgba(255, 42, 81, 0.3)',
    padding: '6px 14px',
    borderRadius: '999px',
  },
  pillDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#ff2a51',
  },
  collabPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#94a3b8',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '6px 14px',
    borderRadius: '999px',
  },
  emblemContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  emblem: {
    width: '140px',
    height: '140px',
    objectFit: 'contain',
    borderRadius: '20px',
    boxShadow: '0 0 40px rgba(255, 42, 81, 0.3)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    lineHeight: 1.1,
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    color: '#cbd5e1',
    maxWidth: '740px',
    lineHeight: 1.65,
    marginBottom: '20px',
  },
  eventHighlights: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    flexWrap: 'wrap',
    marginBottom: '32px',
  },
  metaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.88rem',
    color: '#e2e8f0',
    background: 'rgba(18, 20, 28, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '8px 16px',
    borderRadius: '10px',
  },
  countdownSection: {
    width: '100%',
    marginBottom: '32px',
  },
  btnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    flexWrap: 'wrap',
  },
  heroMainBtn: {
    padding: '14px 28px',
    fontSize: '0.98rem',
  },
  heroSecBtn: {
    padding: '14px 24px',
    fontSize: '0.95rem',
  },
};
