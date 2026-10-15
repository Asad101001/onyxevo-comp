import React from 'react';
import { Shield } from 'lucide-react';

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
          <div className="section-tag">GUIDANCE & PATRONAGE</div>
          <h2 className="section-title">OUR STUDENT ADVISORS</h2>
          <p className="section-desc">
            Organized as a signature module of Career Connect '26 under our esteemed student advisors at UBIT.
          </p>
        </div>

        <div style={styles.grid}>
          {ADVISORS.map((advisor, index) => (
            <div key={index} className="rough-card" style={styles.card}>
              <div style={styles.topRow}>
                <span style={styles.tag}>FACULTY ADVISOR</span>
                <Shield size={16} color="#ff0033" />
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '14px',
    maxWidth: '780px',
    margin: '0 auto',
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
    marginBottom: '10px',
  },
  tag: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.66rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#ff0033',
    background: 'rgba(255, 0, 51, 0.1)',
    border: '1px solid rgba(255, 0, 51, 0.3)',
    padding: '2px 8px',
    borderRadius: '2px',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.01em',
    marginBottom: '2px',
  },
  role: {
    fontSize: '0.84rem',
    fontWeight: 700,
    color: '#ff0033',
  },
  dept: {
    fontSize: '0.8rem',
    color: '#d4d4d8',
    marginTop: '2px',
  },
  inst: {
    fontSize: '0.75rem',
    color: '#71717a',
  },
};
