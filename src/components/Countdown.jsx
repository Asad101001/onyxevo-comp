import React, { useState, useEffect } from 'react';
import { Calendar, Clock, AlertCircle, Sparkles } from 'lucide-react';

export default function Countdown({ onRegisterClick }) {
  // Target: 21 October 2026, 23:59:59 PKT
  const targetDate = new Date('2026-10-21T23:59:59').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div style={styles.container}>
      {/* Top Header Tag */}
      <div style={styles.headerRow}>
        <div style={styles.deadlineBadge}>
          <AlertCircle size={15} color="#ff2a51" />
          <span>REGISTRATION DEADLINE: OCTOBER 21, 2026</span>
        </div>
        <div style={styles.eventBadge}>
          <Calendar size={15} color="#06b6d4" />
          <span>EVENT LAUNCH: OCTOBER 22</span>
        </div>
      </div>

      <h3 style={styles.title}>REGISTRATION CLOSING IN</h3>

      {/* High-Impact Digits */}
      <div style={styles.grid}>
        <div style={styles.unitBox}>
          <span style={styles.number}>{pad(timeLeft.days)}</span>
          <span style={styles.unitLabel}>DAYS</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={styles.unitBox}>
          <span style={styles.number}>{pad(timeLeft.hours)}</span>
          <span style={styles.unitLabel}>HOURS</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={styles.unitBox}>
          <span style={styles.number}>{pad(timeLeft.minutes)}</span>
          <span style={styles.unitLabel}>MINUTES</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={{ ...styles.unitBox, borderColor: 'rgba(255, 42, 81, 0.45)', background: 'rgba(255, 42, 81, 0.08)' }}>
          <span style={{ ...styles.number, color: '#ff2a51' }}>{pad(timeLeft.seconds)}</span>
          <span style={{ ...styles.unitLabel, color: '#ff476b' }}>SECONDS</span>
        </div>
      </div>

      {/* Tournament Timing Meta */}
      <div style={styles.footerInfo}>
        <div style={styles.timingItem}>
          <Clock size={16} color="#06b6d4" />
          <span>Tournament Hours: <strong>10:00 AM – 4:00 PM</strong></span>
        </div>
        <span style={styles.bullet}>•</span>
        <span>Venue: <strong>UBIT Department, Karachi University</strong></span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'rgba(15, 18, 26, 0.9)',
    border: '1px solid rgba(255, 42, 81, 0.35)',
    borderRadius: '20px',
    padding: '30px 24px',
    boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 42, 81, 0.15)',
    maxWidth: '720px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  deadlineBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff2a51',
    background: 'rgba(255, 42, 81, 0.1)',
    border: '1px solid rgba(255, 42, 81, 0.25)',
    padding: '5px 12px',
    borderRadius: '999px',
  },
  eventBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#06b6d4',
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.25)',
    padding: '5px 12px',
    borderRadius: '999px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#cbd5e1',
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '22px',
  },
  unitBox: {
    flex: '1',
    maxWidth: '110px',
    minWidth: '65px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '14px',
    padding: '16px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  number: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 4.5vw, 2.9rem)',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  },
  unitLabel: {
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  colon: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.8rem',
    fontWeight: 700,
    color: 'rgba(255, 255, 255, 0.3)',
    marginBottom: '16px',
  },
  footerInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    fontSize: '0.9rem',
    color: '#cbd5e1',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '16px',
  },
  timingItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  bullet: {
    color: '#64748b',
  },
};
