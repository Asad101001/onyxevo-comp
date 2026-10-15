import React from 'react';
import { ShieldCheck, GraduationCap } from 'lucide-react';

const ADVISORS = [
  {
    name: 'Dr. Syed Mohammad Khalid Jamal',
    title: 'Student Advisor',
    dept: 'Department of Computer Science (UBIT)',
    institution: 'University of Karachi',
    roleTag: 'FACULTY & STUDENT ADVISOR',
    note: 'Guiding student leadership and competitive innovation under Career Connect 26 to launch the first-ever esports platform in UBIT history.',
  },
  {
    name: 'Dr. Humera Azam',
    title: 'Student Advisor',
    dept: 'Department of Computer Science (UBIT)',
    institution: 'University of Karachi',
    roleTag: 'FACULTY & STUDENT ADVISOR',
    note: 'Fostering extracurricular talent and establishing high standards of sportsmanship, technical execution, and community engagement.',
  },
];

export default function Advisors() {
  return (
    <section id="advisors" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <div className="section-badge">ACADEMIC & STUDENT LEADERSHIP</div>
          <h2 className="section-heading">OUR STUDENT ADVISORS</h2>
          <p className="section-subtitle">
            Onyx Evo is established as a landmark initiative for Career Connect '26 under the mentorship and guidance of our esteemed advisors.
          </p>
        </div>

        <div style={styles.grid}>
          {ADVISORS.map((advisor, index) => (
            <div key={index} className="pro-card" style={styles.card}>
              <div style={styles.cardTop}>
                <span style={styles.tag}>{advisor.roleTag}</span>
                <GraduationCap size={18} color="#94a3b8" />
              </div>

              <h3 style={styles.name}>{advisor.name}</h3>
              <div style={styles.title}>{advisor.title}</div>
              <div style={styles.dept}>{advisor.dept}</div>
              <div style={styles.inst}>{advisor.institution}</div>

              <p style={styles.note}>"{advisor.note}"</p>
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
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    maxWidth: '920px',
    margin: '0 auto',
  },
  card: {
    padding: '30px 28px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  tag: {
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#ff2a51',
    background: 'rgba(255, 42, 81, 0.1)',
    border: '1px solid rgba(255, 42, 81, 0.25)',
    padding: '4px 10px',
    borderRadius: '6px',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.35rem',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.25,
    marginBottom: '4px',
  },
  title: {
    fontSize: '0.92rem',
    fontWeight: 600,
    color: '#ff2a51',
  },
  dept: {
    fontSize: '0.88rem',
    color: '#cbd5e1',
    marginTop: '2px',
  },
  inst: {
    fontSize: '0.8rem',
    color: '#64748b',
    marginBottom: '18px',
  },
  note: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    lineHeight: 1.6,
    fontStyle: 'italic',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '16px',
  },
};
