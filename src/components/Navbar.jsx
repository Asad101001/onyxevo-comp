import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 16, color = '#ff1e42' }) => (
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
      backgroundColor: scrolled ? 'rgba(6, 6, 8, 0.92)' : 'rgba(6, 6, 8, 0.6)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
    }}>
      <div className="container" style={styles.navRow}>
        {/* Brand */}
        <div style={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logos/onyx-evo-emblem.jpg" alt="Onyx Evo" style={styles.logo} />
          <div>
            <div style={styles.brandTitle}>ONYX EVO <span style={{ color: '#ff1e42' }}>2026</span></div>
            <div style={styles.brandSub}>UBIT • CAREER CONNECT '26</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={styles.desktopNav}>
          <button style={styles.link} onClick={() => scrollTo('about')}>Overview</button>
          <button style={styles.link} onClick={() => scrollTo('games')}>Games</button>
          <button style={styles.link} onClick={() => scrollTo('schedule')}>Schedule</button>
          <button style={styles.link} onClick={() => scrollTo('advisors')}>Advisors</button>
          <button style={styles.link} onClick={() => scrollTo('collaboration')}>Venture Games</button>
        </nav>

        {/* Instagram Direct Link */}
        <div style={styles.actions}>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={styles.instaBtn}
          >
            <InstagramIcon size={16} />
            <span>@onyxevo2026</span>
            <ArrowUpRight size={14} color="#71717a" />
          </a>

          <button
            className="mobile-nav-toggle"
            style={styles.mobileBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} color="#ffffff" /> : <Menu size={20} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={styles.mobileMenu}>
          <button style={styles.mItem} onClick={() => scrollTo('about')}>Overview</button>
          <button style={styles.mItem} onClick={() => scrollTo('games')}>Featured Games</button>
          <button style={styles.mItem} onClick={() => scrollTo('schedule')}>Tournament Schedule (10 - 4)</button>
          <button style={styles.mItem} onClick={() => scrollTo('advisors')}>Student Advisors</button>
          <button style={styles.mItem} onClick={() => scrollTo('collaboration')}>Venture Games</button>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-crimson"
            style={{ width: '100%', marginTop: '10px' }}
          >
            <InstagramIcon size={16} color="#ffffff" />
            <span>Follow @onyxevo2026 on Instagram</span>
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
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    transition: 'all 0.25s ease',
  },
  navRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '76px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    objectFit: 'cover',
    border: '1px solid rgba(255, 30, 66, 0.3)',
  },
  brandTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
  },
  brandSub: {
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.06em',
    color: '#71717a',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  link: {
    background: 'transparent',
    border: 'none',
    color: '#a1a1aa',
    fontSize: '0.92rem',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.2s',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  instaBtn: {
    padding: '8px 16px',
    fontSize: '0.86rem',
  },
  mobileBtn: {
    display: 'none',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
  },
  mobileMenu: {
    background: '#0c0d11',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '20px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  mItem: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
    padding: '10px 0',
    color: '#e4e4e7',
    fontSize: '0.95rem',
    textAlign: 'left',
    cursor: 'pointer',
  },
};
