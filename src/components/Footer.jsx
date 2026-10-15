import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

const InstagramIcon = ({ size = 18, color = '#ff2a51' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FAQS = [
  {
    q: 'When does registration end and when is the tournament held?',
    a: 'Registration strictly ends on 21st October 2026 at 11:59 PM. The tournament launches on 22nd October 2026 from 10:00 AM to 4:00 PM at the UBIT Department, Karachi University.',
  },
  {
    q: 'How do I pay the registration fee?',
    a: 'Payment is accepted solely via JazzCash to Hasnain Ahmed at 03156051408. You can copy the number directly in the registration modal.',
  },
  {
    q: 'What hardware is used for FC 27 and TEKKEN 8?',
    a: 'Official PlayStation 5 stations and DualSense controllers are provided in collaboration with Venture Games. Personal tournament-certified controllers or fight sticks are permitted upon morning inspection.',
  },
  {
    q: 'What is the schedule breakdown?',
    a: 'Qualifying rounds run during the 1st quarter (10 AM – 12 PM), Semi Finals in the 2nd quarter (12 PM – 2 PM), Grand Finals in the 3rd quarter (2 PM – 3:30 PM), followed by the closing awards ceremony.',
  },
];

export default function Footer({ onOpenRegister }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        {/* FAQ Section */}
        <div style={styles.faqWrapper}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="section-badge">FREQUENTLY ASKED QUESTIONS</div>
            <h3 style={styles.faqTitle}>ESSENTIAL TOURNAMENT INTEL</h3>
          </div>

          <div style={styles.faqList}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className="pro-card" style={styles.faqItem}>
                <button style={styles.faqHeader} onClick={() => toggleFaq(idx)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={17} color="#ff2a51" />
                    <span>{faq.q}</span>
                  </div>
                  {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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

        {/* Banner CTA */}
        <div className="pro-card" style={styles.banner}>
          <div>
            <h3 style={styles.bTitle}>REGISTER BEFORE OCTOBER 21ST</h3>
            <p style={styles.bText}>
              Be part of the historic first esports championship at UBIT for Career Connect '26.
            </p>
          </div>
          <button className="btn btn-primary" onClick={onOpenRegister}>
            Register Now
          </button>
        </div>

        {/* Footer info */}
        <div style={styles.footerRow}>
          <div style={styles.brandBox}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logos/onyx-evo-emblem.jpg" alt="Onyx Evo" style={styles.logo} />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>ONYX EVO 2026</strong>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>DCS - UBIT • CAREER CONNECT '26</div>
              </div>
            </div>
            <p style={styles.about}>
              Under the student advisory guidance of Dr. Syed Mohammad Khalid Jamal and Dr. Humera Azam. In strategic collaboration with Venture Games.
            </p>
          </div>

          <div style={styles.socialBox}>
            <span style={styles.socialTitle}>OFFICIAL SOCIALS</span>
            <a
              href="https://instagram.com/onyxevo2026/"
              target="_blank"
              rel="noreferrer"
              style={styles.socialBtn}
            >
              <InstagramIcon size={17} color="#ff2a51" />
              <span>Follow @onyxevo2026 on Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={styles.bottomBar}>
          <div style={styles.copy}>
            © 2026 ONYX EVO • Department of Computer Science (UBIT), University of Karachi.
          </div>
          <button style={styles.topBtn} onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={14} color="#ff2a51" />
          </button>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '70px 0 30px 0',
    background: '#06070a',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  },
  faqWrapper: {
    maxWidth: '820px',
    margin: '0 auto 50px auto',
  },
  faqTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  faqItem: {
    background: 'rgba(255, 255, 255, 0.02)',
  },
  faqHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqBody: {
    padding: '0 20px 18px 20px',
    fontSize: '0.9rem',
    color: '#94a3b8',
    lineHeight: 1.6,
  },
  banner: {
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '50px',
    border: '1px solid rgba(255, 42, 81, 0.35)',
    background: 'linear-gradient(135deg, rgba(255, 42, 81, 0.1) 0%, rgba(15, 18, 26, 0.9) 100%)',
  },
  bTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.35rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '4px',
  },
  bText: {
    fontSize: '0.92rem',
    color: '#cbd5e1',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '30px',
    paddingBottom: '36px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  brandBox: {
    maxWidth: '520px',
  },
  logo: {
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    objectFit: 'cover',
    border: '1px solid rgba(255, 42, 81, 0.35)',
  },
  about: {
    fontSize: '0.88rem',
    color: '#94a3b8',
    lineHeight: 1.6,
    marginTop: '12px',
  },
  socialBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  socialTitle: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#cbd5e1',
    letterSpacing: '0.06em',
  },
  socialBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.88rem',
    fontWeight: 500,
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '8px 14px',
    borderRadius: '8px',
  },
  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '24px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  copy: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  topBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#cbd5e1',
    fontSize: '0.8rem',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
