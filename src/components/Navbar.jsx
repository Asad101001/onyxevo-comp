import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, ChevronRight } from 'lucide-react';

const InstagramIcon = ({ size = 17, color = '#ff2a51' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      ...styles.header,
      backgroundColor: scrolled ? 'rgba(8, 9, 13, 0.92)' : 'rgba(8, 9, 13, 0.6)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
    }}>
      <div className="container" style={styles.navRow}>
        {/* Brand */}
        <div style={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logos/onyx-evo-emblem.jpg" alt="Onyx Evo" style={styles.logo} />
          <div>
            <div style={styles.brandTitle}>
              ONYX EVO <span style={{ color: '#ff2a51' }}>2026</span>
            </div>
            <div style={styles.brandSub}>UBIT • CAREER CONNECT '26</div>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="nav-desktop-links" style={styles.desktopNav}>
          <button style={styles.navLink} onClick={() => navClick('about')}>About</button>
          <button style={styles.navLink} onClick={() => navClick('games')}>Games</button>
          <button style={styles.navLink} onClick={() => navClick('schedule')}>Schedule</button>
          <button style={styles.navLink} onClick={() => navClick('advisors')}>Advisors</button>
          <button style={styles.navLink} onClick={() => navClick('collaboration')}>Collab</button>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            style={styles.instaLink}
            title="Follow @onyxevo2026 on Instagram"
          >
            <InstagramIcon size={17} color="#ff2a51" />
            <span>@onyxevo2026</span>
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={styles.actions}>
          <button className="btn btn-primary" style={styles.registerBtn} onClick={onOpenRegister}>
            <Trophy size={16} />
            <span>Register</span>
          </button>

          <button
            className="nav-mobile-toggle"
            style={styles.mobileBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} color="#ffffff" /> : <Menu size={22} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <button style={styles.mobileItem} onClick={() => navClick('about')}>About Onyx Evo</button>
          <button style={styles.mobileItem} onClick={() => navClick('games')}>Featured Games (FC 27 & Tekken 8)</button>
          <button style={styles.mobileItem} onClick={() => navClick('schedule')}>Schedule (10:00 AM – 4:00 PM)</button>
          <button style={styles.mobileItem} onClick={() => navClick('advisors')}>Student Advisors</button>
          <button style={styles.mobileItem} onClick={() => navClick('collaboration')}>Venture Games Collab</button>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            style={styles.mobileInsta}
          >
            <InstagramIcon size={18} color="#ff2a51" />
            <span>Follow @onyxevo2026 on Instagram</span>
          </a>
          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '12px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
          >
            <Trophy size={16} />
            <span>Register Before Oct 21</span>
          </button>
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
  navRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '74px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  logo: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    objectFit: 'cover',
    border: '1px solid rgba(255, 42, 81, 0.35)',
  },
  brandTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.15,
  },
  brandSub: {
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.06em',
    color: '#94a3b8',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navLink: {
    background: 'transparent',
    border: 'none',
    color: '#cbd5e1',
    fontSize: '0.92rem',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '6px 0',
    transition: 'color 0.2s',
  },
  instaLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.86rem',
    fontWeight: 600,
    color: '#e2e8f0',
    textDecoration: 'none',
    background: 'rgba(255, 42, 81, 0.08)',
    border: '1px solid rgba(255, 42, 81, 0.25)',
    padding: '6px 12px',
    borderRadius: '8px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  registerBtn: {
    padding: '9px 18px',
    fontSize: '0.85rem',
  },
  mobileBtn: {
    display: 'none',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '8px',
    padding: '7px',
    cursor: 'pointer',
  },
  mobileMenu: {
    background: '#0d0f17',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  mobileItem: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '10px 0',
    color: '#e2e8f0',
    fontSize: '0.95rem',
    textAlign: 'left',
    cursor: 'pointer',
  },
  mobileInsta: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#ff2a51',
    textDecoration: 'none',
    fontSize: '0.92rem',
    fontWeight: 600,
    padding: '8px 0',
  },
};
