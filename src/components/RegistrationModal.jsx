import React, { useState } from 'react';
import { X, Trophy, CheckCircle, Copy, AlertCircle, Gamepad2, Swords, Sparkles, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { showToast } from './Toast';

export default function RegistrationModal({ isOpen, onClose, preselectedGame = 'fc27' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    gamerTag: '',
    rollNo: '',
    whatsapp: '',
    game: preselectedGame,
    tid: '',
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const copyPaymentNumber = () => {
    navigator.clipboard.writeText('03156051408');
    showToast('JazzCash number copied: 03156051408', 'info');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.gamerTag || !formData.rollNo || !formData.whatsapp) {
      setError('Please fill in all required combatant fields.');
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    if (!formData.agreed) {
      setError('Please agree to attend DCS - UBIT on October 22nd between 10:00 AM – 4:00 PM.');
      showToast('Please accept the attendance and rules agreement.', 'error');
      return;
    }

    setError('');
    const randomTicket = 'ONYX-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);

    showToast('Registration successfully submitted! Your pass is ready.', 'success');

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff2a51', '#06b6d4', '#ffffff'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleDone = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          <X size={20} color="#cbd5e1" />
        </button>

        {!submitted ? (
          <div>
            <div style={styles.header}>
              <div style={styles.badge}>
                <Trophy size={14} color="#ff2a51" />
                <span>OFFICIAL TOURNAMENT REGISTRATION</span>
              </div>
              <h3 style={styles.title}>REGISTER FOR ONYX EVO 2026</h3>
              <p style={styles.subtitle}>
                Deadline: <strong style={{ color: '#ff2a51' }}>21st October</strong> • Tournament: <strong style={{ color: '#ffffff' }}>22nd October (10 AM – 4 PM)</strong>
              </p>
            </div>

            {/* JazzCash Official Payment Info Box */}
            <div style={styles.paymentBox}>
              <div style={styles.paymentHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CreditCard size={18} color="#ff2a51" />
                  <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>Registration Fee Payment</strong>
                </div>
                <span style={styles.jazzCashTag}>ONLY JAZZCASH</span>
              </div>

              <div style={styles.paymentDetailsRow}>
                <div>
                  <span style={styles.payLabel}>Account Title</span>
                  <strong style={styles.payVal}>Hasnain Ahmed</strong>
                </div>
                <div>
                  <span style={styles.payLabel}>JazzCash Mobile Number</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <strong style={{ ...styles.payVal, color: '#ff2a51' }}>03156051408</strong>
                    <button type="button" onClick={copyPaymentNumber} style={styles.copyBtn} title="Copy Number">
                      <Copy size={13} />
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div style={styles.errorBanner}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.grid2}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>FULL NAME *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Asad Ahmed"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>GAMER TAG / ALIAS *</label>
                  <input
                    type="text"
                    name="gamerTag"
                    required
                    placeholder="e.g. VORTEX"
                    value={formData.gamerTag}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.grid2}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>STUDENT ROLL NO / ID *</label>
                  <input
                    type="text"
                    name="rollNo"
                    required
                    placeholder="e.g. EB26102001"
                    value={formData.rollNo}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>WHATSAPP NUMBER *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="e.g. 03001234567"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* Game Choice */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>CHOOSE COMPETITION TITLE *</label>
                <div style={styles.gameOptions}>
                  <label style={{ ...styles.radioCard, borderColor: formData.game === 'fc27' ? '#ff2a51' : 'rgba(255,255,255,0.1)' }}>
                    <input
                      type="radio"
                      name="game"
                      value="fc27"
                      checked={formData.game === 'fc27'}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                    <Gamepad2 size={18} color="#ff2a51" />
                    <div>
                      <div style={styles.radioTitle}>EA SPORTS FC 27</div>
                      <div style={styles.radioSub}>1v1 Football</div>
                    </div>
                  </label>

                  <label style={{ ...styles.radioCard, borderColor: formData.game === 'tekken8' ? '#06b6d4' : 'rgba(255,255,255,0.1)' }}>
                    <input
                      type="radio"
                      name="game"
                      value="tekken8"
                      checked={formData.game === 'tekken8'}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                    <Swords size={18} color="#06b6d4" />
                    <div>
                      <div style={styles.radioTitle}>TEKKEN 8</div>
                      <div style={styles.radioSub}>1v1 Fighting</div>
                    </div>
                  </label>

                  <label style={{ ...styles.radioCard, borderColor: formData.game === 'both' ? '#f59e0b' : 'rgba(255,255,255,0.1)' }}>
                    <input
                      type="radio"
                      name="game"
                      value="both"
                      checked={formData.game === 'both'}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                    <Sparkles size={18} color="#f59e0b" />
                    <div>
                      <div style={styles.radioTitle}>DUAL COMBATANT</div>
                      <div style={styles.radioSub}>Both Titles</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Optional Transaction ID */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>JAZZCASH TRANSACTION ID / TID (OPTIONAL)</label>
                <input
                  type="text"
                  name="tid"
                  placeholder="e.g. 26101512345"
                  value={formData.tid}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* Agreement */}
              <label style={styles.checkRow}>
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  style={styles.checkInput}
                />
                <span style={styles.checkText}>
                  I confirm attendance on <strong>22nd October (10:00 AM – 4:00 PM)</strong> at UBIT Department, Karachi University, and will adhere to fair play tournament guidelines.
                </span>
              </label>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '6px' }}>
                Confirm Registration & Get Pass
              </button>
            </form>
          </div>
        ) : (
          /* Pass view */
          <div style={styles.passWrapper}>
            <CheckCircle size={48} color="#10b981" />
            <h3 style={styles.passHeading}>REGISTRATION CONFIRMED</h3>
            <p style={styles.passSub}>Your player registration for Onyx Evo 2026 is locked in!</p>

            <div style={styles.passCard}>
              <div style={styles.passTop}>
                <div>
                  <div style={styles.passEvent}>ONYX EVO 2026</div>
                  <div style={styles.passSubtext}>CAREER CONNECT '26 • DCS - UBIT</div>
                </div>
                <div style={styles.passIdBadge}>{ticketId}</div>
              </div>

              <div style={styles.passDetailsGrid}>
                <div>
                  <span style={styles.pLabel}>Competitor</span>
                  <span style={styles.pVal}>{formData.fullName}</span>
                </div>
                <div>
                  <span style={styles.pLabel}>Alias</span>
                  <span style={{ ...styles.pVal, color: '#ff2a51' }}>{formData.gamerTag}</span>
                </div>
                <div>
                  <span style={styles.pLabel}>Roll Number</span>
                  <span style={styles.pVal}>{formData.rollNo}</span>
                </div>
                <div>
                  <span style={styles.pLabel}>Competition</span>
                  <span style={{ ...styles.pVal, color: '#06b6d4' }}>
                    {formData.game === 'fc27' ? 'FC 27' : formData.game === 'tekken8' ? 'TEKKEN 8' : 'FC 27 & TEKKEN 8'}
                  </span>
                </div>
                <div>
                  <span style={styles.pLabel}>Event Date</span>
                  <span style={styles.pVal}>22nd October 2026</span>
                </div>
                <div>
                  <span style={styles.pLabel}>Timings</span>
                  <span style={styles.pVal}>10:00 AM – 4:00 PM</span>
                </div>
              </div>

              <div style={styles.passFooter}>
                Venue: UBIT Department, Karachi University. Please present this Pass ID during morning check-in at 10:00 AM.
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={handleDone}>
              Done & Return to Arena
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(5, 6, 9, 0.85)',
    backdropFilter: 'blur(10px)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflowY: 'auto',
  },
  modal: {
    background: '#0f1118',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    maxWidth: '620px',
    width: '100%',
    padding: '32px',
    position: 'relative',
    boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
    maxHeight: '92vh',
    overflowY: 'auto',
  },
  closeBtn: {
    position: 'absolute',
    top: '18px',
    right: '18px',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  header: {
    marginBottom: '20px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#ff2a51',
    marginBottom: '6px',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    marginTop: '4px',
  },
  paymentBox: {
    background: 'rgba(255, 42, 81, 0.06)',
    border: '1px solid rgba(255, 42, 81, 0.25)',
    borderRadius: '12px',
    padding: '16px 18px',
    marginBottom: '20px',
  },
  paymentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  jazzCashTag: {
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#ff2a51',
    background: 'rgba(255, 42, 81, 0.15)',
    border: '1px solid rgba(255, 42, 81, 0.35)',
    padding: '3px 8px',
    borderRadius: '4px',
  },
  paymentDetailsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
  },
  payLabel: {
    display: 'block',
    fontSize: '0.75rem',
    color: '#94a3b8',
    marginBottom: '2px',
  },
  payVal: {
    fontSize: '0.95rem',
    color: '#ffffff',
  },
  copyBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: '#ffffff',
    fontSize: '0.75rem',
    padding: '3px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  errorBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 42, 81, 0.12)',
    border: '1px solid rgba(255, 42, 81, 0.3)',
    color: '#ff476b',
    padding: '10px 14px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    marginBottom: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '12px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: '#94a3b8',
  },
  input: {
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '8px',
    padding: '10px 14px',
    color: '#ffffff',
    fontSize: '0.92rem',
    outline: 'none',
  },
  gameOptions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '10px',
  },
  radioCard: {
    border: '1px solid',
    borderRadius: '8px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(255, 255, 255, 0.02)',
    cursor: 'pointer',
  },
  radioTitle: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  radioSub: {
    fontSize: '0.72rem',
    color: '#94a3b8',
  },
  checkRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    cursor: 'pointer',
    marginTop: '4px',
  },
  checkInput: {
    marginTop: '3px',
    accentColor: '#ff2a51',
  },
  checkText: {
    fontSize: '0.82rem',
    color: '#94a3b8',
    lineHeight: 1.45,
  },
  passWrapper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  passHeading: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    marginTop: '12px',
  },
  passSub: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    marginBottom: '20px',
  },
  passCard: {
    width: '100%',
    background: '#141824',
    border: '1px solid rgba(255, 42, 81, 0.4)',
    borderRadius: '12px',
    padding: '22px',
    textAlign: 'left',
  },
  passTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '12px',
    marginBottom: '16px',
  },
  passEvent: {
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  passSubtext: {
    fontSize: '0.72rem',
    color: '#94a3b8',
  },
  passIdBadge: {
    background: 'rgba(255, 42, 81, 0.15)',
    border: '1px solid rgba(255, 42, 81, 0.3)',
    color: '#ff2a51',
    fontWeight: 700,
    fontSize: '0.82rem',
    padding: '4px 10px',
    borderRadius: '6px',
  },
  passDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '16px',
  },
  pLabel: {
    display: 'block',
    fontSize: '0.72rem',
    color: '#64748b',
  },
  pVal: {
    display: 'block',
    fontSize: '0.92rem',
    fontWeight: 600,
    color: '#ffffff',
  },
  passFooter: {
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '12px',
    fontSize: '0.78rem',
    color: '#94a3b8',
    lineHeight: 1.45,
  },
};
