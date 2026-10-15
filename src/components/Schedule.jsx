import React from 'react';
import { Clock, Calendar, MapPin, Trophy } from 'lucide-react';

export default function Schedule() {
  const highlights = [
    { time: '10:00 AM', title: 'CHECK-IN & CALIBRATION', desc: 'Doors open, console warm-ups at UBIT stations' },
    { time: '11:00 AM', title: 'TOURNAMENT KICKOFF', desc: 'Opening matches across FC 27 and TEKKEN 8' },
    { time: '02:00 PM', title: 'SEMIS & FINALS', desc: 'Main stage showdown for championship trophies' },
    { time: '03:30 PM', title: 'AWARD CEREMONY', desc: 'Trophies and honors presented with student advisors' },
  ];

  return (
    <section id="schedule" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-tag">EVENT TIMELINE</div>
          <h2 className="section-title">TOURNAMENT TIMINGS</h2>
          <p className="section-desc">
            Thursday, <strong>22nd October 2026</strong> • Operating strictly from <strong>10:00 AM to 4:00 PM</strong> at UBIT Department.
          </p>
        </div>

        <div style={styles.grid}>
          {highlights.map((item, idx) => (
            <div key={idx} className="rough-card" style={styles.card}>
              <div style={styles.timeTag}>
                <Clock size={12} color="#ff0033" />
                <span>{item.time}</span>
              </div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
            </div>
          ))}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '12px',
  },
  card: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  timeTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#ff0033',
    marginBottom: '8px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.98rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.01em',
    marginBottom: '4px',
  },
  desc: {
    fontSize: '0.82rem',
    color: '#a1a1aa',
    lineHeight: 1.45,
  },
};
