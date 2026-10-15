import React, { useState } from 'react';
import { Gamepad2, Swords, Trophy, Shield, CheckCircle2, ChevronRight } from 'lucide-react';

export default function GamesArena({ onRegisterGame }) {
  const [activeTab, setActiveTab] = useState('fc27');
  const [showRules, setShowRules] = useState(false);

  const gameData = {
    fc27: {
      id: 'fc27',
      name: 'EA SPORTS FC 27',
      badge: 'FOOTBALL SIMULATION',
      tagline: '1v1 Tactical Virtual Football Championship',
      banner: '/images/fc27-banner.jpg',
      platform: 'PlayStation 5 Official Stations',
      mode: '1v1 Competitive Knockout',
      format: 'Qualifiers in 1st Quarter ➔ Semis in 2nd Quarter ➔ Finals in 3rd Quarter',
      duration: '6 Minutes Per Half (Standard Settings)',
      description: 'Experience competitive virtual football on next-gen PS5 stations. Tactical defending, standard rated clubs, and high-tension penalty shootouts under the spotlight of Career Connect 26.',
      rules: [
        'Match Type: 1v1 Exhibition (Standard Club & National squads, 95 overall mode)',
        'Half Duration: 6 minutes each half (Tactical Defending strictly required)',
        'Qualifying rounds take place in the 1st quarter of the tournament day',
        'DualSense controllers provided, or bring certified tournament USB pads',
        'Ties in knockout stage go directly to Extra Time and Penalties',
      ],
      highlights: [
        { label: 'Platform', val: 'PS5 Official' },
        { label: 'Match Format', val: '1v1 Knockout' },
        { label: 'Half Length', val: '6 Mins / Half' },
        { label: 'Ruleset', val: 'Standard Defending' },
      ],
    },
    tekken8: {
      id: 'tekken8',
      name: 'TEKKEN 8',
      badge: 'FIGHTING GAME CHAMPIONSHIP',
      tagline: 'Fist Meets Fate • Aggressive Combat on the Big Stage',
      banner: '/images/tekken8-banner.jpg',
      platform: 'PlayStation 5 Official Stations',
      mode: '1v1 Double Elimination Bracket',
      format: 'Qualifiers in 1st Quarter ➔ Semis in 2nd Quarter ➔ Finals in 3rd Quarter',
      duration: 'Best of 3 Rounds (Finals: Best of 5)',
      description: 'Unleash devastating combos and mastery of the Heat System in TEKKEN 8. Battle through double-elimination brackets in front of the UBIT crowd to become the inaugural champion.',
      rules: [
        'Rounds: Best 2 out of 3 Rounds (60 seconds per round)',
        'Stage: Random for Game 1, loser selects stage/character for Game 2',
        'Qualifying rounds in 1st quarter, semifinals in 2nd, grand finals in 3rd quarter',
        'Hardware: DualSense pads, fight sticks, and leverless controllers permitted upon check-in inspection',
        'Character lock: Winner must keep previous character',
      ],
      highlights: [
        { label: 'Engine', val: 'Unreal Engine 5' },
        { label: 'Format', val: 'Double Elimination' },
        { label: 'Round Timer', val: '60 Seconds' },
        { label: 'Hardware', val: 'Pads & Sticks Allowed' },
      ],
    },
  };

  const current = gameData[activeTab];

  return (
    <section id="games" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <div className="section-badge">OFFICIAL TITLES</div>
          <h2 className="section-heading">FEATURED COMPETITIVE GAMES</h2>
          <p className="section-subtitle">
            Compete on verified PlayStation 5 hardware provided in collaboration with Venture Games.
          </p>

          {/* Switcher */}
          <div style={styles.tabBar}>
            <button
              style={{
                ...styles.tabBtn,
                backgroundColor: activeTab === 'fc27' ? '#ff2a51' : 'transparent',
                color: activeTab === 'fc27' ? '#ffffff' : '#94a3b8',
              }}
              onClick={() => setActiveTab('fc27')}
            >
              <Gamepad2 size={17} />
              <span>EA SPORTS FC 27</span>
            </button>
            <button
              style={{
                ...styles.tabBtn,
                backgroundColor: activeTab === 'tekken8' ? '#ff2a51' : 'transparent',
                color: activeTab === 'tekken8' ? '#ffffff' : '#94a3b8',
              }}
              onClick={() => setActiveTab('tekken8')}
            >
              <Swords size={17} />
              <span>TEKKEN 8</span>
            </button>
          </div>
        </div>

        {/* Game Card */}
        <div className="pro-card" style={styles.card}>
          <div style={styles.bannerWrapper}>
            <img src={current.banner} alt={current.name} style={styles.bannerImg} />
            <div style={styles.bannerOverlay} />
            <div style={styles.bannerBadge}>
              <span>{current.badge}</span>
            </div>
          </div>

          <div style={styles.cardBody}>
            <div style={styles.topRow}>
              <div>
                <h3 style={styles.gameTitle}>{current.name}</h3>
                <p style={styles.gameTagline}>{current.tagline}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => onRegisterGame(current.id)}
              >
                <Trophy size={16} />
                <span>Register for {activeTab === 'fc27' ? 'FC 27' : 'TEKKEN 8'}</span>
              </button>
            </div>

            <p style={styles.desc}>{current.description}</p>

            {/* Highlights */}
            <div style={styles.highlightsGrid}>
              {current.highlights.map((h, i) => (
                <div key={i} style={styles.hlCard}>
                  <span style={styles.hlLabel}>{h.label}</span>
                  <span style={styles.hlVal}>{h.val}</span>
                </div>
              ))}
            </div>

            {/* Rules Accordion */}
            <div style={styles.rulesBox}>
              <button
                style={styles.rulesHeader}
                onClick={() => setShowRules(!showRules)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={16} color="#06b6d4" />
                  <span style={{ fontWeight: 600 }}>Official Tournament Rules & Format</span>
                </div>
                <ChevronRight
                  size={16}
                  style={{
                    transform: showRules ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>

              {showRules && (
                <div style={styles.rulesContent}>
                  {current.rules.map((rule, idx) => (
                    <div key={idx} style={styles.ruleItem}>
                      <CheckCircle2 size={16} color="#ff2a51" style={{ flexShrink: 0, marginTop: '2px' }} />
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
    marginBottom: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabBar: {
    display: 'inline-flex',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '4px',
    marginTop: '20px',
  },
  tabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  card: {
    overflow: 'hidden',
  },
  bannerWrapper: {
    position: 'relative',
    height: '360px',
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
    background: 'linear-gradient(180deg, rgba(8, 9, 13, 0.1) 0%, rgba(8, 9, 13, 0.95) 100%)',
  },
  bannerBadge: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'rgba(15, 17, 24, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '6px 14px',
    borderRadius: '999px',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ffffff',
    backdropFilter: 'blur(8px)',
  },
  cardBody: {
    padding: '28px 32px',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '16px',
  },
  gameTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  gameTagline: {
    fontSize: '0.92rem',
    color: '#06b6d4',
    marginTop: '2px',
  },
  desc: {
    fontSize: '0.98rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
    maxWidth: '850px',
    marginBottom: '20px',
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '12px',
    marginBottom: '20px',
  },
  hlCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  hlLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  hlVal: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  rulesBox: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  rulesHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '0.92rem',
    cursor: 'pointer',
    textAlign: 'left',
  },
  rulesContent: {
    padding: '14px 18px 18px 18px',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  ruleItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '0.9rem',
    color: '#cbd5e1',
    lineHeight: 1.5,
  },
};
