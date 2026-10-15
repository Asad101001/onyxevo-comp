import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Copy, Check, Flame } from 'lucide-react';
import Countdown from './Countdown';

const InstagramIcon = ({ size = 16, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText('03156051408');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <strong style={styles.sponsorName}>VENTURE GAMES</strong>
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

        {/* Direct Payment Notice Card */}
        <div className="rough-card" style={styles.payCard}>
          <div style={styles.payFlex}>
            <div style={styles.payInfo}>
              <div style={styles.payLabel}>REGISTRATION PAYMENT • ONLY JAZZCASH</div>
              <div style={styles.payTitle}>
                Hasnain Ahmed — <span style={{ color: '#ff0033', fontWeight: 900 }}>03156051408</span>
              </div>
              <div style={styles.paySub}>Pay fee before 21 Oct & DM proof to @onyxevo2026</div>
            </div>
            <button
              onClick={copyNumber}
              style={{
                ...styles.copyBtn,
                background: copied ? '#b3001e' : 'rgba(255, 0, 51, 0.15)',
                borderColor: copied ? '#ff0033' : 'rgba(255, 0, 51, 0.4)',
              }}
              title="Copy JazzCash Number"
            >
              {copied ? <Check size={14} color="#fff" /> : <Copy size={14} color="#ff0033" />}
              <span>{copied ? 'Copied' : 'Copy Number'}</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={styles.btnRow}>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            className="cyber-btn cyber-btn-red"
            style={styles.heroBtn}
          >
            <InstagramIcon size={16} />
            <span>Register on Instagram</span>
            <ArrowRight size={15} />
          </a>

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
    width: '100%',
    marginBottom: '22px',
  },
  payCard: {
    maxWidth: '640px',
    width: '100%',
    padding: '16px 18px',
    marginBottom: '24px',
    textAlign: 'left',
  },
  payFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
  },
  payInfo: {
    flex: '1',
    minWidth: '220px',
  },
  payLabel: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.68rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#ff0033',
    marginBottom: '2px',
  },
  payTitle: {
    fontSize: '0.96rem',
    fontWeight: 800,
    color: '#ffffff',
  },
  paySub: {
    fontSize: '0.8rem',
    color: '#a1a1aa',
    marginTop: '2px',
  },
  copyBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid',
    borderRadius: '4px',
    padding: '8px 14px',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s',
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
};
