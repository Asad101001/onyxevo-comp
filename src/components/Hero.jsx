import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Copy, Check, Sparkles } from 'lucide-react';
import Countdown from './Countdown';

const InstagramIcon = ({ size = 16, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyNumber = () => {
    navigator.clipboard.writeText('03156051408');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        {/* Marketable Badge */}
        <div style={styles.badgeRow}>
          <div style={styles.pill}>
            <span style={styles.pulseDot} />
            <span>UBIT HISTORIC FIRST • CAREER CONNECT '26</span>
          </div>
          <div style={styles.ventureTag}>
            WITH <strong>VENTURE GAMES</strong>
          </div>
        </div>

        {/* Emblem */}
        <div style={styles.emblemBox}>
          <img
            src="/logos/onyx-evo-emblem.jpg"
            alt="Onyx Evo 2026 Emblem"
            style={styles.emblem}
          />
        </div>

        {/* Punchy Marketable Headline */}
        <h1 style={styles.title}>
          ONYX EVO <span style={{ color: '#ff1e42' }}>2026</span>
        </h1>

        {/* Condensed Subtitle (Cut 60% text!) */}
        <p style={styles.lead}>
          First-ever professional esports competition in UBIT history. 
          Advised by <strong>Dr. Syed Mohammad Khalid Jamal</strong> & <strong>Dr. Humera Azam</strong>.
        </p>

        {/* Key Event Badges */}
        <div style={styles.eventPills}>
          <span style={styles.eventPill}>
            <Calendar size={14} color="#ff1e42" /> <strong>22 Oct 2026</strong> (10AM – 4PM)
          </span>
          <span style={styles.eventPill}>
            <MapPin size={14} color="#ff1e42" /> <strong>UBIT Department, KU</strong>
          </span>
        </div>

        {/* Prominent High-Priority Countdown */}
        <div style={styles.countdownBox}>
          <Countdown />
        </div>

        {/* Condensed, Interactive Payment Info Card */}
        <div className="minimal-card" style={styles.payCard}>
          <div style={styles.payContent}>
            <div>
              <div style={styles.payTag}>REGISTRATION FEE • ONLY JAZZCASH</div>
              <div style={styles.payTitle}>
                Hasnain Ahmed — <span style={{ color: '#ff1e42' }}>03156051408</span>
              </div>
              <div style={styles.paySub}>Transfer before 21 Oct & DM receipt to @onyxevo2026</div>
            </div>
            <button
              onClick={copyNumber}
              style={{
                ...styles.copyBtn,
                background: copied ? '#10b981' : 'rgba(255, 30, 66, 0.15)',
                borderColor: copied ? '#10b981' : 'rgba(255, 30, 66, 0.35)',
              }}
              title="Copy JazzCash Number"
            >
              {copied ? <Check size={14} color="#fff" /> : <Copy size={14} color="#ff1e42" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Clear Action CTAs */}
        <div style={styles.btnRow}>
          <a
            href="https://instagram.com/onyxevo2026/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-crimson"
            style={styles.actionBtn}
          >
            <InstagramIcon size={16} />
            <span>Register on Instagram</span>
            <ArrowRight size={15} />
          </a>

          <button
            className="btn btn-outline"
            style={styles.actionBtn}
            onClick={() => scrollTo('games')}
          >
            <span>View FC 27 & TEKKEN 8</span>
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: '115px',
    paddingBottom: '70px',
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.74rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff1e42',
    background: 'rgba(255, 30, 66, 0.08)',
    border: '1px solid rgba(255, 30, 66, 0.25)',
    padding: '5px 12px',
    borderRadius: '999px',
  },
  pulseDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#ff1e42',
    boxShadow: '0 0 8px #ff1e42',
  },
  ventureTag: {
    fontSize: '0.74rem',
    color: '#a1a1aa',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '5px 12px',
    borderRadius: '999px',
  },
  emblemBox: {
    marginBottom: '16px',
  },
  emblem: {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 0 35px rgba(255, 30, 66, 0.35)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    color: '#ffffff',
    lineHeight: 1.1,
    marginBottom: '12px',
  },
  lead: {
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: '#a1a1aa',
    maxWidth: '580px',
    lineHeight: 1.55,
    marginBottom: '18px',
  },
  eventPills: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '26px',
  },
  eventPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.84rem',
    color: '#f4f4f5',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '6px 14px',
    borderRadius: '8px',
  },
  countdownBox: {
    width: '100%',
    marginBottom: '24px',
  },
  payCard: {
    maxWidth: '680px',
    width: '100%',
    padding: '16px 20px',
    marginBottom: '26px',
    background: 'rgba(255, 30, 66, 0.04)',
    border: '1px solid rgba(255, 30, 66, 0.22)',
  },
  payContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
    textAlign: 'left',
  },
  payTag: {
    fontSize: '0.68rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#ff1e42',
    marginBottom: '2px',
  },
  payTitle: {
    fontSize: '0.98rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  paySub: {
    fontSize: '0.82rem',
    color: '#a1a1aa',
    marginTop: '2px',
  },
  copyBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid',
    borderRadius: '6px',
    padding: '8px 14px',
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  btnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  actionBtn: {
    padding: '12px 24px',
    fontSize: '0.92rem',
  },
};
