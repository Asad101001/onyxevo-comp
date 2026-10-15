import React, { useState } from 'react';
import { Gamepad2, Swords, Shield, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function GamesArena() {
  const [activeTab, setActiveTab] = useState('fc27');
  const [showRules, setShowRules] = useState(false);

  const gameData = {
    fc27: {
      name: 'EA SPORTS FC 27',
      badge: '1v1 TACTICAL FOOTBALL',
      banner: '/images/fc27-banner.jpg',
      quickSpecs: [
        { label: 'Platform', val: 'PS5 Official' },
        { label: 'Duration', val: '6 Min / Half' },
        { label: 'Defense', val: 'Tactical Only' },
        { label: 'Format', val: '1v1 Knockout' },
      ],
      rules: [
        '95 Overall mode with default club & national squads',
        '6 minutes per half; tactical defending strictly enforced',
        'Qualifiers in 1st quarter, semis in 2nd, final in 3rd quarter',
        'DualSense controllers provided, or bring certified USB pads',
      ],
    },
    tekken8: {
      name: 'TEKKEN 8',
      badge: '1v1 FIGHTING SHOWDOWN',
      banner: '/images/tekken8-banner.jpg',
      quickSpecs: [
        { label: 'Engine', val: 'Unreal Engine 5' },
        { label: 'Rounds', val: 'Best of 3 (Finals: Bo5)' },
        { label: 'Timer', val: '60s / Round' },
        { label: 'Format', val: 'Double Elimination' },
      ],
      rules: [
        '3 Rounds to win (60 seconds per round)',
        'Qualifiers in 1st quarter, semis in 2nd, final in 3rd quarter',
        'DualSense pads and arcade fight sticks allowed upon check-in',
        'Winner character lock; loser counterpicks stage or fighter',
      ],
    },
  };

  const current = gameData[activeTab];

  return (
    <section id="games" style={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div style={styles.header}>
          <div className="section-tag">COMPETITIVE ROSTER</div>
          <h2 className="section-title">THE ARENA TITLES</h2>
          <p className="section-desc">
            Competitive PlayStation 5 tournament stations powered by Venture Games.
          </p>

          {/* Tab Switcher */}
          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tabBtn,
                backgroundColor: activeTab === 'fc27' ? '#ff1e42' : 'transparent',
                color: activeTab === 'fc27' ? '#ffffff' : '#71717a',
              }}
              onClick={() => setActiveTab('fc27')}
            >
              <Gamepad2 size={16} />
              <span>EA SPORTS FC 27</span>
            </button>
            <button
              style={{
                ...styles.tabBtn,
                backgroundColor: activeTab === 'tekken8' ? '#ff1e42' : 'transparent',
                color: activeTab === 'tekken8' ? '#ffffff' : '#71717a',
              }}
              onClick={() => setActiveTab('tekken8')}
            >
              <Swords size={16} />
              <span>TEKKEN 8</span>
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="minimal-card" style={styles.card}>
          <div style={styles.bannerBox}>
            <img src={current.banner} alt={current.name} style={styles.bannerImg} />
            <div style={styles.bannerOverlay} />
            <div style={styles.badge}>{current.badge}</div>
          </div>

          <div style={styles.body}>
            <div style={styles.titleRow}>
              <h3 style={styles.gameTitle}>{current.name}</h3>
              <a
                href="https://instagram.com/onyxevo2026/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-crimson"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
              >
                <span>Register on IG</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Quick Specs */}
            <div style={styles.specsGrid}>
              {current.quickSpecs.map((s, idx) => (
                <div key={idx} style={styles.specBox}>
                  <span style={styles.specLabel}>{s.label}</span>
                  <strong style={styles.specVal}>{s.val}</strong>
                </div>
              ))}
            </div>

            {/* Rulebook Toggle */}
            <div style={styles.rulesBox}>
              <button
                style={styles.rulesBtn}
                onClick={() => setShowRules(!showRules)}
                aria-expanded={showRules}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={15} color="#ff1e42" />
                  <span style={{ fontWeight: 600, fontSize: '0.86rem' }}>Official Match Rules</span>
                </div>
                <ChevronRight
                  size={15}
                  color="#71717a"
                  style={{
                    transform: showRules ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>

              {showRules && (
                <div style={styles.rulesList}>
                  {current.rules.map((rule, idx) => (
                    <div key={idx} style={styles.ruleItem}>
                      <CheckCircle2 size={14} color="#ff1e42" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabContainer: {
    display: 'inline-flex',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    padding: '3px',
    marginTop: '18px',
  },
  tabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 18px',
    borderRadius: '7px',
    fontSize: '0.84rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  card: {
    overflow: 'hidden',
  },
  bannerBox: {
    position: 'relative',
    height: 'clamp(220px, 32vw, 340px)',
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
    background: 'linear-gradient(180deg, rgba(6, 6, 8, 0.1) 0%, rgba(6, 6, 8, 0.95) 100%)',
  },
  badge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    background: 'rgba(12, 13, 17, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ffffff',
    backdropFilter: 'blur(8px)',
  },
  body: {
    padding: '24px 20px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '18px',
  },
  gameTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '10px',
    marginBottom: '18px',
  },
  specBox: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '8px',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  specLabel: {
    fontSize: '0.68rem',
    fontWeight: 600,
    color: '#71717a',
    textTransform: 'uppercase',
  },
  specVal: {
    fontSize: '0.88rem',
    color: '#ffffff',
  },
  rulesBox: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  rulesBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    textAlign: 'left',
  },
  rulesList: {
    padding: '12px 16px 16px 16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  ruleItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.84rem',
    color: '#a1a1aa',
    lineHeight: 1.45,
  },
};
