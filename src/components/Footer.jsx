import React from 'react';
import { ArrowUp, ArrowUpRight, Flame } from 'lucide-react';

const InstagramIcon = ({ size = 15, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={styles.footer}>
      <div className="container">
        {/* Main Footer Block */}
        <div style={styles.footerRow}>
          {/* Brand Info */}
          <div style={styles.brandCol}>
            <div style={styles.brandTitleRow}>
              <img src="/logos/onyx-evo-emblem.jpg" alt="Onyx Evo" style={styles.logo} />
              <div>
                <strong style={styles.brandName}>ONYX EVO 2026</strong>
                <div style={styles.brandSub}>UBIT ESPORTS ARENA • CAREER CONNECT '26</div>
              </div>
            </div>
            <p style={styles.aboutText}>
              First-ever esports platform in UBIT history. Sponsored by <strong>Venture Games</strong>. 
              Guided by student advisors Dr. Syed Mohammad Khalid Jamal & Dr. Humera Azam.
            </p>
          </div>

          {/* Registration Info & Social */}
          <div style={styles.actionCol}>
            <div style={styles.payBox}>
              <span style={styles.payLabel}>REGISTRATION CONTACT</span>
              <strong style={styles.payVal}>Hasnain Ahmed • 03156051408 (Only JazzCash)</strong>
            </div>

            <a
              href="https://instagram.com/onyxevo2026/"
              target="_blank"
              rel="noreferrer"
              className="cyber-btn cyber-btn-red"
              style={styles.igBtn}
            >
              <InstagramIcon size={15} />
              <span>Follow @onyxevo2026</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.copy}>
            © 2026 ONYX EVO • Department of Computer Science (UBIT), University of Karachi. Sponsored by Venture Games.
          </div>
          <button style={styles.topBtn} onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={13} color="#ff0033" />
          </button>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '48px 0 20px 0',
    background: '#040406',
    borderTop: '2px solid rgba(255, 0, 51, 0.4)',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
  },
  brandCol: {
    maxWidth: '460px',
  },
  brandTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    objectFit: 'cover',
    border: '1px solid #ff0033',
  },
  brandName: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.05rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '-0.01em',
  },
  brandSub: {
    fontSize: '0.68rem',
    fontWeight: 700,
    color: '#ff0033',
    letterSpacing: '0.06em',
  },
  aboutText: {
    fontSize: '0.82rem',
    color: '#71717a',
    lineHeight: 1.5,
    marginTop: '10px',
  },
  actionCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  payBox: {
    background: '#07070a',
    border: '1px solid rgba(255, 0, 51, 0.3)',
    borderRadius: '4px',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
  },
  payLabel: {
    fontSize: '0.66rem',
    fontWeight: 800,
    color: '#ff0033',
    letterSpacing: '0.06em',
  },
  payVal: {
    fontSize: '0.82rem',
    color: '#ffffff',
  },
  igBtn: {
    padding: '10px 18px',
    fontSize: '0.82rem',
  },
  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '16px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  copy: {
    fontSize: '0.74rem',
    color: '#52525b',
  },
  topBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#a1a1aa',
    fontSize: '0.74rem',
    padding: '4px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
