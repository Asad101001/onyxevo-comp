import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Flame } from 'lucide-react';

const InstagramIcon = ({ size = 15, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      ...styles.header,
      backgroundColor: scrolled ? 'rgba(5, 5, 7, 0.96)' : 'rgba(5, 5, 7, 0.85)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.9), 0 1px 0 rgba(255, 0, 51, 0.3)' : '0 1px 0 rgba(255, 255, 255, 0.06)',
    }}>
      {/* Topmost Official Sponsor Headline Banner */}
      <div style={styles.topSponsorBar}>
        <div className="container" style={styles.topSponsorInner}>
          <div style={styles.sponsorNotice}>
            <Flame size={13} color="#ff0033" />
            <span>OFFICIAL TITLE SPONSOR:</span>
            <strong style={{ color: '#ffffff', letterSpacing: '0.08em' }}>VENTURE GAMES</strong>
          </div>
          <div style={styles.topMeta}>
            <span>UBIT CAMPUS</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span>22 OCT 2026</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={styles.navRow}>
        {/* Brand */}
        <div style={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logos/onyx-evo-emblem.jpg" alt="Onyx Evo" style={styles.logo} />
          <div>
            <div style={styles.brandTitle}>
              ONYX EVO <span style={{ color: '#ff0033' }}>2026</span>
            </div>
            <div style={styles.brandSub}>UBIT ESPORTS ARENA</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" style={styles.desktopNav}>
          <button style={styles.navBtn} onClick={() => scrollTo('about')}>Overview</button>
          <button style={styles.navBtn} onClick={() => scrollTo('games')}>Games</button>
          <button style={styles.navBtn} onClick={() => scrollTo('schedule')}>Schedule</button>
          <button style={styles.navBtn} onClick={() => scrollTo('advisors')}>Advisors</button>
          <button style={styles.navBtn} onClick={() => scrollTo('sponsor')}>Venture Games</button>
        </nav>

        {/* Instagram Direct Link */}
        <div style={styles.navActions}>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            className="cyber-btn cyber-btn-red"
            style={styles.igBtn}
          >
            <InstagramIcon size={14} />
            <span>@onyxevo2026</span>
            <ArrowUpRight size={13} />
          </a>

          <button
            className="nav-mobile-btn"
            style={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} color="#ff0033" /> : <Menu size={20} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={styles.mobileDrawer}>
          <button style={styles.mLink} onClick={() => scrollTo('about')}>// Overview</button>
          <button style={styles.mLink} onClick={() => scrollTo('games')}>// The Games (FC 27 & Tekken 8)</button>
          <button style={styles.mLink} onClick={() => scrollTo('schedule')}>// Tournament Schedule</button>
          <button style={styles.mLink} onClick={() => scrollTo('advisors')}>// Student Advisors</button>
          <button style={styles.mLink} onClick={() => scrollTo('sponsor')}>// Venture Games Sponsorship</button>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            className="cyber-btn cyber-btn-red"
            style={{ width: '100%', marginTop: '10px' }}
          >
            <InstagramIcon size={15} />
            <span>Register on Instagram</span>
          </a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 900,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    transition: 'all 0.25s ease',
  },
  topSponsorBar: {
    background: '#0a0103',
    borderBottom: '1px solid rgba(255, 0, 51, 0.35)',
    padding: '4px 0',
  },
  topSponsorInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.72rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.06em',
    flexWrap: 'wrap',
    gap: '4px',
  },
  sponsorNotice: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#ff0033',
    fontWeight: 800,
  },
  topMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#71717a',
    fontSize: '0.68rem',
  },
  navRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '66px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  logo: {
    width: '38px',
    height: '38px',
    borderRadius: '6px',
    objectFit: 'cover',
    border: '1px solid rgba(255, 0, 51, 0.5)',
    boxShadow: '0 0 10px rgba(255, 0, 51, 0.3)',
  },
  brandTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  brandSub: {
    fontSize: '0.66rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#71717a',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navBtn: {
    background: 'transparent',
    border: 'none',
    color: '#d4d4d8',
    fontSize: '0.86rem',
    fontWeight: 600,
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.2s',
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  igBtn: {
    padding: '8px 16px',
    fontSize: '0.78rem',
  },
  mobileToggle: {
    display: 'none',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer',
  },
  mobileDrawer: {
    background: '#07070a',
    borderBottom: '2px solid #ff0033',
    padding: '16px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  mLink: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
    padding: '10px 0',
    color: '#ffffff',
    fontSize: '0.92rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textAlign: 'left',
    cursor: 'pointer',
  },
};
