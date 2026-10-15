import React from 'react';
import { Clock, Gamepad2, Swords, Trophy, Award } from 'lucide-react';

const STAGES = [
  {
    phase: '1ST QUARTER',
    time: '10:00 AM – 12:00 PM',
    title: 'QUALIFIERS',
    icon: Gamepad2,
    desc: 'Check-in & opening pool rounds for FC 27 and TEKKEN 8.',
  },
  {
    phase: '2ND QUARTER',
    time: '12:00 PM – 02:00 PM',
    title: 'SEMI FINALS',
    icon: Swords,
    desc: 'Top qualifiers battle for main stage championship seeds.',
  },
  {
    phase: '3RD QUARTER',
    time: '02:00 PM – 03:30 PM',
    title: 'GRAND FINALS',
    icon: Trophy,
    desc: 'Main stage showdowns: FC 27 Final & TEKKEN 8 Grand Final.',
  },
  {
    phase: 'CLOSING',
    time: '03:30 PM – 04:00 PM',
    title: 'AWARDS CEREMONY',
    icon: Award,
    desc: 'Trophies & honors presented with student advisors.',
  },
];

export default function Schedule() {
  return (
    <section id="schedule" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-tag">TOURNAMENT TIMELINE</div>
          <h2 className="section-title">EVENT DAY SCHEDULE</h2>
          <p className="section-desc">
            Thursday, <strong>22nd October 2026</strong> • <strong>10:00 AM to 4:00 PM</strong> at UBIT Department.
          </p>
        </div>

        <div style={styles.grid}>
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="minimal-card" style={styles.card}>
                <div style={styles.topRow}>
                  <span style={styles.badge}>{s.phase}</span>
                  <div style={styles.timeTag}>
                    <Clock size={12} color="#ff1e42" />
                    <span>{s.time}</span>
                  </div>
                </div>

                <div style={styles.iconWrap}>
                  <Icon size={18} color="#ff1e42" />
                </div>

                <h3 style={styles.title}>{s.title}</h3>
                <p style={styles.desc}>{s.desc}</p>
              </div>
            );
          })}
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '14px',
  },
  card: {
    padding: '20px 18px',
    display: 'flex',
    flexDirection: 'column',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
    gap: '6px',
    flexWrap: 'wrap',
  },
  badge: {
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff1e42',
    background: 'rgba(255, 30, 66, 0.08)',
    border: '1px solid rgba(255, 30, 66, 0.25)',
    padding: '3px 8px',
    borderRadius: '4px',
  },
  timeTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.78rem',
    color: '#a1a1aa',
    fontWeight: 600,
  },
  iconWrap: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    background: 'rgba(255, 30, 66, 0.08)',
    border: '1px solid rgba(255, 30, 66, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.01em',
    marginBottom: '4px',
  },
  desc: {
    fontSize: '0.84rem',
    color: '#a1a1aa',
    lineHeight: 1.5,
  },
};
