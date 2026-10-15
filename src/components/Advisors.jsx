import React from 'react';
import { GraduationCap } from 'lucide-react';

const ADVISORS = [
  {
    name: 'Dr. Syed Mohammad Khalid Jamal',
    role: 'Student Advisor',
    dept: 'Department of Computer Science (UBIT)',
    institution: 'University of Karachi',
  },
  {
    name: 'Dr. Humera Azam',
    role: 'Student Advisor',
    dept: 'Department of Computer Science (UBIT)',
    institution: 'University of Karachi',
  },
];

export default function Advisors() {
  return (
    <section id="advisors" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-tag">LEADERSHIP</div>
          <h2 className="section-title">STUDENT ADVISORS</h2>
          <p className="section-desc">
            Organized under the guidance of our distinguished faculty advisors at UBIT.
          </p>
        </div>

        <div style={styles.grid}>
          {ADVISORS.map((advisor, index) => (
            <div key={index} className="minimal-card" style={styles.card}>
              <div style={styles.topRow}>
                <span style={styles.tag}>FACULTY ADVISOR</span>
                <GraduationCap size={16} color="#71717a" />
              </div>

              <h3 style={styles.name}>{advisor.name}</h3>
              <div style={styles.role}>{advisor.role}</div>
              <div style={styles.dept}>{advisor.dept}</div>
              <div style={styles.inst}>{advisor.institution}</div>
            </div>
          ))}
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    padding: '24px 22px',
    display: 'flex',
    flexDirection: 'column',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  tag: {
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff1e42',
    background: 'rgba(255, 30, 66, 0.08)',
    border: '1px solid rgba(255, 30, 66, 0.25)',
    padding: '3px 8px',
    borderRadius: '4px',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.01em',
    lineHeight: 1.25,
    marginBottom: '4px',
  },
  role: {
    fontSize: '0.86rem',
    fontWeight: 600,
    color: '#ff1e42',
  },
  dept: {
    fontSize: '0.82rem',
    color: '#cbd5e1',
    marginTop: '2px',
  },
  inst: {
    fontSize: '0.78rem',
    color: '#71717a',
  },
};
