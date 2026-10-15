import React from 'react';
import { Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function Collaboration() {
  return (
    <section id="collaboration" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-tag">STRATEGIC ALLIANCE</div>
          <h2 className="section-title">VENTURE GAMES COLLABORATION</h2>
          <p className="section-desc">
            Bringing certified PlayStation 5 tournament stations and pro-tier competitive standards to UBIT.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Main Venture Games Card */}
          <div className="minimal-card" style={styles.mainCard}>
            <div style={styles.flexRow}>
              <div style={styles.logoWrap}>
                <img
                  src="/images/venture-games-logo.jpg"
                  alt="Venture Games"
                  style={styles.logoImg}
                />
              </div>

              <div style={styles.details}>
                <div style={styles.tag}>OFFICIAL ESPORTS COLLABORATOR</div>
                <h3 style={styles.name}>VENTURE GAMES</h3>
                <div style={styles.perks}>
                  <div style={styles.perk}>
                    <CheckCircle2 size={14} color="#ff1e42" />
                    <span>Official PS5 Tournament Stations</span>
                  </div>
                  <div style={styles.perk}>
                    <CheckCircle2 size={14} color="#ff1e42" />
                    <span>Certified Controllers & High-Refresh Displays</span>
                  </div>
                  <div style={styles.perk}>
                    <CheckCircle2 size={14} color="#ff1e42" />
                    <span>Standardized Competitive Fair Play Rules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Card: Career Connect */}
          <div className="minimal-card" style={styles.subCard}>
            <div style={styles.subHeader}>
              <Sparkles size={16} color="#ff1e42" />
              <h4 style={styles.subTitle}>CAREER CONNECT '26</h4>
            </div>
            <p style={styles.subText}>
              UBIT's flagship module connecting student innovation and esports.
            </p>
          </div>

          {/* Sub Card: DCS - UBIT */}
          <div className="minimal-card" style={styles.subCard}>
            <div style={styles.subHeader}>
              <Building2 size={16} color="#ff1e42" />
              <h4 style={styles.subTitle}>DCS - UBIT</h4>
            </div>
            <p style={styles.subText}>
              Department of Computer Science, University of Karachi — Host campus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '70px 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '16px',
  },
  mainCard: {
    gridColumn: 'span 12',
    padding: '24px',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  logoWrap: {
    width: '90px',
    height: '90px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
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
  tag: {
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#ff1e42',
    marginBottom: '4px',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    marginBottom: '10px',
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
    fontSize: '0.84rem',
    color: '#e4e4e7',
  },
  subCard: {
    gridColumn: 'span 6',
    padding: '20px',
    '@media (max-width: 768px)': {
      gridColumn: 'span 12',
    },
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '6px',
  },
  subTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  subText: {
    fontSize: '0.84rem',
    color: '#a1a1aa',
    lineHeight: 1.5,
  },
};
