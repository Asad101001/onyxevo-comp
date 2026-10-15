import React, { useState } from 'react';
import { Gamepad2, Swords, ArrowUpRight } from 'lucide-react';

export default function GamesArena() {
  const [activeTab, setActiveTab] = useState('fc27');

  const games = {
    fc27: {
      name: 'EA SPORTS FC 26 (FIFA)',
      badge: '1v1 VIRTUAL FOOTBALL',
      banner: '/images/fc26-banner.png',
      headline: 'Next-Gen Competitive Football on PlayStation 5',
      summary: 'Tactical gameplay, 95-rated squads, and live arena match broadcasting powered by Venture Games.',
      specs: [
        { label: 'Platform', val: 'PlayStation 5' },
        { label: 'Mode', val: '1v1 Matchplay' },
        { label: 'Hardware', val: 'DualSense Stations' },
      ],
    },
    tekken8: {
      name: 'TEKKEN 8',
      badge: '1v1 FIGHTING SHOWDOWN',
      banner: '/images/tekken8-banner.jpg',
      headline: 'Iron Fist Championship on the Main Stage',
      summary: 'Fist Meets Fate. Explosive Heat System battles on tournament-certified PlayStation 5 stations.',
      specs: [
        { label: 'Platform', val: 'PlayStation 5' },
        { label: 'Mode', val: '1v1 Combat' },
        { label: 'Hardware', val: 'DualSense & Fight Sticks' },
      ],
    },
  };

  const current = games[activeTab];

  return (
    <section id="games" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <div className="section-tag">COMPETITION TITLES</div>
          <h2 className="section-title">THE FEATURED GAMES</h2>
          <p className="section-desc">
            Two iconic titles. Professional PlayStation 5 stations sponsored by Venture Games.
          </p>

          {/* Tab Switcher */}
          <div style={styles.tabBar}>
            <button
              style={{
                ...styles.tabBtn,
                backgroundColor: activeTab === 'fc27' ? '#ff0033' : 'transparent',
                color: activeTab === 'fc27' ? '#ffffff' : '#71717a',
              }}
              onClick={() => setActiveTab('fc27')}
            >
              <Gamepad2 size={16} />
              <span>FC 26 (FIFA)</span>
            </button>
            <button
              style={{
                ...styles.tabBtn,
                backgroundColor: activeTab === 'tekken8' ? '#ff0033' : 'transparent',
                color: activeTab === 'tekken8' ? '#ffffff' : '#71717a',
              }}
              onClick={() => setActiveTab('tekken8')}
            >
              <Swords size={16} />
              <span>TEKKEN 8</span>
            </button>
          </div>
        </div>

        {/* Game Showcase Card */}
        <div className="rough-card" style={styles.showcaseCard}>
          <div style={styles.bannerWrapper}>
            <img src={current.banner} alt={current.name} style={styles.bannerImg} />
            <div style={styles.bannerOverlay} />
            <div style={styles.badge}>{current.badge}</div>
          </div>

          <div style={styles.cardBody}>
            <div style={styles.bodyTop}>
              <div>
                <h3 style={styles.gameTitle}>{current.name}</h3>
                <p style={styles.gameHeadline}>{current.headline}</p>
              </div>

              <a
                href="https://instagram.com/onyxevo2026/"
                target="_blank"
                rel="noreferrer"
                className="cyber-btn cyber-btn-red"
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
              >
                <span>Register on IG</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <p style={styles.gameSummary}>{current.summary}</p>

            {/* Quick Specs Grid */}
            <div style={styles.specsGrid}>
              {current.specs.map((item, idx) => (
                <div key={idx} style={styles.specBox}>
                  <span style={styles.specLabel}>{item.label}</span>
                  <strong style={styles.specVal}>{item.val}</strong>
                </div>
              ))}
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
  tabBar: {
    display: 'inline-flex',
    background: '#07070a',
    border: '1px solid rgba(255, 0, 51, 0.35)',
    borderRadius: '4px',
    padding: '3px',
    marginTop: '16px',
  },
  tabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 18px',
    borderRadius: '2px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.82rem',
    fontWeight: 800,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  showcaseCard: {
    overflow: 'hidden',
  },
  bannerWrapper: {
    position: 'relative',
    height: 'clamp(200px, 30vw, 320px)',
    width: '100%',
    overflow: 'hidden',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(5, 5, 7, 0.98) 100%)',
  },
  badge: {
    position: 'absolute',
    top: '14px',
    left: '14px',
    background: '#ff0033',
    color: '#ffffff',
    fontFamily: 'var(--font-display)',
    fontSize: '0.68rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    padding: '4px 10px',
    borderRadius: '3px',
    boxShadow: '0 0 10px rgba(255, 0, 51, 0.5)',
  },
  cardBody: {
    padding: '20px 18px',
  },
  bodyTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '10px',
  },
  gameTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  gameHeadline: {
    fontSize: '0.86rem',
    color: '#ff0033',
    fontWeight: 600,
    marginTop: '2px',
  },
  gameSummary: {
    fontSize: '0.88rem',
    color: '#a1a1aa',
    lineHeight: 1.5,
    marginBottom: '16px',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '8px',
  },
  specBox: {
    background: '#07070a',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '4px',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  specLabel: {
    fontSize: '0.66rem',
    fontWeight: 700,
    color: '#71717a',
    textTransform: 'uppercase',
  },
  specVal: {
    fontSize: '0.86rem',
    color: '#ffffff',
    fontWeight: 700,
  },
};
