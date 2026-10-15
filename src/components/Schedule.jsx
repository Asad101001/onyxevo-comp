import React from 'react';
import { Clock, Trophy, Swords, Gamepad2, Award } from 'lucide-react';

const SCHEDULE_QUARTERS = [
  {
    quarter: '1ST QUARTER',
    time: '10:00 AM – 12:00 PM',
    title: 'QUALIFYING ROUNDS',
    icon: Gamepad2,
    color: '#ff2a51',
    description: 'Check-in, station calibration, and group pool qualifying matches for both EA SPORTS FC 27 and TEKKEN 8.',
  },
  {
    quarter: '2ND QUARTER',
    time: '12:00 PM – 02:00 PM',
    title: 'SEMI FINALS',
    icon: Swords,
    color: '#06b6d4',
    description: 'Top qualifiers collide in the semi final brackets. High-stakes elimination for a spot on the main championship stage.',
  },
  {
    quarter: '3RD QUARTER',
    time: '02:00 PM – 03:30 PM',
    title: 'GRAND FINALS',
    icon: Trophy,
    color: '#f59e0b',
    description: 'The ultimate showdown. The FC 27 Championship match followed by TEKKEN 8 Iron Fist Grand Final live on the arena display.',
  },
  {
    quarter: 'CLOSING',
    time: '03:30 PM – 04:00 PM',
    title: 'AWARDS & CLOSING CEREMONY',
    icon: Award,
    color: '#10b981',
    description: 'Presentation of tournament trophies, certificates, and Career Connect 26 honors with our student advisors.',
  },
];

export default function Schedule() {
  return (
    <section id="schedule" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-badge">MATCH DAY TIMELINE</div>
          <h2 className="section-heading">TOURNAMENT SCHEDULE</h2>
          <p className="section-subtitle">
            Running strictly from <strong>10:00 AM to 4:00 PM</strong> on <strong>October 22nd</strong> at UBIT Department, Karachi University.
          </p>
        </div>

        <div style={styles.grid}>
          {SCHEDULE_QUARTERS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="pro-card" style={styles.card}>
                <div style={styles.cardTop}>
                  <span style={{ ...styles.quarterBadge, color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}>
                    {item.quarter}
                  </span>
                  <div style={styles.timeTag}>
                    <Clock size={14} color="#94a3b8" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <div style={styles.cardBody}>
                  <div style={{ ...styles.iconCircle, background: `${item.color}15`, borderColor: `${item.color}35` }}>
                    <Icon size={20} color={item.color} />
                  </div>
                  <div>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <p style={styles.cardDesc}>{item.description}</p>
                  </div>
                </div>
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
    background: 'rgba(12, 14, 20, 0.4)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '44px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
  },
  quarterBadge: {
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    padding: '4px 10px',
    borderRadius: '6px',
    border: '1px solid',
  },
  timeTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#cbd5e1',
  },
  cardBody: {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
  },
  iconCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '6px',
  },
  cardDesc: {
    fontSize: '0.88rem',
    color: '#94a3b8',
    lineHeight: 1.55,
  },
};
