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
      {/* Top Warning Banner */}
      <div style={styles.topBanner}>
        <div style={styles.warningBadge}>
          <AlertTriangle size={13} color="#ff0033" />
          <span>REGISTRATION DEADLINE: 21 OCT</span>
        </div>
        <div style={styles.eventBadge}>
          <Calendar size={13} color="#ffffff" />
          <span>EVENT: 22 OCT (10AM – 4PM)</span>
        </div>
      </div>

      {/* Digits Grid */}
      <div style={styles.digitsGrid}>
        <div style={styles.box}>
          <span style={styles.val}>{pad(timeLeft.days)}</span>
          <span style={styles.unit}>DAYS</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={styles.box}>
          <span style={styles.val}>{pad(timeLeft.hours)}</span>
          <span style={styles.unit}>HRS</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={styles.box}>
          <span style={styles.val}>{pad(timeLeft.minutes)}</span>
          <span style={styles.unit}>MINS</span>
        </div>
        <span style={styles.colon}>:</span>
        <div style={{ ...styles.box, background: 'rgba(255, 0, 51, 0.12)', borderColor: '#ff0033' }}>
          <span style={{ ...styles.val, color: '#ff0033' }}>{pad(timeLeft.seconds)}</span>
          <span style={{ ...styles.unit, color: '#ff4d6d' }}>SECS</span>
        </div>
      </div>

      {/* Meta Footer */}
      <div style={styles.metaRow}>
        <div style={styles.metaCol}>
          <Clock size={13} color="#ff0033" />
          <span>10:00 AM – 4:00 PM</span>
        </div>
        <span style={{ color: '#52525b' }}>•</span>
        <span>UBIT Department, University of Karachi</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'rgba(10, 10, 14, 0.95)',
    border: '1px solid rgba(255, 0, 51, 0.35)',
    borderTop: '3px solid #ff0033',
    borderRadius: '8px',
    padding: '20px 14px',
    maxWidth: '640px',
    width: '100%',
    margin: '0 auto',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 0, 51, 0.15)',
    textAlign: 'center',
  },
  topBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  warningBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.06em',
    color: '#ff0033',
    background: 'rgba(255, 0, 51, 0.12)',
    border: '1px solid rgba(255, 0, 51, 0.35)',
    padding: '4px 10px',
    borderRadius: '4px',
  },
  eventBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: '#d4d4d8',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '4px 10px',
    borderRadius: '4px',
  },
  digitsGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    marginBottom: '16px',
  },
  box: {
    flex: '1',
    maxWidth: '85px',
    minWidth: '50px',
    background: '#050508',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '6px',
    padding: '10px 4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  val: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
    fontWeight: 900,
    color: '#ffffff',
    lineHeight: 1,
    letterSpacing: '-0.02em',
    marginBottom: '4px',
  },
  unit: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.62rem',
    fontWeight: 800,
    letterSpacing: '0.06em',
    color: '#71717a',
  },
  colon: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#ff0033',
    marginBottom: '12px',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    fontSize: '0.8rem',
    color: '#a1a1aa',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    paddingTop: '12px',
  },
  metaCol: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 700,
    color: '#ffffff',
  },
};
