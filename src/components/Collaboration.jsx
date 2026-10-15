import React from 'react';
import { Handshake, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Collaboration() {
  return (
    <section id="collaboration" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-badge">STRATEGIC PARTNERSHIP</div>
          <h2 className="section-heading">VENTURE GAMES COLLABORATION</h2>
          <p className="section-subtitle">
            Partnering with Venture Games to provide certified PlayStation 5 tournament stations and competitive management.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Main Venture Games Card */}
          <div className="pro-card" style={styles.mainCard}>
            <div style={styles.partnerFlex}>
              <div style={styles.logoWrap}>
                <img
                  src="/images/venture-games-logo.jpg"
                  alt="Venture Games Logo"
                  style={styles.partnerLogo}
                />
              </div>
              <div style={styles.details}>
                <div style={styles.partnerTag}>OFFICIAL ESPORTS COLLABORATOR</div>
                <h3 style={styles.partnerName}>VENTURE GAMES</h3>
                <p style={styles.partnerBio}>
                  Providing official gaming setups, pro-tier displays, and certified competitive operations to ensure fair, broadcast-ready match play at UBIT.
                </p>
                <div style={styles.points}>
                  <div style={styles.point}>
                    <CheckCircle2 size={16} color="#ff2a51" />
                    <span>Official PlayStation 5 Tournament Stations</span>
                  </div>
                  <div style={styles.point}>
                    <CheckCircle2 size={16} color="#ff2a51" />
                    <span>Certified Controllers & Display Gear</span>
                  </div>
                  <div style={styles.point}>
                    <CheckCircle2 size={16} color="#ff2a51" />
                    <span>Standardized Competitive Fair Play Rules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub cards */}
          <div className="pro-card" style={styles.subCard}>
            <div style={styles.subHeader}>
              <Sparkles size={20} color="#ff2a51" />
              <h4 style={styles.subTitle}>CAREER CONNECT '26</h4>
            </div>
            <p style={styles.subText}>
              The parent flagship initiative at UBIT connecting student innovation, industry opportunities, and competitive esports.
            </p>
          </div>

          <div className="pro-card" style={styles.subCard}>
            <div style={styles.subHeader}>
              <Building2 size={20} color="#06b6d4" />
              <h4 style={styles.subTitle}>DCS - UBIT HOST</h4>
            </div>
            <p style={styles.subText}>
              Department of Computer Science (UBIT), University of Karachi — hosting the historic first-ever esports platform in campus history.
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
    background: 'rgba(8, 9, 13, 0.6)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '20px',
  },
  mainCard: {
    gridColumn: 'span 12',
    padding: '32px',
  },
  partnerFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'wrap',
  },
  logoWrap: {
    width: '120px',
    height: '120px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    flexShrink: 0,
  },
  partnerLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  details: {
    flex: '1',
    minWidth: '280px',
  },
  partnerTag: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#06b6d4',
    marginBottom: '4px',
  },
  partnerName: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '8px',
  },
  partnerBio: {
    fontSize: '0.95rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
    marginBottom: '16px',
  },
  points: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.88rem',
    color: '#e2e8f0',
  },
  subCard: {
    gridColumn: 'span 6',
    padding: '24px',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  subTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  subText: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    lineHeight: 1.55,
  },
};
