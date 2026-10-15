import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowUp, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 16, color = '#ff1e42' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FAQS = [
  {
    q: 'When does registration close & when is the tournament?',
    a: 'Registration ends on 21st October at 11:59 PM. The tournament runs on 22nd October (10:00 AM – 4:00 PM) at UBIT Department.',
  },
  {
    q: 'How do I pay the registration fee?',
    a: 'Transfer via JazzCash to Hasnain Ahmed at 03156051408 and send confirmation to @onyxevo2026 on Instagram.',
  },
  {
    q: 'What equipment is provided?',
    a: 'PlayStation 5 stations and DualSense pads are provided by Venture Games. Personal fight sticks and pads are permitted upon morning inspection.',
  },
];

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={styles.footer}>
      <div className="container">
        {/* Compact FAQ */}
        <div style={styles.faqWrapper}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div className="section-tag">FAQ</div>
            <h3 style={styles.faqTitle}>QUICK INTEL</h3>
          </div>

          <div style={styles.faqList}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className="minimal-card" style={styles.faqItem}>
                <button style={styles.faqBtn} onClick={() => toggleFaq(idx)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={15} color="#ff1e42" />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{faq.q}</span>
                  </div>
                  {openFaq === idx ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
                {openFaq === idx && (
                  <div style={styles.faqBody}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Row */}
        <div style={styles.footerRow}>
          <div style={styles.brandBox}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logos/onyx-evo-emblem.jpg" alt="Onyx Evo" style={styles.logo} />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '1.05rem' }}>ONYX EVO 2026</strong>
                <div style={{ fontSize: '0.72rem', color: '#71717a' }}>UBIT • CAREER CONNECT '26</div>
              </div>
            </div>
            <p style={styles.desc}>
              First-ever esports platform in UBIT history. Advised by Dr. Syed Mohammad Khalid Jamal & Dr. Humera Azam, with Venture Games.
            </p>
          </div>

          <div style={styles.actionBox}>
            <span style={styles.label}>OFFICIAL CHANNEL</span>
            <a
              href="https://instagram.com/onyxevo2026/"
              target="_blank"
              rel="noreferrer"
              style={styles.instaLink}
            >
              <InstagramIcon size={16} />
              <span>@onyxevo2026 on Instagram</span>
              <ArrowUpRight size={13} color="#71717a" />
            </a>
            <div style={styles.paymentInfo}>
              <span style={styles.payLabel}>Registration Contact:</span>
              <span style={styles.payVal}>Hasnain Ahmed • 03156051408 (JazzCash)</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={styles.bottomBar}>
          <div style={styles.copy}>
            © 2026 ONYX EVO • Department of Computer Science (UBIT), University of Karachi.
          </div>
          <button style={styles.topBtn} onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={13} color="#ff1e42" />
          </button>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '60px 0 24px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    background: '#050507',
  },
  faqWrapper: {
    maxWidth: '740px',
    margin: '0 auto 48px auto',
  },
  faqTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  faqItem: {
    background: 'rgba(255, 255, 255, 0.02)',
  },
  faqBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqBody: {
    padding: '0 18px 14px 18px',
    fontSize: '0.84rem',
    color: '#a1a1aa',
    lineHeight: 1.5,
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '24px',
    paddingBottom: '28px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
  },
  brandBox: {
    maxWidth: '440px',
  },
  logo: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    objectFit: 'cover',
    border: '1px solid rgba(255, 30, 66, 0.3)',
  },
  desc: {
    fontSize: '0.84rem',
    color: '#71717a',
    lineHeight: 1.5,
    marginTop: '10px',
  },
  actionBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#a1a1aa',
    letterSpacing: '0.06em',
  },
  instaLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.84rem',
    fontWeight: 600,
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '7px 12px',
    borderRadius: '8px',
  },
  paymentInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    marginTop: '4px',
  },
  payLabel: {
    fontSize: '0.7rem',
    color: '#71717a',
    textTransform: 'uppercase',
  },
  payVal: {
    fontSize: '0.82rem',
    color: '#f4f4f5',
    fontWeight: 600,
  },
  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '20px',
    flexWrap: 'wrap',
    gap: '10px',
  },
  copy: {
    fontSize: '0.78rem',
    color: '#52525b',
  },
  topBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'transparent',
    border: 'none',
    color: '#a1a1aa',
    fontSize: '0.78rem',
    cursor: 'pointer',
  },
};
