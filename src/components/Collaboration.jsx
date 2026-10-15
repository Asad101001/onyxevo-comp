import React from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

export default function Collaboration() {
  return (
    <section id="sponsor" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-tag">OFFICIAL TITLE SPONSOR</div>
          <h2 style={styles.title}>
            SPONSORED BY <span style={{ color: '#ff0033' }}>VENTURE GAMES</span>
          </h2>
          <p className="section-desc">
            Venture Games is the primary title sponsor powering Onyx Evo 2026 with pro-grade esports equipment and competitive management.
          </p>
        </div>

        <div className="rough-card" style={styles.sponsorCard}>
          <div style={styles.flexWrapper}>
            <div style={styles.logoWrap}>
              <img
                src="/images/venture-games-logo.jpg"
                alt="Venture Games Title Sponsor"
                style={styles.logoImg}
              />
            </div>

            <div style={styles.details}>
              <div style={styles.badge}>PRIMARY EVENT SPONSOR</div>
              <h3 style={styles.sponsorTitle}>VENTURE GAMES</h3>
              <p style={styles.sponsorText}>
                Providing official tournament PlayStation 5 setups, calibrated DualSense gear, and competitive fair-play standards for UBIT's first historic esports championship.
              </p>

              <div style={styles.perks}>
                <div style={styles.perk}>
                  <CheckCircle2 size={14} color="#ff0033" />
                  <span>Official Tournament Hardware Sponsor</span>
                </div>
                <div style={styles.perk}>
                  <CheckCircle2 size={14} color="#ff0033" />
                  <span>DualSense & Display Stations</span>
                </div>
                <div style={styles.perk}>
                  <CheckCircle2 size={14} color="#ff0033" />
                  <span>Certified Esports Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  sponsorCard: {
    padding: '24px',
    borderLeft: '4px solid #ff0033',
  },
  flexWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  logoWrap: {
    width: '90px',
    height: '90px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 0, 51, 0.4)',
    boxShadow: '0 0 20px rgba(255, 0, 51, 0.3)',
    flexShrink: 0,
  },
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  details: {
    flex: '1',
    minWidth: '240px',
  },
  badge: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.68rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#ff0033',
    marginBottom: '4px',
  },
  sponsorTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '-0.01em',
    marginBottom: '6px',
  },
  sponsorText: {
    fontSize: '0.86rem',
    color: '#a1a1aa',
    lineHeight: 1.5,
    marginBottom: '14px',
  },
  perks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px 18px',
  },
  perk: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.82rem',
    color: '#f4f4f5',
    fontWeight: 600,
  },
};
