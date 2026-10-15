import React, { useState, useEffect } from 'react';
import { Calendar, Clock, AlertTriangle } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-10-21T23:59:59').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
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
    <div style={styles.card}>
      {/* Top Header Tags */}
      <div style={styles.badgeRow}>
        <div style={styles.deadlineBadge}>
          <AlertTriangle size={13} color="#ff1e42" />
          <span>REGISTRATION CLOSES 21 OCT</span>
        </div>
        <div style={styles.eventBadge}>
          <Calendar size={13} color="#ffffff" />
          <span>EVENT: 22 OCT (10AM – 4PM)</span>
        </div>
      </div>

      {/* Countdown Digits */}
      <div style={styles.digitsRow}>
        <div style={styles.digitBox}>
          <span style={styles.number}>{pad(timeLeft.days)}</span>
          <span style={styles.label}>Days</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={styles.digitBox}>
          <span style={styles.number}>{pad(timeLeft.hours)}</span>
          <span style={styles.label}>Hours</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={styles.digitBox}>
          <span style={styles.number}>{pad(timeLeft.minutes)}</span>
          <span style={styles.label}>Mins</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={{ ...styles.digitBox, background: 'rgba(255, 30, 66, 0.08)', borderColor: 'rgba(255, 30, 66, 0.35)' }}>
          <span style={{ ...styles.number, color: '#ff1e42' }}>{pad(timeLeft.seconds)}</span>
          <span style={{ ...styles.label, color: '#ff476b' }}>Secs</span>
        </div>
      </div>

      {/* Bottom Sub-meta */}
      <div style={styles.bottomMeta}>
        <div style={styles.metaItem}>
          <Clock size={14} color="#ff1e42" />
          <span>10:00 AM – 4:00 PM</span>
        </div>
        <span style={styles.dot}>•</span>
        <span>UBIT Department, Karachi University</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'rgba(14, 15, 21, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderTop: '2px solid #ff1e42',
    borderRadius: '16px',
    padding: '24px 16px',
    maxWidth: '680px',
    width: '100%',
    margin: '0 auto',
    boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 30, 66, 0.1)',
    backdropFilter: 'blur(16px)',
    textAlign: 'center',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '18px',
  },
  deadlineBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff1e42',
    background: 'rgba(255, 30, 66, 0.1)',
    border: '1px solid rgba(255, 30, 66, 0.3)',
    padding: '4px 10px',
    borderRadius: '999px',
  },
  eventBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.72rem',
    fontWeight: 600,
    color: '#f4f4f5',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '4px 10px',
    borderRadius: '999px',
  },
  digitsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  digitBox: {
    flex: '1',
    maxWidth: '95px',
    minWidth: '55px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '12px 4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  number: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1,
    letterSpacing: '-0.02em',
    marginBottom: '4px',
  },
  label: {
    fontSize: '0.68rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    color: '#71717a',
    textTransform: 'uppercase',
  },
  colon: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 700,
    color: 'rgba(255, 255, 255, 0.2)',
    marginBottom: '14px',
  },
  bottomMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    fontSize: '0.84rem',
    color: '#a1a1aa',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    paddingTop: '14px',
  },
  metaItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontWeight: 600,
    color: '#ffffff',
  },
  dot: {
    color: 'rgba(255, 255, 255, 0.2)',
  },
};
